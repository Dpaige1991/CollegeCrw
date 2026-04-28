"use client";

import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  function handleSignup(e) {
    e.preventDefault();

    router.push("/login");
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Sign Up</h1>

      <form onSubmit={handleSignup} className="mt-8 space-y-4">
        <input placeholder="Email" className="w-full border p-3 rounded-2xl" />
        <input placeholder="Password" className="w-full border p-3 rounded-2xl" />

        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold">
          Create Account
        </button>
      </form>
    </main>
  );
}