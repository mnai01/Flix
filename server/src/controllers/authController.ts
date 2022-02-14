import { verify } from 'jsonwebtoken';
import { User } from '../entity/User';
import { createAccessToken, createRefreshToken } from '../helpers/refreshTokens';
import { sendRefreshToken } from '../helpers/sendTokens';

// refresh JWT token
// Read refresh cookie
// since we are using cookieParser middleware it should automatically parse cookies from header and put it in the cookie req
// Making a seperate route helps with security purposes where the token only gets sent when refreshing
export const postRefreshToken = async (req: any, res: any) => {
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

    if (user.tokenVersion === 0) {
        return res.send({ ok: false, accessToken: '', msg: 'You are banned' });
    }

    // check if token version on user is same as token version from payload.
    // This lets us change the user token version which will then invalidate there refresh token
    if (user.tokenVersion !== payload.tokenVersion) {
        return res.send({ ok: false, accessToken: '', msg: 'All sessions revoked' });
    }

    // update refresh token
    sendRefreshToken(res, createRefreshToken(user));

    // send access token
    return res.send({ ok: true, accessToken: createAccessToken(user) });
};