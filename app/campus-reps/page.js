export const metadata = {
    title: "Campus Reps | Tripzy",
    description: "Lead trips, grow your network, and unlock rewards as a Tripzy campus rep.",
  };
  
  const perks = [
    "Earn rewards for bringing travelers",
    "Grow your leadership presence on campus",
    "Get access to exclusive trip perks",
    "Help your friends discover better group travel",
    "Build a community around memorable experiences",
  ];
  
  export default function CampusRepsPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Campus Reps
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
              Lead trips, build community, and earn rewards
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Our campus rep program is for students who love bringing people together
              and want to help their friends discover unforgettable trips.
            </p>
          </div>
        </section>
  
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Why become a rep?</h2>
            <div className="mt-6 space-y-4">
              {perks.map((perk) => (
                <div key={perk} className="rounded-2xl bg-slate-50 px-5 py-4 text-slate-700">
                  {perk}
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">What reps do</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>• Share trips with students on campus</p>
              <p>• Help organize interest in group travel</p>
              <p>• Promote upcoming destinations and experiences</p>
              <p>• Act as a trusted student voice for your community</p>
            </div>
  
            <button className="mt-8 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">
              Apply to Become a Rep
            </button>
          </div>
        </section>
      </main>
    );
  }