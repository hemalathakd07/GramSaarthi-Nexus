import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

ChartJS.defaults.font.family =
  '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif';
ChartJS.defaults.color = '#64748b';
ChartJS.defaults.responsive = true;
ChartJS.defaults.maintainAspectRatio = false;

export { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
export { ChartJS };

export default function ChartCard() {
  return null;
}
