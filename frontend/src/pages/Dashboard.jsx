import CandidateDashboard from "./CandidateDashboard";
import TrainingCentreDashboard from "./TrainingCentreDashboard";
import PolicymakerDashboard from "./PolicymakerDashboard";

export default function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("skillimpactUser")
  );

  if (user?.role === "candidate") {
    return <CandidateDashboard />;
  }

  if (user?.role === "policymaker") {
    return <PolicymakerDashboard />;
  }

  // Default dashboard
  return <TrainingCentreDashboard />;
}