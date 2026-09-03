import RecommendationCard from "../components/recommendations/RecommendationCard";

const recommendations = [
    {
        title: "Improve job matching for Web Development",
        description:
            "Several candidates have completed training but are working in roles with low alignment to their trained skills.",
        action:
            "Connect candidates with relevant web development openings and provide targeted placement support.",
        priority: "High",
        link: "/candidates",
        linkText: "View candidates",
    },
    {
        title: "Strengthen post-placement follow-up",
        description:
            "Retention is lower than the employment rate, which suggests some candidates leave their jobs after placement.",
        action:
            "Introduce follow-ups at 3 and 6 months to identify problems early and provide support.",
        priority: "Medium",
        link: "/analytics",
        linkText: "View retention analytics",
    },
    {
        title: "Review Digital Marketing curriculum",
        description:
            "Digital Marketing has comparatively lower employment, relevance and retention outcomes.",
        action:
            "Review the curriculum against current industry requirements and update practical training modules.",
        priority: "Medium",
        link: "/training-centres",
        linkText: "View training centres",
    },
    {
        title: "Support candidates still seeking jobs",
        description:
            "Candidates who remain unemployed after completing training may need additional placement assistance.",
        action:
            "Provide interview preparation, career counselling and additional job-matching support.",
        priority: "High",
        link: "/risk-detection",
        linkText: "View high-risk candidates",
    },
];

export default function Recommendations() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    AI Recommendations
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Suggested actions based on employment outcomes and detected risks.
                </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                    <div className="text-xl">🤖</div>

                    <div>
                        <h2 className="font-semibold text-blue-900">
                            AI-generated insights
                        </h2>

                        <p className="text-sm text-blue-800 mt-1 leading-6">
                            The system analyzes employment, job relevance and retention
                            patterns to suggest areas that may require intervention.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {recommendations.map((recommendation, index) => (
                    <RecommendationCard
                        key={index}
                        title={recommendation.title}
                        description={recommendation.description}
                        action={recommendation.action}
                        priority={recommendation.priority}
                        link={recommendation.link}
                        linkText={recommendation.linkText}
                    />
                ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h2 className="text-lg font-semibold">
                    From insight to action
                </h2>

                <p className="text-sm text-slate-300 mt-1">
                    SkillImpact AI helps decision-makers understand what is happening
                    and what they can do about it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="font-medium">1. Detect</p>
                        <p className="text-xs text-slate-400 mt-2">
                            Identify poor employment, relevance or retention outcomes.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="font-medium">2. Explain</p>
                        <p className="text-xs text-slate-400 mt-2">
                            Understand the possible reasons behind the problem.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="font-medium">3. Act</p>
                        <p className="text-xs text-slate-400 mt-2">
                            Recommend practical interventions to improve outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}