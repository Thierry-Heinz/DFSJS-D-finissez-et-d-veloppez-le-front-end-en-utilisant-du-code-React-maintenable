import { Link } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="text-center bg-yellow-500 text-white p-4 col-span-12 py-12 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold">404 - Page non trouvée</h1>
        <p className="text-lg">Aucune donnée disponible</p>
        <Link to="/" role="button" aria-label="Retour à l'accueil">
          <div className="text-sm md:text-lg my-4 md:mb-0 p-2 rounded-lg shadow-xl inline-block  border-gray-300 bg-gray-700 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-200 transition duration-150">
            <span className="  font-bold mr-1">‹</span> Retour
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
