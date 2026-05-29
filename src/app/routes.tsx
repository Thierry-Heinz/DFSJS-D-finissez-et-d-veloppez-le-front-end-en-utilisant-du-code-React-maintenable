import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CountryPage from './pages/CountryPage/CountryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/countries/:id',
    element: <CountryPage />,
  },
]);

export default router;
