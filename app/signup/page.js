"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    school: "",
  });
  const [status, setStatus] = useState("");

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Creating account...");

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        data: {
          full_name: form.fullName,
          school: form.school,
        },
      },
    });

    if (error) {
      setStatus(error.message);
      return;
    }

    // update profile extras if user exists immediately
    if (data.user) {
      await supabase.from("profiles").update({
        full_name: form.fullName,
        school: form.school,
      }).eq("id", data.user.id);
    }

    setStatus("Check your email to confirm your account.");
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Sign Up</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full name" className="w-full rounded-2xl border p-3" />
        <input name="school" value={form.school} onChange={onChange} placeholder="School" className="w-full rounded-2xl border p-3" />
        <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" className="w-full rounded-2xl border p-3" />
        <input name="password" value={form.password} onChange={onChange} type="password" placeholder="Password" className="w-full rounded-2xl border p-3" />
        <button className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white">
          Create Account
        </button>
      </form>
      {status ? <p className="mt-4">{status}</p> : null}
    </main>
  );
}