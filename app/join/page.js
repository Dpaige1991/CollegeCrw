export const metadata = {
    title: "Join | Tripzy",
    description: "Start planning a college trip with Tripzy.",
  };
  
  export default function JoinPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Plan a Trip
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
              Start planning your next student trip
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Tell us a little about your group and the kind of trip you want.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Trip Planning Form</h2>
  
            <form className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  School
                </label>
                <input
                  type="text"
                  placeholder="Your college or university"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Group Size
                </label>
                <input
                  type="number"
                  placeholder="How many people?"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Destination Interest
                </label>
                <input
                  type="text"
                  placeholder="Cancún, Miami, Puerto Rico, etc."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Tell us about your trip
                </label>
                <textarea
                  rows="6"
                  placeholder="What kind of experience are you looking for?"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }