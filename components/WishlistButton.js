"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "college-crw-wishlist";

export default function WishlistButton({ trip }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!trip?.slug) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const items = raw ? JSON.parse(raw) : [];
      setSaved(Array.isArray(items) && items.some((item) => item?.slug === trip.slug));
    } catch (error) {
      console.error("Wishlist read error:", error);
      setSaved(false);
    }
  }, [trip?.slug]);

  function toggleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!trip?.slug || !trip?.name) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const items = raw ? JSON.parse(raw) : [];
      const safeItems = Array.isArray(items) ? items : [];

      const exists = safeItems.some((item) => item?.slug === trip.slug);

      let nextItems;

      if (exists) {
        nextItems = safeItems.filter((item) => item?.slug !== trip.slug);
        setSaved(false);
      } else {
        nextItems = [
          ...safeItems,
          {
            id: trip.id ?? null,
            slug: trip.slug,
            name: trip.name,
            location: trip.location ?? "",
            price: trip.price ?? "",
            image: trip.image ?? "",
            shortDescription: trip.shortDescription ?? "",
            date: trip.date ?? "",
            category: trip.category ?? "",
          },
        ];
        setSaved(true);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      window.dispatchEvent(new Event("wishlist-updated"));
    } catch (error) {
      console.error("Wishlist write error:", error);
    }
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