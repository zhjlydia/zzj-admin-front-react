import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Login = lazy(() => import('@/pages/login'));

function Routes() {
    const element = useRoutes([
        {
            path: '/login',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                </Suspense>
            ),
        },
    ]);

    return element;
}

export default Routes;
