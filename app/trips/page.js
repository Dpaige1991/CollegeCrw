import TripsExplorer from "@/components/TripsExplorer";
import { getAllTrips } from "@/data/trips";

export const metadata = {
  title: "Trips | College Crw",
  description: "Browse curated college trips and student group getaways.",
};

export default function TripsPage() {
  const trips = getAllTrips();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-orange-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Trips
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
            Explore curated trips built for college students
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Browse destinations, compare trip styles, and find the right getaway
            for your crew.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <TripsExplorer trips={trips} />
      </section>
    </main>
  );
}