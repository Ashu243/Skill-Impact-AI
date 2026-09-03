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
import MyEmployment from "./pages/MyEmployment";
import CareerJourney from "./pages/CareerJourney";
import AIInsights from "./pages/AIInsights";
import EmploymentTrends from "./pages/EmploymentTrends";
import ProtectedRoute from "./components/ProtectedRoute";

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

        {/* Dashboard - all logged-in roles */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={[
                "candidate",
                "training_centre",
                "policymaker",
              ]}
            >
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Training Centre */}
        <Route
          path="/candidates"
          element={
            <ProtectedRoute allowedRoles={["training_centre"]}>
              <DashboardLayout>
                <Candidates />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidates/:id"
          element={
            <ProtectedRoute allowedRoles={["training_centre"]}>
              <DashboardLayout>
                <CandidateDetails />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/training-centres"
          element={
            <ProtectedRoute
              allowedRoles={["training_centre", "policymaker"]}
            >
              <DashboardLayout>
                <TrainingCentres />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/training-centres/:id"
          element={
            <ProtectedRoute
              allowedRoles={["training_centre", "policymaker"]}
            >
              <DashboardLayout>
                <TrainingCentreDetails />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              allowedRoles={["training_centre", "policymaker"]}
            >
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/risk-detection"
          element={
            <ProtectedRoute
              allowedRoles={["training_centre", "policymaker"]}
            >
              <DashboardLayout>
                <RiskDetection />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <ProtectedRoute allowedRoles={["training_centre"]}>
              <DashboardLayout>
                <AIInsights />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Candidate */}
        <Route
          path="/my-training"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <DashboardLayout>
                <MyTraining />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-employment"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <DashboardLayout>
                <MyEmployment />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/career-journey"
          element={
            <ProtectedRoute allowedRoles={["candidate"]}>
              <DashboardLayout>
                <CareerJourney />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Policymaker */}
        <Route
          path="/programs"
          element={
            <ProtectedRoute allowedRoles={["policymaker"]}>
              <DashboardLayout>
                <Programs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/employment-trends"
          element={
            <ProtectedRoute allowedRoles={["policymaker"]}>
              <DashboardLayout>
                <EmploymentTrends />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/policy-insights"
          element={
            <ProtectedRoute allowedRoles={["policymaker"]}>
              <DashboardLayout>
                <PolicyInsights />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Recommendations */}
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute
              allowedRoles={[
                "candidate",
                "training_centre",
                "policymaker",
              ]}
            >
              <DashboardLayout>
                <Recommendations />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}