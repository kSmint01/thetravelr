"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Leaf,
  Menu,
  X,
  ChevronDown,
  Camera,
  Globe,
  Compass,
  Map,
  Users,
  TrendingUp,
  BookOpen,
  Shield,
  Backpack,
  Mountain,
  Baby,
  UserCheck,
} from "lucide-react";
import WaitlistButton from "@/components/WaitlistButton";

/* ─── Announcement bar ─── */
function AnnouncementBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-forest-800 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center relative">
        <p className="text-center">
          <span className="font-semibold text-forest-200">New:</span>{" "}
          Travel Passport v2 is live — track every trail, summit &amp; country.{" "}
          <a
            href="#features"
            className="underline underline-offset-2 font-semibold hover:text-forest-200 transition-colors"
          >
            Explore features →
          </a>
        </p>
        <button
          onClick={onClose}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ─── Dropdown data ─── */
const platformItems = [
  {
    icon: Camera,
    label: "Capture Journeys",
    desc: "Document every step with photos, routes & stories",
    href: "#features",
  },
  {
    icon: Globe,
    label: "Share Stories",
    desc: "Publish to a global community of passionate travelers",
    href: "#features",
  },
  {
    icon: Compass,
    label: "Discover Hidden Gems",
    desc: "Find off-the-beaten-path spots curated by real travelers",
    href: "#features",
  },
  {
    icon: Map,
    label: "Travel Passport",
    desc: "Visualise countries visited, trails hiked & miles covered",
    href: "#features",
  },
  {
    icon: TrendingUp,
    label: "Trending Feed",
    desc: "Stay inspired with what the community is sharing today",
    href: "#journeys",
  },
  {
    icon: Shield,
    label: "Safe & Trusted",
    desc: "Real safety insights and traveler-to-traveler advisories",
    href: "#features",
  },
];

const travelersItems = [
  {
    icon: Backpack,
    label: "Solo Adventurers",
    desc: "Tips and stories from solo explorers worldwide",
    href: "#journeys",
  },
  {
    icon: Users,
    label: "Group Trips",
    desc: "Organise, share and relive group travel experiences",
    href: "#journeys",
  },
  {
    icon: Mountain,
    label: "Backpackers",
    desc: "Budget travel guides straight from the trail",
    href: "#journeys",
  },
  {
    icon: Baby,
    label: "Family Travel",
    desc: "Kid-friendly destination guides from real parents",
    href: "#journeys",
  },
];

const learnItems = [
  { icon: BookOpen, label: "Travel Blog", desc: "Stories, tips & guides", href: "#" },
  { icon: UserCheck, label: "Creator Guides", desc: "Grow your travel audience", href: "#" },
  { icon: Globe, label: "Destinations Wiki", desc: "Community-built destination info", href: "#" },
];

/* ─── Dropdown panel ─── */
function DropdownPanel({
  items,
  columns = 2,
}: {
  items: { icon: React.ElementType; label: string; desc: string; href: string }[];
  columns?: number;
}) {
  return (
    <div
      className={`grid gap-1 ${
        columns === 3 ? "grid-cols-3 w-135" : "grid-cols-2 w-110"
      }`}
    >
      {items.map(({ icon: Icon, label, desc, href }) => (
        <a
          key={label}
          href={href}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-50 transition-colors group"
        >
          <div className="w-9 h-9 shrink-0 rounded-lg bg-forest-100 flex items-center justify-center group-hover:bg-forest-200 transition-colors mt-0.5">
            <Icon className="w-4 h-4 text-forest-700" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-charcoal-900 text-sm font-semibold leading-tight mb-0.5 group-hover:text-forest-700 transition-colors">
              {label}
            </p>
            <p className="text-charcoal-400 text-xs leading-snug">{desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ─── Nav item with dropdown ─── */
function NavDropdown({
  label,
  children,
  isScrolled,
}: {
  label: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors px-4 py-1.5 rounded-lg ${
          isScrolled
            ? "text-charcoal-700 hover:text-forest-700"
            : "text-white/90 hover:text-white"
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="bg-white rounded-2xl shadow-xl shadow-charcoal-900/10 border border-charcoal-100 p-3">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Mobile accordion section ─── */
function MobileSection({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { icon: React.ElementType; label: string; desc: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl transition-colors duration-200 ${open ? "bg-sage-50" : ""}`}>
      <button
        className={`w-full flex items-center justify-between px-4 py-4 transition-colors ${
          open ? "text-forest-700" : "text-charcoal-800"
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[15px] font-semibold">{label}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
          open ? "bg-forest-100 rotate-180" : "bg-charcoal-100"
        }`}>
          <ChevronDown className={`w-4 h-4 ${open ? "text-forest-700" : "text-charcoal-500"}`} strokeWidth={2.5} />
        </div>
      </button>

      {open && (
        <div className="animate-accordion px-3 pb-3 grid grid-cols-2 gap-2">
          {items.map(({ icon: Icon, label: itemLabel, desc, href }) => (
            <a
              key={itemLabel}
              href={href}
              onClick={onClose}
              className="flex flex-col gap-2 p-3 bg-white rounded-xl border border-sage-100 active:scale-[0.97] transition-transform"
            >
              <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center">
                <Icon className="w-4 h-4 text-forest-700" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-charcoal-900 text-xs font-semibold leading-snug">{itemLabel}</p>
                <p className="text-charcoal-400 text-[11px] leading-snug mt-0.5 line-clamp-2">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navTextClass = scrolled
    ? "text-charcoal-700 hover:text-forest-700"
    : "text-white/90 hover:text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-17">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-forest-600 rounded-[10px] flex items-center justify-center shadow-sm group-hover:bg-forest-700 transition-colors">
              <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`text-[1.15rem] font-bold tracking-[-0.02em] transition-colors ${
                scrolled ? "text-charcoal-900" : "text-white"
              }`}
            >
              TheTravelr
            </span>
          </Link>

          {/* Desktop center nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdown label="Platform" isScrolled={scrolled}>
              <DropdownPanel items={platformItems} columns={2} />
            </NavDropdown>

            <NavDropdown label="For Travelers" isScrolled={scrolled}>
              <DropdownPanel items={travelersItems} columns={2} />
            </NavDropdown>

            <a
              href="#journeys"
              className={`text-sm font-medium px-4 py-1.5 rounded-lg transition-colors ${navTextClass}`}
            >
              Journeys
            </a>

            <NavDropdown label="Learn" isScrolled={scrolled}>
              <DropdownPanel items={learnItems} columns={3} />
            </NavDropdown>

            <Link
              href="/about"
              className={`text-sm font-medium px-4 py-1.5 rounded-lg transition-colors ${navTextClass}`}
            >
              About
            </Link>
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <WaitlistButton variant="green" size="sm" label="Get Early Access" />
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              menuOpen
                ? "bg-charcoal-100 text-charcoal-800"
                : scrolled
                ? "text-charcoal-700 hover:bg-charcoal-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="relative w-5 h-5 flex items-center justify-center">
              <Menu className={`w-5 h-5 absolute transition-all duration-200 ${menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
              <X    className={`w-5 h-5 absolute transition-all duration-200 ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-17 z-40 flex flex-col animate-menu-slide">
          {/* Scrollable nav area */}
          <div className="flex-1 bg-white overflow-y-auto">
            <div className="px-4 pt-3 pb-4 flex flex-col gap-1">

              {/* Accordion sections */}
              <MobileSection label="Platform"     items={platformItems}  onClose={() => setMenuOpen(false)} />
              <MobileSection label="For Travelers" items={travelersItems} onClose={() => setMenuOpen(false)} />

              {/* Flat links */}
              {[
                { label: "Journeys", href: "#journeys" },
                { label: "About",    href: "/about" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-[15px] font-semibold text-charcoal-800 hover:bg-sage-50 hover:text-forest-700 transition-colors"
                >
                  {label}
                  <ChevronDown className="w-4 h-4 text-charcoal-300 -rotate-90" strokeWidth={2.5} />
                </a>
              ))}

              <MobileSection label="Learn" items={learnItems} onClose={() => setMenuOpen(false)} />
            </div>
          </div>

          {/* Sticky bottom CTA panel */}
          <div className="bg-white border-t border-sage-100 px-4 pt-4 pb-6 flex flex-col gap-3">
            {/* Social proof */}
            <div className="flex items-center justify-center gap-3 mb-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-charcoal-500 text-xs font-medium">4.9 · 50K+ travelers</span>
            </div>

            {/* Buttons */}
            <WaitlistButton
              variant="green"
              size="md"
              label="Get Early Access"
              className="w-full justify-center shadow-lg shadow-forest-600/20"
            />
          </div>
        </div>
      )}
    </header>
  );
}
