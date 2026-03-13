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
      image:
        "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=1200&q=80",
      shortDescription:
        "A high-energy spring break trip with beachfront stays, nightlife, and group perks.",
      description:
        "Spend spring break in Cancún with your crew. This package is built for college students who want beachfront hotels, curated events, social experiences, and flexible trip planning in one place.",
      highlights: [
        "Beachfront hotel options",
        "Group-friendly packages",
        "Nightlife access",
        "Flexible payment-friendly structure",
        "Student-focused planning",
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
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      shortDescription:
        "A stylish weekend trip with nightlife, food, and beachside energy.",
      description:
        "Perfect for friend groups, birthdays, and student organizations looking for a quick but memorable getaway. Miami gives you food, fun, and a premium city-meets-beach feel.",
      highlights: [
        "Short and affordable trip format",
        "Great for student groups",
        "Beach and nightlife mix",
        "Modern hotel options",
        "Easy weekend planning",
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
    },
    {
      id: 3,
      slug: "puerto-rico-island-trip",
      name: "Puerto Rico Island Trip",
      location: "San Juan, Puerto Rico",
      date: "May 20 - May 25, 2027",
      duration: "5 nights",
      price: 499,
      category: "Island Adventure",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      shortDescription:
        "A tropical student trip with culture, beaches, and unforgettable scenery.",
      description:
        "A student-friendly island experience that blends relaxation, adventure, and culture. Great for travelers who want more than just parties and want a more balanced group trip.",
      highlights: [
        "Island views and beaches",
        "Culture-forward experience",
        "Relaxed but social atmosphere",
        "Great for mixed-interest groups",
        "Memorable scenery",
      ],
      includes: [
        "Hotel stay",
        "Trip planning support",
        "Local activity suggestions",
        "Group coordination",
      ],
      itinerary: [
        "Day 1: Arrival and old city walk",
        "Day 2: Beach and local food stops",
        "Day 3: Group activity day",
        "Day 4: Free explore day",
        "Day 5: Scenic spots and final dinner",
      ],
    },
    {
      id: 4,
      slug: "las-vegas-graduate-trip",
      name: "Las Vegas Graduate Trip",
      location: "Las Vegas, Nevada",
      date: "June 10 - June 14, 2027",
      duration: "4 nights",
      price: 459,
      category: "Celebration",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      shortDescription:
        "A bold celebration trip for grads and big group memories.",
      description:
        "A high-energy celebration trip built for graduation season, student leaders, and large groups looking for a memorable city escape.",
      highlights: [
        "Big-group friendly",
        "Celebration-focused",
        "Premium city experience",
        "Great for graduation season",
        "Packed itinerary potential",
      ],
      includes: [
        "Hotel stay",
        "Group planning support",
        "Trip resources",
        "Suggested nightlife guide",
      ],
      itinerary: [
        "Day 1: Arrival and welcome meetup",
        "Day 2: Poolside and city exploration",
        "Day 3: Group outing and evening events",
        "Day 4: Free day and final celebration",
      ],
    },
  ];
  
  export function getAllTrips() {
    return trips;
  }
  
  export function getTripBySlug(slug) {
    return trips.find((trip) => trip.slug === slug);
  }