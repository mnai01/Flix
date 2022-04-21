import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware, Int } from 'type-graphql';
import { User, UserRole, WatchedMovies } from '../entity/User';
import { hash, compare } from 'bcryptjs';
import { MyContext } from '../typeDefs/MyContext';
import { createAccessToken, createRefreshToken } from '../helpers/refreshTokens';
import { isAuthContext } from '../middleware/isAuthContext';
import { getConnection } from 'typeorm';
import { sendRefreshToken } from '../helpers/sendTokens';
import client from '../redisClient';
import { createRegisterToken } from '../helpers/registerToken';
import { verify } from 'jsonwebtoken';

// import { TopRatedMovies } from '../typeDefs/TMDB/TopRatedMovies';
// import { MovieListResultObject } from '../typeDefs/TMDB/Reusable/MovieListResultObject';
// import { PopularMovies } from '../typeDefs/TMDB/PopularMovies';

// With TypeGraphQL we don’t need to explicitly write the schema.
// Instead, we define our resolvers with TypeScript classes and decorators,
// and TypeGraphQL will generate the schema for us.
// Thats why we use Arg, Field, Mutation, ObjectType
// it will automatically greate the approiate GQL schema for us while writing our querys / mutations
// and while writing the models or entities for our ORM
// if we didnt use typegraphql we would have to make every schema item by hand

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string;
}

@Resolver()
export class UserResolver {
    // middleware function can be created inside params or passed in
    // no parameters need to be passed in because if we just pass in function name every param from UseMiddleware is passed in
    // this includes resolver information like res,req,payload and next function
    @Query(() => String)
    @UseMiddleware(isAuthContext)
    User(@Ctx() { payload }: MyContext) {
        return `your user id is :${payload?.userId}`;
    }

    @Query(() => [User])
    @UseMiddleware(isAuthContext)
    async Users(@Ctx() { payload }: MyContext) {
        const user = await User.findOne({ where: { id: payload?.userId } });
        if (!user) {
            throw new Error('could not find user');
        }

        if (user.role !== 'admin') {
            throw new Error('You do not have permission to run this, admin will be notified');
        } else {
            return User.find();
        }
    }

    // Ability to revoke token for user
    // dont actually expose this,
    // instead make a function someone can call or like a forgot password or something that you can call internal if someone gets hacked
    @Mutation(() => Boolean)
    async RevokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
        await getConnection().getRepository(User).increment({ id: userId }, 'tokenVersion', 1);
        return true;
    }

    @Mutation(() => Boolean)
    async BanUserFromCreatingRefreshToken(@Arg('email') email: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('could not find user');
        }
        user!.tokenVersion = 0;
        User.save(user);
        return true;
    }

    // Mutation that is a function which returns type LoginResponse
    @Mutation(() => LoginResponse)
    // async function called login
    // with parameters email, password and return type
    // Ctx stand for context. this is reference to the context information being passed in. Gives us access to the context
    async Login(@Arg('email') email: string, @Arg('password') password: string, @Ctx() { res }: MyContext): Promise<LoginResponse> {
        // Get user
        const user = await User.findOne({ where: { email } });
        // Check if user exists
        if (!user) {
            throw new Error('could not find user');
        }

        let valid: boolean = false;

        if (!user.plainText) {
            valid = await compare(password, user.password);
        } else {
            valid = password === user.password;
        }

        // check if password is correct
        if (!valid) {
            throw new Error('password wrong');
        }

        // check if token version on user is 0.
        // This tell us if user is banned
        if (user.tokenVersion === 0) {
            throw new Error('You are banned');
        }

        // UPDATE ID NAME
        // if they dont visit in awhile (7 days) we make then re-log in
        sendRefreshToken(res, createRefreshToken(user));

        // sign and return access token
        return { accessToken: createAccessToken(user) };
    }

    @Query(() => String! || null || Boolean)
    async ValidateRegisterToken(@Arg('token') token: string): Promise<string | null | boolean> {
        let payload: any = null;

        try {
            payload = verify(token, process.env.REGISTER_TOKEN_SECRET!);
        } catch (err) {
            throw new Error(err);
        }

        const user = await User.findOne({ where: { id: payload?.userId } });
        // Check if user exists
        if (!user) {
            throw new Error('could not find user');
        }

        if (user.role !== 'admin' || user.tokenVersion === 0) {
            throw new Error('You do not have permission to run this, admin will be notified');
        }

        try {
            // hacky fix for ERROR: Cannot return null for non-nullable field Query.validateRegisterToken
            const temp = await client.get(token);
            const key = temp ? temp : false;
            return key;
        } catch (err) {
            return false;
        }
    }

    @Query(() => String! || Boolean)
    @UseMiddleware(isAuthContext)
    async GetRegisterToken(
        @Ctx() { payload }: MyContext,
        @Arg('plainText') plainText?: boolean,
        @Arg('role', () => UserRole) role?: UserRole,
    ): Promise<string | null | boolean> {
        const user = await User.findOne({ where: { id: payload?.userId } });
        // Check if user exists
        if (!user) {
            throw new Error('could not find user');
        }

        if (user.role !== 'admin' || user.tokenVersion === 0) {
            throw new Error('You do not have permission to run this, admin will be notified');
        }
        try {
            const registerToken = createRegisterToken(payload?.userId!, plainText, role);

            //here key will expire after 24 hours
            client.SETEX(registerToken, 24 * 60 * 60, payload?.userId!);

            return `http://localhost:3000/register?token=${registerToken}`;
        } catch (err) {
            return false;
        }
    }

    // this is what the mutations returns
    @Mutation(() => Boolean)
    async Register(@Arg('email') email: string, @Arg('password') password: string, @Arg('token') token: string) {
        let payload: any = null;

        try {
            client.DEL(token);

            payload = verify(token, process.env.REGISTER_TOKEN_SECRET!);

            let hashedPassword = password;
            if (!payload.plainText) {
                // Hash password
                hashedPassword = await hash(password, 12);
            }

            // Insert it into DB
            await User.insert({ email, password: hashedPassword, role: payload.role, plainText: payload.plainText });
            return true;
        } catch (err) {
            return false;
        }
    }

    @UseMiddleware(isAuthContext)
    @Mutation(() => Boolean)
    async AddToWatched(@Ctx() { payload }: MyContext, @Arg('tmdb') tmdb: string, @Arg('type') type: string, @Arg('poster_path') poster_path: string) {
        // Get user
        const user = await User.findOne({ where: { id: payload?.userId } });
        // Check if user exists
        if (!user) {
            throw new Error('could not find user');
        }

        // check if token version on user is 0.
        // This tell us if user is banned
        if (user.tokenVersion === 0) {
            throw new Error('You are banned');
        }

        const watchedMovies = await WatchedMovies.find({ where: { user: payload?.userId }, order: { created_at: 'ASC' } });
        // adds without saving
        // const watched = await WatchedMovies.create({ tmdb, user, type });
        try {
            if (watchedMovies.find((i) => i.tmdb === tmdb)) {
                WatchedMovies.update({ tmdb: tmdb }, { created_at: new Date() });
            } else if (watchedMovies.length >= 9) {
                watchedMovies.splice(0, 1);
                WatchedMovies.delete({ id: watchedMovies[0].id });
            } else {
                await WatchedMovies.insert({ tmdb, user, type, poster_path });
            }

            // CAN BE UPDATED TO REMOVE USER AND ONLY PASS IN ID
            return true;
        } catch (err) {
            return false;
        }
    }
}
