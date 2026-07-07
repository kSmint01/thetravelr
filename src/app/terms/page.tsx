import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — TheTravelr",
  description: "TheTravelr Terms of Service — the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-forest-50 border-b border-forest-100 py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-forest-600 text-sm font-semibold tracking-widest uppercase mb-2">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-3">Terms of Service</h1>
            <p className="text-charcoal-500 text-sm">Last updated: 1 July 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="space-y-10 text-charcoal-600 leading-relaxed text-[15px]">

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using TheTravelr (&quot;the Service&quot;), including our website at
                thetravelr.app and our mobile application, you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">2. Description of Service</h2>
              <p>
                TheTravelr is a community platform that enables users to document, share, and
                discover travel experiences. Features include journey journaling, photo sharing,
                community interaction, destination discovery, and travel tracking. The Service is
                available via our website and an Android mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">3. Eligibility</h2>
              <p>
                You must be at least 13 years of age to use the Service. By using the Service, you
                represent and warrant that you meet this requirement. If you are under 18, you
                represent that you have your parent or guardian&apos;s permission to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">4. User Accounts</h2>
              <p className="mb-3">When you create an account, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate, current, and complete information.</li>
                <li>Maintain the security of your password and account.</li>
                <li>Promptly notify us of any unauthorised use of your account.</li>
                <li>Accept responsibility for all activities that occur under your account.</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. User Content</h2>
              <p className="mb-3">
                You retain ownership of any content you submit to the Service (&quot;User Content&quot;).
                By submitting User Content, you grant TheTravelr a worldwide, non-exclusive,
                royalty-free licence to use, reproduce, modify, adapt, publish, and display that
                content for the purposes of operating and improving the Service.
              </p>
              <p>You represent and warrant that your User Content:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Is accurate and does not mislead other users.</li>
                <li>Does not infringe any third-party intellectual property rights.</li>
                <li>Does not contain unlawful, harmful, offensive, or inappropriate material.</li>
                <li>Complies with all applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">6. Prohibited Conduct</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the Service for any unlawful purpose or in violation of these Terms.</li>
                <li>Harass, abuse, or harm another person or group.</li>
                <li>Impersonate any person or entity, or falsely state an affiliation.</li>
                <li>Post spam, unsolicited messages, or advertising without permission.</li>
                <li>Attempt to gain unauthorised access to any part of the Service.</li>
                <li>Use automated means to scrape, crawl, or extract data from the Service.</li>
                <li>Distribute viruses or any other harmful technology.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">7. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding User Content), features, and
                functionality are and will remain the exclusive property of TheTravelr and its
                licensors. Our trademarks and trade dress may not be used in connection with any
                product or service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">8. Disclaimers</h2>
              <p>
                The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of
                any kind, either express or implied. We do not warrant that the Service will be
                uninterrupted, error-free, or free of viruses. Travel information shared by users
                represents their personal experiences and opinions; always verify safety and entry
                requirements from official sources before travelling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, TheTravelr shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages, including
                loss of profits, data, or goodwill, arising from your use of or inability to use the
                Service, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">10. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service at our sole
                discretion, without prior notice or liability, for any reason, including if you
                breach these Terms. Upon termination, your right to use the Service will immediately
                cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of
                material changes by posting the updated Terms on this page and updating the
                &quot;Last updated&quot; date. Your continued use of the Service after changes take effect
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable law.
                Any disputes arising under these Terms shall be resolved through good-faith
                negotiation or, if necessary, binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal-900 mb-3">13. Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us:
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
