import { Navigate } from 'react-router-dom';
import { convertRoutes } from './convertRoutes';
import { ErrorPage } from '@/components/ErrorPage';
import { SoRouteObject } from './types';
import BasicLayout from '@/layouts/BasicLayout';
import Guide from '@/pages/Guide';

const routes: SoRouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/guide" replace />,
      },
      {
        path: '/guide',
        element: <Guide />,
      },
    ],
  },
];

export default convertRoutes(routes);
