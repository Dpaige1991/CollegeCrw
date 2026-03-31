"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/slideshow/trip1.jpg",
  "/images/slideshow/trip2.jpg",
  "/images/slideshow/trip3.jpg",
  "/images/slideshow/trip4.jpg",
];

const INTERVAL = 5000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  function nextSlide() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  useEffect(() => {
    if (paused) return;

    timeoutRef.current = setTimeout(nextSlide, INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [index, paused]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/35 to-transparent" />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/70"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur transition hover:bg-black/70"
      >
        →
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-[var(--brand-orange)] scale-125"
                : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}