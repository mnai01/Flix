import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface authContextProps {
    accessToken: string;
    auth: boolean;
    loading: boolean;
    setTokenHandler: (data: string) => void;
    checkAuth: () => void;
}
interface fetchReturn {
    ok: boolean;
    accessToken: string;
}

const authContextInitialState: authContextProps = {
    accessToken: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTokenHandler: (data: string) => {},
    auth: false,
    loading: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    checkAuth: () => {},
};

const AuthContext = createContext<authContextProps>(authContextInitialState);

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // Just access token, doesnt check for auth
    const [token, setToken] = useState<string>('');

    // check is refresh token is auth
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const setTokenHandler = (data: string) => {
        setToken(data);
    };

    const checkAuth = async () => {
        const data: fetchReturn = await (await fetch('http://localhost:4000/refresh_token', { method: 'POST', credentials: 'include' })).json();
        setLoading(false);
        setAuth(data.ok);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return <AuthContext.Provider value={{ accessToken: token, auth, loading, setTokenHandler, checkAuth }}>{children}</AuthContext.Provider>;
};

const useAuth = (): authContextProps => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
