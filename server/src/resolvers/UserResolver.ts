import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware, Int } from 'type-graphql';
import { User } from '../entity/User';
import { hash, compare } from 'bcryptjs';
import { MyContext } from '../typeDefs/MyContext';
import { createAccessToken, createRefreshToken } from '../helpers/refreshTokens';
import { isAuthContext } from '../middleware/isAuthContext';
import { getConnection } from 'typeorm';
import { sendRefreshToken } from '../helpers/sendTokens';

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
    @Query(() => String)
    hello() {
        return `'hi'`;
    }

    // Ability to revoke token for user
    // dont actually expose this,
    // instead make a function someone can call or like a forgot password or something that you can call internal if someone gets hacked
    @Mutation(() => Boolean)
    async revokeRefreshTokensForUser(@Arg('userId', () => Int) userId: number) {
        await getConnection().getRepository(User).increment({ id: userId }, 'tokenVersion', 1);
        return true;
    }

    @Mutation(() => Boolean)
    async banUserFromCreatingRefreshToken(@Arg('email') email: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('could not find user');
        }
        user!.tokenVersion = 0;
        User.save(user);
        return true;
    }

    // middleware function can be created inside params or passed in
    // no parameters need to be passed in because if we just pass in function name every param from UseMiddleware is passed in
    // this includes resolver information like res,req,payload and next function
    @Query(() => String)
    @UseMiddleware(isAuthContext)
    bye(@Ctx() { payload }: MyContext) {
        console.log(payload);
        return `your user id is :${payload?.userId}`;
    }

    @Query(() => [User])
    users() {
        return User.find();
    }

    // Mutation that is a function which returns type LoginResponse
    @Mutation(() => LoginResponse)
    // async function called login
    // with parameters email, password and return type
    // Ctx stand for context. this is reference to the context information being passed in. Gives us access to the context
    async login(@Arg('email') email: string, @Arg('password') password: string, @Ctx() { res }: MyContext): Promise<LoginResponse> {
        // Get user
        const user = await User.findOne({ where: { email } });
        // Check if user exists
        if (!user) {
            throw new Error('could not find user');
        }
        // check if password is correct
        const valid = await compare(password, user.password);
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

    // this is what the mutations returns
    @Mutation(() => Boolean)
    async register(@Arg('email') email: string, @Arg('password') password: string) {
        try {
            // Hash password
            const hashedPassword = await hash(password, 12);

            // Insert it into DB
            await User.insert({ email, password: hashedPassword });
            console.log('worked');

            return true;
        } catch (err) {
            console.log('no work');
            return false;
        }
    }
}
