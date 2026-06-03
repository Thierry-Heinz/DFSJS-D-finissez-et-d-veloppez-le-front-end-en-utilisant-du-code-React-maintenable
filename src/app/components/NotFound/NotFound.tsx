import { Link, useLocation, useRouteError } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const NotFound = () => {
  const errorRouter: unknown = useRouteError();
  const location = useLocation();

  return (
    <Layout>
      <div className="not-found text-center bg-yellow-500 text-white p-4 col-span-12 py-12 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold">404 - Page non trouvée</h1>

        {errorRouter && (
          <p className="text-lg mt-2">Une erreur inattendue s'est produite</p>
        )}

        {errorRouter === null &&
          !location?.state?.noDataFound &&
          !location?.state?.noData &&
          !location?.state?.error && (
            <p className="text-lg mt-2">
              Cette page n'existe pas. Mauvaise URL
            </p>
          )}

        {location?.state?.noDataFound && (
          <p className="text-lg mt-2">
            Aucune donnée trouvée pour cette ressource. ID invalide.
          </p>
        )}

        {location?.state?.noData && !location?.state?.error && (
          <div className="text-center bg-gray-500 text-white p-4 col-span-12">
            Données manquantes. Veuillez réessayer plus tard.
          </div>
        )}

        {location?.state?.error && (
          <div className="text-center bg-gray-500 text-white p-4 col-span-12">
            Une erreur s'est produite lors de la récupération des données:{' '}
            {location.state.error}
          </div>
        )}

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
