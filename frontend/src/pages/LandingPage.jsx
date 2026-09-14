
import React from "react";
import { Link } from "react-router-dom";

const ArrowIcon = () => (
    <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    </svg>
);

const CheckIcon = () => (
    <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="m5 12 4 4L19 6" />
    </svg>
);

const Logo = () => (
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

        <span className="text-xl font-semibold tracking-tight text-slate-900">
            SkillImpact
            <span className="text-blue-600"> AI</span>
        </span>
    </div>
);

const StatCard = ({ value, label, description }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-2xl font-bold tracking-tight text-slate-900">
            {value}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-700">
            {label}
        </p>

        <p className="mt-1 text-xs text-slate-400">
            {description}
        </p>
    </div>
);

const Step = ({ number, title, description }) => (
    <div className="relative">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600">
            {number}
        </div>

        <h3 className="text-lg font-semibold text-slate-900">
            {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
        </p>
    </div>
);

const AudienceCard = ({ number, title, description, points }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50">
        <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {number}
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <ArrowIcon />
            </div>
        </div>

        <h3 className="mt-7 text-xl font-semibold text-slate-900">
            {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
            {description}
        </p>

        <div className="mt-6 space-y-3">
            {points.map((point) => (
                <div
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-600"
                >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckIcon />
                    </span>

                    {point}
                </div>
            ))}
        </div>
    </div>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            {/* =====================================================
                NAVBAR
            ====================================================== */}
            <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/90 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            href="#platform"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            Platform
                        </a>

                        <a
                            href="#how-it-works"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            How it works
                        </a>

                        <a
                            href="#impact"
                            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
                        >
                            Impact
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="hidden rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-900 sm:block"
                        >
                            Sign in
                        </Link>

                        <Link
                            to="/register"
                            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </header>


            {/* =====================================================
                HERO
            ====================================================== */}
            <main>

                <section className="relative overflow-hidden border-b border-slate-200">

                    {/* Background decorations */}
                    <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

                    <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">

                        {/* Hero text */}
                        <div className="flex flex-col justify-center">

                            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Employment Outcome Intelligence
                            </div>

                            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                                From training data to
                                <span className="block text-blue-600">
                                    employment intelligence.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                                SkillImpact AI connects skilling data with
                                real-world employment outcomes to help
                                organisations understand what happens
                                after training.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30"
                                >
                                    Explore the platform
                                    <ArrowIcon />
                                </Link>

                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                                >
                                    See how it works
                                </a>

                            </div>

                            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Outcome tracking
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                    AI-powered insights
                                </span>

                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                                    Actionable recommendations
                                </span>
                            </div>
                        </div>


                        {/* Hero dashboard visual */}
                        <div className="relative flex items-center">

                            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-5">

                                {/* Fake browser header */}
                                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div className="flex gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                                    </div>

                                    <span className="text-[10px] font-medium text-slate-300">
                                        SKILLIMPACT AI
                                    </span>
                                </div>


                                {/* Dashboard heading */}
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                                            Employment overview
                                        </p>

                                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                                            Skilling Impact
                                        </h3>
                                    </div>

                                    <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                                        +12.4%
                                    </span>
                                </div>


                                {/* Metric cards */}
                                <div className="mt-5 grid grid-cols-2 gap-3">

                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                        <p className="text-[10px] text-slate-400">
                                            Placement rate
                                        </p>

                                        <p className="mt-1 text-2xl font-bold text-slate-900">
                                            62%
                                        </p>

                                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                                            <div className="h-full w-[62%] rounded-full bg-blue-600" />
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                        <p className="text-[10px] text-slate-400">
                                            Retention
                                        </p>

                                        <p className="mt-1 text-2xl font-bold text-slate-900">
                                            41%
                                        </p>

                                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                                            <div className="h-full w-[41%] rounded-full bg-emerald-500" />
                                        </div>
                                    </div>

                                </div>


                                {/* Chart */}
                                <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4">

                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-medium text-slate-500">
                                            Employment outcomes
                                        </p>

                                        <p className="text-[10px] text-slate-400">
                                            2024 — 2026
                                        </p>
                                    </div>

                                    <div className="mt-5 flex h-28 items-end gap-2">

                                        {[35, 48, 42, 61, 55, 72, 67, 82, 76, 91].map(
                                            (height, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-1 items-end"
                                                >
                                                    <div
                                                        className="w-full rounded-t-md bg-blue-100 transition hover:bg-blue-200"
                                                        style={{
                                                            height: `${height}%`,
                                                        }}
                                                    />
                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>


                                {/* AI insight */}
                                <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4">

                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                                            <svg
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M12 3v3" />
                                                <path d="M12 18v3" />
                                                <path d="m4.22 4.22 2.12 2.12" />
                                                <path d="m17.66 17.66 2.12 2.12" />
                                                <path d="M3 12h3" />
                                                <path d="M18 12h3" />
                                                <path d="m4.22 19.78 2.12-2.12" />
                                                <path d="m17.66 6.34 2.12-2.12" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-blue-900">
                                                AI Insight
                                            </p>

                                            <p className="mt-1 text-[11px] leading-5 text-blue-700">
                                                Job relevance is strongly associated
                                                with higher 6-month retention.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Floating score */}
                            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">

                                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                    Impact score
                                </p>

                                <div className="mt-1 flex items-end gap-2">
                                    <span className="text-2xl font-bold text-slate-900">
                                        78
                                    </span>

                                    <span className="mb-1 text-xs font-medium text-emerald-600">
                                        Good
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    PROBLEM
                ====================================================== */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                The problem
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                Training is measured.
                                <br />
                                Impact often isn't.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-slate-500">
                                Training centres collect information about
                                courses and candidates, but what happens after
                                training can become fragmented across systems
                                and organisations.
                            </p>
                        </div>


                        <div className="mt-12 grid gap-5 md:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <div className="text-2xl font-bold text-slate-300">
                                    01
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Fragmented data
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Candidate, training and employment records
                                    often live in different places.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <div className="text-2xl font-bold text-slate-300">
                                    02
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Limited follow-up
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Getting a job is only one part of measuring
                                    whether training created lasting impact.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <div className="text-2xl font-bold text-slate-300">
                                    03
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Hard to act on insights
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Decision-makers need to understand not just
                                    what happened, but why and what to do next.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    PLATFORM
                ====================================================== */}
                <section
                    id="platform"
                    className="border-b border-slate-200 bg-slate-50"
                >
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                    One connected platform
                                </p>

                                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                    Connect the full
                                    <span className="text-blue-600">
                                        {" "}employment story.
                                    </span>
                                </h2>

                                <p className="mt-5 text-base leading-7 text-slate-500">
                                    SkillImpact AI brings training, candidate
                                    outcomes and employment signals together
                                    so stakeholders can see the bigger picture.
                                </p>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Track candidate outcomes",
                                        "Measure job relevance and retention",
                                        "Identify early warning signals",
                                        "Generate actionable recommendations",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                                <CheckIcon />
                                            </div>

                                            <span className="text-sm font-medium text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>
                            </div>


                            {/* Platform visual */}
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <div className="grid gap-4 sm:grid-cols-2">

                                    <StatCard
                                        value="62%"
                                        label="Placement Rate"
                                        description="Candidates placed after training"
                                    />

                                    <StatCard
                                        value="53%"
                                        label="Job Relevance"
                                        description="Jobs aligned with training"
                                    />

                                    <StatCard
                                        value="41%"
                                        label="Retention"
                                        description="Candidates retained over time"
                                    />

                                    <StatCard
                                        value="+18%"
                                        label="Income Growth"
                                        description="Average improvement after placement"
                                    />

                                </div>

                                <div className="mt-4 rounded-2xl bg-slate-950 p-6">

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                                Skilling Impact Score
                                            </p>

                                            <p className="mt-2 text-4xl font-bold text-white">
                                                78
                                            </p>
                                        </div>

                                        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-500/30">
                                            <span className="text-sm font-semibold text-blue-400">
                                                GOOD
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>Overall impact</span>
                                            <span>78 / 100</span>
                                        </div>

                                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                                            <div className="h-full w-[78%] rounded-full bg-blue-500" />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    HOW IT WORKS
                ====================================================== */}
                <section
                    id="how-it-works"
                    className="border-b border-slate-200 bg-white"
                >
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                        <div className="mx-auto max-w-2xl text-center">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                How it works
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                From raw data to
                                <span className="text-blue-600">
                                    {" "}better decisions.
                                </span>
                            </h2>

                            <p className="mt-5 text-base leading-7 text-slate-500">
                                A simple flow that turns scattered outcome
                                data into meaningful intelligence.
                            </p>

                        </div>


                        <div className="mt-16 grid gap-10 md:grid-cols-4">

                            <Step
                                number="01"
                                title="Collect"
                                description="Bring together candidate, training and employment outcome data."
                            />

                            <Step
                                number="02"
                                title="Connect"
                                description="Link training experiences with real-world employment outcomes."
                            />

                            <Step
                                number="03"
                                title="Analyze"
                                description="Use analytics and AI to identify patterns, risks and opportunities."
                            />

                            <Step
                                number="04"
                                title="Act"
                                description="Give stakeholders clear recommendations they can use to improve outcomes."
                            />

                        </div>


                        {/* Flow visual */}
                        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-8">

                            <div className="grid items-center gap-4 md:grid-cols-7">

                                {[
                                    ["Training", "01"],
                                    ["Outcomes", "02"],
                                    ["Analytics", "03"],
                                    ["AI Insights", "04"],
                                ].map(([title, number], index) => (
                                    <React.Fragment key={title}>

                                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center md:col-span-1">
                                            <p className="text-[10px] font-medium text-slate-500">
                                                {number}
                                            </p>

                                            <p className="mt-2 text-sm font-semibold text-white">
                                                {title}
                                            </p>
                                        </div>

                                        {index < 3 && (
                                            <div className="hidden items-center justify-center md:flex">
                                                <ArrowIcon />
                                            </div>
                                        )}

                                    </React.Fragment>
                                ))}

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    AI INTELLIGENCE
                ====================================================== */}
                <section
                    id="impact"
                    className="overflow-hidden bg-slate-950"
                >
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

                        <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">

                            <div>

                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                                    AI-powered intelligence
                                </div>

                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Don't just see the numbers.
                                    <span className="block text-blue-400">
                                        Understand them.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                                    SkillImpact AI helps identify patterns
                                    behind employment outcomes and turns
                                    those patterns into understandable,
                                    actionable insights.
                                </p>

                                <div className="mt-8 space-y-4">

                                    {[
                                        [
                                            "Early Warning",
                                            "Identify candidates or outcomes that may need attention.",
                                        ],
                                        [
                                            "AI Explanations",
                                            "Understand the factors influencing employment outcomes.",
                                        ],
                                        [
                                            "Recommendations",
                                            "Get practical suggestions for improving skilling impact.",
                                        ],
                                    ].map(([title, description]) => (
                                        <div
                                            key={title}
                                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                        >
                                            <h3 className="text-sm font-semibold text-white">
                                                {title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                {description}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                            </div>


                            {/* AI visual */}
                            <div className="relative">

                                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">

                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                                                AI Analysis
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-white">
                                                Retention risk detected
                                            </p>
                                        </div>

                                        <span className="rounded-lg bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-400">
                                            MEDIUM
                                        </span>

                                    </div>


                                    <div className="mt-5 space-y-4">

                                        <div className="rounded-2xl bg-white/[0.04] p-5">

                                            <p className="text-xs text-slate-500">
                                                Observed pattern
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                Candidates with low job relevance
                                                show lower six-month retention.
                                            </p>

                                        </div>


                                        <div className="rounded-2xl bg-white/[0.04] p-5">

                                            <p className="text-xs text-slate-500">
                                                Suggested action
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                Review employer matching and
                                                post-placement support for
                                                affected candidates.
                                            </p>

                                        </div>


                                        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">

                                            <div className="flex items-center gap-3">

                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                                                    <span className="text-xs font-bold text-white">
                                                        AI
                                                    </span>
                                                </div>

                                                <div>
                                                    <p className="text-xs font-semibold text-blue-300">
                                                        Confidence
                                                    </p>

                                                    <p className="text-sm font-semibold text-white">
                                                        87%
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    AUDIENCE
                ====================================================== */}
                <section className="bg-slate-50">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

                        <div className="max-w-2xl">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                                Built for every stakeholder
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                One platform.
                                <span className="text-blue-600">
                                    {" "}Different perspectives.
                                </span>
                            </h2>

                            <p className="mt-5 text-base leading-7 text-slate-500">
                                Everyone involved in the skilling ecosystem
                                gets the information they need to make
                                better decisions.
                            </p>

                        </div>


                        <div className="mt-12 grid gap-5 md:grid-cols-3">

                            <AudienceCard
                                number="01"
                                title="Candidates"
                                description="Understand your progress and employment outcomes."
                                points={[
                                    "Track career progress",
                                    "View employment outcomes",
                                    "Understand skill impact",
                                ]}
                            />

                            <AudienceCard
                                number="02"
                                title="Training Centres"
                                description="Measure whether training is translating into meaningful employment."
                                points={[
                                    "Track placement outcomes",
                                    "Measure retention",
                                    "Identify improvement areas",
                                ]}
                            />

                            <AudienceCard
                                number="03"
                                title="Government & Policymakers"
                                description="Use outcome intelligence to evaluate and improve skilling programmes."
                                points={[
                                    "Compare programme outcomes",
                                    "Identify risk patterns",
                                    "Make data-driven decisions",
                                ]}
                            />

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="border-t border-slate-200 bg-white">

                    <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-28">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
                            <svg
                                className="h-6 w-6 text-white"
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

                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                            Make impact measurable
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            Turn skilling data into
                            <span className="text-blue-600">
                                {" "}real impact.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
                            Connect training, employment and outcomes to
                            understand what works — and where improvement
                            is needed.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                            >
                                Get started
                                <ArrowIcon />
                            </Link>

                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                Sign in
                            </Link>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ====================================================== */}
            <footer className="border-t border-slate-200 bg-slate-50">

                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

                    <Logo />

                    <p className="text-xs text-slate-400">
                        SkillImpact AI · Employment Outcome Intelligence Platform
                    </p>

                </div>

            </footer>

        </div>
    );
}

