import { Navigate } from 'react-router-dom';
import { convertRoutes } from './convertRoutes';
import { ErrorPage } from '@/components/ErrorPage';
import { SoRouteObject } from './types';
import BasicLayout from '@/layouts/BasicLayout';
import Guide from '@/pages/00-Guide';

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
      {
        path: '/demo',
        asyncComponent: () => import('@/pages/demo'),
      },
      {
        path: '/base',
        asyncComponent: () => import('@/pages/01-Base'),
      },
      {
        path: '/panda',
        asyncComponent: () => import('@/pages/02-Panda'),
      },
      {
        path: '/sn',
        asyncComponent: () => import('@/pages/03-Sn'),
      },
      {
        path: '/vanilla',
        asyncComponent: () => import('@/pages/04-Vanilla'),
      },
      {
        path: '/vr',
        asyncComponent: () => import('@/pages/05-VR'),
      },
      {
        path: '/vr-skybox',
        asyncComponent: () => import('@/pages/05-VR-skybox'),
      },
      {
        path: '/interactive_voxelpainter',
        asyncComponent: () => import('@/pages/06-webgl_interactive_voxelpainter'),
      },
    ],
  },
];

export default convertRoutes(routes);
