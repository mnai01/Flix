import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { useAuth } from '../AuthProvider';

const AuthorizedApolloProvider: React.FC = ({ children }) => {
    const { accessToken, setAuthHandler } = useAuth();

    const authMiddleware = new ApolloLink((operation, forward) => {
        // add the authorization token to the headers
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                authorization: accessToken ? `bearer ${accessToken}` : '',
            },
        }));
        return forward(operation);
    });

    const apolloClient = new ApolloClient({
        link: ApolloLink.from([
            new TokenRefreshLink({
                accessTokenField: 'accessToken',
                isTokenValidOrUndefined: () => {
                    const token = accessToken;
                    if (!token) {
                        return true;
                    }
                    try {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const { exp }: any = jwtDecode(token);
                        if (Date.now() >= exp * 1000) {
                            return false;
                        } else {
                            return true;
                        }
                    } catch {
                        return false;
                    }
                },
                fetchAccessToken: () => {
                    return fetch('http://localhost:4000/api/auth/refresh_token', {
                        method: 'POST',
                        credentials: 'include',
                    });
                },
                handleFetch: (accessToken) => {
                    setAuthHandler({ ok: !!accessToken, accessToken });
                },
                handleError: () => {
                    // Might need full URL here
                    // this gets called on login error which is a bug. Maybe a conditional where if refecth error check location
                    // if location not / then redirect? This can prevent the login accesstoken error
                    // window.location.href = '/';
                },
            }),
            authMiddleware,
            new HttpLink({
                uri: 'http://localhost:4000/graphql',
                credentials: 'include',
            }),
        ]),
        cache: new InMemoryCache({
            // Caching No Bueno
            // typePolicies: {
            //     Query: {
            //         fields: {
            //             DiscoverMovies: {
            //                 read: (existing) => {
            //                     return existing;
            //                 },
            //                 merge: (existing, incoming) => {
            //                     return existing ? { ...incoming, results: [...existing.results, ...incoming.results] } : incoming;
            //                 },
            //             },
            //             DiscoverTV: {
            //                 read: (existing) => {
            //                     return existing;
            //                 },
            //                 merge: (existing, incoming) => {
            //                     return existing ? { ...incoming, results: [...existing.results, ...incoming.results] } : incoming;
            //                 },
            //             },
            //         },
            //     },
            // },
        }),
    });

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
export default AuthorizedApolloProvider;
