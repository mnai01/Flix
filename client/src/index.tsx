import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedApolloProvider from './components/Providers/AuthorizedApolloProvider';
import { AuthProvider } from './components/Providers/AuthProvider';
import './index.css';
import { RootRouter } from './pages';
import { config, customTheme } from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <AuthProvider>
            <AuthorizedApolloProvider>
                <ChakraProvider theme={customTheme}>
                    <RootRouter />
                </ChakraProvider>
            </AuthorizedApolloProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
