import Image from "next/image";

function PlayStoreBadge({ size = "default" }: { size?: "default" | "large" }) {
  const isLarge = size === "large";
  return (
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-charcoal-900 hover:bg-charcoal-800 text-white rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-charcoal-900/30 hover:-translate-y-0.5 active:scale-95 ${
        isLarge ? "px-8 py-5" : "px-6 py-3.5"
      }`}
    >
      <svg
        className={isLarge ? "w-8 h-8" : "w-7 h-7"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.18 1.5C2.78 1.73 2.5 2.16 2.5 2.65v18.7c0 .49.28.92.68 1.15l.1.05L13.5 12 3.28 1.45l-.1.05z" fill="#4FC3F7" />
        <path d="M17.25 8.25L13.5 12l3.75 3.75 4.18-2.41a1.28 1.28 0 000-2.18L17.25 8.25z" fill="#FFB300" />
        <path d="M13.5 12L3.18 22.5c.14.08.29.13.46.13.26 0 .51-.08.72-.22l11.38-6.56L13.5 12z" fill="#F44336" />
        <path d="M13.5 12L15.74 9.75 4.36 3.09C4.15 2.95 3.9 2.87 3.64 2.87c-.17 0-.32.05-.46.13L13.5 12z" fill="#4CAF50" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`text-white/60 font-medium tracking-wide uppercase ${isLarge ? "text-xs" : "text-[10px]"}`}>
          Get it on
        </span>
        <span className={`font-bold tracking-tight ${isLarge ? "text-xl" : "text-base"}`}>
          Google Play
        </span>
      </div>
    </a>
  );
}

export default function CTASection() {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-forest-50 to-mint-100 rounded-[2.5rem] overflow-hidden border border-forest-100">
          {/* Background image accent */}
          <div className="absolute inset-0 opacity-[0.07]">
            <Image
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&q=60"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              aria-hidden="true"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-forest-200/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-mint-200/50 rounded-full blur-2xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 md:p-16">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 bg-white/80 rounded-full border border-forest-100">
                Free to Download
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.05] mb-5">
                Your Next{" "}
                <span className="text-forest-600">Adventure</span>
                <br />
                Starts Here.
              </h2>
              <p className="text-charcoal-500 text-lg leading-relaxed mb-8 max-w-xl">
                Download TheTravelr for free and join a vibrant community of
                explorers. Post your first journey today and inspire thousands
                of fellow travelers.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <PlayStoreBadge size="large" />
                <div className="flex flex-col justify-center gap-1.5">
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-sm">
                    <svg className="w-4 h-4 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Completely free, no ads
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-sm">
                    <svg className="w-4 h-4 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Join in under 60 seconds
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-sm">
                    <svg className="w-4 h-4 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    50,000+ travelers already inside
                  </div>
                </div>
              </div>
            </div>

            {/* Right: visual card */}
            <div className="flex-shrink-0 lg:w-80">
              <div className="relative w-72 mx-auto">
                {/* Phone mockup cards */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-forest-900/15 border border-sage-100 overflow-hidden">
                  <div className="h-44 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                      alt="Mountains journey preview"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-sm">Swiss Alps Traverse</p>
                      <p className="text-xs text-white/70">by Marco B.</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-forest-600 bg-forest-50 px-2.5 py-1 rounded-full">
                        🏔️ Hiking
                      </span>
                      <div className="flex items-center gap-1 text-charcoal-400 text-xs">
                        <svg className="w-3.5 h-3.5 text-rose-400 fill-rose-400" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        4.2k
                      </div>
                    </div>
                    <p className="text-charcoal-600 text-xs leading-relaxed">
                      A breathtaking 8-day journey across the most scenic
                      alpine trails Europe has to offer...
                    </p>
                    <div className="mt-3 h-1.5 bg-sage-100 rounded-full">
                      <div className="h-full w-4/5 bg-forest-400 rounded-full" />
                    </div>
                    <p className="text-charcoal-400 text-xs mt-1">82% journey complete</p>
                  </div>
                </div>

                {/* Floating notification */}
                <div className="absolute -top-4 -right-6 bg-white border border-sage-100 rounded-2xl shadow-xl p-3 flex items-center gap-2.5 w-48 animate-float">
                  <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    🌟
                  </div>
                  <div>
                    <p className="text-charcoal-900 text-xs font-semibold leading-tight">
                      New follower!
                    </p>
                    <p className="text-charcoal-400 text-[10px]">
                      Elena loved your post
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
