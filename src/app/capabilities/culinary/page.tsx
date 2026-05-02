import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Globe,
  Users,
  UtensilsCrossed,
  Lightbulb,
  CookingPot,
  GraduationCap,
  MapPin,
  BookOpen,
  Star,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Culinary Expertise — Where Chefs and Scientists Collaborate",
  description:
    "Newly Weds Foods' culinary team: 20+ chefs globally, application kitchens, menu concept development, gold standard creation, and operator training. Where culinary artistry meets food science.",
};

const chefCapabilities = [
  {
    icon: UtensilsCrossed,
    title: "Application Kitchens",
    description:
      "Commercial-grade kitchens with fryers, ovens, grills, steamers, and packaging lines that replicate real-world QSR, foodservice, and industrial production environments. Where prototypes are tasted, not just measured.",
  },
  {
    icon: Lightbulb,
    title: "Menu Concept Development",
    description:
      "From trend identification to plate-ready concepts. Our chefs translate global flavor trends into scalable menu items — complete with preparation protocols, plating guides, and sensory targets.",
  },
  {
    icon: Star,
    title: "Gold Standard Creation",
    description:
      "Precise, documented sensory targets that define the ideal flavor, texture, and appearance profile. Gold standards become the benchmark against which every production batch is measured — ensuring consistency at scale.",
  },
  {
    icon: CookingPot,
    title: "Culinary-to-Commercial Translation",
    description:
      "The art of preserving culinary soul through industrial scale-up. Our chefs work alongside process engineers to ensure the product that comes off the production line tastes exactly like the one from the kitchen.",
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description:
      "On-site training for QSR and foodservice operators. Custom training programs covering preparation techniques, quality standards, and consistency protocols — ensuring every location delivers the intended experience.",
  },
  {
    icon: Search,
    title: "Trend-Forward Ideation",
    description:
      "Quarterly culinary innovation sessions with our 20+ global chefs. Street-food explorations, fine-dining technique translation, and cross-category inspiration that keeps your pipeline ahead of the curve.",
  },
];

const globalTeam = [
  {
    region: "North America",
    location: "Chicago HQ",
    specialty: "QSR coatings, comfort food, regional American cuisines",
  },
  {
    region: "Europe",
    location: "Corby, UK",
    specialty: "Clean-label systems, Mediterranean, Nordic-inspired flavors",
  },
  {
    region: "Asia-Pacific",
    location: "Bangkok, Shanghai, Sydney",
    specialty: "Pan-Asian flavors, fermented ingredients, umami systems",
  },
  {
    region: "Latin America",
    location: "São Paulo",
    specialty: "Meat-centric applications, tropical fruit integrations, chili systems",
  },
  {
    region: "Middle East & Africa",
    location: "Dubai, Johannesburg",
    specialty: "Halal-certified formulations, spice blends, aromatic profiles",
  },
];

export default function CulinaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.52_0.19_15/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <ChefHat className="size-3.5" />
              20+ Chefs · 5 Continents
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Culinary{" "}
              <span className="text-gradient">Expertise</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Where Chefs and Scientists Collaborate
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Food science tells you what&apos;s happening at the molecular
              level. Culinary artistry tells you whether it&apos;s delicious.
              Our 20+ global chefs bridge the gap — translating trends into
              prototypes, and prototypes into products that consumers crave.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Capabilities */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <CookingPot className="size-3.5" />
              Culinary Capabilities
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Where{" "}
              <span className="text-gradient">Flavor</span>{" "}
              Comes to Life
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Six ways our culinary team transforms market insights and
              creative inspiration into delicious, scalable products.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chefCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-crimson/30 hover:shadow-lg hover:shadow-crimson/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                  <cap.icon className="size-7 text-crimson" />
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

      {/* Global Team */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Users className="size-3.5" />
              Our Culinary Team
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Global <span className="text-gradient">Chefs</span>, Local
              Expertise
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              20+ culinary professionals embedded in every region we serve —
              fluent in local tastes, techniques, and trends.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {globalTeam.map((chef) => (
              <div
                key={chef.region}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="size-5 text-crimson" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {chef.region}
                  </h3>
                </div>
                <p className="text-sm text-gold font-medium mb-3">
                  {chef.location}
                </p>
                <p className="text-xs leading-relaxed text-foreground/60">
                  {chef.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <BookOpen className="size-3.5" />
              How We Work
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The{" "}
              <span className="text-gradient">Chef-Scientist</span>{" "}
              Model
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our unique collaboration model pairs culinary professionals with
              food scientists at every stage — from concept through
              commercialization.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <ChefHat className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                The Chef
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Brings culinary intuition, trend awareness, and an
                uncompromising palate. Defines the gold standard — the exact
                sensory target that every batch must match.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Search className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                The Scientist
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Translates culinary targets into measurable parameters.
                Formulates for stability, scalability, and regulatory
                compliance. Ensures the product that rolls off the line
                delivers the chef&apos;s vision at scale.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <Globe className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                The Result
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Products that are scientifically robust and sensorially
                craveable. Flavors that are authentic to their regional origins
                yet consistent enough for global QSR deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-crimson/20 bg-gradient-to-br from-crimson/5 to-gold/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.52_0.19_15/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s Create{" "}
                <span className="text-gradient">Something Delicious</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need a gold standard for your next menu item, a
                trend-forward flavor concept, or operator training for a
                global rollout — our culinary team is ready to collaborate.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/20"
                >
                  Work With Our Chefs
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/capabilities/custom-formulation"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Custom Formulation
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
