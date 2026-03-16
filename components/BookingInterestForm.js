"use client";

import { useState } from "react";

export default function BookingInterestForm({ tripName = "this trip" }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    school: "",
    groupSize: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    console.log("Booking interest submitted:", {
      trip: tripName,
      ...form,
    });
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] bg-[var(--brand-cream)] p-6 text-[var(--brand-navy)] ring-1 ring-[var(--brand-border)]">
        <h3 className="text-2xl font-extrabold">You’re in.</h3>
        <p className="mt-3 leading-7 text-[var(--brand-teal)]">
          Your interest for <span className="font-bold">{tripName}</span> has been recorded.
          Next, you can connect this form to email, Supabase, or your booking flow.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
          Full Name
        </label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          type="text"
          required
          placeholder="Your full name"
          className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
          Email
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
          School
        </label>
        <input
          name="school"
          value={form.school}
          onChange={handleChange}
          type="text"
          placeholder="Your college or university"
          className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
          Group Size
        </label>
        <input
          name="groupSize"
          value={form.groupSize}
          onChange={handleChange}
          type="number"
          placeholder="How many people?"
          className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-[var(--brand-navy)]">
          Notes
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us what kind of trip you want"
          className="w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand-orange)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]"
      >
        Submit Interest
      </button>
    </form>
  );
}