const stats = [
    {
      label: "Total Earnings",
      value: "$1,240",
      subtext: "From confirmed referrals",
    },
    {
      label: "Total Referrals",
      value: "18",
      subtext: "Students referred",
    },
    {
      label: "Trips Booked",
      value: "7",
      subtext: "Completed bookings",
    },
    {
      label: "Pending Payouts",
      value: "$320",
      subtext: "Waiting for release",
    },
  ];
  
  const referralActivity = [
    {
      name: "Jordan M.",
      school: "Texas State University",
      destination: "Cancún Spring Break",
      status: "Booked",
      reward: "$150",
    },
    {
      name: "Avery T.",
      school: "University of Houston",
      destination: "Miami Weekend Escape",
      status: "Pending",
      reward: "$50",
    },
    {
      name: "Maya R.",
      school: "Baylor University",
      destination: "Puerto Rico Island Trip",
      status: "Booked",
      reward: "$200",
    },
    {
      name: "Chris D.",
      school: "Texas A&M",
      destination: "Cancún Spring Break",
      status: "Interested",
      reward: "$0",
    },
  ];
  
  const payouts = [
    {
      date: "Feb 15, 2026",
      amount: "$300",
      method: "Zelle",
      status: "Paid",
    },
    {
      date: "Jan 28, 2026",
      amount: "$220",
      method: "PayPal",
      status: "Paid",
    },
    {
      date: "Jan 10, 2026",
      amount: "$180",
      method: "Zelle",
      status: "Paid",
    },
  ];
  
  export const metadata = {
    title: "Crew Captain Dashboard | College Crw",
    description: "View Crew Captain earnings, referrals, and rewards.",
  };
  
  export default function CrewCaptainDashboardPage() {
    const referralCode = "CRW-DOMINIQUE-25";
    const rewardProgress = 72;
  
    return (
      <main className="min-h-screen bg-[#fcfcf8] text-[var(--brand-navy)]">
        <section className="border-b border-[var(--brand-border)] bg-[linear-gradient(135deg,#fff7df_0%,#fcfcf8_45%,#e6fbf8_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
              Crew Captain Dashboard
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl">
              Track your earnings, referrals, and rewards
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-teal)]">
              See how your crew is performing, how much you’ve earned, and how close
              you are to your next reward tier.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-orange)]">
                  {stat.label}
                </p>
                <h2 className="mt-3 text-4xl font-extrabold">{stat.value}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--brand-teal)]">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
  
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-orange)]">
                    Referral Code
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold">{referralCode}</h2>
                  <p className="mt-3 max-w-2xl text-[var(--brand-teal)]">
                    Share this code with your crew so their bookings can be tied to your account.
                  </p>
                </div>
  
                <button className="rounded-full bg-[var(--brand-orange)] px-5 py-2.5 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]">
                  Copy Code
                </button>
              </div>
  
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-[var(--brand-cream)] p-5">
                  <p className="text-sm font-bold text-[var(--brand-orange)]">Referral Link</p>
                  <p className="mt-2 break-all text-sm text-[var(--brand-navy)]">
                    collegecrw.com/join?ref=CRW-DOMINIQUE-25
                  </p>
                </div>
  
                <div className="rounded-2xl bg-[var(--brand-cream)] p-5">
                  <p className="text-sm font-bold text-[var(--brand-orange)]">Clicks</p>
                  <p className="mt-2 text-3xl font-extrabold">286</p>
                </div>
  
                <div className="rounded-2xl bg-[var(--brand-cream)] p-5">
                  <p className="text-sm font-bold text-[var(--brand-orange)]">Conversion Rate</p>
                  <p className="mt-2 text-3xl font-extrabold">6.3%</p>
                </div>
              </div>
            </div>
  
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-orange)]">
                Reward Progress
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">Next Reward Tier</h2>
              <p className="mt-3 text-[var(--brand-teal)]">
                You’re getting close to unlocking your next Crew Captain reward.
              </p>
  
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span>Progress</span>
                  <span>{rewardProgress}%</span>
                </div>
  
                <div className="h-4 overflow-hidden rounded-full bg-[var(--brand-border)]">
                  <div
                    className="h-full rounded-full bg-[var(--brand-orange)]"
                    style={{ width: `${rewardProgress}%` }}
                  />
                </div>
              </div>
  
              <div className="mt-6 space-y-3 text-sm text-[var(--brand-teal)]">
                <p>
                  <span className="font-bold text-[var(--brand-navy)]">Current Tier:</span> Gold
                </p>
                <p>
                  <span className="font-bold text-[var(--brand-navy)]">Next Tier:</span> Platinum
                </p>
                <p>
                  <span className="font-bold text-[var(--brand-navy)]">Needed:</span> 3 more booked referrals
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-extrabold">Referral Activity</h2>
                <p className="text-sm font-semibold text-[var(--brand-teal)]">
                  Latest leads and bookings
                </p>
              </div>
  
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[720px] border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-left text-sm font-bold text-[var(--brand-orange)]">
                      <th className="pb-2">Name</th>
                      <th className="pb-2">School</th>
                      <th className="pb-2">Destination</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralActivity.map((referral) => (
                      <tr key={`${referral.name}-${referral.destination}`}>
                        <td className="rounded-l-2xl bg-[#fcfcf8] px-4 py-4 font-bold">
                          {referral.name}
                        </td>
                        <td className="bg-[#fcfcf8] px-4 py-4 text-[var(--brand-teal)]">
                          {referral.school}
                        </td>
                        <td className="bg-[#fcfcf8] px-4 py-4 text-[var(--brand-teal)]">
                          {referral.destination}
                        </td>
                        <td className="bg-[#fcfcf8] px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              referral.status === "Booked"
                                ? "bg-green-100 text-green-700"
                                : referral.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {referral.status}
                          </span>
                        </td>
                        <td className="rounded-r-2xl bg-[#fcfcf8] px-4 py-4 font-bold text-[var(--brand-navy)]">
                          {referral.reward}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold">Quick Actions</h2>
  
              <div className="mt-6 space-y-4">
                <button className="w-full rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-navy)]">
                  Share Referral Link
                </button>
  
                <button className="w-full rounded-full border border-[var(--brand-border)] px-6 py-3 font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-cream)]">
                  Download Referral Report
                </button>
  
                <button className="w-full rounded-full border border-[var(--brand-border)] px-6 py-3 font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-cream)]">
                  Request Payout
                </button>
  
                <button className="w-full rounded-full border border-[var(--brand-border)] px-6 py-3 font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-cream)]">
                  Update Profile
                </button>
              </div>
  
              <div className="mt-8 rounded-2xl bg-[var(--brand-cream)] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-orange)]">
                  Monthly Goal
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">10 Booked Referrals</h3>
                <p className="mt-3 leading-7 text-[var(--brand-teal)]">
                  You’ve completed 7 bookings this month. Keep going to hit your bonus target.
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-8 rounded-[2rem] border border-[var(--brand-border)] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold">Payout History</h2>
              <p className="text-sm font-semibold text-[var(--brand-teal)]">
                Recent earnings paid out
              </p>
            </div>
  
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-sm font-bold text-[var(--brand-orange)]">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Method</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payouts.map((payout) => (
                    <tr key={`${payout.date}-${payout.amount}`}>
                      <td className="rounded-l-2xl bg-[#fcfcf8] px-4 py-4 font-bold">
                        {payout.date}
                      </td>
                      <td className="bg-[#fcfcf8] px-4 py-4 font-bold">
                        {payout.amount}
                      </td>
                      <td className="bg-[#fcfcf8] px-4 py-4 text-[var(--brand-teal)]">
                        {payout.method}
                      </td>
                      <td className="rounded-r-2xl bg-[#fcfcf8] px-4 py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          {payout.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    );
  }