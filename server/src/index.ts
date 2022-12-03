import dotenv from 'dotenv';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { UserResolver } from './resolvers/UserResolver';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';
import express from 'express';
import authRouter from './routes/auth';
// import moivesRouter from './routes/movies';
import { MediaResolver } from './resolvers/MediaResolver';
import path from 'path';

(async () => {
    const origins = ['https://studio.apollographql.com', 'http://localhost:3000'];
    const app = express();
    // Init Middleware
    // this should happen before any other routes are created
    app.use(cors({ origin: [...origins], credentials: true }));
    app.use(cookieParser());
    // It parses incoming requests with JSON payloads and is based on body-parser.
    app.use(express.json());

    // app.get('/', (_req, res) => res.send('hello'));
    // app.use('/rest/movies', moivesRouter);
    app.use('/rest/auth', authRouter);

    // loads env from other directory for develop
    // this is done in prod through docker so a local version of npm start wont work with env
    if (process.env.NODE_ENV?.includes('development')) {
        dotenv.config({ path: path.resolve(__dirname, '../postgres.env') });
        dotenv.config({ path: path.resolve(__dirname, '../redis.env') });
    }

    try {
        await createConnection();

        const apolloServer = new ApolloServer({
            schema: await buildSchema({
                resolvers: [UserResolver, MediaResolver],
            }),
            // lets you access whatever u return in the gql resolver.
            // basically every graphql function can get access to this info
            context: ({ res, req }) => ({ res, req }),
        });
        // Always call await server.start() before calling server.applyMiddleware and starting your HTTP server.
        // This allows you to react to Apollo Server startup failures by crashing your process instead of starting to serve traffic.
        // Adding graphql to express server
        await apolloServer.start();
        apolloServer.applyMiddleware({
            app,
            cors: { credentials: true, origin: [...origins] },
        });
    } catch (err) {
        console.log(err);
    }
    app.listen(4000, () => {
        console.log('express server started');
    });
})();
