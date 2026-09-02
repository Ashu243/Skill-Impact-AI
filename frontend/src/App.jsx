import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/Layout/DashboardLayout.jsx";
import Candidates from "./pages/Candidates";
import CandidateDetails from "./pages/CandidateDetails";
import TrainingCentres from "./pages/TrainingCentres";
import TrainingCentreDetails from "./pages/TrainingCentreDetails";

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
          path="/analytics"
          element={
            <DashboardLayout>
              <Placeholder title="Analytics" />
            </DashboardLayout>
          }
        />

        <Route
          path="/risk-detection"
          element={
            <DashboardLayout>
              <Placeholder title="Risk Detection" />
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
              <Placeholder title="Recommendations" />
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