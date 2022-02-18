import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

// We expect the user to send a header called authorization of the format where it says bearer in front following a spaae then a token
// EX. bearer isdfj9302hf398h2
export const isAuthRes = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers['authorization'];

    // Read header Authorization
    console.log(authorization, 'auth');

    if (!authorization) {
        throw new Error('Not Authenticated');
    }

    try {
        // Extracts token
        const token = authorization.split(' ')[1];

        // verifies token and stores payload info (which is the userID) in thie variable
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);

        // Add payload to context so the resolver using isAuth has access to the verified userID information
        res = payload as any;
    } catch (err) {
        console.log(err);
        throw new Error('Not Authenticated');
    }
    next();
};
