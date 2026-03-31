import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function CrewCaptainDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, role, referral_code, school, email")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "crew_captain") {
    redirect("/");
  }

  const { data: referrals } = await supabase
    .from("referrals")
    .select("*")
    .eq("captain_id", user.id)
    .order("created_at", { ascending: false });

  const totalReferrals = referrals?.length ?? 0;
  const bookedReferrals = referrals?.filter((r) => r.status === "booked").length ?? 0;
  const roomsCredited = referrals?.reduce((sum, r) => sum + (r.rooms_counted || 0), 0) ?? 0;
  const nextMilestone = 10;
  const milestoneProgress = Math.min((roomsCredited / nextMilestone) * 100, 100);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-5xl font-extrabold">Crew Captain Dashboard</h1>
      <p className="mt-3 text-slate-600">Welcome back, {profile.full_name || "Captain"}.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border p-6">
          <p className="text-sm font-bold">Total Referrals</p>
          <p className="mt-2 text-4xl font-extrabold">{totalReferrals}</p>
        </div>
        <div className="rounded-2xl border p-6">
          <p className="text-sm font-bold">Booked Referrals</p>
          <p className="mt-2 text-4xl font-extrabold">{bookedReferrals}</p>
        </div>
        <div className="rounded-2xl border p-6">
          <p className="text-sm font-bold">Rooms Credited</p>
          <p className="mt-2 text-4xl font-extrabold">{roomsCredited} / 10</p>
        </div>
        <div className="rounded-2xl border p-6">
          <p className="text-sm font-bold">Referral Code</p>
          <p className="mt-2 text-2xl font-extrabold">{profile.referral_code}</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border p-6">
        <div className="mb-2 flex items-center justify-between text-sm font-bold">
          <span>10-room upgrade progress</span>
          <span>{roomsCredited} / {nextMilestone}</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-orange-500" style={{ width: `${milestoneProgress}%` }} />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <a
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/join?ref=${profile.referral_code}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-white"
        >
          Share Referral Link
        </a>

        <a
          href={`/api/referrals/report?captain=${profile.id}`}
          className="rounded-full border px-6 py-3 text-center font-bold"
        >
          Download Referral Report
        </a>

        <a href="/trips" className="rounded-full border px-6 py-3 text-center font-bold">
          View Trip Options
        </a>

        <a href="/profile" className="rounded-full border px-6 py-3 text-center font-bold">
          Update Profile
        </a>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Rooms Counted</th>
            </tr>
          </thead>
          <tbody>
            {(referrals ?? []).map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-4">{r.referred_name || "—"}</td>
                <td>{r.referred_email || "—"}</td>
                <td>{r.destination || "—"}</td>
                <td>{r.status}</td>
                <td>{r.rooms_counted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}