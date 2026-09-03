import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("candidate");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            role,
            password
        };
        // console.log(user)
        const existingUsers = JSON.parse(
            localStorage.getItem("skillimpactDemoUsers") || "[]"
        );

        existingUsers.push(user);

        localStorage.setItem(
            "skillimpactDemoUsers",
            JSON.stringify(existingUsers)
        );

        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="flex min-h-screen">

                {/* ================= LEFT SECTION ================= */}
                <section className="relative hidden overflow-hidden bg-slate-950 lg:flex lg:w-[52%]">

                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

                        {/* Logo */}
                        <div>
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

                                <span className="text-xl font-semibold tracking-tight text-white">
                                    SkillImpact<span className="text-blue-400"> AI</span>
                                </span>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="max-w-xl">

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 backdrop-blur">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                Employment Outcome Intelligence
                            </div>

                            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white xl:text-5xl">
                                Turn skilling data into
                                <span className="text-blue-400"> real impact.</span>
                            </h1>

                            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                                Track what happens after training — from employment and job
                                relevance to retention, income growth, and career progression.
                            </p>

                            {/* Impact journey */}
                            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">

                                <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                                    Candidate journey
                                </p>

                                <div className="flex items-center justify-between">

                                    <JourneyItem
                                        icon="01"
                                        title="Training"
                                    />

                                    <Connector />

                                    <JourneyItem
                                        icon="02"
                                        title="Employment"
                                    />

                                    <Connector />

                                    <JourneyItem
                                        icon="03"
                                        title="Impact"
                                        active
                                    />

                                </div>

                            </div>
                        </div>

                        {/* Footer */}
                        <p className="text-sm text-slate-500">
                            Data-driven insights for better skilling outcomes.
                        </p>

                    </div>
                </section>


                {/* ================= RIGHT SECTION ================= */}
                <section className="flex w-full items-center justify-center px-6 py-10 sm:px-10 lg:w-[48%] lg:px-12 xl:px-20">

                    <div className="w-full max-w-md">

                        {/* Mobile logo */}
                        <div className="mb-10 flex items-center gap-3 lg:hidden">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
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

                            <span className="text-xl font-semibold tracking-tight">
                                SkillImpact<span className="text-blue-600"> AI</span>
                            </span>

                        </div>


                        {/* Heading */}
                        <div className="mb-8">

                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Create your account
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Create an account to access your employment outcome dashboard.
                            </p>

                        </div>


                        {/* Register card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                {/* Name */}
                                <div>

                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Full name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />

                                </div>


                                {/* Email */}
                                <div>

                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />

                                </div>


                                {/* Password */}
                                <div>

                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Password
                                    </label>

                                    <div className="relative">

                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-16 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-xs font-medium text-slate-400 hover:text-slate-600"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>

                                    </div>

                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Account Type
                                    </label>

                                    <div className="grid grid-cols-3 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setRole("candidate")}
                                            className={`rounded-xl border p-3 text-sm font-medium transition ${role === "candidate"
                                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            Candidate
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setRole("training_centre")}
                                            className={`rounded-xl border p-3 text-sm font-medium transition ${role === "training_centre"
                                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            Training Centre
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setRole("policymaker")}
                                            className={`rounded-xl border p-3 text-sm font-medium transition ${role === "policymaker"
                                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            Policymaker
                                        </button>
                                    </div>
                                </div>


                                {/* Terms */}
                                <div className="flex items-start gap-2">

                                    <input
                                        id="terms"
                                        type="checkbox"
                                        required
                                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                    />

                                    <label
                                        htmlFor="terms"
                                        className="text-sm leading-5 text-slate-600"
                                    >
                                        I agree to the terms and conditions.
                                    </label>

                                </div>


                                {/* Register */}
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.99]"
                                >
                                    Create account
                                </button>

                            </form>


                            {/* Login link */}
                            <div className="mt-6 border-t border-slate-100 pt-3 text-center">

                                <p className="text-sm text-slate-500">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-blue-600 hover:text-blue-700"
                                    >
                                        Sign in
                                    </Link>
                                </p>

                            </div>

                        </div>


                        {/* Bottom text */}
                        <p className="mt-6 text-center text-xs text-slate-400">
                            SkillImpact AI · Employment Outcome Intelligence Platform
                        </p>

                    </div>

                </section>

            </div>
        </div>
    );
}


/* ================= COMPONENTS ================= */

function JourneyItem({ icon, title, active = false }) {
    return (
        <div className="flex flex-col items-center gap-2">

            <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold ${active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white/10 text-slate-300"
                    }`}
            >
                {icon}
            </div>

            <span
                className={`text-xs ${active
                    ? "font-medium text-white"
                    : "text-slate-500"
                    }`}
            >
                {title}
            </span>

        </div>
    );
}


function Connector() {
    return (
        <div className="mx-2 h-px flex-1 border-t border-dashed border-slate-700" />
    );
}