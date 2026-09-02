export default function Header({ onMenuClick }) {
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
            Dashboard
          </h1>

          <p className="hidden text-xs text-slate-400 sm:block">
            Employment outcome overview
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
        <button className="flex items-center gap-3 rounded-xl p-1.5 pr-2 transition hover:bg-slate-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-700">
            AD
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-700">
              Administrator
            </p>

            <p className="text-xs text-slate-400">
              Platform Admin
            </p>
          </div>

          <span className="hidden text-xs text-slate-400 sm:block">
            ▾
          </span>
        </button>
      </div>
    </header>
  );
}