// pages/TrainingCentres.jsx

import { useState } from "react";
import { trainingCentres } from "../data/mockData";
import TrainingCentreCard from "../components/training-centres/TrainingCentreCard";

export default function TrainingCentres() {
  const [search, setSearch] = useState("");

  const filteredCentres = trainingCentres.filter((centre) => {
    const query = search.toLowerCase();

    return (
      centre.name.toLowerCase().includes(query) ||
      centre.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Training Centres
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Monitor training centre performance and employment outcomes.
          </p>
        </div>

        <div className="text-sm text-slate-500">
          {trainingCentres.length} centres tracked
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4">
        <div className="relative max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search centres or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200
                       text-sm text-slate-700 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-blue-100
                       focus:border-blue-400"
          />
        </div>
      </div>

      {/* Centre Cards */}
      {filteredCentres.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredCentres.map((centre) => (
            <TrainingCentreCard
              key={centre.id}
              centre={centre}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
          <p className="text-slate-500">
            No training centres found.
          </p>
        </div>
      )}

    </div>
  );
}