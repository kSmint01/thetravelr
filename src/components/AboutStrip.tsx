import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default function AboutStrip() {
  return (
    <section className="py-16 px-6 bg-forest-50 border-y border-forest-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-14 h-14 rounded-2xl bg-forest-600 flex items-center justify-center flex-shrink-0">
          <Leaf className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-charcoal-900 mb-2">
            About TheTravelr
          </h2>
          <p className="text-charcoal-500 leading-relaxed text-sm max-w-2xl">
            TheTravelr is a travel technology startup building a native Android
            app that lets travelers document journeys, share authentic
            experiences, and discover destinations recommended by real people —
            not algorithms. Founded in 2026 by Dipprokash Sardar, the product
            is in active development and launching soon on Google Play. The
            platform is built entirely on Google Cloud infrastructure and
            operates on a freemium model.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 font-semibold text-sm whitespace-nowrap transition-colors flex-shrink-0"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
