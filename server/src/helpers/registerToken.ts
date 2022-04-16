import { Secret, sign } from 'jsonwebtoken';

// ! to prevent error and set that we know it will be defined and not "undefined"
export const createRegisterToken = (userId: string, secret?: Secret) => {
    return sign({ userId: userId }, secret ? secret : process.env.REGISTER_TOKEN_SECRET!, { expiresIn: '15h' });
};
