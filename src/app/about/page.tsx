import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Mail, MapPin, Globe, Heart, Users, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistButton from "@/components/WaitlistButton";

export const metadata: Metadata = {
  title: "About Us — TheTravelr",
  description:
    "Learn about TheTravelr — the community platform being built for passionate travelers to share journeys, discover hidden gems, and connect worldwide.",
};

const values = [
  {
    icon: Heart,
    title: "Community First",
    body: "Every feature we build starts with a single question: does this make the traveler community stronger? Real connection beats algorithm-driven feeds every time.",
  },
  {
    icon: Compass,
    title: "Authentic Discovery",
    body: "We believe the best travel advice comes from fellow adventurers, not sponsored listicles. Our platform puts real traveler experiences at the center of discovery.",
  },
  {
    icon: Globe,
    title: "Open to Everyone",
    body: "Whether you're a budget backpacker or a luxury explorer, a solo adventurer or a family of five — TheTravelr is built for every kind of journey.",
  },
  {
    icon: Users,
    title: "Built in the Open",
    body: "We share our progress, listen to early users, and build the product our community actually needs. You shape TheTravelr as much as we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-forest-900 to-forest-700 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-forest-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We&apos;re Building the World&apos;s Most Authentic Travel Community
            </h1>
            <p className="text-forest-100/80 text-lg leading-relaxed">
              TheTravelr started with a simple frustration: travel platforms were
              built for advertisers, not adventurers. We set out to build
              something different — a home for genuine travel stories, honest
              destination guides, and real connections between people who love to
              explore.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-forest-50 rounded-full border border-forest-100">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-4 mb-5 leading-tight">
                  Make every journey worth sharing
                </h2>
                <p className="text-charcoal-500 leading-relaxed mb-4">
                  We&apos;re building a mobile-first platform where travelers can
                  document their adventures in rich detail, share them with a
                  community of like-minded explorers, and inspire the next wave
                  of wanderers to step off the beaten path.
                </p>
                <p className="text-charcoal-500 leading-relaxed">
                  TheTravelr is currently in development and launching soon on
                  Google Play. We&apos;re building it carefully — because the
                  world deserves a travel app that puts people before profit.
                </p>
              </div>
              <div className="bg-forest-50 rounded-3xl p-8 border border-forest-100">
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Founded", value: "2024" },
                    { label: "Stage", value: "Pre-launch" },
                    { label: "Platform", value: "Android (Google Play)" },
                    { label: "Contact", value: "admin@thetravelr.app" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center border-b border-forest-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-charcoal-500 text-sm">{label}</span>
                      <span className="text-charcoal-900 font-semibold text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-sage-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white rounded-full border border-forest-100">
                What We Believe
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-4">
                Our Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-7 border border-sage-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-11 h-11 bg-forest-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">{title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4">Get in Touch</h2>
            <p className="text-charcoal-500 mb-8 leading-relaxed">
              Have a question, a partnership idea, or just want to say hello? We&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:admin@thetravelr.app"
                className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg text-sm"
              >
                <Mail className="w-4 h-4" />
                admin@thetravelr.app
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-charcoal-500 hover:text-forest-700 font-medium text-sm transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-forest-800 to-forest-700">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Be first to explore TheTravelr
            </h2>
            <p className="text-forest-200/80 text-sm mb-6">
              Join the waitlist and get early access when we launch on Google Play.
            </p>
            <WaitlistButton variant="white" size="md" label="Join the Waitlist" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
