import 'dotenv/config';
import 'reflect-metadata';

import { createAccessToken, createRefreshToken } from './helpers/refreshTokens';

import { ApolloServer } from 'apollo-server-express';
import { User } from './entity/User';
import { UserResolver } from './resolvers/UserResolver';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';
import express from 'express';
import { sendRefreshToken } from './helpers/sendTokens';
import { verify } from 'jsonwebtoken';

(async () => {
    const app = express();
    // run middleware
    // this should happen before any other routes are created
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
    app.use(cookieParser());
    app.get('/', (_req, res) => res.send('hello'));

    // refresh JWT token
    // Read refresh cookie
    // since we are using cookieParser middleware it should automatically parse cookies from header and put it in the cookie req
    // Making a seperate route helps with security purposes where the token only gets sent when refreshing
    app.post('/refresh_token', async (req, res) => {
        const token = req.cookies.jid;
        if (!token) return res.send({ ok: false, accessToken: '' });

        let payload: any = null;
        // check if refresh token from cookie is valid and that it was sign with our secret and it is not expired
        try {
            // eslint-disable-next-line no-undef
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
        } catch (err) {
            console.log({ err });
            return res.send({ ok: false, accessToken: '', msg: 'Verified Failed' });
        }
        // at this point it had been verified that the token is successfully checked and we can send back an access token
        const user = await User.findOne({ id: payload.userId });

        // user should be found, but if not return nothing
        if (!user) return res.send({ ok: false, accessToken: '', msg: 'No User Found' });

        // update refresh token
        sendRefreshToken(res, createRefreshToken(user));

        // check if token version on user is same as token version from payload.
        // This lets us change the user token version which will then invalidate there refresh token
        if (user.tokenVersion !== payload.tokenVersion) {
            return res.send({ ok: false, accessToken: '', msg: 'Youve been banned' });
        }
        // send access token
        return res.send({ ok: true, accessToken: createAccessToken(user) });
    });

    await createConnection();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
        }),
        // lets you access whatever u return in the gql resolver.
        // basically every graphql function can get access to this info
        context: ({ res, req }) => ({ res, req }),
    });
    // Always call await server.start() before calling server.applyMiddleware and starting your HTTP server.
    // This allows you to react to Apollo Server startup failures by crashing your process instead of starting to serve traffic.
    // Adding graphql to express server
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: { credentials: true, origin: ['https://studio.apollographql.com', 'http://localhost:3000'] } });

    app.listen(4000, () => {
        console.log('express server started');
    });
})();

// createConnection()
//     .then(async (connection) => {
//         console.log('Inserting a new user into the database...');
//         const user = new User();
//         user.firstName = 'Timber';
//         user.lastName = 'Saw';
//         user.age = 25;
//         await connection.manager.save(user);
//         console.log('Saved a new user with id: ' + user.id);

//         console.log('Loading users from the database...');
//         const users = await connection.manager.find(User);
//         console.log('Loaded users: ', users);

//         console.log('Here you can setup and run express/koa/any other framework.');
//     })
//     .catch((error) => console.log(error));
