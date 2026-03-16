export const metadata = {
    title: "Trip Policies | College Crw",
    description: "Trip policies for College Crw travelers.",
  };
  
  export default function TripPoliciesPage() {
    return (
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-tight">Trip Policies</h1>
  
        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold">1. Availability</h2>
            <p className="mt-3">
              All trips are subject to availability and may be limited by destination, season, hotel space, or group capacity.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold">2. Pricing</h2>
            <p className="mt-3">
              Displayed pricing is subject to change until a booking is confirmed. Final pricing may depend on dates, occupancy, and group size.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold">3. Age-Related Restrictions</h2>
            <p className="mt-3">
              Some activities, venues, or destinations may require travelers to be 21+. Travelers are responsible for complying with all age-related requirements.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold">4. Conduct</h2>
            <p className="mt-3">
              Travelers are expected to act responsibly and follow destination rules, hotel policies, local laws, and event requirements.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold">5. Changes and Cancellations</h2>
            <p className="mt-3">
              Cancellation terms, refund eligibility, and booking changes may depend on the destination, supplier, and final booking terms shared at confirmation.
            </p>
          </section>
        </div>
      </main>
    );
  }