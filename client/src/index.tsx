import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedApolloProvider from './components/Providers/AuthorizedApolloProvider';
import { AuthProvider } from './components/Providers/AuthProvider';
import './index.css';
import { RootRouter } from './pages';
import { config, customTheme } from './theme';

ReactDOM.render(
    <AuthProvider>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <ChakraProvider theme={customTheme}>
            <AuthorizedApolloProvider>
                <RootRouter />
            </AuthorizedApolloProvider>
        </ChakraProvider>
    </AuthProvider>,
    document.getElementById('root')
);
