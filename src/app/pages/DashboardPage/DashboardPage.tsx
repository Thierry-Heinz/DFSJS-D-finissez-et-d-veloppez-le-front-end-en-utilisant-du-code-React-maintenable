import { useMemo } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';
import MedalChart from '../../components/MedalChart/MedalChart';
import useData from '../../hooks/useData';

const DashboardPage = () => {
  const { data, loading, error, empty } = useData();

  const DashBoardStats = useMemo(() => {
    return [
      {
        label: 'Pays participants',
        value: data ? data.length : 0,
        color: 'blue',
      },
      {
        label: 'Éditions des JO',
        value: 5,
        color: 'green',
      },
    ];
  }, [data]);

  return (
    <Layout error={error} empty={empty} isLoading={loading}>
      <HeaderComponent
        title="Tableau de bord des Jeux Olympiques"
        subtitle="Explorez les performances des pays au fil des années"
        stats={DashBoardStats}
        statsCols={2}
        isLoading={loading}
      />

      <MedalChart pieData={data} isLoading={loading} />
    </Layout>
  );
};

export default DashboardPage;
