import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Factory,
  Users,
  Globe,
  Award,
  ArrowRight,
  ChefHat,
  Wheat,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "North America — Where It All Began",
  description:
    "Newly Weds Foods North America — Chicago HQ, 14 manufacturing facilities, 2,000+ employees. Industry leaders in QSR coatings, panko breaders, and custom seasonings since 1932.",
};

const specialties = [
  {
    icon: ChefHat,
    title: "QSR Coatings",
    description:
      "Industry-standard batter and breader systems trusted by the world's largest quick-service restaurant chains for consistent crunch, adhesion, and hold-time performance.",
  },
  {
    icon: Wheat,
    title: "Panko & Breaders",
    description:
      "Our proprietary Japanese-style panko and American bread crumb systems deliver the signature texture profiles that define category-leading menu items across North America.",
  },
  {
    icon: Sparkles,
    title: "Custom Seasonings",
    description:
      "From regional BBQ profiles to bold global flavors, our Chicago R&D center develops thousands of custom seasoning blends annually for CPG, foodservice, and industrial partners.",
  },
];

const facilities = [
  {
    city: "Chicago, IL",
    label: "Global HQ & Manufacturing",
    description:
      "400,000+ sq ft flagship facility — coatings, seasonings, sauces, and functional systems. Home to our largest R&D center and culinary innovation lab.",
  },
  {
    city: "Watertown, MA",
    label: "Manufacturing",
    description:
      "Northeast hub specializing in custom seasoning blends and functional ingredient systems for East Coast foodservice and CPG partners.",
  },
  {
    city: "Guelph, ON",
    label: "Manufacturing",
    description:
      "Canadian production facility serving QSR and foodservice customers with full-line coating and seasoning capabilities. CFIA-certified.",
  },
  {
    city: "Monterrey, MX",
    label: "Manufacturing",
    description:
      "Mexico manufacturing center providing cost-competitive coatings and seasonings for North and Central American markets with bilingual technical support.",
  },
];

export default function NorthAmericaPage() {
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
              Our Largest Operating Region
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              North America —{" "}
              <span className="text-gradient">Where It All Began</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              From Chicago to Monterrey — powering the world&apos;s favorite foods
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Since 1932, our North American operations have grown into 14
              facilities spanning the US, Canada, and Mexico — delivering
              industry-leading coatings, seasonings, and functional ingredient
              systems to the world&apos;s most iconic food brands.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "14", label: "Facilities" },
              { icon: Users, value: "2,000+", label: "Employees" },
              { icon: MapPin, value: "4", label: "Key Locations" },
              { icon: Award, value: "1932", label: "Established" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 text-center"
              >
                <item.icon className="size-5 text-gold mx-auto" />
                <div className="mt-2 font-heading text-2xl font-bold text-gold">
                  {item.value}
                </div>
                <p className="text-xs text-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise / Specialties */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Regional <span className="text-gradient">Expertise</span>
            </h2>
            <p className="mt-3 text-lg text-foreground/60 max-w-2xl mx-auto">
              North America is where we pioneered the science of coatings. These
              core capabilities define our market leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 mb-4">
                  <item.icon className="size-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facilities */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Key <span className="text-gradient">Facilities</span>
            </h2>
            <p className="mt-3 text-lg text-foreground/60 text-center max-w-2xl mx-auto">
              Strategic manufacturing locations across the continent ensure
              rapid response times and local market expertise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {facilities.map((facility) => (
              <div
                key={facility.city}
                className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="size-5 text-gold" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {facility.city}
                  </h3>
                </div>
                <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-light mb-3">
                  {facility.label}
                </span>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Factory className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Partner With Our{" "}
                <span className="text-gradient">North American Team</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you&apos;re developing the next QSR blockbuster or
                refining an existing product line, our Chicago-based team is
                ready to collaborate.
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
                  href="/global-locations"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  All Locations
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
