type IndicatorProps = {
  stat: number;
  indicatorTitle: string;
  baseColor: string;
};

const Indicator = ({ stat, indicatorTitle, baseColor }: IndicatorProps) => {
  const baseColorMaps: Record<string, string> = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    red: 'text-red-400',
    yellow: 'text-yellow-400',
  };
  return (
    <div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
      role="region"
      aria-label={indicatorTitle}
    >
      <h2 className="text-xl font-semibold mb-2">{indicatorTitle}</h2>
      <p
        className={`text-4xl font-bold ${baseColorMaps[baseColor] || 'text-gray-400'}`}
      >
        {stat}
      </p>
    </div>
  );
};

export default Indicator;
