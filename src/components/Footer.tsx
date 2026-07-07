import Link from "next/link";
import { Leaf, Mail, MapPin, Share2, MessageCircle, Globe } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Trending Journeys", href: "/#journeys" },
    { label: "Community", href: "/#community" },
    { label: "Changelog", href: "#" },
  ],
  Explore: [
    { label: "Destinations", href: "#" },
    { label: "Top Travelers", href: "#" },
    { label: "Hidden Gems", href: "#" },
    { label: "Travel Tips", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "mailto:admin@thetravelr.app" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-forest-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                TheTravelr
              </span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs mb-6">
              The community platform for passionate travelers. Share your
              journeys, discover hidden gems, and connect with explorers
              worldwide. Launching soon on Google Play.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:admin@thetravelr.app"
                className="flex items-center gap-2.5 text-charcoal-400 hover:text-forest-300 transition-colors group"
              >
                <Mail className="w-4 h-4 text-forest-500 group-hover:text-forest-300 transition-colors" />
                admin@thetravelr.app
              </a>
              <div className="flex items-center gap-2.5 text-charcoal-400">
                <MapPin className="w-4 h-4 text-forest-500" />
                Launching worldwide on Google Play
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Share2, label: "Instagram" },
                { icon: MessageCircle, label: "Twitter / X" },
                { icon: Globe, label: "Website" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-forest-300 hover:border-forest-700 hover:bg-charcoal-700 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      {href.startsWith("mailto:") || href.startsWith("http") ? (
                        <a
                          href={href}
                          className="text-charcoal-400 hover:text-forest-300 text-sm transition-colors"
                        >
                          {label}
                        </a>
                      ) : href === "#" ? (
                        <span className="text-charcoal-600 text-sm cursor-default">
                          {label}
                        </span>
                      ) : (
                        <Link
                          href={href}
                          className="text-charcoal-400 hover:text-forest-300 text-sm transition-colors"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-charcoal-800 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="text-charcoal-500 hover:text-forest-300 transition-colors">
              Privacy
            </Link>
            <span className="text-charcoal-700">·</span>
            <Link href="/terms" className="text-charcoal-500 hover:text-forest-300 transition-colors">
              Terms
            </Link>
            <span className="text-charcoal-700">·</span>
            <Link href="/about" className="text-charcoal-500 hover:text-forest-300 transition-colors">
              About
            </Link>
          </div>
          <p className="text-charcoal-500 text-sm text-center">
            © {currentYear} TheTravelr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
