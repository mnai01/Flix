/* eslint-disable no-undef */

import { User } from '../entity/User';
import { Secret, sign } from 'jsonwebtoken';

// ! to prevent error and set that we know it will be defined and not "undefined"
export const createAccessToken = (user: User) => {
    return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
};

// ! to prevent error and set that we know it will be defined and not "undefined"
export const createRefreshToken = (user: User, secret?: Secret) => {
    return sign({ userId: user.id, tokenVersion: user.tokenVersion }, secret ? secret : process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
};
