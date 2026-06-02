import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import LineCountryEvolutionChart from '../../components/EvolutionChart/EvolutionChart';
import type { Olympic, Participation } from '../../models/models';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';

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
    <Layout>
      <HeaderComponent
        title={country?.name}
        stats={CountryStats}
        statsCols={3}
      />

      <LineCountryEvolutionChart country={country} />
    </Layout>
  );
};

export default CountryPage;
