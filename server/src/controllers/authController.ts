import { verify } from 'jsonwebtoken';
import { User } from '../entity/User';
import { createAccessToken, createRefreshToken } from '../helpers/refreshTokens';
import { sendRefreshToken } from '../helpers/sendTokens';

// GET ACCESS TOKEN
// LOGIN WITH POSTMAN

// URL
// http://localhost:4000/graphql

// QUERY
// mutation Login($password: String!, $email: String!) {
//   Login(password: $password, email: $email) {
//     accessToken
//   }
// }

// BODY
// {
//     "password": "test",
//     "email": "test"
// }

// GET REFRESH TOKEN SENT IN COOKIES BUT REFRESH TOKEN GIVEN TO YOU
// POSTMAN

// URL
// http://localhost:4000/rest/auth/refresh_token

// HEADER KEY
// Authorization

// HEADER VALUE bearer access_token

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
        return res.send({ ok: false, accessToken: '', msg: 'Verified Failed' });
    }
    // at this point it had been verified that the token is successfully checked and we can send back an access token
    const user = await User.findOne({ id: payload.userId });

    // user should be found, but if not return nothing
    if (!user) return res.send({ ok: false, accessToken: '', msg: 'No User Found' });

    if (user.tokenVersion === 0) {
        sendRefreshToken(res, createRefreshToken(user, "WRONG_TOKEN_NAME_TO_PREVENT_EXTRA_DB_CALL_SINCE_THEY'RE_BANNED_ANKnfdlnhfksjdnfkjdsnfjdlsnf894309r32"));
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
