import { Download, Map, Globe, Users } from "lucide-react";

const stats = [
  {
    icon: Download,
    value: "50K+",
    label: "App Downloads",
    sub: "and growing every day",
  },
  {
    icon: Map,
    value: "120K+",
    label: "Journeys Shared",
    sub: "from every continent",
  },
  {
    icon: Globe,
    value: "180+",
    label: "Countries Covered",
    sub: "no corner left unexplored",
  },
  {
    icon: Users,
    value: "35K+",
    label: "Active Travelers",
    sub: "posting stories monthly",
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
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A Community Built on Real Adventures
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="text-center group"
            >
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

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-forest-100/80 text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;TheTravelr changed how I document and share my adventures.
            It&apos;s the only app that truly understands the wanderer&apos;s soul.&rdquo;
          </blockquote>
          <cite className="text-forest-300 text-sm mt-3 block not-italic font-medium">
            — Maya L., 🌍 Traveled to 47 countries
          </cite>
        </div>
      </div>
    </section>
  );
}
