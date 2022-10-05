import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
    // httpOnly makes it so cookies cant be access via javascript
    // We still add it to the browser and it will get sent to every request (automatically, thats how fetch operates)
    // but it cannot be tampered with this setting
    res.cookie('jid', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
};
