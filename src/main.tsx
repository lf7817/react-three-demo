import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
