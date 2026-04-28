"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        role: "crew_captain",
      })
    );

    router.push("/crew-captains/dashboard");
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Login</h1>

      <form onSubmit={handleLogin} className="mt-8 space-y-4">
        <input
          placeholder="Email"
          className="w-full rounded-2xl border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="rounded-full bg-orange-500 px-6 py-3 text-white font-bold">
          Login
        </button>
      </form>
    </main>
  );
}