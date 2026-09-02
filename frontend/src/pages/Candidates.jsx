import { useMemo, useState } from "react";
import CandidateFilters from "../components/candidates/CandidateFilters";
import CandidateTable from "../components/candidates/CandidateTable";
import { candidates } from "../data/mockData";

export default function Candidates() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [course, setCourse] = useState("All");

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const matchesSearch =
        candidate.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        candidate.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        candidate.status === status;

      const matchesCourse =
        course === "All" ||
        candidate.course === course;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCourse
      );
    });
  }, [search, status, course]);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Candidates
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Candidate Outcomes
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Track employment outcomes and measure real post-training impact.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 px-4 py-2.5">
            <p className="text-xs text-blue-500">
              Total candidates
            </p>

            <p className="mt-0.5 text-lg font-bold text-blue-700">
              {candidates.length}
            </p>
          </div>
        </div>
      </div>


      {/* Filters */}
      <CandidateFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        course={course}
        setCourse={setCourse}
      />


      {/* Results information */}
      <div className="my-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredCandidates.length}
          </span>{" "}
          candidates
        </p>

        <button
          onClick={() => {
            setSearch("");
            setStatus("All");
            setCourse("All");
          }}
          className="text-xs font-medium text-slate-400 hover:text-blue-600"
        >
          Clear filters
        </button>
      </div>


      {/* Table */}
      <CandidateTable candidates={filteredCandidates} />
    </div>
  );
}