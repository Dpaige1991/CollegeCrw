"use client";

import { useEffect, useState } from "react";
import TripCard from "@/components/TripCard";

const STORAGE_KEY = "college-crw-wishlist";

export default function WishlistClient() {
  const [items, setItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function loadWishlist() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];

        const validItems = Array.isArray(parsed)
          ? parsed.filter(
              (item) =>
                item &&
                typeof item === "object" &&
                typeof item.slug === "string" &&
                item.slug.trim() !== "" &&
                typeof item.name === "string"
            )
          : [];

        setItems(validItems);
      } catch (error) {
        console.error("Failed to load wishlist:", error);
        setItems([]);
      }
    }

    setMounted(true);
    loadWishlist();
    window.addEventListener("wishlist-updated", loadWishlist);
    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener("wishlist-updated", loadWishlist);
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-[var(--brand-navy)]">
          Loading wishlist...
        </h2>
      </div>
    );
  }

  return (
    <div>
      {items.length === 0 ? (
        <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[var(--brand-navy)]">
            Your wishlist is empty
          </h2>
          <p className="mt-3 leading-7 text-[var(--brand-teal)]">
            Save trips you like and they’ll appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold text-[var(--brand-navy)]">
              Saved Trips
            </h2>
            <p className="text-[var(--brand-teal)]">
              {items.length} saved trip{items.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((trip) => (
              <TripCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}