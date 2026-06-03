import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CountryPage from './pages/CountryPage/CountryPage';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    errorElement: <NotFound />, // capture toutes les erreurs enfants
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/country/:id', element: <CountryPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
