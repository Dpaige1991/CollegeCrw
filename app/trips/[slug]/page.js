import { notFound } from "next/navigation";
import { getAllTrips, getTripBySlug } from "@/data/trips";

export async function generateMetadata({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    return {
      title: "Trip Not Found | Tripzy",
    };
  }

  return {
    title: `${trip.name} | Tripzy`,
    description: trip.shortDescription,
  };
}

export default function TripDetailsPage({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.45), rgba(15,23,42,0.65)), url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-white md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            {trip.category}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl">
            {trip.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            {trip.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
            <span className="rounded-full border border-white/20 px-4 py-2">
              {trip.location}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2">
              {trip.date}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2">
              {trip.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Trip Overview</h2>
            <p className="mt-4 text-slate-600">{trip.description}</p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Highlights</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {trip.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Sample Itinerary</h2>
            <div className="mt-6 space-y-4">
              {trip.itinerary.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-100 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-24 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-sm font-medium text-slate-500">Starting at</p>
            <p className="mt-2 text-5xl font-extrabold">${trip.price}</p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">Location:</span> {trip.location}</p>
              <p><span className="font-semibold text-slate-900">Dates:</span> {trip.date}</p>
              <p><span className="font-semibold text-slate-900">Duration:</span> {trip.duration}</p>
            </div>

            <button className="mt-8 w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">
              Reserve Your Spot
            </button>

            <button className="mt-4 w-full rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
              Plan With Friends
            </button>

            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold">What’s Included</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {trip.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}