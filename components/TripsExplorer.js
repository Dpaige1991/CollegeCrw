"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import TripCard from "@/components/TripCard";

export default function TripsExplorer({ trips }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(trips.map((trip) => trip.category))];
  }, [trips]);

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesCategory =
        category === "All" ? true : trip.category === category;

      const query = search.toLowerCase().trim();
      const matchesSearch =
        query.length === 0 ||
        trip.name.toLowerCase().includes(query) ||
        trip.location.toLowerCase().includes(query) ||
        trip.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [trips, search, category]);

  return (
    <div>
      <div className="mb-10 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Search trips
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by destination or vibe"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Available Trips</h2>
        <p className="text-slate-500">
          {filteredTrips.length} trip{filteredTrips.length === 1 ? "" : "s"} found
        </p>
      </div>

      {filteredTrips.length === 0 ? (
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900">No trips found</h3>
          <p className="mt-3 text-slate-600">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTrips.map((trip) => (
            <motion.div key={trip.id} layout>
              <TripCard trip={trip} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}