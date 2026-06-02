import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Layout } from '../../components/Layout/Layout';
import MedalChart from '../../components/MedalChart/MedalChart';
import useData from '../../hooks/useData';

const DashboardPage = () => {
  const { data, loading, error, notFound } = useData();

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

  if (notFound) {
    return <div>Aucune donnée disponible</div>;
  }

  return (
    <Layout>
      <HeaderComponent
        title="Tableau de bord des Jeux Olympiques"
        subtitle="Explorez les performances des pays au fil des années"
        stats={DashBoardStats}
        statsCols={2}
      />

      <MedalChart pieData={data} />
    </Layout>
  );
};

export default DashboardPage;
