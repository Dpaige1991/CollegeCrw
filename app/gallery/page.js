import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata = {
  title: "Gallery | College Crw",
  description: "College Crw travel gallery.",
};

export default function GalleryPage() {
  const safeImages = galleryImages.filter(
    (image) => image && image.src && image.src.trim() !== ""
  );

  return (
    <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
      <section className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            Gallery
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
            Travel moments worth remembering
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-teal)]">
            Explore College Crw trip memories, destinations, and crew moments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <GalleryGrid images={safeImages} />
      </section>
    </main>
  );
}