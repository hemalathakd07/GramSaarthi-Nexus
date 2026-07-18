import { useState } from 'react';
import { Line, Bar } from '../components/ChartCard';
import Sidebar, { DashboardHeader } from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import StatCard from '../components/StatCard';

const mockData = {
  farmer: {
    name: 'Ramesh Kumar',
    role: 'Dairy Farmer · Pune, Maharashtra',
  },
  stats: {
    healthScore: { value: '78/100', change: 'Low Risk', trend: 'up' },
    monthlyIncome: { value: '₹21,400', change: '+12.4% vs last month', trend: 'up' },
    milkProduction: { value: '142 L/day', change: '+5.2% this week', trend: 'up' },
    weather: { value: '28°C', change: 'Partly Cloudy · 60% humidity', trend: 'up' },
  },
  incomeTrend: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income (₹)',
        data: [15200, 16800, 14100, 18900, 19800, 21400],
        borderColor: '#34d399',
        backgroundColor: 'rgba(52, 211, 153, 0.12)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 2,
      },
    ],
  },
  milkTrend: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Milk (Litres)',
        data: [128, 135, 130, 142, 138, 145, 142],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderRadius: 6,
      },
    ],
  },
  insights: [
    'Cash flow expected to improve next month based on seasonal milk demand.',
    'Eligible for NABARD Dairy Entrepreneurship Scheme — 85% match.',
    'Risk Level: Low — stable income and consistent repayments.',
  ],
  recommendations: [
    'Apply for NABARD Dairy Scheme to fund a milking machine upgrade.',
    'Increase production by 10% during peak demand (Oct–Feb).',
    'Maintain fodder inventory for 3 weeks to hedge against price spikes.',
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#94a3b8', font: { size: 11 } },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#94a3b8', font: { size: 11 } },
    },
  },
};

const barOptions = {
  ...chartOptions,
  scales: {
    ...chartOptions.scales,
    y: { ...chartOptions.scales.y, beginAtZero: true },
  },
};

export default function FarmerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 bg-[#0B1120] text-slate-100">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen flex-1 flex-col">
        <DashboardHeader
          name={mockData.farmer.name}
          role={mockData.farmer.role}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div>
              <h1 className="text-xl font-bold text-white lg:text-2xl">Farmer Dashboard</h1>
              <p className="text-sm text-slate-400">Your financial digital twin overview</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Financial Health Score"
                value={mockData.stats.healthScore.value}
                change={mockData.stats.healthScore.change}
                trend={mockData.stats.healthScore.trend}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              />
              <StatCard
                label="Monthly Income"
                value={mockData.stats.monthlyIncome.value}
                change={mockData.stats.monthlyIncome.change}
                trend={mockData.stats.monthlyIncome.trend}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <StatCard
                label="Milk Production"
                value={mockData.stats.milkProduction.value}
                change={mockData.stats.milkProduction.change}
                trend={mockData.stats.milkProduction.trend}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                }
              />
              <StatCard
                label="Weather"
                value={mockData.stats.weather.value}
                change={mockData.stats.weather.change}
                trend={mockData.stats.weather.trend}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                }
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 text-sm font-semibold text-white">Monthly Income Trend</h3>
                <div className="h-56">
                  <Line data={mockData.incomeTrend} options={chartOptions} />
                </div>
              </DashboardCard>
              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 text-sm font-semibold text-white">Milk Production Trend</h3>
                <div className="h-56">
                  <Bar data={mockData.milkTrend} options={barOptions} />
                </div>
              </DashboardCard>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  AI Insights
                </h3>
                <ul className="space-y-3">
                  {mockData.insights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DashboardCard>

              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </span>
                  Recommendations
                </h3>
                <ul className="space-y-3">
                  {mockData.recommendations.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 text-emerald-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
