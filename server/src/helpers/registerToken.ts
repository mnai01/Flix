import { Secret, sign } from 'jsonwebtoken';
import { UserRole } from '../entity/User';

export interface createRegisterTokenProps {
    userId: string;
    plainText?: boolean;
    role?: UserRole;
    secret?: Secret;
    validDays?: number;
}

// ! to prevent error and set that we know it will be defined and not "undefined"
export const createRegisterToken = ({
    userId,
    plainText = true,
    role = UserRole.FREE,
    secret = process.env.REGISTER_TOKEN_SECRET!,
    validDays = 1,
}: createRegisterTokenProps) => {
    return sign({ userId: userId, plainText: plainText, role: role, validDays }, secret, {
        expiresIn: `${validDays}d`,
    });
};
