import { Center, Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { RegisterPage } from '..';
const LoginPage = lazy(() =>
    import('..').then((module) => ({
        default: module.LoginPage,
    })),
);

const PageRoutes = () => {
    return (
        <Suspense
            fallback={
                <Center h={'100vh'}>
                    <Spinner size="xl" />
                </Center>
            }>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Suspense>
    );
};

export default PageRoutes;
