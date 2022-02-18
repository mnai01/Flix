import { Route, Routes } from 'react-router';
import { LoginPage, NotFound, RegisterPage } from '..';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    );
};

export default PageRoutes;
