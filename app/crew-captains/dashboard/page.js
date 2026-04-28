"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
  }, []);

  if (!user || user.role !== "crew_captain") {
    return <p className="p-10">Access Denied</p>;
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-extrabold">
        Crew Captain Dashboard
      </h1>

      <p className="mt-4">Welcome: {user.email}</p>

      <div className="mt-8 space-y-4">
        <a
          href="/join"
          className="block bg-orange-500 text-white px-6 py-3 rounded-full text-center"
        >
          Reserve Interest
        </a>

        <button className="border px-6 py-3 rounded-full w-full">
          Share Referral Link
        </button>

        <button className="border px-6 py-3 rounded-full w-full">
          Download Referral Report
        </button>

        <button className="border px-6 py-3 rounded-full w-full">
          View Trip Options
        </button>

        <button className="border px-6 py-3 rounded-full w-full">
          Update Profile
        </button>
      </div>
    </main>
  );
}