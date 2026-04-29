"use client";

import { useState } from "react";

export default function GalleryGrid({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const validImages = images.filter(
    (img) => img && img.src && img.src.trim() !== ""
  );

  if (validImages.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">No images found</h2>
      </div>
    );
  }

  return (
    <>
      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {validImages.map((img, index) => (
          <div
            key={img.id || index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer overflow-hidden rounded-2xl"
          >
            <div className="h-[320px] w-full">
              <img
                src={img.src}
                alt=""
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedIndex(null)}
        >
          <img
            src={validImages[selectedIndex].src}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute right-6 top-6 text-4xl text-white"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}