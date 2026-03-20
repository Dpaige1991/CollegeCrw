"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/Container";
import WishlistNavBadge from "@/components/WishlistNavBadge";

const navLinks = [
  { label: "Trips", href: "/trips" },
  { label: "Gallery", href: "/gallery" },
  { label: "Crew Captains", href: "/crew-captains" },
  { label: "Captain Dashboard", href: "/crew-captains/dashboard" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-border)] bg-[#fcfcf8]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/college-crw-logo.png"
          alt="College Crw logo"
          width={180}
          height={60}
          className="h-auto w-[140px] md:w-[180px] object-contain"
        />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[var(--brand-teal)] transition hover:text-[var(--brand-orange)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-[var(--brand-teal)] transition hover:text-[var(--brand-orange)]"
          >
            Log in
          </Link>

          <Link
            href="/join"
            className="rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
          >
            Plan a Trip
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-border)] text-[var(--brand-navy)] md:hidden"
        >
          <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-[var(--brand-border)] bg-[#fcfcf8] md:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-3 py-3 text-base font-semibold text-[var(--brand-teal)] transition hover:bg-white hover:text-[var(--brand-orange)]"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 grid gap-3">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="rounded-full border border-[var(--brand-border)] px-5 py-3 text-center font-semibold text-[var(--brand-navy)] transition hover:bg-white"
                  >
                    Log in
                  </Link>

                  <Link
                    href="/join"
                    onClick={closeMenu}
                    className="rounded-full bg-[var(--brand-orange)] px-5 py-3 text-center font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
                  >
                    Plan a Trip
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}