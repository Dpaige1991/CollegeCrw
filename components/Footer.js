import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-extrabold text-[var(--brand-yellow)]">
            College Crw
          </Link>
          <p className="mt-3 text-sm leading-6 text-[var(--brand-cream)]/80">
            A college travel platform built for group trips, fun experiences, and unforgettable memories.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[var(--brand-cream)]">Explore</h4>
          <div className="mt-4 space-y-3 text-sm text-[var(--brand-cream)]/80">
            <Link href="/trips" className="block hover:text-[var(--brand-yellow)]">Trips</Link>
            <Link href="/about" className="block hover:text-[var(--brand-yellow)]">About</Link>
            <Link href="/faq" className="block hover:text-[var(--brand-yellow)]">FAQ</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[var(--brand-cream)]">Community</h4>
          <div className="mt-4 space-y-3 text-sm text-[var(--brand-cream)]/80">
            <Link href="/campus-reps" className="block hover:text-[var(--brand-yellow)]">Campus Reps</Link>
            <Link href="/join" className="block hover:text-[var(--brand-yellow)]">Join</Link>
            <Link href="/contact" className="block hover:text-[var(--brand-yellow)]">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[var(--brand-cream)]">Legal</h4>
          <div className="mt-4 space-y-3 text-sm text-[var(--brand-cream)]/80">
            <Link href="/privacy" className="block hover:text-[var(--brand-yellow)]">Privacy</Link>
            <Link href="/terms" className="block hover:text-[var(--brand-yellow)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}