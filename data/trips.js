export const trips = [
  {
    id: 1,
    slug: "cancun-spring-break",
    name: "Cancún Spring Break",
    location: "Cancún, Mexico",
    date: "March 12 - March 18, 2027",
    duration: "6 nights",
    price: 399,
    category: "Beach Party",
    image: "/images/trips/cancun-main.jpg",
    shortDescription:
      "A high-energy spring break trip with beachfront stays, nightlife, and group perks.",
    description:
      "Spend spring break in Cancún with your crew. This trip is built for college students who want beachfront hotels, social energy, top resort access, and unforgettable group memories.",
    highlights: [
      "Beachfront hotel options",
      "Group-friendly packages",
      "Nightlife access",
      "Flexible payment-friendly structure",
      "Student-focused planning",
    ],
    keySpots: [
      "Hotel Zone",
      "Playa Delfines",
      "Downtown Cancún",
      "Resort beach clubs",
      "Nearby excursion pick-up points",
    ],
    funAreas: [
      "Nightlife districts",
      "Beach party areas",
      "Group dinner spots",
      "Excursion meet-up zones",
      "Photo-friendly oceanfront locations",
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
      "/images/trips/cancun-main.jpg",
      "/images/trips/cancun-2.jpg",
      "/images/trips/cancun-3.jpg",
      "/images/trips/cancun-4.jpg",
    ],
  },
  {
    id: 2,
    slug: "miami-weekend-escape",
    name: "Miami Weekend Escape",
    location: "Miami, Florida",
    date: "April 4 - April 7, 2027",
    duration: "3 nights",
    price: 289,
    category: "Weekend Getaway",
    image: "/images/trips/miami-main.jpg",
    shortDescription:
      "A stylish weekend trip with nightlife, food, and beachside energy.",
    description:
      "Perfect for friend groups, birthdays, and student organizations looking for a quick but memorable getaway. Miami gives you nightlife, food, beach energy, and a premium city vibe.",
    highlights: [
      "Short and affordable trip format",
      "Great for student groups",
      "Beach and nightlife mix",
      "Modern hotel options",
      "Easy weekend planning",
    ],
    keySpots: [
      "South Beach",
      "Ocean Drive",
      "Wynwood",
      "Brickell",
      "Bayside area",
    ],
    funAreas: [
      "Beach hangout zones",
      "Food and nightlife areas",
      "Shopping spots",
      "Group brunch locations",
      "City photo spots",
    ],
    includes: [
      "Hotel stay",
      "Group planning support",
      "Suggested itinerary",
      "Traveler resources",
    ],
    itinerary: [
      "Day 1: Arrival and group dinner",
      "Day 2: Beach, shopping, and nightlife",
      "Day 3: Explore the city and social events",
      "Day 4: Checkout and departure",
    ],
    gallery: [
      "/images/trips/miami-main.jpg",
      "/images/trips/miami-2.jpg",
      "/images/trips/miami-3.jpg",
      "/images/trips/miami-4.jpg",
    ],
  },
];

export function getAllTrips() {
  return trips;
}

export function getTripBySlug(slug) {
  return trips.find((trip) => trip.slug === slug);
}