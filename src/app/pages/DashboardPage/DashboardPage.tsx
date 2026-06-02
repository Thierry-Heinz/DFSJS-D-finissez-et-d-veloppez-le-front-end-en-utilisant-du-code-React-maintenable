import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';
import MedalChart from '../../components/MedalChart/MedalChart';
import useData from '../../hooks/useData';

const DashboardPage = () => {
  const { data, loading, error, notFound, empty } = useData();

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

  return (
    <Layout error={error} notFound={notFound} empty={empty} isLoading={loading}>
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
