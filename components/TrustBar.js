const items = [
    "Built for student groups",
    "Spring break ready",
    "Campus rep friendly",
    "Curated destinations",
    "Group travel made easier",
  ];
  
  export default function TrustBar() {
    return (
      <section className="border-y border-[var(--brand-border)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-cream)] px-4 py-2 text-sm font-bold text-[var(--brand-navy)] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    );
  }