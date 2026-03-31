"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProfileForm({ profile }) {
  const supabase = createClient();
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [school, setSchool] = useState(profile?.school || "");
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Saving...");

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        school,
      })
      .eq("id", profile.id);

    setStatus(error ? error.message : "Profile updated.");
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="w-full rounded-2xl border p-3" />
      <input value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School" className="w-full rounded-2xl border p-3" />
      <button className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white">
        Save Profile
      </button>
      {status ? <p className="mt-2">{status}</p> : null}
    </form>
  );
}