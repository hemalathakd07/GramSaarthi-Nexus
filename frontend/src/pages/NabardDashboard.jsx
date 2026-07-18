import { useState } from 'react';
import { Bar, Doughnut } from '../components/ChartCard';
import Sidebar, { DashboardHeader } from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import StatCard from '../components/StatCard';

const nabardLinks = [
  { label: 'Dashboard', path: '/nabard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Schemes', path: '/nabard', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { label: 'Simulator', path: '/simulator', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
  { label: 'Reports', path: '/report', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Profile', path: '/nabard', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
];

const mockData = {
  stats: {
    registeredFarmers: { value: '12,450', change: '+320 this month', trend: 'up' },
    schemesActive: { value: '24', change: '6 dairy · 8 crop · 10 mixed', trend: 'up' },
    districtCoverage: { value: '89%', change: '34 of 38 districts', trend: 'up' },
    avgHealth: { value: '72/100', change: '+3 pts vs last quarter', trend: 'up' },
  },
  districtPerformance: {
    labels: ['Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur', 'Solapur'],
    datasets: [
      {
        label: 'Health Score',
        data: [78, 74, 68, 71, 76, 69],
        backgroundColor: 'rgba(52, 211, 153, 0.65)',
        borderRadius: 6,
      },
    ],
  },
  schemeUtilization: {
    labels: ['Utilized', 'Available'],
    datasets: [
      {
        data: [68, 32],
        backgroundColor: ['#34d399', 'rgba(255,255,255,0.08)'],
        borderWidth: 0,
      },
    ],
  },
  weatherRisk: {
    labels: ['Low', 'Moderate', 'High', 'Severe'],
    datasets: [
      {
        label: 'Districts',
        data: [18, 10, 4, 2],
        backgroundColor: ['rgba(52,211,153,0.7)', 'rgba(251,191,36,0.7)', 'rgba(251,146,60,0.7)', 'rgba(244,63,94,0.7)'],
        borderRadius: 6,
      },
    ],
  },
  heatmapDistricts: [
    { name: 'Pune', value: 92 },
    { name: 'Nashik', value: 85 },
    { name: 'Nagpur', value: 71 },
    { name: 'Aurangabad', value: 78 },
    { name: 'Kolhapur', value: 88 },
    { name: 'Solapur', value: 74 },
    { name: 'Satara', value: 81 },
    { name: 'Sangli', value: 76 },
  ],
  alerts: [
    { type: 'weather', text: 'Heavy rainfall predicted in Nashik district — 120mm expected.', severity: 'high' },
    { type: 'market', text: 'Milk prices increasing 8% across western Maharashtra.', severity: 'medium' },
    { type: 'supply', text: 'Fodder shortage reported in 3 districts — monitor feed costs.', severity: 'high' },
  ],
  schemes: [
    { name: 'Dairy Entrepreneurship Scheme', enrolled: 1240, budget: '₹12 Cr' },
    { name: 'KCC — Animal Husbandry', enrolled: 890, budget: '₹8.5 Cr' },
    { name: 'PMFME — Food Processing', enrolled: 456, budget: '₹5.2 Cr' },
    { name: 'RIDF — Rural Infrastructure', enrolled: 320, budget: '₹15 Cr' },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } },
    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } }, beginAtZero: true },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '65%',
  plugins: { legend: { display: false } },
};

const alertStyles = {
  high: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
  medium: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
};

function HeatmapPlaceholder({ districts }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {districts.map((d) => {
        const intensity = d.value / 100;
        return (
          <div
            key={d.name}
            className="rounded-lg border border-white/10 p-2 text-center transition-transform hover:scale-105"
            style={{ backgroundColor: `rgba(52, 211, 153, ${intensity * 0.35})` }}
          >
            <p className="text-[10px] font-medium text-white">{d.name}</p>
            <p className="text-xs font-bold text-emerald-400">{d.value}L</p>
          </div>
        );
      })}
    </div>
  );
}

export default function NabardDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 bg-[#0B1120] text-slate-100">
      <Sidebar
        links={nabardLinks}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        portalTitle="GramSaarthi"
        portalSubtitle="NABARD Portal"
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <DashboardHeader
          name="NABARD — Maharashtra RO"
          role="Regional Office · Policy & Monitoring"
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div>
              <h1 className="text-xl font-bold text-white lg:text-2xl">NABARD Dashboard</h1>
              <p className="text-sm text-slate-400">State-wide rural finance monitoring</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Registered Farmers" value={mockData.stats.registeredFarmers.value} change={mockData.stats.registeredFarmers.change} trend="up" />
              <StatCard label="Schemes Active" value={mockData.stats.schemesActive.value} change={mockData.stats.schemesActive.change} trend="up" />
              <StatCard label="District Coverage" value={mockData.stats.districtCoverage.value} change={mockData.stats.districtCoverage.change} trend="up" />
              <StatCard label="Avg Financial Health" value={mockData.stats.avgHealth.value} change={mockData.stats.avgHealth.change} trend="up" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              <DashboardCard hover={false} className="p-4 xl:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">District Performance</h3>
                <div className="h-44">
                  <Bar data={mockData.districtPerformance} options={chartOptions} />
                </div>
              </DashboardCard>
              <DashboardCard hover={false} className="p-4 xl:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Scheme Utilization</h3>
                <div className="relative h-44">
                  <Doughnut data={mockData.schemeUtilization} options={doughnutOptions} />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">68%</span>
                  </div>
                </div>
              </DashboardCard>
              <DashboardCard hover={false} className="p-4 xl:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Milk Production Heatmap</h3>
                <HeatmapPlaceholder districts={mockData.heatmapDistricts} />
              </DashboardCard>
              <DashboardCard hover={false} className="p-4 xl:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Weather Risk Distribution</h3>
                <div className="h-44">
                  <Bar data={mockData.weatherRisk} options={chartOptions} />
                </div>
              </DashboardCard>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 text-sm font-semibold text-white">Recent Alerts</h3>
                <div className="space-y-3">
                  {mockData.alerts.map((alert) => (
                    <div
                      key={alert.text}
                      className={`rounded-xl border p-3 text-sm ${alertStyles[alert.severity]}`}
                    >
                      {alert.text}
                    </div>
                  ))}
                </div>
              </DashboardCard>

              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-3 text-sm font-semibold text-white">Government Schemes</h3>
                <div className="space-y-3">
                  {mockData.schemes.map((scheme) => (
                    <div
                      key={scheme.name}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-emerald-400/20"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{scheme.name}</p>
                        <p className="text-xs text-slate-500">{scheme.enrolled.toLocaleString()} enrolled</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400">{scheme.budget}</span>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
