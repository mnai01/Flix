import { ApolloClient, ApolloLink, ApolloProvider, concat, createHttpLink, InMemoryCache } from '@apollo/client';
import { useAuth } from '../AuthProvider';

const AuthorizedApolloProvider: React.FC = ({ children }) => {
    const { accessToken } = useAuth();

    const link = createHttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'include',
    });

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
        link: concat(authMiddleware, link),
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
