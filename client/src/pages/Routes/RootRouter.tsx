import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from '..';
import { useAuth } from '../../components/Providers/AuthProvider';

const RootRouter = () => {
    const { isAuth } = useAuth();

    return <Router>{isAuth.loading ? <h1>Loading</h1> : isAuth.auth && !isAuth.loading ? <PrivateRouter /> : <PublicRouter />}</Router>;
};

export default RootRouter;
