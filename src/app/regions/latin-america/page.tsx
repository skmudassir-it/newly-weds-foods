import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Factory,
  Users,
  Globe,
  ArrowRight,
  Beef,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Latin America — Rising Together",
  description:
    "Newly Weds Foods Latin America — São Paulo, Santiago, Bogotá. 3 facilities delivering savory seasonings and meat processing solutions across South and Central America.",
};

const specialties = [
  {
    icon: Flame,
    title: "Savory Seasonings",
    description:
      "From Brazilian churrasco blends to Peruvian aji profiles, our Latin American seasoning systems capture the bold, layered flavors that define the continent's most beloved dishes — for industrial-scale production.",
  },
  {
    icon: Beef,
    title: "Meat Processing Solutions",
    description:
      "Latin America is protein country. Our functional ingredient systems for meat processing — including marinades, injection brines, and coating systems — are engineered for the region's poultry, beef, and seafood processors.",
  },
  {
    icon: UtensilsCrossed,
    title: "Local Palate Mastery",
    description:
      "On-the-ground culinary teams in São Paulo, Santiago, and Bogotá ensure every formulation respects local taste preferences, cooking methods, and ingredient availability across diverse Latin American markets.",
  },
];

const facilities = [
  {
    city: "São Paulo, BR",
    label: "Latin America HQ & Manufacturing",
    description:
      "Regional headquarters and primary production center. Full-line coatings and seasonings with ANVISA-compliant quality systems serving Brazil and Mercosur markets.",
  },
  {
    city: "Santiago, CL",
    label: "Manufacturing",
    description:
      "Andean and Southern Cone manufacturing hub. Specializing in high-performance coatings for poultry and seafood — the region's protein mainstays — with rapid distribution across Chile, Argentina, and Peru.",
  },
  {
    city: "Bogotá, CO",
    label: "Regional Office & Technical Support",
    description:
      "Northern South America commercial and technical support office. On-the-ground application specialists serving Colombia, Peru, and Central American food manufacturers with localized expertise.",
  },
];

export default function LatinAmericaPage() {
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
              3 Facilities Across Latin America
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Latin America —{" "}
              <span className="text-gradient">Rising Together</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              Bold flavors, growing markets, shared success
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              From Brazil&apos;s industrial heartland to the Andes, our Latin
              American operations deliver the savory seasonings and meat
              processing solutions that power the region&apos;s most iconic
              food brands — with deep local knowledge and global technical
              backing.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "3", label: "Facilities" },
              { icon: Users, value: "350+", label: "Employees" },
              { icon: MapPin, value: "3", label: "Key Locations" },
              { icon: Beef, value: "Mercosur", label: "Coverage" },
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
              Latin America&apos;s food culture is built on bold, savory
              flavors and world-class proteins. Our capabilities are
              purpose-built for this vibrant market.
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
              From Brazil&apos;s industrial powerhouse to the Andean corridor —
              positioned for growth across South and Central America.
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
                <Flame className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Partner Across{" "}
                <span className="text-gradient">Latin America</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you&apos;re launching a new product line in Brazil or
                expanding into Andean markets, our regional teams bring the
                insight and infrastructure you need to succeed.
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
