import { Layers, Globe, Smartphone, Calendar } from "lucide-react";

const stats = [
  {
    icon: Layers,
    value: "6",
    label: "Core Features",
    sub: "built and ready for launch",
  },
  {
    icon: Globe,
    value: "180+",
    label: "Countries Supported",
    sub: "destinations ready to explore",
  },
  {
    icon: Smartphone,
    value: "Android",
    label: "Native App",
    sub: "launching on Google Play",
  },
  {
    icon: Calendar,
    value: "2026",
    label: "Founded",
    sub: "built for the next generation of travelers",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-forest-300 text-sm font-semibold tracking-widest uppercase mb-3">
            What We&apos;re Building
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A Platform Built for Real Adventurers
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/15 transition-colors">
                <Icon className="w-6 h-6 text-forest-200" strokeWidth={1.8} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
                {value}
              </div>
              <div className="text-forest-100 font-semibold text-base mb-1">
                {label}
              </div>
              <div className="text-forest-300/70 text-sm">{sub}</div>
            </div>
          ))}
        </div>

        {/* Founder quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-forest-100/80 text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;We&apos;re building TheTravelr because the world&apos;s best
            travel stories deserve a better home than a generic social
            feed.&rdquo;
          </blockquote>
          <cite className="text-forest-300 text-sm mt-3 block not-italic font-medium">
            — Dipprokash Sardar, Founder of TheTravelr
          </cite>
        </div>
      </div>
    </section>
  );
}
