import Indicator from '../Indicator/Indicator';

type HeaderComponentProps = {
  title: string;
  subtitle?: string;
  stats: {
    label: string;
    value: number;
    color: string;
  }[];
};

const HeaderComponent = ({ title, subtitle, stats }: HeaderComponentProps) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      {subtitle && (
        <div className="mb-8">
          <p className="text-lg text-center">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>
      )}

      <div
        className={`mb-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${stats.length} gap-4`}
      >
        {stats.map((stat, index) => (
          <Indicator
            key={index}
            totalParticipatingCountries={stat.value}
            indicatorTitle={stat.label}
            baseColor={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
