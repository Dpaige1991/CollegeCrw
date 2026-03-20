"use client";

import { useEffect, useState } from "react";

export default function WishlistButton({ trip }) {
  const [saved, setSaved] = useState(false);
  const storageKey = "college-crw-wishlist";

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    const items = raw ? JSON.parse(raw) : [];
    setSaved(items.some((item) => item.slug === trip.slug));
  }, [trip.slug]);

  function toggleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();

    const raw = localStorage.getItem(storageKey);
    const items = raw ? JSON.parse(raw) : [];

    const exists = items.some((item) => item.slug === trip.slug);

    let nextItems;

    if (exists) {
      nextItems = items.filter((item) => item.slug !== trip.slug);
      setSaved(false);
    } else {
      nextItems = [
        ...items,
        {
          id: trip.id,
          slug: trip.slug,
          name: trip.name,
          location: trip.location,
          price: trip.price,
          image: trip.image,
          shortDescription: trip.shortDescription,
          date: trip.date,
          category: trip.category,
        },
      ];
      setSaved(true);
    }

    localStorage.setItem(storageKey, JSON.stringify(nextItems));
    window.dispatchEvent(new Event("wishlist-updated"));
  }

  return (
    <button
      type="button"
      onClick={toggleWishlist}
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      className={`rounded-full px-3 py-2 text-sm font-bold shadow transition ${
        saved
          ? "bg-[var(--brand-orange)] text-white"
          : "bg-white/90 text-[var(--brand-navy)]"
      }`}
    >
      {saved ? "♥ Saved" : "♡ Save"}
    </button>
  );
}