"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TripImageLightbox({ images = [], tripName = "Trip" }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  function openLightbox(index) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrev() {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function showNext() {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative h-[240px] overflow-hidden rounded-[1.5rem] text-left"
          >
            <Image
              src={img}
              alt={`${tripName} image ${index + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--brand-navy)]/0 transition group-hover:bg-[var(--brand-navy)]/15" />
            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--brand-navy)] shadow">
              View
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-20 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/25"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/25"
            >
              Prev
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/25"
            >
              Next
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1720] shadow-2xl">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedImage}
                  alt={`${tripName} expanded image`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="border-t border-white/10 px-6 py-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-yellow)]">
                  {tripName}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  Trip Gallery
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/80">
                  Image {selectedIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}