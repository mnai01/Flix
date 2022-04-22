import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, Observable } from '@apollo/client';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { useAuth } from '../AuthProvider';

const AuthorizedApolloProvider: React.FC = ({ children }) => {
    const { accessToken, setAuthHandler } = useAuth();

    const authMiddleware = new ApolloLink(
        (operation, forward) =>
            new Observable((observer) => {
                let handle: any;
                Promise.resolve(operation)
                    .then((operation) => {
                        if (accessToken) {
                            operation.setContext({
                                headers: {
                                    authorization: `bearer ${accessToken}`,
                                },
                            });
                        }
                    })
                    .then(() => {
                        handle = forward(operation).subscribe({
                            next: observer.next.bind(observer),
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer),
                        });
                    })
                    .catch(observer.error.bind(observer));

                return () => {
                    if (handle) handle.unsubscribe();
                };
            }),
    );

    const tokenRefreshLink: any = new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
            const token = accessToken;
            if (!token) {
                return true;
            }
            try {
                const timeNow = Date.now();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { exp }: any = jwtDecode(token);
                if (timeNow >= exp * 1000) {
                    return false;
                } else {
                    return true;
                }
            } catch {
                return false;
            }
        },
        fetchAccessToken: async () => {
            return fetch('http://localhost:4000/rest/auth/refresh_token', {
                method: 'POST',
                credentials: 'include',
            });
        },
        handleFetch: (accessToken) => {
            setAuthHandler({ ok: !!accessToken, accessToken: accessToken });
        },
        handleError: () => {
            setAuthHandler();
            // window.location.replace('/');
        },
    });

    const apolloClient = new ApolloClient({
        link: ApolloLink.from([
            tokenRefreshLink,
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
