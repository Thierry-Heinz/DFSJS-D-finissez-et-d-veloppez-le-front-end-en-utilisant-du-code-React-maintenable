import { Link } from 'react-router-dom';

export const BackHomeBtn = () => (
  <Link to="/" role="button" aria-label="Retour à l'accueil">
    <div className="text-sm md:text-lg mb-4 md:mb-0 p-2 rounded-lg shadow-xl inline-block  border-gray-300 bg-gray-700 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-200 transition duration-150">
      <span className="  font-bold mr-1">‹</span> Retour
    </div>
  </Link>
);
