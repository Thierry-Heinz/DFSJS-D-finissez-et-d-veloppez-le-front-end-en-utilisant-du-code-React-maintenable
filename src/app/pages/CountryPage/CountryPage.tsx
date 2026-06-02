import useData from '../../hooks/useData';
import LineCountryEvolutionChart from '../../components/EvolutionChart/EvolutionChart';
import type { Participation } from '../../models/models';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';

const CountryPage = () => {
  const { data, loading, error, notFound } = useData();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (data === null) {
    return <div>Pas de données</div>;
  }

  if (notFound) {
    return <div>Aucune donnée disponible</div>;
  }

  console.log('Country data:', data);

  if (data === undefined) {
    return <div>Pas de données disponible pour ce pays.</div>;
  }

  const totalMedals = data[0]?.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0
  );

  const totalAthletes = data[0]?.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0
  );
  const totalParticipations = data[0]?.participations.length;

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
    <Layout>
      <HeaderComponent
        title={data[0]?.name}
        stats={CountryStats}
        statsCols={3}
      />

      <LineCountryEvolutionChart country={data[0]} />
    </Layout>
  );
};

export default CountryPage;
