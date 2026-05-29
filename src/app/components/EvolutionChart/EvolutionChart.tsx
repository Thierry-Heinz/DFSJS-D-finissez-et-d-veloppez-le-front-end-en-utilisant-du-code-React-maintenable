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

type EvolutionChartProps = { country: Olympic };

const EvolutionChart = ({ country }: EvolutionChartProps) => {
  const sortedParticipations = country.participations.sort(
    (a, b) => a.year - b.year
  ); // décroissant
  const evolutionData = {
    labels: sortedParticipations.map((p: Participation) => p.year.toString()),

    datasets: [
      {
        label: 'Nombre de médailles',
        data: sortedParticipations.map((p: Participation) => p.medalsCount),
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

  return <Line data={evolutionData} options={evolutionOptions} />;
};

export default EvolutionChart;
