import WishlistClient from "@/components/WishlistClient";

export const metadata = {
  title: "Wishlist | College Crw",
  description: "View your saved trips on College Crw.",
};

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
      <section className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            Wishlist
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Your saved trips
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-teal)]">
            Keep track of destinations and trips you want to come back to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <WishlistClient />
      </section>
    </main>
  );
}