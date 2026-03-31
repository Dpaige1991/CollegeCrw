import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Maya",
    school: "University Student",
    quote:
      "This feels way cleaner than the usual group trip websites. It actually made me want to book.",
  },
  {
    name: "Jordan",
    school: "Crew Captains",
    quote:
      "It made it easier to share trips with other students and build interest fast.",
  },
  {
    name: "Avery",
    school: "Student Traveler",
    quote:
      "The design feels exciting and premium. It already feels more modern than most student travel sites.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Student Feedback"
          title="Built for the way students actually travel"
          description="Your site should feel trustworthy, social, and worth sharing."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}