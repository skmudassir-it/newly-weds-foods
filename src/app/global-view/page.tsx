import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Factory,
  Users,
  MapPin,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global View — One Company, Worldwide Impact",
  description:
    "Explore Newly Weds Foods' global footprint — 30+ manufacturing facilities across 60+ countries on 5 continents, staffed by 3,000+ team members delivering locally relevant food ingredient solutions.",
};

const worldwideStats = [
  {
    icon: Factory,
    stat: "30+",
    label: "Manufacturing Facilities",
    description:
      "State-of-the-art production sites equipped with advanced blending, coating, and packaging technologies.",
  },
  {
    icon: Globe,
    stat: "60+",
    label: "Countries Served",
    description:
      "Delivering ingredient solutions to food brands and foodservice operators on every inhabited continent.",
  },
  {
    icon: Users,
    stat: "3,000+",
    label: "Team Members Worldwide",
    description:
      "Food scientists, chefs, engineers, and professionals collaborating across cultures and time zones.",
  },
  {
    icon: MapPin,
    stat: "5",
    label: "Continents",
    description:
      "Operations and customer partnerships spanning North America, Europe, Asia-Pacific, Latin America, and MEA.",
  },
];

const regions = [
  {
    name: "North America",
    keyCity: "Chicago, IL (Global HQ)",
    facilities: 14,
    specialty:
      "Full-spectrum coatings, seasonings, and sauces for QSR, foodservice, and CPG brands. Home to our largest R&D center and pilot plant.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Europe",
    keyCity: "Corby, United Kingdom",
    facilities: 6,
    specialty:
      "Clean-label coatings, organic-compliant seasonings, and EU-regulated functional systems. Regional innovation hub serving Western and Eastern Europe.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    name: "Asia-Pacific",
    keyCity: "Bangkok, Thailand",
    facilities: 8,
    specialty:
      "Authentic Asian flavor profiles, rapid-concept-to-commercialization, and Halal-certified production for the region's diverse markets.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    name: "Latin America",
    keyCity: "São Paulo, Brazil",
    facilities: 3,
    specialty:
      "Regional spice blends, cost-optimized coating systems, and bilingual innovation support for South and Central American markets.",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400",
  },
  {
    name: "Middle East & Africa",
    keyCity: "Dubai, UAE",
    facilities: 2,
    specialty:
      "Halal-certified ingredient systems, heat-stable formulations for challenging climates, and growing footprint across African and Gulf markets.",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
];

const philosophy = [
  {
    icon: TrendingUp,
    title: "Think Global, Act Local",
    description:
      "We combine the resources of a global enterprise with the agility of local teams. Every facility is empowered to adapt formulations, source regionally, and respond to market-specific culinary trends — all while maintaining the quality standards that define the Newly Weds Foods name worldwide.",
  },
  {
    icon: Shield,
    title: "One Standard, Everywhere",
    description:
      "Every facility — whether in Chicago, Corby, or Bangkok — adheres to the same rigorous SQF, HACCP, and ISO protocols. Regional specificity never compromises global quality. Our customers experience the same reliability and food safety excellence regardless of geography.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Without Borders",
    description:
      "We serve the world's largest QSR chains, CPG brands, and foodservice operators with multi-market consistency. A coating developed in Chicago can be faithfully reproduced in Shanghai. A seasoning profile from Bangkok can scale to European production — seamless, reliable, and collaborative.",
  },
];

export default function GlobalViewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Globe className="size-3.5" />
              Worldwide Operations
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Global View</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              One Company, Worldwide Impact
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              From our Chicago headquarters to our facilities across five
              continents, Newly Weds Foods brings locally relevant, globally
              consistent ingredient solutions to the world&apos;s leading food
              brands. Explore how our worldwide network strengthens every
              partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Worldwide Stats */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Worldwide <span className="text-gradient">at a Glance</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The numbers behind our global commitment to food ingredient
              excellence.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {worldwideStats.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                  <item.icon className="size-7 text-gold" />
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-gold">
                  {item.stat}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Global Regions</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Five regions, one standard of excellence. Each hub is strategically
              positioned to serve local markets with global backing.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div
                key={region.name}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${region.color}`}
                >
                  <MapPin className={`size-6 ${region.iconColor}`} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {region.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-light">
                    <Building2 className="size-3" />
                    {region.facilities} facilities
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/50">
                  Key hub: {region.keyCity}
                </p>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                  {region.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Philosophy */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The <span className="text-gradient">Global Network</span>{" "}
              Philosophy
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              How we turn geographic reach into a genuine competitive advantage
              for our partners.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                  <item.icon className="size-7 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-foreground/70 leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass rounded-2xl border border-gold/10 p-8 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Our global network isn&apos;t just about having facilities in
                many places — it&apos;s about creating a{" "}
                <span className="text-gold-light font-semibold">
                  seamlessly integrated ecosystem
                </span>{" "}
                where insights from Bangkok inform innovations in Chicago, where
                a breakthrough in Corby rapidly scales to São Paulo, and where
                every customer — regardless of location — benefits from the
                collective knowledge of 3,000+ food industry professionals. This
                is the Newly Weds Foods difference: global scale, local soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Find a{" "}
                <span className="text-gradient">Location Near You</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Explore our directory of facilities worldwide and discover how
                our regional teams can support your next product innovation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/global-locations"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  View All Locations
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Contact a Regional Office
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
