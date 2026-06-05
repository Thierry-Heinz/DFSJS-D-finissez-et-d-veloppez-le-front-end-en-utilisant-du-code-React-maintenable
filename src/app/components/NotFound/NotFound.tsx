import { useLocation, useRouteError } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { BackHomeBtn } from '../BackHomeBtn/BackHomeBtn';

type LocationState = {
  noDataFound?: boolean;
  noData?: boolean;
  error?: string;
} | null;

const NotFound = () => {
  const errorRouter: unknown = useRouteError();
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <Layout>
      <div
        role="alert"
        aria-live="assertive"
        className="not-found text-center bg-yellow-500 text-white p-4 col-span-12 py-12 rounded-lg shadow-xl"
      >
        {!!errorRouter && (
          <>
            <h1 className="text-2xl font-bold">500 - Erreur serveur</h1>
            <p className="text-lg mt-2">Une erreur inattendue s'est produite</p>
          </>
        )}

        {!errorRouter &&
          !state?.noDataFound &&
          !state?.noData &&
          !state?.error && (
            <>
              <h1 className="text-2xl font-bold">400 - Page non trouvée</h1>
              <p className="text-lg mt-2">
                Cette page n'existe pas. Mauvaise URL
              </p>
            </>
          )}

        {state?.noDataFound && (
          <>
            <h1 className="text-2xl font-bold">400 - Données non trouvées</h1>
            <p className="text-lg mt-2">
              Aucune donnée trouvée pour cette ressource. ID invalide.
            </p>
          </>
        )}

        {state?.noData && !state?.error && (
          <>
            <h1 className="text-2xl font-bold">404 - Données non trouvées</h1>
            <div className="text-center bg-gray-500 text-white p-4 col-span-12 mt-4 rounded">
              Données manquantes. Veuillez réessayer plus tard.
            </div>
          </>
        )}

        {state?.error && (
          <>
            <h1 className="text-2xl font-bold">500 - Erreur serveur</h1>
            <div className="text-center bg-gray-500 text-white p-4 col-span-12 mt-4 rounded">
              Une erreur s'est produite lors de la récupération des données :{' '}
              {state.error}
            </div>
          </>
        )}

        <div className="mt-6">
          <BackHomeBtn />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
