import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="border-b border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-center text-sm font-semibold md:flex-row md:text-left">
        <p className="text-[var(--brand-cream)]">
          Spring break spots are filling fast — grab your group and lock in your trip.
        </p>

        <Link
          href="/trips"
          className="rounded-full bg-[var(--brand-orange)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
        >
          Explore Trips
        </Link>
      </div>
    </div>
  );
}