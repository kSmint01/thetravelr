import { Leaf, Mail, MapPin, Share2, MessageCircle, Globe } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Trending Journeys", "Community", "Changelog"],
  Explore: ["Destinations", "Top Travelers", "Hidden Gems", "Travel Tips"],
  Company: ["About Us", "Blog", "Careers", "Press Kit"],
  Support: ["Help Center", "Privacy Policy", "Terms of Service", "Contact"],
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-forest-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                TheTravelr
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs mb-6">
              The community platform for passionate travelers. Share your
              journeys, discover hidden gems, and connect with explorers
              worldwide.
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
                Available worldwide on Google Play
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
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-charcoal-400 hover:text-forest-300 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA strip */}
        <div className="border-t border-charcoal-800 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-forest-700 hover:bg-forest-600 text-white px-5 py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M3.18 1.5C2.78 1.73 2.5 2.16 2.5 2.65v18.7c0 .49.28.92.68 1.15l.1.05L13.5 12 3.28 1.45l-.1.05z" fill="#4FC3F7" />
                <path d="M17.25 8.25L13.5 12l3.75 3.75 4.18-2.41a1.28 1.28 0 000-2.18L17.25 8.25z" fill="#FFB300" />
                <path d="M13.5 12L3.18 22.5c.14.08.29.13.46.13.26 0 .51-.08.72-.22l11.38-6.56L13.5 12z" fill="#F44336" />
                <path d="M13.5 12L15.74 9.75 4.36 3.09C4.15 2.95 3.9 2.87 3.64 2.87c-.17 0-.32.05-.46.13L13.5 12z" fill="#4CAF50" />
              </svg>
              Download on Google Play
            </a>
          </div>

          <p className="text-charcoal-500 text-sm text-center">
            © {currentYear} TheTravelr. All rights reserved. Made with 🌿 for
            wanderers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
