/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';

interface authContextProps {
    accessToken: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isAuth: isAuthProps;
    setAuthHanlder: (data?: fetchReturn) => void;
}
interface fetchReturn {
    ok: boolean;
    accessToken: string;
}

interface isAuthProps {
    auth: boolean;
    loading: boolean;
    accessToken: string;
}

const authContextInitialState: authContextProps = {
    accessToken: '',
    setAuthHanlder: (data?: fetchReturn) => {},
    isAuth: { auth: false, loading: true, accessToken: '' },
};

const AuthContext = createContext<authContextProps>(authContextInitialState);

const AuthProvider: React.FC = ({ children }) => {
    // Just access token, doesnt check for auth

    // check is refresh token is auth
    const [isAuth, setAuth] = useState({ auth: false, loading: true, accessToken: '' });

    const setAuthHanlder = (data?: fetchReturn) => {
        console.log('setAuthHanlder', data);
        if (data) {
            setAuth({ auth: data.ok, loading: false, accessToken: data.accessToken });
        } else {
            console.log('setToken EMPTY');
            setAuth({ auth: false, loading: false, accessToken: 'data.accessToken' });
        }
    };

    useEffect(() => {
        // Check auth on page load
        const checkAuth = async () => {
            const data: fetchReturn = await (await fetch('http://localhost:4000/api/auth/refresh_token', { method: 'POST', credentials: 'include' })).json();
            setAuthHanlder(data);
            console.log('refresh token successful, setting access token');
        };
        checkAuth().catch((err) => {
            console.log('refresh token ERROR');
            setAuthHanlder();
        });
    }, []);

    return <AuthContext.Provider value={{ accessToken: isAuth.accessToken, isAuth, setAuthHanlder }}>{children}</AuthContext.Provider>;
};

const useAuth = (): authContextProps => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
