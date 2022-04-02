import { Center, Spinner } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from '..';
import { useAuth } from '../../components/Providers/AuthProvider';

const RootRouter = () => {
    const { isAuth } = useAuth();

    return (
        <Router>
            {isAuth.loading ? (
                <Center h={'100vh'}>
                    <Spinner size="xl" />
                </Center>
            ) : isAuth.auth && !isAuth.loading ? (
                <PrivateRouter />
            ) : (
                <PublicRouter />
            )}
        </Router>
    );
};

export default RootRouter;
