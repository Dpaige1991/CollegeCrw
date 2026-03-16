"use client";

import { useState } from "react";

const metadata = {
  title: "Plan a Trip | College Crw",
  description: "Start planning your next group trip with College Crw.",
};

export default function JoinPage() {
  const [form, setForm] = useState({
    fullName: "",
    school: "",
    email: "",
    groupSize: "",
    destinationInterest: "",
    everyoneOver21: "",
    notes: "",
    agreedToTerms: false,
  });

  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/trip-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setForm({
        fullName: "",
        school: "",
        email: "",
        groupSize: "",
        destinationInterest: "",
        everyoneOver21: "",
        notes: "",
        agreedToTerms: false,
      });
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Plan a Trip
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
            Start planning your next student trip
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tell us about your group and the kind of trip you want.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Trip Planning Form</h2>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                School
              </label>
              <input
                name="school"
                value={form.school}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your college or university"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Group Size
              </label>
              <input
                name="groupSize"
                value={form.groupSize}
                onChange={handleChange}
                type="number"
                required
                placeholder="How many people?"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Destination Interest
              </label>
              <input
                name="destinationInterest"
                value={form.destinationInterest}
                onChange={handleChange}
                type="text"
                required
                placeholder="Cancún, Miami, Puerto Rico, etc."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Is everyone in your crew 21 or older?
              </label>
              <select
                name="everyoneOver21"
                value={form.everyoneOver21}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tell us about your trip
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="6"
                placeholder="What kind of experience are you looking for?"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  name="agreedToTerms"
                  checked={form.agreedToTerms}
                  onChange={handleChange}
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <span>
                  I agree to the{" "}
                  <a href="/terms" className="font-semibold text-[var(--brand-orange)] underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/trip-policies" className="font-semibold text-[var(--brand-orange)] underline">
                    Trip Policies
                  </a>.
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {status === "success" && (
              <div className="md:col-span-2 rounded-2xl bg-green-50 p-4 text-green-700">
                Your trip request was submitted successfully.
              </div>
            )}

            {status === "error" && (
              <div className="md:col-span-2 rounded-2xl bg-red-50 p-4 text-red-700">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}