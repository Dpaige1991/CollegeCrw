export const metadata = {
    title: "FAQ | Tripzy",
    description: "Frequently asked questions about booking student trips with Tripzy.",
  };
  
  const faqs = [
    {
      question: "Who are these trips for?",
      answer:
        "Our trips are designed for college students, student groups, campus reps, and friend groups looking for curated travel experiences.",
    },
    {
      question: "Can I travel with friends?",
      answer:
        "Yes. The platform is built with group travel in mind, so it works well for friend groups, student organizations, and campus communities.",
    },
    {
      question: "Do you offer payment flexibility?",
      answer:
        "Your site can be designed to support flexible payment options and booking flows. For now, we are using a placeholder experience until checkout is added.",
    },
    {
      question: "Can I become a campus rep?",
      answer:
        "Yes. Students who enjoy building community and helping others discover trips can apply for the campus rep program.",
    },
    {
      question: "Are trips curated for students?",
      answer:
        "Yes. The goal is to make trip discovery feel more relevant to student lifestyles, budgets, social experiences, and group travel needs.",
    },
  ];
  
  export default function FAQPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              FAQ
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Clear answers to the most common questions students may have.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold">{faq.question}</h2>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  