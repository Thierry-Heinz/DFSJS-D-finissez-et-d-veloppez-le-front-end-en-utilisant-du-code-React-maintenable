import useData from '../../hooks/useData';
import LineCountryEvolutionChart from '../../components/EvolutionChart/EvolutionChart';
import type { Participation } from '../../models/models';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';

const CountryPage = () => {
  const { data, loading, error, notFound, empty } = useData();

  const country = data[0]; // On suppose que data contient un seul pays correspondant à l'ID ou au nom

  const CountryStats = [
    {
      label: 'Participations',
      value: country?.participations.length,
      color: 'blue',
    },
    {
      label: 'Total médailles',
      value: country?.participations.reduce(
        (sum: number, p: Participation) => sum + p.medalsCount,
        0
      ),
      color: 'yellow',
    },
    {
      label: 'Total athlètes',
      value: country?.participations.reduce(
        (sum: number, p: Participation) => sum + p.athleteCount,
        0
      ),
      color: 'green',
    },
  ];

  return (
    <Layout error={error} notFound={notFound} empty={empty} isLoading={loading}>
      <HeaderComponent
        title={country?.name}
        stats={CountryStats}
        statsCols={3}
        isLoading={loading}
      />

      <LineCountryEvolutionChart country={data} isLoading={loading} />
    </Layout>
  );
};

export default CountryPage;
