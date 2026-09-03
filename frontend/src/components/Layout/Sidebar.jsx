import { NavLink } from "react-router-dom";

const navigationByRole = {
    candidate: {
        main: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: "▣",
            },
            {
                name: "My Training",
                path: "/my-training",
                icon: "🎓",
            },
            {
                name: "My Employment",
                path: "/my-employment",
                icon: "💼",
            },
            {
                name: "My Career Journey",
                path: "/career-journey",
                icon: "📈",
            },
        ],

        intelligence: [
            {
                name: "AI Recommendations",
                path: "/recommendations",
                icon: "✓",
            },
        ],
    },

    training_centre: {
        main: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: "▣",
            },
            {
                name: "Candidates",
                path: "/candidates",
                icon: "♙",
            },
            {
                name: "Training Centres",
                path: "/training-centres",
                icon: "▦",
            },
            {
                name: "Analytics",
                path: "/analytics",
                icon: "▥",
            },
        ],

        intelligence: [
            {
                name: "Risk Detection",
                path: "/risk-detection",
                icon: "⚠",
            },
            {
                name: "AI Insights",
                path: "/ai-insights",
                icon: "✦",
            },
            {
                name: "Recommendations",
                path: "/recommendations",
                icon: "✓",
            },
        ],
    },

    policymaker: {
        main: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: "▣",
            },
            {
                name: "Programs",
                path: "/programs",
                icon: "▤",
            },
            {
                name: "Training Centres",
                path: "/training-centres",
                icon: "▦",
            },
            {
                name: "Analytics",
                path: "/analytics",
                icon: "▥",
            },
            {
                name: "Employment Trends",
                path: "/employment-trends",
                icon: "↗",
            },
        ],

        intelligence: [
            {
                name: "Risk Detection",
                path: "/risk-detection",
                icon: "⚠",
            },
            {
                name: "Policy Insights",
                path: "/policy-insights",
                icon: "◆",
            },
            {
                name: "Recommendations",
                path: "/recommendations",
                icon: "✓",
            },
        ],
    },
};

export default function Sidebar({ isOpen, onClose }) {
    // Get currently logged-in user
    const user = JSON.parse(
        localStorage.getItem("skillimpactUser")
    );

    // Default to candidate if no role exists
    const role = user?.role || "candidate";

    // Get navigation for this role
    const navigation = navigationByRole[role];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
                />
            )}

            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="flex h-20 items-center border-b border-slate-100 px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                            <svg
                                className="h-5 w-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 3v18" />
                                <path d="M5 9l7-6 7 6" />
                                <path d="M5 15l7 6 7-6" />
                            </svg>
                        </div>

                        <div>
                            <p className="text-lg font-bold tracking-tight text-slate-900">
                                SkillImpact<span className="text-blue-600"> AI</span>
                            </p>

                            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                Outcome Intelligence
                            </p>
                        </div>
                    </div>

                    {/* Mobile close */}
                    <button
                        onClick={onClose}
                        className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                    >
                        ✕
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                    {/* Main */}
                    <div>
                        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                            Main
                        </p>

                        <div className="space-y-1">
                            {navigation.main.map((item) => (
                                <NavigationItem
                                    key={item.path}
                                    item={item}
                                    onClose={onClose}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Intelligence */}
                    {navigation.intelligence.length > 0 && (
                        <div className="mt-8">
                            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                                Intelligence
                            </p>

                            <div className="space-y-1">
                                {navigation.intelligence.map((item) => (
                                    <NavigationItem
                                        key={item.path}
                                        item={item}
                                        onClose={onClose}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </nav>

                {/* User / Bottom */}
                <div className="border-t border-slate-100 p-4">

                    {/* Settings */}
                    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm">
                            ⚙
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-700">
                                Settings
                            </p>

                            <p className="text-xs text-slate-400">
                                Platform settings
                            </p>
                        </div>
                    </button>
                </div>
            </aside>
        </>
    );
}

function NavigationItem({ item, onClose }) {
    return (
        <NavLink
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm transition ${isActive
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                    >
                        {item.icon}
                    </span>

                    <span>{item.name}</span>
                </>
            )}
        </NavLink>
    );
}