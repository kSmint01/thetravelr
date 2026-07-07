import Image from "next/image";
import { Heart, Eye, MapPin } from "lucide-react";
import WaitlistButton from "@/components/WaitlistButton";

const journeys = [
  {
    id: 1,
    title: "Into the Patagonian Wild",
    location: "Torres del Paine, Chile",
    traveler: "Elena M.",
    emoji: "🏔️",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    likes: 2847,
    views: 18420,
    duration: "14 days",
    tag: "Trekking",
    tagColor: "bg-forest-100 text-forest-700",
  },
  {
    id: 2,
    title: "Misty Forest Trails of Kyoto",
    location: "Kyoto Prefecture, Japan",
    traveler: "Kenji T.",
    emoji: "🌲",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    likes: 3421,
    views: 24680,
    duration: "7 days",
    tag: "Culture",
    tagColor: "bg-moss-100 text-moss-700",
  },
  {
    id: 3,
    title: "Highland Road Less Travelled",
    location: "Scottish Highlands, UK",
    traveler: "Fiona R.",
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    likes: 1956,
    views: 13200,
    duration: "10 days",
    tag: "Road Trip",
    tagColor: "bg-sage-100 text-sage-600",
  },
  {
    id: 4,
    title: "Amazon Rainforest Expedition",
    location: "Manaus, Brazil",
    traveler: "Carlos A.",
    emoji: "🦜",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    likes: 4102,
    views: 31500,
    duration: "21 days",
    tag: "Wildlife",
    tagColor: "bg-forest-100 text-forest-700",
  },
  {
    id: 5,
    title: "Summit at Dawn: Kilimanjaro",
    location: "Tanzania, Africa",
    traveler: "Amara O.",
    emoji: "⛰️",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    likes: 5280,
    views: 42100,
    duration: "8 days",
    tag: "Climbing",
    tagColor: "bg-charcoal-100 text-charcoal-700",
  },
  {
    id: 6,
    title: "Through the Valley of Flowers",
    location: "Uttarakhand, India",
    traveler: "Priya S.",
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    likes: 3677,
    views: 27890,
    duration: "5 days",
    tag: "Hiking",
    tagColor: "bg-mint-200 text-forest-700",
  },
];

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export default function JourneysSection() {
  return (
    <section id="journeys" className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white rounded-full border border-forest-100">
              Trending Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mt-4 leading-tight">
              Journeys That{" "}
              <span className="text-forest-600">Move the World</span>
            </h2>
            <p className="text-charcoal-500 mt-3 text-lg max-w-lg leading-relaxed">
              Discover the most loved travel stories shared by our community
              this week.
            </p>
          </div>
          <WaitlistButton variant="green" size="sm" label="View all journeys →" />
        </div>

        {/* Journey cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeys.map((journey) => (
            <article
              key={journey.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-forest-900/10 hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

                {/* Tag badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${journey.tagColor}`}
                >
                  {journey.tag}
                </span>

                {/* Like button */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>

                {/* Duration */}
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white bg-charcoal-900/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {journey.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-charcoal-900 text-lg leading-snug mb-1 group-hover:text-forest-700 transition-colors">
                  {journey.title}
                </h3>
                <div className="flex items-center gap-1.5 text-charcoal-400 text-sm mb-4">
                  <MapPin className="w-3.5 h-3.5 text-forest-400" />
                  {journey.location}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-sage-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-forest-100 border-2 border-forest-200 flex items-center justify-center text-sm">
                      {journey.emoji}
                    </div>
                    <span className="text-charcoal-600 text-sm font-medium">
                      {journey.traveler}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      {formatCount(journey.likes)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-forest-400" />
                      {formatCount(journey.views)}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
