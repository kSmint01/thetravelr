import { Camera, Globe, Compass, MessageCircle, TrendingUp, Shield } from "lucide-react";
import WaitlistButton from "@/components/WaitlistButton";

const features = [
  {
    icon: Camera,
    title: "Capture Your Journey",
    description:
      "Document every moment with our immersive story format. Add photos, routes, tips, and personal reflections to build your travel narrative.",
    color: "bg-forest-50",
    iconBg: "bg-forest-600",
    accent: "border-forest-200",
  },
  {
    icon: Globe,
    title: "Share with the World",
    description:
      "Publish your adventures to a passionate global community. Get discovered by fellow travelers who share your love for exploration.",
    color: "bg-sage-50",
    iconBg: "bg-moss-600",
    accent: "border-sage-200",
  },
  {
    icon: Compass,
    title: "Discover Hidden Gems",
    description:
      "Uncover off-the-beaten-path destinations curated by real travelers — not algorithms. Find places you won't see in any guidebook.",
    color: "bg-mint-100",
    iconBg: "bg-forest-700",
    accent: "border-mint-200",
  },
  {
    icon: MessageCircle,
    title: "Connect & Collaborate",
    description:
      "Ask questions, swap tips, and form travel groups with like-minded adventurers before, during, and after your trips.",
    color: "bg-forest-50",
    iconBg: "bg-forest-500",
    accent: "border-forest-200",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Visualise countries visited, trails hiked, and miles covered. Build a personal travel passport that tells your story.",
    color: "bg-sage-50",
    iconBg: "bg-moss-700",
    accent: "border-sage-200",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description:
      "Every journey is verified by our community. Get real safety insights and traveler-to-traveler advisories before you go.",
    color: "bg-mint-100",
    iconBg: "bg-forest-800",
    accent: "border-mint-200",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-forest-50 rounded-full border border-forest-100">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mt-4 mb-4 leading-tight">
            Everything You Need to{" "}
            <span className="text-forest-600">Explore & Share</span>
          </h2>
          <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
            TheTravelr gives you all the tools to turn your adventures into
            inspiring stories that move people to explore.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, iconBg, accent }) => (
            <div
              key={title}
              className={`${color} border ${accent} rounded-2xl p-8 group hover:shadow-xl hover:shadow-forest-600/8 hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                {title}
              </h3>
              <p className="text-charcoal-500 leading-relaxed text-[15px]">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-gradient-to-r from-forest-800 to-forest-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Ready to start your story?
            </h3>
            <p className="text-forest-200/80 text-sm">
              Join thousands of travelers who share their journeys every day.
            </p>
          </div>
          <WaitlistButton variant="white" size="sm" label="Join the Waitlist →" />
        </div>
      </div>
    </section>
  );
}
