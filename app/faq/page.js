"use client";

import { useMemo, useState } from "react";

const faqs = [
  {
    question: "Who can book a College CRW trip?",
    answer:
      "Anyone 18+ can book. Some trips require travelers to be 21+.",
  },
  {
    question: "Are flights included?",
    answer:
      "No, flights are typically not included unless stated.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "It’s not required, but highly recommended to protect your trip.",
  },
  {
    question: "What happens if my roommate cancels?",
    answer:
      "You may be responsible for the remaining balance or your room price may increase.",
  },
  {
    question: "When are payments due?",
    answer:
      "Final payments are usually due 90 days before travel, unless stated otherwise.",
  },
  {
    question: "What if I miss my flight?",
    answer:
      "You are responsible for your own travel arrangements and any additional costs.",
  },
  {
    question: "Can I travel with a group?",
    answer:
      "Yes! Groups are encouraged, and group flight options may be available for 10+ travelers.",
  },
  {
    question: "What behavior is expected on trips?",
    answer:
      "Respect, responsibility, and following all local laws and resort rules.",
  },
  {
    question: "Can I be removed from a trip?",
    answer:
      "Yes. Travelers may be removed without refund for illegal activity, unsafe behavior, or disrupting others.",
  },
  {
    question: "Who do I contact for help?",
    answer: "Email: info@collegecrw.com",
  },
];

function highlightText(text, query) {
  if (!query.trim()) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="rounded bg-[var(--brand-yellow)] px-1 text-[var(--brand-navy)]"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [search]);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
      <section className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            FAQ
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            College CRW – FAQ
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-teal)]">
            Everything you need to know before booking your trip.
          </p>

          <div className="mt-8">
            <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
              Search FAQs
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search payments, flights, insurance, groups..."
              className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        {filteredFaqs.length === 0 ? (
          <div className="rounded-2xl border border-[var(--brand-border)] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold">No results found</h2>
            <p className="mt-3 leading-7 text-[var(--brand-teal)]">
              Try a different keyword like flights, insurance, payments, or group.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[var(--brand-border)] bg-white shadow-sm transition"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-lg font-bold">
                      {highlightText(faq.question, search)}
                    </span>

                    <span
                      className={`text-2xl font-bold transition ${
                        isOpen
                          ? "rotate-45 text-[var(--brand-orange)]"
                          : "text-[var(--brand-teal)]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 leading-7 text-[var(--brand-teal)]">
                      {highlightText(faq.answer, search)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold">Still have questions?</h3>
          <p className="mt-3 text-[var(--brand-teal)]">
            Reach out and we’ll help you plan your trip.
          </p>
          <a
            href="mailto:info@collegecrw.com"
            className="mt-6 inline-block rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}