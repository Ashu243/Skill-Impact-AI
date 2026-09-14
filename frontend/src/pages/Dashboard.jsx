import CandidateDashboard from "./CandidateDashboard";
import TrainingCentreDashboard from "./TrainingCentreDashboard";
import PolicymakerDashboard from "./PolicymakerDashboard";

export default async function Dashboard() {
  const user = await JSON.parse(
    localStorage.getItem("skillimpactUser")
  );
  console.log("user details: ",user)
  console.log('hey there')

  if (user?.role === "candidate") {
    return <CandidateDashboard />;
  }

  if (user?.role === "policymaker") {
    return <PolicymakerDashboard />;
  }

  // Default dashboard
  return <TrainingCentreDashboard />;
}