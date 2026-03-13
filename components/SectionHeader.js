export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--brand-navy)] md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-lg leading-8 text-[var(--brand-teal)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}