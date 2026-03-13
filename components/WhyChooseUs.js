import SectionHeader from "@/components/SectionHeader";

const features = [
  {
    title: "Student-first experience",
    text: "Trips built around college schedules, budgets, and group travel habits.",
  },
  {
    title: "Cleaner discovery",
    text: "A more modern way to browse destinations, compare options, and plan faster.",
  },
  {
    title: "Social by design",
    text: "Perfect for friend groups, student leaders, organizations, and campus reps.",
  },
  {
    title: "Premium feel",
    text: "A travel platform that feels exciting, polished, and easier to trust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A student travel platform that feels more modern"
          description="We are not trying to look like a cluttered promo site. The goal is to make college trip planning feel clean, premium, social, and easy to explore."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}