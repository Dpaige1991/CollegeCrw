"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "college-crw-wishlist";

export default function WishlistNavBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function loadWishlistCount() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const items = raw ? JSON.parse(raw) : [];

        if (Array.isArray(items)) {
          setCount(items.length);
        } else {
          setCount(0);
        }
      } catch (error) {
        console.error("Wishlist load error:", error);
        setCount(0);
      }
    }

    // Initial load
    loadWishlistCount();

    // Listen for updates from WishlistButton
    window.addEventListener("wishlist-updated", loadWishlistCount);

    // Optional: listen to storage changes (multi-tab support)
    window.addEventListener("storage", loadWishlistCount);

    return () => {
      window.removeEventListener("wishlist-updated", loadWishlistCount);
      window.removeEventListener("storage", loadWishlistCount);
    };
  }, []);

  return (
    <Link
      href="/wishlist"
      className="relative inline-flex items-center text-sm font-semibold text-[var(--brand-teal)] transition hover:text-[var(--brand-orange)]"
    >
      <span>Wishlist</span>

      {count > 0 && (
        <span className="ml-2 inline-flex min-w-[22px] items-center justify-center rounded-full bg-[var(--brand-orange)] px-2 py-0.5 text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}