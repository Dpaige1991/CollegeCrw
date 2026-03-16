import { notFound } from "next/navigation";
import BookingInterestForm from "@/components/BookingInterestForm";
import { getAllTrips, getTripBySlug } from "@/data/trips";

export async function generateStaticParams() {
  const trips = getAllTrips();

  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    return {
      title: "Trip Not Found | College Crw",
    };
  }

  return {
    title: `${trip.name} | College Crw`,
    description: trip.shortDescription,
  };
}

export default function TripDetailsPage({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(9,43,59,0.45), rgba(9,43,59,0.72)), url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-white md:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">
            {trip.category}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl">
            {trip.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--brand-cream)]">
            {trip.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--brand-cream)]">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              {trip.location}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              {trip.date}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              {trip.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.35fr_0.85fr]">
        <div>
          <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold">Trip Overview</h2>
            <p className="mt-4 leading-7 text-[var(--brand-teal)]">{trip.description}</p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold">Highlights</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {trip.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[var(--brand-cream)] px-5 py-4 font-semibold text-[var(--brand-navy)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold">Sample Itinerary</h2>
            <div className="mt-6 space-y-4">
              {trip.itinerary.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[var(--brand-border)] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-orange)] font-black text-white">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-[var(--brand-teal)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-24 rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-lg">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-orange)]">
              Starting at
            </p>
            <p className="mt-2 text-5xl font-black text-[var(--brand-navy)]">
              ${trip.price}
            </p>

            <div className="mt-6 space-y-3 text-sm text-[var(--brand-teal)]">
              <p>
                <span className="font-bold text-[var(--brand-navy)]">Location:</span> {trip.location}
              </p>
              <p>
                <span className="font-bold text-[var(--brand-navy)]">Dates:</span> {trip.date}
              </p>
              <p>
                <span className="font-bold text-[var(--brand-navy)]">Duration:</span> {trip.duration}
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[var(--brand-cream)] p-5">
              <h3 className="font-extrabold text-[var(--brand-navy)]">What’s Included</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--brand-teal)]">
                {trip.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-extrabold text-[var(--brand-navy)]">
                Reserve Interest
              </h3>
              <BookingInterestForm tripName={trip.name} />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}