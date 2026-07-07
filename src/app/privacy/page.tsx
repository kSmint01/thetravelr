import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — TheTravelr",
  description: "TheTravelr Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-forest-50 border-b border-forest-100 py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-forest-600 text-sm font-semibold tracking-widest uppercase mb-2">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-3">Privacy Policy</h1>
            <p className="text-charcoal-500 text-sm">Last updated: 1 July 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12 prose prose-charcoal">
          <div className="space-y-10 text-charcoal-600 leading-relaxed text-[15px]">

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">1. Introduction</h2>
              <p>
                TheTravelr (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our website (thetravelr.app) and
                mobile application (collectively, the &quot;Service&quot;). Please read this policy
                carefully. If you disagree with its terms, please discontinue use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Information you provide directly:</strong> email address, display name,
                  profile photo, travel journals, photos, and any other content you choose to share.
                </li>
                <li>
                  <strong>Account information:</strong> username, password (stored in hashed form),
                  and account preferences.
                </li>
                <li>
                  <strong>Usage data:</strong> pages visited, features used, interactions within
                  the app, and time spent on the Service.
                </li>
                <li>
                  <strong>Device information:</strong> device type, operating system version,
                  unique device identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Location data:</strong> approximate location (if you grant permission)
                  to provide location-relevant travel content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create and manage your account.</li>
                <li>Provide, operate, and improve the Service.</li>
                <li>Personalise your experience and surface relevant content.</li>
                <li>Communicate with you about updates, new features, and support.</li>
                <li>Ensure the safety and security of the community.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">4. Sharing of Information</h2>
              <p className="mb-3">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>With service providers:</strong> trusted third-party vendors who assist
                  us in operating the Service (e.g. cloud hosting, analytics, email delivery),
                  subject to confidentiality obligations.
                </li>
                <li>
                  <strong>Public content:</strong> travel journals, photos, and profiles you mark
                  as public are visible to other users of the Service.
                </li>
                <li>
                  <strong>Legal requirements:</strong> when required by law, court order, or
                  governmental authority.
                </li>
                <li>
                  <strong>Business transfers:</strong> in connection with a merger, acquisition, or
                  sale of assets, with appropriate confidentiality protections.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as
                needed to provide you the Service. You may request deletion of your account and
                associated data at any time by contacting us at{" "}
                <a href="mailto:admin@thetravelr.app" className="text-forest-600 underline">
                  admin@thetravelr.app
                </a>
                . Some data may be retained for a limited period as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">6. Security</h2>
              <p>
                We implement industry-standard technical and organisational measures to protect
                your information against unauthorised access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">7. Children&apos;s Privacy</h2>
              <p>
                The Service is not directed to children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you believe a child under
                13 has provided us with personal information, please contact us and we will delete
                it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">8. Your Rights</h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>Request deletion of your personal information.</li>
                <li>Object to or restrict processing of your information.</li>
                <li>Data portability — receive your data in a machine-readable format.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:admin@thetravelr.app" className="text-forest-600 underline">
                  admin@thetravelr.app
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">9. Cookies</h2>
              <p>
                Our website uses essential cookies to operate correctly. We may use analytics
                cookies to understand how users interact with the site. You can control cookie
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by posting the new policy on this page and updating the
                &quot;Last updated&quot; date. Your continued use of the Service after changes become
                effective constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 bg-forest-50 border border-forest-100 rounded-xl p-5 text-sm">
                <p className="font-semibold text-charcoal-900 mb-1">TheTravelr</p>
                <p>
                  Email:{" "}
                  <a href="mailto:admin@thetravelr.app" className="text-forest-600 underline">
                    admin@thetravelr.app
                  </a>
                </p>
                <p>Website: thetravelr.app</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
