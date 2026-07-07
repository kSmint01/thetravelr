import Image from "next/image";
import { MapPin, ChevronDown, Smartphone, Star } from "lucide-react";
import WaitlistButton from "@/components/WaitlistButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=85"
          alt="Lush green mountain landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-forest-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-forest-400/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column — text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-forest-300 animate-pulse" />
            Launching Soon on Google Play
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Share Your{" "}
            <span className="text-forest-300">Journey.</span>
            <br />
            Inspire the{" "}
            <span className="relative inline-block">
              World.
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-forest-400 rounded-full opacity-70" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
            TheTravelr is where adventurers document their paths, share
            breathtaking moments, and discover trails others haven&apos;t
            mapped yet.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <WaitlistButton variant="gradient" size="md" label="Get Early Access" />
            <a
              href="#journeys"
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors group"
            >
              Explore journeys
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Smartphone className="w-4 h-4 text-forest-300" />
              Android · Google Play
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Star className="w-4 h-4 text-forest-300" />
              6 core features built
            </div>
          </div>
        </div>

        {/* Right column — app preview cards */}
        <div className="hidden lg:flex flex-col gap-4 items-end">
          <div className="animate-float" style={{ animationDelay: "0s" }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-400/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-forest-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Journey Journal</p>
                  <p className="text-white font-semibold text-sm">
                    Document every trip
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Photos, routes, tips and stories — all in one place, beautifully organised.
              </p>
            </div>
          </div>

          <div className="animate-float" style={{ animationDelay: "1.5s", marginRight: "2rem" }}>
            <div className="bg-forest-600/90 backdrop-blur-md border border-forest-400/30 rounded-2xl p-5 w-56">
              <p className="text-forest-100 text-xs font-medium mb-1">
                Discovery Feed
              </p>
              <p className="text-white font-bold text-lg">🌍 Explore Anywhere</p>
              <p className="text-forest-200/70 text-xs mt-2 leading-relaxed">
                Real journeys from real travelers — 180+ countries covered.
              </p>
            </div>
          </div>

          <div className="animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-52">
              <p className="text-white/60 text-xs mb-1">Travel Passport</p>
              <p className="text-white font-bold text-sm">Track your adventures</p>
              <p className="text-forest-300 text-xs mt-1">Countries · trails · milestones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
