import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
    res.cookie('jid', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
};
