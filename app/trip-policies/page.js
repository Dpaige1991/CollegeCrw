export const metadata = {
  title: "Trip Policies | College Crw",
  description: "Trip policies for College Crw travelers.",
};

export default function TripPoliciesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20 text-[var(--brand-navy)]">
      <h1 className="text-5xl font-extrabold tracking-tight">
        College CRW – Trip Policies
      </h1>

      <p className="mt-6 text-lg leading-8 text-[var(--brand-teal)]">
        Please review the following policies before booking or participating in
        a College Crw trip.
      </p>

      <div className="mt-10 space-y-10">
        {/* 1 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            1. Roommate Responsibility
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Many trips are priced based on shared rooms.</p>

            <p>If a roommate cancels or fails to pay:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Remaining travelers may be responsible for the balance.</li>
              <li>Pricing may adjust based on occupancy.</li>
            </ul>

            <p>Travelers should confirm roommates before booking.</p>
          </div>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            2. Travel Protection Policy
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              Travel insurance is not required but strongly recommended.
            </p>

            <p>Coverage may include:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Illness or injury</li>
              <li>Trip cancellations</li>
              <li>Delays</li>
              <li>Lost baggage</li>
            </ul>

            <p>
              Travelers who decline insurance accept full financial
              responsibility for any losses.
            </p>
          </div>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-extrabold">3. Flights Policy</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Flights are not included unless stated.</p>
            <p>Travelers must book their own airfare.</p>

            <p>Benefits of booking your own flight:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Travel with friends</li>
              <li>Use rewards points</li>
              <li>Choose preferred airlines</li>
            </ul>

            <p>
              Group flights (10+ travelers) may be available upon request.
            </p>
          </div>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            4. Transfers &amp; Transportation Policy
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Available options may include:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Shared transfers</li>
              <li>Private transportation</li>
              <li>Group vans</li>
            </ul>

            <p>Requests should be made 45 days before travel.</p>
            <p>Some resorts may offer complimentary transfers.</p>
          </div>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            5. Traveler Conduct Policy
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Travelers must:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Follow all local laws</li>
              <li>Respect staff and other travelers</li>
              <li>Follow resort rules</li>
            </ul>

            <p>
              College CRW may remove travelers without refund for:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Dangerous behavior</li>
              <li>Illegal activity</li>
              <li>Disruptions</li>
              <li>Property damage</li>
            </ul>
          </div>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            6. Alcohol &amp; Party Policy
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Follow local drinking laws.</p>
            <p>Drink responsibly.</p>
            <p>Respect resort policies.</p>

            <p className="font-bold text-[var(--brand-orange)]">
              🚫 Illegal substances are strictly prohibited.
            </p>

            <p>
              Violations may result in removal from the trip without refund.
            </p>
          </div>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-extrabold">
            7. Missed Flights &amp; Late Arrivals Policy
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>College CRW is not responsible for:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Missed flights</li>
              <li>Late arrivals</li>
              <li>Missed hotel check-ins</li>
            </ul>

            <p>
              Travelers are responsible for any additional costs.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}