/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';

interface authContextProps {
    accessToken: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isAuth: isAuthProps;
    setTokenHandler: (data: string) => void;
    checkAuth: () => void;
}
interface fetchReturn {
    ok: boolean;
    accessToken: string;
}

interface isAuthProps {
    auth: boolean;
    loading: boolean;
}

const authContextInitialState: authContextProps = {
    accessToken: '',
    setTokenHandler: (data: string) => {},
    isAuth: { auth: false, loading: true },
    checkAuth: () => {},
};

const AuthContext = createContext<authContextProps>(authContextInitialState);

const AuthProvider: React.FC = ({ children }) => {
    // Just access token, doesnt check for auth
    const [token, setToken] = useState<string>('');

    // check is refresh token is auth
    const [isAuth, setAuth] = useState({ auth: false, loading: true });

    const setTokenHandler = (token: string) => {
        setToken(token);
    };

    // Check auth on page load
    const checkAuth = async () => {
        console.log('start');

        try {
            const data: fetchReturn = await (await fetch('http://localhost:4000/api/auth/refresh_token', { method: 'POST', credentials: 'include' })).json();
            setAuth({ auth: data.ok, loading: false });
        } catch (err) {
            console.log('Error');
            setAuth({ auth: false, loading: false });
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return <AuthContext.Provider value={{ accessToken: token, isAuth, setTokenHandler, checkAuth }}>{children}</AuthContext.Provider>;
};

const useAuth = (): authContextProps => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
