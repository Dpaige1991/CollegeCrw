export const metadata = {
  title: "Terms & Conditions | College Crw",
  description: "Terms and conditions for College Crw travelers and website users.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20 text-[var(--brand-navy)]">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Terms & Conditions
      </h1>

      <p className="mt-6 text-lg leading-8 text-[var(--brand-teal)]">
        Please review these Terms & Conditions carefully before booking or using
        College Crw services.
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-extrabold">1. Eligibility</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Participants must meet the following requirements:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Travelers must be 18 years or older to book a trip.</li>
              <li>
                Certain trips may require travelers to be 21+ depending on
                destination or resort.
              </li>
              <li>
                Travelers under 18 must be accompanied by a parent or legal
                guardian.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">2. Booking &amp; Payment Terms</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <ul className="list-disc space-y-2 pl-6">
              <li>A deposit may be required to secure your spot.</li>
              <li>Payment plans may be available depending on the trip.</li>
              <li>Final payment is typically due 90 days before travel.</li>
            </ul>

            <p>Failure to pay on time may result in:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Cancellation of your reservation.</li>
              <li>Loss of payments depending on supplier policies.</li>
            </ul>

            <p>
              Travelers are responsible for reviewing all deadlines in their
              booking confirmation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">3. Travel Suppliers</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>College CRW works with third-party providers including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hotels &amp; Resorts</li>
              <li>Airlines</li>
              <li>Transportation Providers</li>
              <li>Cruise Lines</li>
              <li>Tour Operators</li>
            </ul>

            <p>These suppliers operate independently.</p>
            <p>
              College CRW is not responsible for delays, cancellations, or
              service issues caused by third parties.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">4. Assumption of Risk</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>Travel involves risks including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Flight delays or cancellations</li>
              <li>Weather conditions</li>
              <li>Health or political restrictions</li>
              <li>Injury or illness</li>
            </ul>

            <p>
              By booking, travelers acknowledge and accept these risks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">5. Force Majeure</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              College CRW is not responsible for events beyond our control,
              including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Natural disasters</li>
              <li>Pandemics</li>
              <li>Government restrictions</li>
              <li>Airline disruptions</li>
              <li>Civil unrest</li>
              <li>Weather conditions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">
            6. Website Content &amp; Intellectual Property
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              All branding, logos, and content are owned by College CRW.
            </p>
            <p>
              They may not be copied, reused, or reproduced without permission.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">
            7. Arbitration &amp; Dispute Resolution
          </h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>All disputes will be resolved through binding arbitration.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Location: Williamson County, Texas, USA</li>
              <li>Governed by the American Arbitration Association (AAA)</li>
            </ul>

            <p>Participants waive rights to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Jury trials</li>
              <li>Class action lawsuits</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">8. Changes to Terms</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>College CRW may update these Terms at any time.</p>
            <p>
              Continued use of services = acceptance of updated Terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">9. Contact</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>For questions:</p>
            <p className="font-semibold text-[var(--brand-navy)]">
              Email: info@collegecrw.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}