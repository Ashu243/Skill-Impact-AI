import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/TrainingCentreDashboard.jsx";
import DashboardLayout from "./components/Layout/DashboardLayout.jsx";
import Candidates from "./pages/Candidates";
import CandidateDetails from "./pages/CandidateDetails";
import TrainingCentres from "./pages/TrainingCentres";
import TrainingCentreDetails from "./pages/TrainingCentreDetails";
import Analytics from "./pages/Analytics";
import RiskDetection from "./pages/RiskDetection";
import Recommendations from "./pages/Recommendations";
import Register from "./pages/Register";
import MyTraining from "./pages/MyTraining";
import Programs from "./pages/Programs";
import PolicyInsights from "./pages/PolicyInsights";

function Placeholder({ title }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h2 className="text-lg font-semibold text-slate-800">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        This page will be built soon.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Application */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="/candidates"
          element={
            <DashboardLayout>
              <Candidates />
            </DashboardLayout>
          }
        />

        <Route
          path="/candidates/:id"
          element={
            <DashboardLayout>
              <CandidateDetails />
            </DashboardLayout>
          }
        />

        <Route
          path="/training-centres"
          element={
            <DashboardLayout>
              <TrainingCentres />
            </DashboardLayout>
          }
        />

        <Route
          path="/training-centres/:id"
          element={
            <DashboardLayout>
              <TrainingCentreDetails />
            </DashboardLayout>
          }
        />

        <Route
          path="/my-training"
          element={
            <DashboardLayout>
              <MyTraining />
            </DashboardLayout>
          }
        />

        <Route
          path="/programs"
          element={
            <DashboardLayout>
              <Programs />
            </DashboardLayout>
          }
        />

        <Route
          path="/policy-insights"
          element={
            <DashboardLayout>
              <PolicyInsights />
            </DashboardLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <DashboardLayout>
              <Analytics />
            </DashboardLayout>
          }
        />

        <Route
          path="/risk-detection"
          element={
            <DashboardLayout>
              <RiskDetection />
            </DashboardLayout>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <DashboardLayout>
              <Placeholder title="AI Insights" />
            </DashboardLayout>
          }
        />

        <Route
          path="/recommendations"
          element={
            <DashboardLayout>
              <Recommendations />
            </DashboardLayout>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}