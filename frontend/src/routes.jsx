import { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';
import FarmerDashboard from './pages/FarmerDashboard';
import BankDashboard from './pages/BankDashboard';
import NabardDashboard from './pages/NabardDashboard';
import Prediction from './pages/Prediction';
import RiskAnalysis from './pages/RiskAnalysis';
import Simulator from './pages/Simulator';
import Report from './pages/Report';

function AppLayout() {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-container">
        <Outlet />
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="farmer" element={<FarmerDashboard />} />
          <Route path="bank" element={<BankDashboard />} />
          <Route path="nabard" element={<NabardDashboard />} />
          <Route path="prediction" element={<Prediction />} />
          <Route path="risk" element={<RiskAnalysis />} />
          <Route path="simulator" element={<Simulator />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
