import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { RouterBasename } from '@/constants';

export const router = createBrowserRouter(routes, { basename: RouterBasename });
