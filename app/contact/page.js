export const metadata = {
    title: "Contact | Tripzy",
    description: "Contact Tripzy for trip questions, partnerships, or campus rep opportunities.",
  };
  
  export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Contact
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
              Let’s talk
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Questions about trips, partnerships, or campus rep opportunities?
              Reach out and we’ll make it easy to connect.
            </p>
          </div>
        </section>
  
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">Contact Details</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span> hello@tripzy.com
              </p>
              <p>
                <span className="font-semibold text-white">Partnerships:</span> partners@tripzy.com
              </p>
              <p>
                <span className="font-semibold text-white">Campus Reps:</span> reps@tripzy.com
              </p>
            </div>
          </div>
  
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Send a message</h2>
  
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
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
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us what you need"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
              </div>
  
              <button
                type="submit"
                className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }