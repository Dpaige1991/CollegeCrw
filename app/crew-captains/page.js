import Link from "next/link";

export const metadata = {
  title: "Crew Captains | College Crw",
  description:
    "Lead trips, build community, and earn rewards as a College Crw Crew Captain.",
};

const perks = [
  "Earn rewards for bringing travelers",
  "Grow your leadership presence on campus",
  "Get access to exclusive trip perks",
  "Help your friends discover better group travel",
  "Build your own travel crew community",
];

export default function CrewCaptainsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Crew Captains
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
            Lead your crew, build momentum, and earn rewards
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Our Crew Captain program is for students who love bringing people
            together and helping their friends plan unforgettable trips.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Why become a Crew Captain?</h2>
          <div className="mt-6 space-y-4">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-2xl bg-slate-50 px-5 py-4 text-slate-700"
              >
                {perk}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">What Crew Captains do</h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>• Share trips with students on campus</p>
            <p>• Build excitement around group travel</p>
            <p>• Organize interest from your friends and network</p>
            <p>• Help your crew lock in unforgettable trips</p>
          </div>

          <Link
            href="/join"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
          >
            Apply to Become a Crew Captain
          </Link>
        </div>
      </section>
    </main>
  );
}