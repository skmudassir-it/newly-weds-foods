import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Building2,
  MapPin,
  ArrowRight,
  Network,
  Ship,
  Plane,
  Users,
  Zap,
  Beaker,
  Lightbulb,
  Factory,
  FlaskConical,
  Microscope,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Innovation Network — Connected Creativity Across Continents",
  description:
    "Explore Newly Weds Foods' global innovation hubs in Chicago, Bangkok, Shanghai, Sydney, and Corby. Cross-regional collaboration, technology transfer, and locally authentic flavor development.",
};

const hubs = [
  {
    city: "Chicago",
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    icon: Building2,
    specialty: "Global Headquarters & Core R&D",
    description:
      "Our largest innovation campus — the nerve center of global R&D. Houses advanced analytical laboratories, a full-scale pilot plant, sensory suites, and application kitchens that serve as the blueprint for our worldwide network. Home to our most senior food scientists and the central flavor chemistry group.",
    facilities: [
      "ISO 17025 analytical laboratory with GC-MS, HPLC, and rheology suites",
      "Full-scale pilot plant with industrial coating lines and fryers",
      "12-booth sensory evaluation center with trained descriptive panels",
      "Dedicated plant-based protein application kitchen",
      "Flavor encapsulation and spray-drying R&D suite",
    ],
    expertise: [
      "Coating & breader systems engineering",
      "Flavor chemistry & encapsulation",
      "Clean-label formulation",
      "Process scale-up & commercialization",
    ],
    highlight: "200+ scientists and technologists on-site",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    region: "Asia-Pacific",
    flag: "🇹🇭",
    icon: Globe,
    specialty: "Asia-Pacific Regional Hub & Culinary Innovation Center",
    description:
      "The epicenter of Asian flavor authenticity. Our Bangkok center specializes in Southeast Asian cuisine — from Thai street food to Vietnamese, Indonesian, and Filipino flavor systems. Direct access to local spice markets, ingredient suppliers, and a network of regional chefs ensures every formulation is culturally authentic and commercially viable.",
    facilities: [
      "Full-service application kitchen with wok stations and charcoal grills",
      "Sensory lab calibrated for Asian flavor profiles and heat tolerance",
      "Spice extraction and blending facility",
      "Shelf-life testing chambers for tropical climate conditions",
      "Regional ingredient library with 500+ authentic raw materials",
    ],
    expertise: [
      "Southeast Asian flavor systems",
      "Chili and spice blending",
      "Sauce and marinade development",
      "Tropical-climate stability testing",
    ],
    highlight: "Gateway to ASEAN's fastest-growing food markets",
  },
  {
    city: "Shanghai",
    country: "China",
    region: "Asia-Pacific",
    flag: "🇨🇳",
    icon: Globe,
    specialty: "China Market Innovation & Manufacturing Excellence",
    description:
      "Dedicated to the world's most dynamic food market. Our Shanghai center combines deep understanding of Chinese regional cuisines — Sichuan, Cantonese, Hunan, and beyond — with rapid prototyping capabilities that match the speed of China's QSR and retail industries. Local R&D talent drives product cycles 2–3× faster than global averages.",
    facilities: [
      "High-speed application kitchen with industrial wok and steaming systems",
      "Rapid benchtop-to-pilot prototyping lab",
      "Regional cuisine library covering 8 major Chinese culinary traditions",
      "Clean-label development suite for China's evolving regulatory landscape",
      "Integrated QA/QC lab with real-time production data monitoring",
    ],
    expertise: [
      "Chinese regional cuisine flavor systems",
      "Rapid product development cycles",
      "China-specific regulatory compliance",
      "Localized coating and batter technology",
    ],
    highlight: "2–3× faster development cycles than global average",
  },
  {
    city: "Sydney",
    country: "Australia",
    region: "Pacific",
    flag: "🇦🇺",
    icon: Globe,
    specialty: "Pacific Rim Innovation & Fusion Cuisine",
    description:
      "Where East meets West. Sydney's multicultural food scene — blending Asian, Mediterranean, and Indigenous Australian influences — makes it the perfect laboratory for fusion cuisine and cross-cultural flavor innovation. Our center specializes in translating fusion trends into scalable products for the Australian, New Zealand, and Pacific Island markets.",
    facilities: [
      "Fusion-focused application kitchen with multicultural equipment suite",
      "Consumer sensory lab calibrated for diverse demographic panels",
      "Native ingredient research program featuring bush tucker flavors",
      "Halal and kosher-certified development zones",
      "Shelf-life testing for extreme climate variability",
    ],
    expertise: [
      "Asian-Western fusion flavor systems",
      "Native Australian ingredient commercialization",
      "Halal and kosher formulation",
      "Multi-ethnic consumer preference mapping",
    ],
    highlight: "Home to our native ingredient innovation program",
  },
  {
    city: "Corby",
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    icon: Building2,
    specialty: "European & EMEA Headquarters",
    description:
      "The gateway to European, Middle Eastern, and African markets. Corby combines British food science rigor with continental European culinary tradition. Specializes in Mediterranean, Middle Eastern, and Eastern European flavor systems, with dedicated facilities for Halal certification, EU regulatory compliance, and sustainable packaging innovation.",
    facilities: [
      "European application kitchen with Mediterranean and Middle Eastern equipment",
      "EU regulatory compliance and labeling laboratory",
      "Halal-certified development and testing suites",
      "Sustainable packaging and clean-label formulation center",
      "Shelf-life validation for pan-European distribution",
    ],
    expertise: [
      "Mediterranean and Middle Eastern flavor systems",
      "EU food safety and labeling regulations",
      "Halal and kosher certification programs",
      "Sustainable ingredient sourcing and validation",
    ],
    highlight: "Serving 30+ markets across EMEA from one hub",
  },
];

const crossHubCapabilities = [
  {
    icon: Network,
    title: "24/7 Development Cycles",
    description:
      "When Chicago signs off for the day, Bangkok is starting theirs. When Shanghai wraps up, Corby picks up. Our global network enables around-the-clock R&D — accelerating timelines by up to 40% versus single-center development.",
  },
  {
    icon: Ship,
    title: "Technology Transfer",
    description:
      "Proprietary coating systems developed in Chicago are adapted for Asian frying conditions in Bangkok. Seasoning blends created in Corby are reformulated for North American labeling requirements. Technology flows freely across our network — locally adapted, globally connected.",
  },
  {
    icon: Lightbulb,
    title: "Cross-Regional Innovation",
    description:
      "A street-food trend spotted in Bangkok can inspire a QSR product in Chicago within months. Our hubs don't operate in silos — monthly innovation summits, shared digital platforms, and rotating chef residencies ensure that insights from one market rapidly benefit all others.",
  },
  {
    icon: Users,
    title: "Talent Exchange Program",
    description:
      "Scientists, chefs, and engineers rotate between hubs on 3–12 month assignments. A flavor chemist from Corby might spend a quarter in Shanghai learning regional techniques; a Bangkok chef might bring Southeast Asian expertise to Sydney. This cross-pollination is our competitive advantage.",
  },
];

const networkStats = [
  {
    icon: Globe,
    value: "5",
    label: "Innovation Hubs",
    description: "Strategically positioned on 4 continents for global coverage and local relevance.",
  },
  {
    icon: Users,
    value: "200+",
    label: "Scientists & Chefs",
    description: "Collaborating in real-time across time zones via shared digital workspaces.",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Development Cycle",
    description: "Continuous R&D — when one center sleeps, another is actively developing your product.",
  },
  {
    icon: Plane,
    value: "< 48hrs",
    label: "Talent Mobility",
    description: "Any expert can be on-site at any hub within 48 hours for critical project support.",
  },
];

export default function GlobalInnovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.05),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Network className="size-3.5" />
              5 Hubs · 4 Continents · 1 Network
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Global Innovation{" "}
              <span className="text-gradient">Network</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Connected Creativity Across Continents
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Innovation knows no borders. Our five global hubs — Chicago,
              Bangkok, Shanghai, Sydney, and Corby — operate as a single,
              integrated network. Insight flows freely between continents,
              technology transfers seamlessly between centers, and local
              expertise informs global strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {networkStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="size-7 text-gold" />
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-gold">
                  {stat.value}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs Detail */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <MapPin className="size-3.5" />
              Five Centers of Excellence
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Innovation Hubs</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Each hub brings unique expertise, facilities, and market
              knowledge — united by shared systems, standards, and a common
              purpose.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {hubs.map((hub, idx) => (
              <div
                key={hub.city}
                className={`flex flex-col gap-10 ${
                  idx % 2 === 1
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }`}
              >
                {/* Hub Identity Card */}
                <div className="shrink-0 lg:w-80">
                  <div className="glass rounded-2xl p-8 text-center sticky top-24">
                    <span className="text-4xl">{hub.flag}</span>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-foreground">
                      {hub.city}
                    </h3>
                    <p className="mt-1 text-sm text-gold font-medium">
                      {hub.country}
                    </p>
                    <div className="mt-2 inline-flex rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold-light">
                      {hub.region}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs uppercase tracking-wider text-foreground/40">
                        Specialty
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground/80">
                        {hub.specialty}
                      </p>
                    </div>
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/10 px-3 py-1 text-xs font-medium text-crimson">
                        <Zap className="size-3" />
                        {hub.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hub Detail Content */}
                <div className="flex-1 space-y-8">
                  <p className="text-base leading-relaxed text-foreground/70">
                    {hub.description}
                  </p>

                  {/* Facilities */}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Factory className="size-5 text-gold" />
                      Facilities
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {hub.facilities.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                            <span className="size-1 rounded-full bg-gold" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Lightbulb className="size-5 text-crimson" />
                      Core Expertise
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {hub.expertise.map((e) => (
                        <span
                          key={e}
                          className="inline-flex rounded-full border border-crimson/20 bg-crimson/5 px-3 py-1.5 text-xs text-crimson"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Hub Collaboration */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Network className="size-3.5" />
              The Power of Connection
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Cross-Hub{" "}
              <span className="text-gradient">Collaboration</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              What makes our network more than the sum of its parts — the
              systems, programs, and culture that connect our innovation centers
              into a single global engine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {crossHubCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <cap.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Shared Resources */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <FlaskConical className="size-3.5" />
              Connected by Technology
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Shared <span className="text-gradient">Resources</span> &
              Systems
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Every hub operates on shared platforms that make distance
              irrelevant and collaboration instant.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Beaker className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Global LIMS
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                A unified Laboratory Information Management System connects all
                analytical instruments across every hub. Data from a GC-MS run
                in Bangkok is instantly accessible to a flavor chemist in
                Chicago — enabling real-time collaborative analysis.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <Palette className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Digital Formulation Library
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Over 50,000 validated formulations digitized and accessible from
                any hub. Search by flavor profile, application type, regulatory
                region, or cost target. A formulation developed for European
                retail can be adapted for Asian QSR in hours, not weeks.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Microscope className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Virtual Collaboration Suites
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                High-definition video links between application kitchens and
                sensory labs. Chefs in Bangkok can demo a street-food technique
                live to scientists in Chicago. Sensory panels can be conducted
                simultaneously across multiple hubs for multi-market validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Tap Into a{" "}
                <span className="text-gradient">Global Innovation Engine</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need locally authentic flavors or globally
                consistent ingredient systems — our five-hub network delivers
                creativity, speed, and scale. Let&apos;s build something
                extraordinary together.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Connect With a Hub Near You
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/innovation"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Innovation Overview
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
