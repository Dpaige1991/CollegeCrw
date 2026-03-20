import Link from "next/link";
import WishlistButton from "@/components/WishlistButton";

export default function TripCard({ trip }) {
  return (
    <Link
      href={`/trips/${trip.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-[var(--brand-border)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <div
          className="h-64 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${trip.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/50 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-[var(--brand-cream)] px-3 py-1 text-xs font-bold text-[var(--brand-navy)] shadow">
            {trip.category}
          </span>
        </div>

        <div className="absolute right-4 top-4">
          <WishlistButton trip={trip} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--brand-navy)]">
              {trip.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-[var(--brand-teal)]">
              {trip.location}
            </p>
          </div>

          <span className="rounded-full bg-[var(--brand-orange)] px-3 py-1 text-sm font-bold text-white">
            ${trip.price}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-[var(--brand-teal)]">
          {trip.shortDescription}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--brand-border)] pt-4">
          <span className="text-sm text-[var(--brand-teal)]">{trip.date}</span>
          <span className="text-sm font-bold text-[var(--brand-orange)] transition group-hover:translate-x-1">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}