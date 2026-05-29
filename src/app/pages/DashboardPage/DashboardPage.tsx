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
      <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 md:gap-4">
        <HeaderComponent
          title="Tableau de bord des Jeux Olympiques"
          subtitle="Explorez les performances des pays au fil des années"
          stats={DashBoardStats}
          statsCols={2}
        />

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full col-span-8 xl:h-[50vh]">
          <div style={{ height: '400px' }}>
            <MedalChart pieData={data} />
          </div>
          <div className="text-sm text-gray-400">
            <p>Cliquez sur un pays pour voir ses détails</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
