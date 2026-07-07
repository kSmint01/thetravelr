import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Mail, MapPin, Globe, Heart, Users, Compass, Camera, Map, Smartphone, Server, DollarSign } from "lucide-react";
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
                  TheTravelr is a native Android app and community platform that
                  lets travelers document their journeys, share them with a global
                  audience, and discover authentic destinations recommended by real
                  people — not algorithms.
                </p>
                <p className="text-charcoal-500 leading-relaxed">
                  The app is currently in active development, with a planned launch
                  on Google Play. It is built on scalable cloud infrastructure to
                  support a global community of travelers from day one.
                </p>
              </div>
              <div className="bg-forest-50 rounded-3xl p-8 border border-forest-100">
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Founded", value: "2026" },
                    { label: "Industry", value: "Travel Technology" },
                    { label: "Stage", value: "Pre-launch" },
                    { label: "Location", value: "Remote (Global)" },
                    { label: "Platform", value: "Android (Google Play)" },
                    { label: "Founder", value: "Dipprokash Sardar" },
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

        {/* Product */}
        <section className="py-20 px-6 bg-sage-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white rounded-full border border-forest-100">
                The Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-4 mb-4">
                What TheTravelr Does
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
                A native Android app that gives travelers a dedicated space to document,
                share, and discover authentic travel experiences — powered by
                community, not algorithms.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: "Journey Journal",
                  body: "Travelers document trips with photos, written notes, routes, and personal tips — creating a rich, shareable travel story rather than a simple photo dump.",
                },
                {
                  icon: Map,
                  title: "Discovery Feed",
                  body: "A community-curated feed of real journeys, filtered by destination, activity type, or travel style. Content ranked by genuine community engagement.",
                },
                {
                  icon: Smartphone,
                  title: "Travel Passport",
                  body: "A personal profile that tracks every country visited, trail hiked, and milestone reached — giving travelers a visual record of their adventures over time.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-sage-100 hover:shadow-lg transition-shadow duration-300">
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

        {/* Founder */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-forest-50 rounded-full border border-forest-100">
                The Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-4">
                Who&apos;s Building This
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-forest-50 rounded-3xl p-10 border border-forest-100">
              <div className="w-24 h-24 rounded-full bg-forest-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                DS
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-1">Dipprokash Sardar</h3>
                <p className="text-forest-600 font-semibold text-sm mb-4">Founder &amp; Builder</p>
                <p className="text-charcoal-500 leading-relaxed">
                  Dipprokash founded TheTravelr to solve a problem he experienced firsthand:
                  the best travel stories are scattered across generic social platforms where
                  they get buried by unrelated content. TheTravelr is his answer — a focused,
                  community-first platform where every feature exists to serve the traveler.
                  He is building the full product, from the Android app to the cloud backend,
                  with a planned launch on Google Play.
                </p>
                <a
                  href="mailto:admin@thetravelr.app"
                  className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 font-medium text-sm mt-4 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  admin@thetravelr.app
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Infrastructure */}
        <section className="py-20 px-6 bg-sage-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white rounded-full border border-forest-100">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-4 mb-4">
                Built on Google Cloud
              </h2>
              <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
                TheTravelr is built entirely on Google Cloud Platform infrastructure,
                designed to scale from day one to a global user base.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Server,
                  title: "Cloud-Native Backend",
                  body: "Our backend APIs and data pipelines run on Google Cloud, using Firebase for real-time data sync, Cloud Storage for media, and Cloud Run for scalable serverless compute.",
                },
                {
                  icon: Globe,
                  title: "Global Scale by Design",
                  body: "Content delivery, user authentication, and analytics are powered by GCP services — ensuring low latency for travelers in every corner of the world.",
                },
                {
                  icon: Smartphone,
                  title: "Android-First",
                  body: "The native Android app integrates directly with Google Play services, Maps SDK, and Firebase, keeping the full stack tightly aligned with the Google ecosystem.",
                },
                {
                  icon: DollarSign,
                  title: "Business Model",
                  body: "TheTravelr operates on a freemium model — the core community features are free, with a premium subscription unlocking advanced journey analytics, offline access, and exclusive travel badges.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-sage-100 hover:shadow-lg transition-shadow duration-300">
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

        {/* Values */}
        <section className="py-20 px-6 bg-white">
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
