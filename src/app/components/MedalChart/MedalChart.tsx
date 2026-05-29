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
  type TooltipModel,
  type ChartEvent,
  type ActiveElement,
} from 'chart.js';
import type { Olympic, Participation } from '../../models/models';
import { useNavigate } from 'react-router-dom';

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

type MedalChartProps = {
  pieData: Olympic[];
};

const MedalChart = ({ pieData }: MedalChartProps) => {
  const navigate = useNavigate();
  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0
    );
  };

  const chartData = {
    labels: pieData.map((d: Olympic) => d.name),
    datasets: [
      {
        label: 'Total des médailles',
        data: pieData.map((d: Olympic) => calculateTotalMedals(d)),
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
    radius: '75%',
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      console.log('Clicked elements:', elements);
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log('Clicked index:', index);
        const countryId = pieData[index].id;
        navigate(`/countries/${countryId}`);
      }
      const tooltipEl = document.getElementById('chartjs-tooltip');
      if (tooltipEl) tooltipEl.style.opacity = '0';
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        enabled: false, // désactive le tooltip natif
        external: (context: {
          chart: ChartJS;
          tooltip: TooltipModel<'pie'>;
        }) => {
          let tooltipEl = document.getElementById('chartjs-tooltip');
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            document.body.appendChild(tooltipEl);
          }

          if (context.tooltip.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
          }

          tooltipEl.innerHTML = `
          <div id="tooltip-content">
          <div class="w-full py-1 px-4 text-center flex flex-col items-center gap-1 rounded-lg bg-teal-200">
            <h3 class="font-bold text-md">${context.tooltip.dataPoints[0].label}</h3>  
            <span class="font-bold text-sm">🎖️ ${context.tooltip.dataPoints[0].formattedValue}</span>
            </div>
          </div>
            <div class="w-full relative">
            <div class="tooltip-arrow" style="left: 50%; transform: translateX(-50%); bottom: -5px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid oklch(91% 0.096 180.426); position: absolute;"></div>
            </div>`;

          tooltipEl.style.opacity = '1';
          tooltipEl.style.position = 'absolute';

          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.top = `${position.top + window.scrollY + context.tooltip.caretY - tooltipEl.offsetHeight - 10}px`;
          tooltipEl.style.left = `${position.left + window.scrollX + context.tooltip.caretX - tooltipEl.offsetWidth / 2}px`;
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.transition = 'all 0.1s ease';

          tooltipEl.style.opacity = '1';
        },
      },
    },
  };

  const outLabelsPlugin = {
    id: 'outLabels',
    afterDraw(chart: ChartJS) {
      chart.getDatasetMeta(0).data.forEach((arc, index: number) => {
        const element = arc as unknown as ArcElement;
        const midAngle = (element.startAngle + element.endAngle) / 2;
        const pointX = element.x + Math.cos(midAngle) * element.outerRadius;
        const pointY = element.y + Math.sin(midAngle) * element.outerRadius;
        const label = chart.data.labels?.[index] || '';

        const side = Math.cos(midAngle) > 0 ? 1 : -1;

        const minLength = 50;
        const rawLabelX = pointX + minLength * side; // minimum garanti
        const desiredLabelX =
          element.x + Math.cos(midAngle) * (element.outerRadius + 50);
        const labelX =
          side > 0
            ? Math.max(rawLabelX, desiredLabelX)
            : Math.min(rawLabelX, desiredLabelX);

        const pointLabelX = labelX - 20 * side;

        chart.ctx.beginPath();
        chart.ctx.moveTo(pointX, pointY);
        chart.ctx.lineTo(pointLabelX, pointY);
        chart.ctx.strokeStyle = 'white';
        chart.ctx.lineWidth = 1;
        chart.ctx.stroke();
        chart.ctx.fillStyle = 'white';
        chart.ctx.font = '16px Arial';

        chart.ctx.textAlign = side > 0 ? 'left' : 'right';
        chart.ctx.fillText(`${label}`, labelX, pointY);
      });
    },
  };

  return (
    <Pie data={chartData} options={chartOptions} plugins={[outLabelsPlugin]} />
  );
};

export default MedalChart;
