"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function onChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.error || "Something went wrong");
      return;
    }

    setStatus("Message sent successfully!");
    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-5xl font-extrabold">Contact Us</h1>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input
          name="fullName"
          value={form.fullName}
          onChange={onChange}
          placeholder="Full Name"
          className="w-full rounded-2xl border p-3"
        />

        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Email"
          className="w-full rounded-2xl border p-3"
        />

        <input
          name="subject"
          value={form.subject}
          onChange={onChange}
          placeholder="Subject"
          className="w-full rounded-2xl border p-3"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Message"
          rows="6"
          className="w-full rounded-2xl border p-3"
        />

        <button className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}