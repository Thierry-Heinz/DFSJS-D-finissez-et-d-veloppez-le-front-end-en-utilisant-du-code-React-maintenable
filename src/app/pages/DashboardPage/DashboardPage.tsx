import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import MedalChart from '../../components/MedalChart/MedalChart';
import useData from '../../hooks/useData';

const DashboardPage = () => {
  const { data, loading, error, empty } = useData();

  const totalParticipatingCountries = data ? data.length : 0;
  const totalGamesEditions = 5;

  const DashBoardStats = [
    {
      label: 'Pays participants',
      value: totalParticipatingCountries,
      color: 'blue',
    },
    {
      label: 'Éditions des JO',
      value: totalGamesEditions,
      color: 'green',
    },
  ];

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (data === null) {
    return <div>Pas de données</div>;
  }

  if (empty) {
    return <div>Aucune donnée disponible</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <HeaderComponent
          title="Tableau de bord des Jeux Olympiques"
          subtitle="Explorez les performances des pays au fil des années"
          stats={DashBoardStats}
        />

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full">
          <div style={{ height: '400px' }}>
            <MedalChart pieData={data} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
