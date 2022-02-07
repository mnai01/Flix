import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import AuthorizedApolloProvider from '../components/Providers/AuthorizedApolloProvider';
import { AuthProvider } from '../components/Providers/AuthProvider';
import RouteGuard from '../components/RouteGuard';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <AuthorizedApolloProvider>
                <RouteGuard>
                    <ChakraProvider>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </RouteGuard>
            </AuthorizedApolloProvider>
        </AuthProvider>
    );
}

export default MyApp;
