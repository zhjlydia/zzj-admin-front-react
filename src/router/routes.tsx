import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Login = lazy(() => import('@/pages/login'));
const Home = lazy(() => import('@/pages/home'));

function LazyRoute({ children }: React.PropsWithChildren) {
    return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

function Routes() {
    const element = useRoutes([
        {
            path: '/login',
            element: (
                <LazyRoute>
                    <Login />
                </LazyRoute>
            ),
        },
        {
            path: '/',
            element: (
                <LazyRoute>
                    <Home />
                </LazyRoute>
            ),
        },
    ]);

    return element;
}

export default Routes;
