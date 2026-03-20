"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";

export default function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  function goPrev() {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }

  function goNext() {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }

  const currentImage = galleryImages[currentIndex];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            Travel Moments
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--brand-navy)] md:text-5xl">
            See the energy of College Crw
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--brand-teal)]">
            A quick look at the kind of memories, destinations, and group moments your travelers can expect.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[var(--brand-border)] bg-white shadow-lg">
          <div className="relative h-[300px] w-full sm:h-[420px] lg:h-[520px]">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--brand-yellow)]">
                  Featured Photo
                </p>
                <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                  {currentImage.title}
                </h3>
              </div>

              <div className="hidden gap-3 sm:flex">
                <button
                  onClick={goPrev}
                  className="rounded-full bg-white/15 px-4 py-2 font-bold backdrop-blur transition hover:bg-white/25"
                >
                  Prev
                </button>
                <button
                  onClick={goNext}
                  className="rounded-full bg-white/15 px-4 py-2 font-bold backdrop-blur transition hover:bg-white/25"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--brand-border)] px-6 py-5">
            <div className="flex flex-wrap gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    currentIndex === index
                      ? "bg-[var(--brand-orange)]"
                      : "bg-[var(--brand-border)]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Link
              href="/gallery"
              className="rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}