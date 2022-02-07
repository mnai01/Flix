import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '../Providers/AuthProvider';

interface RouteGuardProps {
    children: JSX.Element;
}

interface fetchReturn {
    ok: boolean;
    accessToken: string;
}

const RouteGuard = ({ children }: RouteGuardProps) => {
    const router = useRouter();

    const { auth, loading, checkAuth } = useAuth();

    useEffect(() => {
        if (!auth && loading) {
            console.log('in here', auth, false);
            router.push('/login');
        }

        console.log(auth, loading);

        // on initial load - run auth check
        // authCheck(router.asPath);

        // // on route change start - hide page content by setting authorized to false
        // const hideContent = () => setAuth(false);
        // router.events.on('routeChangeStart', hideContent);

        // // on route change complete - run auth check
        // router.events.on('routeChangeComplete', authCheck);

        // // unsubscribe from events in useEffect return function
        // return () => {
        //     router.events.off('routeChangeStart', hideContent);
        //     router.events.off('routeChangeComplete', authCheck);
        // };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, auth]);

    return loading && !auth ? <h1>loading</h1> : children;
};

export default RouteGuard;
