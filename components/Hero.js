"use client";

import { motion } from "motion/react";
import Container from "@/components/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
      <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[var(--brand-yellow)]/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[var(--brand-aqua)]/20 blur-3xl" />

      <Container className="relative grid min-h-[92vh] items-center gap-14 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-[var(--brand-yellow)] bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)] shadow-sm">
            College Travel Reimagined
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[var(--brand-navy)] md:text-7xl">
            Travel with your crew.
            <span className="block text-[var(--brand-orange)]">Make college memories bigger.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--brand-teal)] md:text-xl">
            Discover beach escapes, celebration trips, and group getaways built for students who want more fun, better vibes, and a cleaner booking experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/trips"
              className="rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center font-bold text-white transition hover:scale-[1.02] hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
            >
              Explore Trips
            </Link>

            <Link
              href="/campus-reps"
              className="rounded-full border border-[var(--brand-border)] bg-white px-6 py-3 text-center font-bold text-[var(--brand-navy)] transition hover:border-[var(--brand-aqua)] hover:bg-[var(--brand-aqua)]/10"
            >
              Become a Campus Rep
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-orange)]">25+</span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">Trip options</span>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-yellow)]">10k+</span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">Student travelers</span>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-aqua)]">4.9/5</span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">Traveler rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-[2rem] bg-[var(--brand-navy)] p-6 text-white shadow-2xl">
            <p className="text-sm text-[var(--brand-cream)]/80">Featured Escape</p>
            <h3 className="mt-3 text-2xl font-bold">Cancún Spring Break</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--brand-cream)]/80">
              Beachfront hotels, group perks, nightlife access, and unforgettable energy.
            </p>
            <div className="mt-8 rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-[var(--brand-cream)]/80">Starting at</p>
              <p className="mt-1 text-3xl font-extrabold text-[var(--brand-yellow)]">$399</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-6 shadow-lg">
              <p className="text-sm font-semibold text-[var(--brand-orange)]">Top Group Pick</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--brand-navy)]">Miami Weekend</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--brand-teal)]">
                Perfect for birthdays, friend groups, campus events, and quick getaways.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[linear-gradient(135deg,#ffffff_0%,#ecfffb_100%)] p-6 shadow-lg">
              <p className="text-sm font-semibold text-[var(--brand-teal)]">Campus Rep Program</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--brand-navy)]">Lead trips. Earn perks.</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--brand-teal)]">
                Bring your people together and unlock exclusive rewards for your campus crew.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}