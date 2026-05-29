import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import LineCountryEvolutionChart from '../../components/EvolutionChart/EvolutionChart';
import type { Olympic, Participation } from '../../models/models';
import Indicator from '../../components/Indicator/Indicator';

const CountryPage = () => {
  const { id } = useParams();
  const { data, loading, error, empty } = useData();

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

  const country: Olympic | undefined = data.find(
    (c: Olympic) => c.id === Number(id)
  );

  if (country === undefined) {
    return <div>Pas de données disponible pour ce pays.</div>;
  }

  const totalMedals = country?.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0
  );

  const totalAthletes = country?.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0
  );
  const totalParticipations = country?.participations.length;

  const CountryStats = [
    {
      label: 'Participations',
      value: totalParticipations,
      color: 'blue',
    },
    {
      label: 'Total médailles',
      value: totalMedals,
      color: 'yellow',
    },
    {
      label: 'Total athlètes',
      value: totalAthletes,
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{country?.name}</h1>

        <div className="mb-2">
          {CountryStats.map((stat, index) => (
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
            <LineCountryEvolutionChart country={country} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
