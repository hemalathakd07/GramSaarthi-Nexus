import { useState } from 'react';
import { Doughnut, Bar, Line } from '../components/ChartCard';
import Sidebar, { DashboardHeader } from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import StatCard from '../components/StatCard';

const bankLinks = [
  { label: 'Dashboard', path: '/bank', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Risk Analysis', path: '/risk', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { label: 'Predictions', path: '/prediction', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { label: 'Reports', path: '/report', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Profile', path: '/bank', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
];

const mockData = {
  stats: {
    totalLoans: { value: '₹4.2 Cr', change: '+8.3% this quarter', trend: 'up' },
    portfolioRisk: { value: '12%', change: 'Moderate risk level', trend: 'up' },
    npa: { value: '3.2%', change: '-0.4% vs last month', trend: 'up' },
    activeFarmers: { value: '847', change: '+42 new this month', trend: 'up' },
  },
  loanDistribution: {
    labels: ['Dairy', 'Poultry', 'Crop', 'Mixed', 'Other'],
    datasets: [
      {
        data: [35, 20, 25, 12, 8],
        backgroundColor: ['#34d399', '#60a5fa', '#a78bfa', '#fbbf24', '#94a3b8'],
        borderWidth: 0,
      },
    ],
  },
  riskCategories: {
    labels: ['Low', 'Medium', 'High', 'Critical'],
    datasets: [
      {
        label: 'Farmers',
        data: [420, 280, 110, 37],
        backgroundColor: ['rgba(52,211,153,0.7)', 'rgba(251,191,36,0.7)', 'rgba(251,146,60,0.7)', 'rgba(244,63,94,0.7)'],
        borderRadius: 6,
      },
    ],
  },
  cashFlowTrend: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Disbursements (₹L)',
        data: [32, 38, 35, 42, 45, 48],
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  },
  loanApplications: [
    { farmer: 'Ramesh Kumar', riskScore: 78, amount: '₹1,50,000', status: 'Approved' },
    { farmer: 'Sunita Patil', riskScore: 65, amount: '₹80,000', status: 'Under Review' },
    { farmer: 'Vikram Singh', riskScore: 42, amount: '₹2,00,000', status: 'Rejected' },
    { farmer: 'Lakshmi Devi', riskScore: 82, amount: '₹1,20,000', status: 'Approved' },
    { farmer: 'Arjun More', riskScore: 71, amount: '₹95,000', status: 'Under Review' },
  ],
  shapFeatures: [
    { feature: 'Income', importance: 32 },
    { feature: 'Milk Production', importance: 24 },
    { feature: 'Weather', importance: 18 },
    { feature: 'Repayment History', importance: 26 },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } } } },
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 11 } } },
    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 11 } }, beginAtZero: true },
  },
};

const statusStyles = {
  Approved: 'bg-emerald-500/15 text-emerald-400',
  'Under Review': 'bg-amber-500/15 text-amber-400',
  Rejected: 'bg-rose-500/15 text-rose-400',
};

export default function BankDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 bg-[#0B1120] text-slate-100">
      <Sidebar
        links={bankLinks}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        portalTitle="GramSaarthi"
        portalSubtitle="Bank Portal"
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <DashboardHeader
          name="State Cooperative Bank"
          role="Rural Lending Division"
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div>
              <h1 className="text-xl font-bold text-white lg:text-2xl">Bank Dashboard</h1>
              <p className="text-sm text-slate-400">Portfolio overview and loan intelligence</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Total Loans" value={mockData.stats.totalLoans.value} change={mockData.stats.totalLoans.change} trend="up" />
              <StatCard label="Portfolio Risk" value={mockData.stats.portfolioRisk.value} change={mockData.stats.portfolioRisk.change} trend="up" />
              <StatCard label="NPA %" value={mockData.stats.npa.value} change={mockData.stats.npa.change} trend="up" />
              <StatCard label="Active Farmers" value={mockData.stats.activeFarmers.value} change={mockData.stats.activeFarmers.change} trend="up" />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <DashboardCard hover={false} className="p-4 lg:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Loan Distribution</h3>
                <div className="h-52">
                  <Doughnut data={mockData.loanDistribution} options={doughnutOptions} />
                </div>
              </DashboardCard>
              <DashboardCard hover={false} className="p-4 lg:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Risk Categories</h3>
                <div className="h-52">
                  <Bar data={mockData.riskCategories} options={chartOptions} />
                </div>
              </DashboardCard>
              <DashboardCard hover={false} className="p-4 lg:col-span-1">
                <h3 className="mb-3 text-sm font-semibold text-white">Cash Flow Trend</h3>
                <div className="h-52">
                  <Line data={mockData.cashFlowTrend} options={chartOptions} />
                </div>
              </DashboardCard>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <DashboardCard hover={false} className="overflow-hidden p-0 lg:col-span-2">
                <div className="border-b border-white/10 px-4 py-3">
                  <h3 className="text-sm font-semibold text-white">Recent Loan Applications</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-500">
                        <th className="px-4 py-3 font-medium">Farmer</th>
                        <th className="px-4 py-3 font-medium">Risk Score</th>
                        <th className="px-4 py-3 font-medium">Loan Amount</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.loanApplications.map((row) => (
                        <tr key={row.farmer} className="border-b border-white/5 transition-colors hover:bg-white/[0.02]">
                          <td className="px-4 py-3 font-medium text-white">{row.farmer}</td>
                          <td className="px-4 py-3">
                            <span className={`font-semibold ${row.riskScore >= 70 ? 'text-emerald-400' : row.riskScore >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                              {row.riskScore}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-300">{row.amount}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[row.status]}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DashboardCard>

              <DashboardCard hover={false} className="p-4">
                <h3 className="mb-4 text-sm font-semibold text-white">Explainable AI — Feature Importance</h3>
                <div className="space-y-4">
                  {mockData.shapFeatures.map((f) => (
                    <div key={f.feature}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-300">{f.feature}</span>
                        <span className="font-medium text-emerald-400">{f.importance}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                          style={{ width: `${f.importance}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">SHAP values from latest risk model run</p>
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
