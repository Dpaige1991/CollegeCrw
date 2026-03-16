export const metadata = {
  title: "Terms & Conditions | College Crw",
  description: "Terms and conditions for using College Crw.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-extrabold tracking-tight">Terms & Conditions</h1>

      <div className="mt-8 space-y-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-bold">1. General Use</h2>
          <p className="mt-3">
            By using College Crw, you agree to provide accurate information and use the platform only for lawful travel inquiry and booking-related purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Trip Requests</h2>
          <p className="mt-3">
            Submitting a request does not guarantee a reservation, booking, pricing, or availability until confirmed by College Crw.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Age Information</h2>
          <p className="mt-3">
            Users are responsible for accurately stating whether members of their crew are 21 or older when requested for trip planning purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Changes</h2>
          <p className="mt-3">
            Trip options, prices, inclusions, and availability may change without notice until confirmed.
          </p>
        </section>
      </div>
    </main>
  );
}