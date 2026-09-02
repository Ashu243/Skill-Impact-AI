export default function CandidateFilters({
  search,
  setSearch,
  status,
  setStatus,
  course,
  setCourse,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row">
      
      {/* Search */}
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        <input
          type="text"
          placeholder="Search candidates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500 focus:bg-white"
      >
        <option value="All">All statuses</option>
        <option value="Employed">Employed</option>
        <option value="Seeking Job">Seeking Job</option>
        <option value="Job Mismatch">Job Mismatch</option>
      </select>

      {/* Course */}
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500 focus:bg-white"
      >
        <option value="All">All courses</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Cloud Computing">Cloud Computing</option>
      </select>
    </div>
  );
}