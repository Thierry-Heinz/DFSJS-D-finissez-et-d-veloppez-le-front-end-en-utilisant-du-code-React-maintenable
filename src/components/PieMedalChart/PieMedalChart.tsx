import { Pie } from 'react-chartjs-2';
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
import type {
  CountryData,
  OlympicData,
  Participation,
} from '../../models/models';

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

type PieMedalChartProps = {
  pieData: OlympicData; // Anti-pattern 3 — Utilisation de `any` pour les props ne permettant pas de bénéficier de TypeScript.
};

const PieMedalChart = ({ pieData }: PieMedalChartProps) => {
  const calculateTotalMedals = (country: CountryData) => {
    return country.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0
    );
  };

  const chartData = {
    labels: pieData.map((d: CountryData) => d.name),
    datasets: [
      {
        label: 'Total des médailles',
        data: pieData.map((d: CountryData) => calculateTotalMedals(d)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return <Pie data={chartData} options={chartOptions} />;
};

export default PieMedalChart;
