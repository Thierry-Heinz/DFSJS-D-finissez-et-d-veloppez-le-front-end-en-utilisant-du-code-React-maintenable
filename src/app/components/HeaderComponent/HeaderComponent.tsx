import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  console.log(location);

  return (
    <div className="w-full">
      <div className="rounded-lg shadow-xl bg-gray-800 mb-4 p-8 relative">
        {location.pathname.includes('/countries') && (
          <Link to="/">
            <div className="p-2 rounded-lg shadow-xl absolute mt-2 border-gray-300 bg-gray-700  hover:cursor-pointer hover:bg-gray-600 hover:border-gray-200 transition duration-150">
              <span className="text-xl font-bold mr-1">‹</span> Retour
            </div>
          </Link>
        )}
        <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
        {subtitle && (
          <div className="mb-8">
            <p className="text-lg text-center">
              Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
              Explorez les performances des pays au fil des années.
            </p>
          </div>
        )}
      </div>

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
