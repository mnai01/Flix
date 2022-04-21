import { Secret, sign } from 'jsonwebtoken';
import { UserRole } from '../entity/User';

// ! to prevent error and set that we know it will be defined and not "undefined"
export const createRegisterToken = (userId: string, plainText: boolean = true, role: UserRole = UserRole.FREE, secret?: Secret) => {
    return sign({ userId: userId, plainText: plainText, role: role }, secret ? secret : process.env.REGISTER_TOKEN_SECRET!, { expiresIn: '24h' });
};
