import { MiddlewareFn } from 'type-graphql';
import { MyContext } from 'src/typeDefs/MyContext';
import { verify } from 'jsonwebtoken';

// We expect the user to send a header called authorization of the format where it says bearer in front following a spaae then a token
// EX. bearer isdfj9302hf398h2
export const isAuthContext: MiddlewareFn<MyContext> = ({ context }, next) => {
    // Read header Authorization
    const authorization = context.req.headers['authorization'];

    if (!authorization) {
        throw new Error('No Authenticated token sent');
    }

    try {
        // Extracts token
        const token = authorization.split(' ')[1];

        // verifies token and stores payload info (which is the userID) in thie variable
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
        // Add payload to context so the resolver using isAuth has access to the verified userID information
        context.payload = payload as any;
    } catch (err) {
        throw new Error('Not Authenticated');
    }

    // Returns the resolver and goes to the next middleware
    // We can have as many as we ant running before our resolver
    // next tells you that youre done with the current middleware logic
    return next();
};
