"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/Container";
import HeroSlideshow from "@/components/HeroSlideshow";

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
            <span className="block text-[var(--brand-orange)]">
              Make college memories bigger.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--brand-teal)] md:text-xl">
            Discover beach escapes, celebration trips, and group getaways built
            for students who want more fun, better vibes, and a cleaner booking
            experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/trips"
              className="rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center font-bold text-white transition hover:scale-[1.02] hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
            >
              Explore Trips
            </Link>

            <Link
              href="/crew-captains"
              className="rounded-full border border-[var(--brand-border)] bg-white px-6 py-3 text-center font-bold text-[var(--brand-navy)] transition hover:border-[var(--brand-aqua)] hover:bg-[var(--brand-aqua)]/10"
            >
              Become a Crew Captain
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-orange)]">
                25+
              </span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">
                Trip options
              </span>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-yellow)]">
                10k+
              </span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">
                Student travelers
              </span>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--brand-border)]">
              <span className="block text-2xl font-black text-[var(--brand-aqua)]">
                4.9/5
              </span>
              <span className="text-sm font-medium text-[var(--brand-teal)]">
                Traveler rating
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[var(--brand-border)] bg-white shadow-2xl">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[540px]">
              <HeroSlideshow />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}