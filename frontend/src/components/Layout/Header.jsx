import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("skillimpactUser")
  );

  const role = user?.role || "candidate";
  const name = user?.name || "User";

  const roleLabels = {
    candidate: "Candidate",
    training_centre: "Training Centre",
    policymaker: "Policymaker",
  };

  const roleLabel = roleLabels[role] || "User";

  // Get initials
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Page titles
  const pageTitles = {
    "/dashboard": {
      title: "Dashboard",
      description: "Employment outcome overview",
    },
    "/my-training": {
      title: "My Training",
      description: "Track your training progress",
    },
    "/my-employment": {
      title: "My Employment",
      description: "Track your employment outcomes",
    },
    "/career-journey": {
      title: "Career Journey",
      description: "Track your career progress",
    },
    "/candidates": {
      title: "Candidates",
      description: "Monitor candidate outcomes",
    },
    "/training-centres": {
      title: "Training Centres",
      description: "Monitor training centre performance",
    },
    "/analytics": {
      title: "Analytics",
      description: "Analyze employment outcomes",
    },
    "/risk-detection": {
      title: "Risk Detection",
      description: "Identify candidates requiring attention",
    },
    "/ai-insights": {
      title: "AI Insights",
      description: "AI-powered training insights",
    },
    "/recommendations": {
      title: "Recommendations",
      description: "Recommended actions from outcome data",
    },
    "/programs": {
      title: "Programs",
      description: "Monitor skilling programs",
    },
    "/employment-trends": {
      title: "Employment Trends",
      description: "Monitor workforce outcomes",
    },
    "/policy-insights": {
      title: "Policy Insights",
      description: "AI-powered policy recommendations",
    },
  };

  const currentPage =
    pageTitles[location.pathname] || {
      title: "SkillImpact AI",
      description: "Employment Outcome Intelligence",
    };

  const handleLogout = () => {
    localStorage.removeItem("skillimpactUser");
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      
      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Mobile menu */}
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            {currentPage.title}
          </h1>

          <p className="hidden text-xs text-slate-400 sm:block">
            {currentPage.description}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Notification */}
        <button className="relative rounded-xl p-2.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        {/* Profile */}
        <div className="relative">

          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-xl p-1.5 pr-2 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-700">
              {initials}
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-slate-700">
                {name}
              </p>

              <p className="text-xs text-slate-400">
                {roleLabel}
              </p>
            </div>

            <span
              className={`hidden text-xs text-slate-400 transition sm:block ${
                profileOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 top-14 z-50 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">

              {/* User info */}
              <div className="border-b border-slate-100 px-3 py-3">
                <p className="text-sm font-semibold text-slate-900">
                  {name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {roleLabel}
                </p>
              </div>

              {/* Profile */}
              <button
                className="mt-2 w-full rounded-xl px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50"
              >
                Profile
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}