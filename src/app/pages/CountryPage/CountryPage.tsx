import useData from '../../hooks/useData';
import LineCountryEvolutionChart from '../../components/EvolutionChart/EvolutionChart';
import type { Participation } from '../../models/models';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const CountryPage = () => {
  const { id } = useParams();
  const { data, loading, error, empty } = useData(id);

  const country = data[0]; // On suppose que data contient un seul pays correspondant à l'ID ou au nom

  const CountryStats = useMemo(() => {
    return [
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
  }, [country]);

  return (
    <Layout error={error} empty={empty} isLoading={loading}>
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
