const reasons = [
    {
      title: "More fun",
      text: "Trips designed around memories, group energy, and student vibes.",
    },
    {
      title: "Less confusion",
      text: "A cleaner experience than the usual overloaded travel pages.",
    },
    {
      title: "Better for groups",
      text: "Built for friend circles, campus leaders, and student organizations.",
    },
  ];
  
  export default function WhyStudentsLove() {
    return (
      <section className="bg-[var(--brand-cream)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
              Why Students Love College Crw
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--brand-navy)] md:text-5xl">
              Built for the way college trips actually happen
            </h2>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[var(--brand-border)]"
              >
                <h3 className="text-2xl font-extrabold text-[var(--brand-navy)]">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--brand-teal)]">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }