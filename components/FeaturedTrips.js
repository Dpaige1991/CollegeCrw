import TripCard from "@/components/TripCard";
import SectionHeader from "@/components/SectionHeader";
import { getAllTrips } from "@/data/trips";

export default function FeaturedTrips() {
  const trips = getAllTrips().slice(0, 3);

  return (
    <section id="featured-trips" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Featured Trips"
        title="Find a trip that matches your crew"
        description="From beach escapes to celebration weekends, explore college-friendly trips with a more modern booking experience."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}