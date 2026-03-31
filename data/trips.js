export const trips = [
  {
    id: 1,
    slug: "punta-cana",
    name: "Punta Cana Trip",
    location: "Dominican Republic",
    date: "March 6 - March 11, 2027",
    duration: "6 nights",
    price: "TBD",
    category: "Beach Party",
    image: "/images/trips/puntacana/cana-main.jpg",
    shortDescription:
      "Punta Cana is the ultimate Caribbean escape—known for its crystal-clear waters, white-sand beaches, luxury all-inclusive resorts, and nonstop nightlife. Whether you're relaxing by the ocean or partying until sunrise, it's the perfect destination for unforgettable group trips.",
    description:
      "Punta Cana is one of the most sought-after tropical destinations in the Caribbean, located on the eastern coast of the Dominican Republic. Famous for its endless stretches of white-sand beaches and turquoise waters, it offers the perfect balance between relaxation, adventure, and nightlife.",
    highlights: [
      "All-inclusive luxury resorts (food + drinks included 🍹)",
      "Beautiful white-sand beaches and turquoise water",
      "Affordable compared to other Caribbean destinations",
      "Beautiful white-sand beaches and turquoise water",
      "Excursions: ATVs, ziplining, snorkeling, boat parties",
      "Nonstop nightlife and entertainment",
      "Warm tropical weather year-round ☀️",
    ],
    keySpots: [
      "Bavaro Beach",
      "Hoyo Azul",
      "Saona Island",
      "Macao Beach",
      "Indigenous Eyes Ecological Park",
    ],
    funAreas: [
      "Coco Bongo",
      "Imagine Cave Club",
      "Resort Night Parties",
      "Beach Parties",
      "Downtown Punta Cana",
    ],
    includes: [
      "Hotel stay",
      "Trip coordination",
      "Welcome event",
      "Group support",
    ],
    itinerary: [
      "Day 1: Arrival and hotel check-in",
      "Day 2: Beach day and welcome meetup",
      "Day 3: Group excursion and nightlife",
      "Day 4: Free day for exploring",
      "Day 5: Social events and group activities",
      "Day 6: Final beach day and send-off",
    ],
    gallery: [
      "/images/trips/puntacana/cana-main.jpg",
      "/images/trips/puntacana/cana-2.jpg",
      "/images/trips/puntacana/cana-3.jpg",
      "/images/trips/puntacana/cana-4.jpg",
    ],
  },
];

export function getAllTrips() {
  return trips;
}

export function getTripBySlug(slug) {
  return trips.find((trip) => trip.slug === slug);
}