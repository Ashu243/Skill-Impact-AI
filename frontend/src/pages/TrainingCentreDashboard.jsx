import StatCard from "../components/dashboard/StatCard";
import ImpactScore from "../components/dashboard/ImpactScore";
import TrendChart from "../components/dashboard/TrendChart";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import PerformanceCard from "../components/dashboard/PerformanceCard";

import {
  dashboardStats,
  impactScore,
  outcomeTrend,
  aiInsights,
  topCourses,
} from "../data/mockData";

export default function TrainingCentreDashboard() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Overview
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Good morning, Administrator 👋
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Here's what's happening across your skilling programs.
        </p>
      </div>


      {/* ================= STATS ================= */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>


      {/* ================= CHART + IMPACT ================= */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <TrendChart data={outcomeTrend} />

        <ImpactScore
          score={impactScore.score}
          label={impactScore.label}
          description={impactScore.description}
        />
      </div>


      {/* ================= AI + COURSES ================= */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        
        {/* AI Insights */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
                ✦
              </span>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  AI Insights
                </h3>

                <p className="text-xs text-slate-400">
                  Important patterns detected
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {aiInsights.map((insight) => (
              <AIInsightCard
                key={insight.title}
                {...insight}
              />
            ))}
          </div>
        </div>


        {/* Courses */}
        <PerformanceCard courses={topCourses} />

      </div>


      {/* ================= BOTTOM CTA ================= */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              SkillImpact AI
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Go beyond placement numbers.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Explore candidate outcomes, identify risks, and understand
              the real impact of your skilling programs.
            </p>
          </div>

          <button className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Explore outcomes →
          </button>

        </div>
      </div>
    </div>
  );
}