type IndicatorProps = {
  totalParticipatingCountries: number;
  indicatorTitle: string;
  baseColor?: string;
};

const Indicator = ({
  totalParticipatingCountries,
  indicatorTitle,
  baseColor = 'blue',
}: IndicatorProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
      <h3 className="text-xl font-semibold mb-2">{indicatorTitle}</h3>
      <p className={`text-4xl font-bold text-${baseColor}-400`}>
        {totalParticipatingCountries}
      </p>
    </div>
  );
};

export default Indicator;
