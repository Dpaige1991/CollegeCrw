import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 px-8 py-16 text-white md:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
            Start Your Next Trip
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Plan a college trip that people will actually remember
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Discover destinations, bring your group together, and build a better student travel experience from the start.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/join"
              className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:scale-[1.02]"
            >
              Plan a Trip
            </Link>

            <Link
              href="/trips"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Browse Trips
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}