export const metadata = {
  title: "Privacy Policy | College Crw",
  description: "Privacy Policy for College Crw website visitors and travelers.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20 text-[var(--brand-navy)]">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Privacy Policy
      </h1>

      <p className="mt-6 text-lg leading-8 text-[var(--brand-teal)]">
        College Crw respects your privacy and is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use,
        and protect information submitted through our website.
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-extrabold">1. Information We Collect</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>We may collect information such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>School or university name</li>
              <li>Group size</li>
              <li>Destination interests</li>
              <li>Travel preferences and notes</li>
              <li>Whether members of your crew are 21 or older</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">2. How We Use Information</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>We may use your information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to trip inquiries</li>
              <li>Help plan and coordinate travel</li>
              <li>Send trip-related updates</li>
              <li>Contact you about bookings, referrals, or promotions</li>
              <li>Improve our website, services, and customer experience</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">3. Sharing of Information</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              We do not sell your personal information. We may share information
              with trusted third parties only when needed to support trip planning,
              bookings, payments, transportation, accommodations, or related services.
            </p>
            <p>
              We may also share information when required by law or when necessary
              to protect our rights, travelers, or business operations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">4. Third-Party Services</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              Our website may use third-party tools and services such as email
              providers, payment platforms, analytics tools, booking partners,
              or Google Sheets integrations.
            </p>
            <p>
              These third parties may collect or process information according to
              their own privacy policies.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">5. Cookies and Analytics</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              We may use cookies, local storage, and analytics tools to improve
              site performance, remember user preferences, and better understand
              how visitors use our website.
            </p>
            <p>
              This information may include browser type, device information, pages
              visited, and general website activity.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">6. Data Security</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              We take reasonable measures to protect personal information from
              unauthorized access, disclosure, or misuse.
            </p>
            <p>
              However, no online system can guarantee complete security, and users
              submit information at their own risk.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">7. Data Retention</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              We keep personal information only as long as necessary for business,
              travel planning, legal, or operational purposes.
            </p>
            <p>
              We may remove or anonymize information when it is no longer needed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">8. Your Choices</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>You may request to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Update your information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of submitted information</li>
              <li>Opt out of promotional emails</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">9. Children’s Privacy</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              College Crw services are generally intended for adults and older
              student travelers. Travelers under 18 must be accompanied by a parent
              or legal guardian where applicable.
            </p>
            <p>
              We do not knowingly collect personal information from children in
              violation of applicable law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">10. Changes to This Policy</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>
              College Crw may update this Privacy Policy at any time.
            </p>
            <p>
              Continued use of our website or services after updates means you
              accept the revised policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">11. Contact</h2>
          <div className="mt-4 space-y-3 leading-7 text-[var(--brand-teal)]">
            <p>If you have questions about this Privacy Policy, contact:</p>
            <p className="font-semibold text-[var(--brand-navy)]">
              Email: collegecrewinfo@gmail.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}