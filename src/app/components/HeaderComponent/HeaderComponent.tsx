import { Link, useLocation } from 'react-router-dom';
import Indicator from '../Indicator/Indicator';
import { SkeletonBlock } from '../SkeletonBlock/SkeletonBlock';

type HeaderComponentProps = {
  title: string;
  subtitle?: string;
  stats: {
    label: string;
    value: number;
    color: string;
  }[];
  statsCols: number;
  isLoading: boolean;
};

const HeaderComponent = ({
  title,
  subtitle,
  stats,
  statsCols,
  isLoading,
}: HeaderComponentProps) => {
  const location = useLocation();

  const colsMap: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  };

  if (isLoading) {
    return (
      <div className="col-span-12 " role="navigation" aria-label="Header">
        <SkeletonBlock className="rounded-lg shadow-xl bg-gray-800 mb-4 p-6 relative border-1 border-gray-500 h-25 animate-pulse" />
        <div
          className={`flex flex-col md:grid ${colsMap[statsCols]} gap-4 grid-cols-subgrid`}
        >
          {stats.map((_, index) => (
            <SkeletonBlock
              key={index}
              className="rounded-lg shadow-xl bg-gray-800 mb-4 p-6 relative border-1 border-gray-500 h-35 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 mb-4" role="navigation" aria-label="Header">
      <div className="rounded-lg shadow-xl bg-gray-800 mb-4 p-6 relative">
        {location.pathname.includes('/country') && (
          <Link to="/" role="button" aria-label="Retour à l'accueil">
            <div className="text-sm md:text-lg mb-4 md:mb-0 p-2 rounded-lg shadow-xl inline-block md:absolute  border-gray-300 bg-gray-700 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-200 transition duration-150">
              <span className="  font-bold mr-1">‹</span> Retour
            </div>
          </Link>
        )}
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        {subtitle && (
          <div className="mt-2 px-8">
            <p className="text-lg text-center">
              Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
              Explorez les performances des pays au fil des années.
            </p>
          </div>
        )}
      </div>

      <div
        className={`flex flex-col md:grid ${colsMap[statsCols]} gap-4 grid-cols-subgrid`}
      >
        {stats.map((stat, index) => (
          <Indicator
            key={index}
            stat={stat.value}
            indicatorTitle={stat.label}
            baseColor={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
