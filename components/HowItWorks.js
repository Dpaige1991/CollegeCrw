import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover your vibe",
    text: "Browse trips by destination, style, budget, or group type.",
  },
  {
    number: "02",
    title: "Plan with your crew",
    text: "Invite friends, classmates, or your student organization to join in.",
  },
  {
    number: "03",
    title: "Book with confidence",
    text: "Reserve your trip through a cleaner, more student-friendly flow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="How It Works"
          title="Planning your next trip should feel simple"
          description="A modern trip flow should help students move from browsing to booking without confusion."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-bold tracking-[0.15em] text-orange-600">
                {step.number}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}