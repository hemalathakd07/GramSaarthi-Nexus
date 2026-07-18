import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiReact, SiFastapi, SiPython, SiPostgresql } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { GiTreeBranch } from 'react-icons/gi';
import { Line, Doughnut } from '../components/ChartCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import StatCard from '../components/StatCard';

/* ─── Icons ─── */

function IconChart() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13l4-4 4 4 8-8m0 0v6m0-6h-6" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

function IconScheme() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconSim() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

/* ─── Hero Dashboard Mockup ─── */

const cashFlowData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Cash Flow (₹)',
      data: [8200, 12400, 9800, 15600, 18200, 21400],
      borderColor: '#34d399',
      backgroundColor: 'rgba(52, 211, 153, 0.12)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const healthScoreData = {
  labels: ['Healthy', 'At Risk'],
  datasets: [
    {
      data: [78, 22],
      backgroundColor: ['#34d399', 'rgba(255,255,255,0.08)'],
      borderWidth: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { enabled: true } },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#94a3b8', font: { size: 10 } },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#94a3b8', font: { size: 10 } },
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: { legend: { display: false } },
};

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-2xl" />
      <DashboardCard hover={false} className="relative overflow-hidden p-4 lg:p-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Digital Twin Dashboard
            </p>
            <p className="text-sm font-semibold text-white">Ramesh — Dairy Enterprise</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
            AI Active
          </span>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2">
          <StatCard label="Monthly Income" value="₹21,400" change="+12.4%" icon={<IconChart />} />
          <StatCard label="Health Score" value="78/100" change="Low Risk" icon={<IconHeart />} />
        </div>

        <div className="mb-3 h-32">
          <Line data={cashFlowData} options={chartOptions} />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="h-14 w-14">
              <Doughnut data={healthScoreData} options={doughnutOptions} />
            </div>
            <p className="mt-1 text-[10px] text-slate-400">Risk Profile</p>
          </div>
          <div className="col-span-2 space-y-1.5">
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2">
              <p className="text-[10px] font-medium text-blue-300">AI Insight</p>
              <p className="text-[10px] text-slate-300">Milk prices rising 8% — expand production.</p>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2">
              <p className="text-[10px] font-medium text-emerald-300">Scheme Match</p>
              <p className="text-[10px] text-slate-300">Eligible for NABARD Dairy Scheme.</p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}

/* ─── Sections ─── */

function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 relative overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-20 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300">
              NABARD Hackathon @ Global FinTech Fest 2026
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            AI-Powered Financial Digital Twin for{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Rural Enterprises
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            GramSaarthi Nexus builds a living financial digital twin for rural micro
            enterprises — predicting cash flows, scoring health, and detecting risk
            so farmers, banks, and NABARD can act before problems arise.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/farmer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/40"
            >
              Launch Demo
            </Link>
            <a
              href="#architecture"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              View Architecture
            </a>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

const whyFeatures = [
  {
    title: 'Cash Flow Prediction',
    desc: 'LSTM-powered forecasts for rural income and expenses.',
    icon: <IconChart />,
  },
  {
    title: 'Financial Health Score',
    desc: 'Composite score reflecting true enterprise wellness.',
    icon: <IconHeart />,
  },
  {
    title: 'Risk Detection',
    desc: 'Early alerts before defaults or cash crises hit.',
    icon: <IconAlert />,
  },
  {
    title: 'Explainable AI',
    desc: 'SHAP insights showing why every prediction was made.',
    icon: <IconBrain />,
  },
  {
    title: 'Scheme Recommendation',
    desc: 'AI-matched NABARD and government scheme eligibility.',
    icon: <IconScheme />,
  },
  {
    title: 'What-if Simulator',
    desc: 'Model price shocks and loan scenarios before deciding.',
    icon: <IconSim />,
  },
];

function WhySection() {
  return (
    <section id="features" className="scroll-mt-20 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Why GramSaarthi Nexus?"
          subtitle="Predict • Explain • Prevent • Prosper"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f) => (
            <DashboardCard key={f.title} className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-400">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{f.desc}</p>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreviewPlaceholder({ accent }) {
  const bars = [40, 65, 50, 80, 60, 75];
  return (
    <div className="flex h-28 items-end gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-3">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm bg-gradient-to-t ${accent} opacity-80`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

const dashboardPreviews = [
  {
    title: 'Farmer Dashboard',
    path: '/farmer',
    accent: 'from-emerald-500/60 to-emerald-400/20',
    metrics: ['Health Score: 78/100', 'Monthly Income: ₹21,400', 'Risk Level: Low'],
  },
  {
    title: 'Bank Dashboard',
    path: '/bank',
    accent: 'from-blue-500/60 to-blue-400/20',
    metrics: ['Portfolio Risk: 12%', 'Active Loans: 847', 'NPA Rate: 3.2%'],
  },
  {
    title: 'NABARD Dashboard',
    path: '/nabard',
    accent: 'from-teal-500/60 to-emerald-400/20',
    metrics: ['Schemes Active: 24', 'Farmers Served: 12,450', 'Coverage: 89%'],
  },
];

function DashboardPreviewSection() {
  return (
    <section id="dashboards" className="scroll-mt-20 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Dashboard Preview"
          subtitle="Click to explore the live prototype dashboards"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {dashboardPreviews.map((d) => (
            <DashboardCard key={d.title} className="flex flex-col p-4">
              <h3 className="text-sm font-semibold text-white">{d.title}</h3>
              <div className="my-3">
                <DashboardPreviewPlaceholder accent={d.accent} />
              </div>
              <ul className="mb-4 space-y-1">
                {d.metrics.map((m) => (
                  <li key={m} className="text-xs text-slate-400">
                    {m}
                  </li>
                ))}
              </ul>
              <Link
                to={d.path}
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 px-4 py-2 text-xs font-semibold text-white transition-all hover:from-emerald-400 hover:to-emerald-500"
              >
                Open Dashboard
              </Link>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-emerald-400' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'XGBoost', icon: GiTreeBranch, color: 'text-green-400' },
  { name: 'LSTM', icon: TbBrain, color: 'text-purple-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
];

function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-20 py-10 lg:py-14">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader title="Technology Used" />

        <div className="flex flex-wrap items-center justify-center gap-5">
          {technologies.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              title={name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10"
            >
              <Icon className={`h-8 w-8 ${color} transition-transform group-hover:scale-110`} />
              <span className="text-xs font-medium text-slate-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchNode({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-medium text-slate-200 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function ArchArrow() {
  return (
    <div className="flex justify-center py-1">
      <svg className="h-5 w-5 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}

function ArchitectureDiagram({ expanded = false }) {
  return (
    <div className={`mx-auto w-full max-w-2xl space-y-0 ${expanded ? '' : 'max-h-80 overflow-hidden'}`}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {['Weather API', 'Milk Production', 'Bank Transactions', 'UPI Data'].map((s) => (
          <ArchNode key={s} className="border-blue-500/20 bg-blue-500/10 text-blue-200">{s}</ArchNode>
        ))}
      </div>
      <ArchArrow />
      <ArchNode className="mx-auto max-w-xs border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
        Feature Engineering
      </ArchNode>
      <ArchArrow />
      <ArchNode className="mx-auto max-w-sm border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 text-white shadow-lg shadow-emerald-500/10">
        Financial Digital Twin
      </ArchNode>
      <ArchArrow />
      <ArchNode className="mx-auto max-w-sm border-purple-500/30 bg-purple-500/10 text-purple-200">
        AI Layer — XGBoost + LSTM + SHAP
      </ArchNode>
      <ArchArrow />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {['Financial Health', 'Risk Score', 'Cash Flow Prediction', 'Recommendations'].map((o) => (
          <ArchNode key={o} className="border-emerald-500/20 bg-emerald-500/10 text-emerald-200">{o}</ArchNode>
        ))}
      </div>
      <ArchArrow />
      <div className="grid grid-cols-3 gap-2">
        {['Farmer Dashboard', 'Bank Dashboard', 'NABARD Dashboard'].map((d) => (
          <ArchNode key={d} className="border-white/20 bg-white/10 text-white">{d}</ArchNode>
        ))}
      </div>
    </div>
  );
}

function ArchitectureSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="architecture" className="scroll-mt-20 py-10 lg:py-14">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader title="Architecture" />

        <DashboardCard hover={false} className="overflow-hidden p-4 sm:p-6">
          <ArchitectureDiagram expanded={expanded} />
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-emerald-400/30 hover:bg-white/10"
            >
              {expanded ? 'Collapse Architecture' : 'View Full Architecture'}
            </button>
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="scroll-mt-20 py-10 lg:py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-[#0B1120] to-blue-500/10 px-6 py-10 text-center sm:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            Ready to Experience GramSaarthi Nexus?
          </h2>
          <p className="relative mt-2 text-sm text-slate-400">
            Jump into the live prototype and explore AI-powered rural finance.
          </p>

          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/farmer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-emerald-500"
            >
              Launch Demo
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */

export default function Home() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden bg-[#0B1120] text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <DashboardPreviewSection />
        <TechnologySection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
