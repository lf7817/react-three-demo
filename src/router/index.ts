import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

export const RouterBasename =
  import.meta.env.MODE === 'development' ? '' : import.meta.env.BASE_URL;

export const router = createBrowserRouter(routes, { basename: RouterBasename });
