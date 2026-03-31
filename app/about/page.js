export const metadata = {
    title: "About | Tripzy",
    description: "Learn about Tripzy and how we help college students plan better trips.",
  };
  
  export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-br from-orange-50 via-white to-cyan-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              About Us
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
              A better way for college students to discover and plan trips
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Tripzy is built for students who want group travel to feel easier,
              cleaner, and more exciting than the usual trip websites.
            </p>
          </div>
        </section>
  
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We want to make student travel feel modern, transparent, and social.
              Instead of cluttered trip pages and confusing offers, we focus on a
              better booking experience, clearer trip discovery, and group-friendly planning.
            </p>
          </div>
  
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold">What Makes Us Different</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Cleaner and more modern design</li>
              <li>• Better trip discovery for students</li>
              <li>• Group-friendly travel planning</li>
              <li>• Premium feel without being complicated</li>
              <li>• Built around the college lifestyle</li>
            </ul>
          </div>
        </section>
  
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-50 p-8">
              <h3 className="text-2xl font-bold">Students First</h3>
              <p className="mt-3 text-slate-600">
                We design trips around what college students actually need:
                affordability, group flexibility, and memorable experiences.
              </p>
            </div>
  
            <div className="rounded-[2rem] bg-slate-50 p-8">
              <h3 className="text-2xl font-bold">Curated Trips</h3>
              <p className="mt-3 text-slate-600">
                We focus on destinations and experiences that feel exciting,
                social, and worth sharing with your crew.
              </p>
            </div>
  
            <div className="rounded-[2rem] bg-slate-50 p-8">
              <h3 className="text-2xl font-bold">Group Experience</h3>
              <p className="mt-3 text-slate-600">
                From Crew Captains to friend groups, our platform is built for
                planning together instead of figuring everything out alone.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }