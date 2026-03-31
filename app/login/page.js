"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Signing in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus(error.message);
      return;
    }

    router.push("/crew-captains/dashboard");
    router.refresh();
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Log In</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-2xl border p-3" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-2xl border p-3" />
        <button className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white">
          Log In
        </button>
      </form>
      {status ? <p className="mt-4">{status}</p> : null}
    </main>
  );
}