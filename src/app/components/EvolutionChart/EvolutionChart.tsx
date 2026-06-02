import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';
import type { Olympic, Participation } from '../../models/models';
import { SkeletonBlock } from '../SkeletonBlock/SkeletonBlock';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

type EvolutionChartProps = { country: Olympic[]; isLoading: boolean };

const EvolutionChart = ({ country, isLoading }: EvolutionChartProps) => {
  const sortedParticipations = country[0]?.participations.sort(
    (a, b) => a.year - b.year
  ); // décroissant
  const evolutionData = {
    labels:
      sortedParticipations?.map((p: Participation) => p.year.toString()) || [],

    datasets: [
      {
        label: 'Nombre de médailles',
        data:
          sortedParticipations?.map((p: Participation) => p.medalsCount) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  if (isLoading) {
    return (
      <SkeletonBlock className="col-span-12 bg-gray-800 p-8 rounded-lg shadow-xl w-full animate-pulse border-1 border-gray-500 h-85" />
    );
  }

  return (
    <div
      className="col-span-12 bg-gray-800 p-8 rounded-lg shadow-xl w-full"
      role="region"
      aria-label="Graphique de l'évolution des médailles par pays"
    >
      <div style={{ height: '400px' }}>
        <Line data={evolutionData} options={evolutionOptions} />
        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
};

export default EvolutionChart;
