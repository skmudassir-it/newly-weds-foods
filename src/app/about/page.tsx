import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Globe,
  Users,
  Factory,
  FlaskConical,
  ShieldCheck,
  Leaf,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  Heart,
  ChefHat,
  Microscope,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Global Food Ingredient Leader | Newly Weds Foods",
  description:
    "Newly Weds Foods has been inspiring new tastes since 1932. Learn about our global presence, leadership, innovation culture, and commitment to quality in food ingredient solutions across 60+ countries.",
};

const leadership = [
  {
    name: "Charles Angell",
    role: "Chairman & CEO",
    bio: "Third-generation family leader steering the company's global vision and long-term strategy.",
  },
  {
    name: "James Chin",
    role: "President, Asia-Pacific",
    bio: "Driving expansion and innovation across the fast-growing Asia-Pacific food market from Bangkok.",
  },
  {
    name: "Dr. Maria Santos",
    role: "Chief Innovation Officer",
    bio: "Leading 12 global R&D centers and the culinary innovation pipeline serving the world's top food brands.",
  },
  {
    name: "Robert Langford",
    role: "Chief Operating Officer",
    bio: "Overseeing 30+ manufacturing facilities worldwide with a focus on operational excellence and quality.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Sustainability Officer",
    bio: "Championing environmental stewardship, responsible sourcing, and community engagement across all operations.",
  },
  {
    name: "David Okafor",
    role: "President, EMEA",
    bio: "Leading European, Middle Eastern, and African operations from the UK headquarters in Corby.",
  },
];

const companyFacts = [
  {
    icon: Clock,
    stat: "90+",
    label: "Years of Innovation",
    description: "Family-owned and operated since 1932 in Chicago, Illinois.",
  },
  {
    icon: Factory,
    stat: "30+",
    label: "Manufacturing Facilities",
    description: "Across North America, Europe, Asia-Pacific, and the Middle East.",
  },
  {
    icon: Globe,
    stat: "60+",
    label: "Countries Served",
    description: "Delivering locally relevant ingredient solutions at global scale.",
  },
  {
    icon: Users,
    stat: "3,000+",
    label: "Team Members Worldwide",
    description: "Scientists, chefs, engineers, and professionals collaborating across borders.",
  },
  {
    icon: FlaskConical,
    stat: "12",
    label: "R&D & Culinary Centers",
    description: "ISO 17025-accredited labs driving breakthrough food ingredient innovation.",
  },
  {
    icon: Award,
    stat: "10,000+",
    label: "Custom Formulations Annually",
    description: "From benchtop concept to full-scale production for the world's leading brands.",
  },
];

const markets = [
  {
    icon: ChefHat,
    title: "Quick-Service Restaurants",
    description:
      "We supply coatings, seasonings, and sauces to the world's largest QSR chains — engineered for consistency, speed, and craveable flavor across thousands of locations.",
  },
  {
    icon: Building2,
    title: "Foodservice & Hospitality",
    description:
      "From casual dining to high-end hotels, our ingredient systems help chefs deliver menu innovation while maintaining operational efficiency.",
  },
  {
    icon: Package,
    title: "Consumer Packaged Goods",
    description:
      "We partner with leading CPG brands to develop retail-ready products — from gourmet breading mixes to specialty seasoning blends for supermarket shelves.",
  },
  {
    icon: Leaf,
    title: "Plant-Based & Alternative Proteins",
    description:
      "Proprietary coating and flavor systems purpose-built for plant-based meats, delivering the taste, texture, and visual appeal consumers expect from next-gen proteins.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              Est. 1932 — Chicago, Illinois
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-gradient">Newly Weds Foods</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              We are a global leader in food ingredient innovation — coatings,
              seasonings, sauces, and functional systems that empower the
              world&apos;s top food brands and foodservice operators to create
              products consumers love.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What <span className="text-gradient">We Do</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              For over 90 years, we&apos;ve been at the intersection of culinary
              art and food science — transforming raw ingredients into the
              batters, breaders, seasonings, and sauces that define taste
              experiences worldwide.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Microscope className="size-7 text-crimson" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                The Science of Taste
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Our 12 global R&D centers combine advanced food science, sensory
                analysis, and culinary expertise to develop breakthrough
                ingredient solutions. From adhesion batters that achieve perfect
                pickup to seasoning blends that capture authentic global flavors
                — every formulation is engineered for performance.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <ChefHat className="size-7 text-gold" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                The Art of Flavor
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Our global network of chefs, trend scouts, and market analysts
                track emerging flavor movements across 60+ countries. We
                translate street-food trends into scalable product concepts,
                helping brands launch category-defining products before the
                trend peaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Newly Weds <span className="text-gradient">by the Numbers</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Nine decades of growth, innovation, and partnership — a legacy
              built on quality and trust.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyFacts.map((fact) => (
              <div
                key={fact.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                  <fact.icon className="size-7 text-gold" />
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-gold">
                  {fact.stat}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {fact.label}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Who <span className="text-gradient">We Serve</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              From the world&apos;s largest QSR chains to emerging CPG brands —
              we partner across the food industry to deliver ingredient
              solutions that drive success.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {markets.map((market) => (
              <div
                key={market.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                  <market.icon className="size-6 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {market.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Global Footprint</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              With manufacturing facilities and innovation centers across five
              continents, we deliver locally relevant solutions at global scale.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                region: "North America",
                locations: "Chicago, IL · Watertown, MA · Guelph, ON · Monterrey, MX",
                facilities: "14 facilities",
              },
              {
                region: "Europe",
                locations: "Corby, UK · Oss, NL · Bielefeld, DE",
                facilities: "6 facilities",
              },
              {
                region: "Asia-Pacific",
                locations: "Bangkok, TH · Shanghai, CN · Sydney, AU",
                facilities: "8 facilities",
              },
              {
                region: "Latin America",
                locations: "São Paulo, BR · Santiago, CL · Bogotá, CO",
                facilities: "3 facilities",
              },
              {
                region: "Middle East & Africa",
                locations: "Dubai, UAE · Johannesburg, ZA",
                facilities: "2 facilities",
              },
            ].map((region) => (
              <div
                key={region.region}
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/30"
              >
                <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-gold/10">
                  <MapPin className="size-5 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {region.region}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  {region.locations}
                </p>
                <span className="mt-3 inline-block rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-light">
                  {region.facilities}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Meet the team guiding Newly Weds Foods into its next century of
              innovation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((exec) => (
              <div
                key={exec.name}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-crimson/20">
                  <Users className="size-10 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {exec.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {exec.role}
                </p>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Values */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Commitment</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Quality, safety, and sustainability are the foundation of
              everything we do.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <ShieldCheck className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Quality & Food Safety
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                ISO 17025-accredited labs, SQF Level 3 certified facilities,
                and rigorous HACCP programs ensure consistent excellence from
                ingredient sourcing to finished product.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Leaf className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Sustainability
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                Reducing water usage by 35%, sourcing responsibly, and
                minimizing waste across all operations. We&apos;re committed to
                doing business in a way that respects our planet and communities.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <Heart className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Family Values
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                Still family-owned after three generations, we combine long-term
                thinking with agility. Every team member is part of the Newly
                Weds family — and it shows in the care we bring to every
                partnership.
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
                Ready to <span className="text-gradient">Partner With Us</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you&apos;re developing a new product, optimizing an
                existing line, or exploring what&apos;s possible — our team of
                scientists, chefs, and ingredient specialists is ready to help.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Explore Products
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
