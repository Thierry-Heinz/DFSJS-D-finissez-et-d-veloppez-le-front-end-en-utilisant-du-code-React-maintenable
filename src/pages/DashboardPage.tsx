import Indicator from '../components/Indicator/Indicator';
import PieMedalChart from '../components/PieMedalChart/PieMedalChart';
import useData from '../hooks/useData';

const DashboardPage = () => {
  const { data, isLoading } = useData(); // Anti-pattern 1 — données statiques importées directement dans le composant — idéalement : fetching depuis une API ou custom hook.

  // Anti-pattern 6 — Logique métier complexe directement dans le composant

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

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Historique des Jeux Olympiques - TéléSport
        </h1>

        <div className="mb-8">
          <p className="text-lg">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        {/* Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). */}
        <div className="mb-2">
          {DashBoardStats.map((stat, index) => (
            <Indicator
              key={index}
              totalParticipatingCountries={stat.value}
              indicatorTitle={stat.label}
              baseColor={stat.color}
            />
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: '400px' }}>
            <PieMedalChart pieData={data} />
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
