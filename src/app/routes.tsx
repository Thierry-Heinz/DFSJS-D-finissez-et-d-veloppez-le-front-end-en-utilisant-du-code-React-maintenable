import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CountryPage from './pages/CountryPage/CountryPage';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/countries/:id',
    element: <CountryPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
