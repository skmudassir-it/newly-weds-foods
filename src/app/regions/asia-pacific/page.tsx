import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Factory,
  Users,
  Globe,
  ArrowRight,
  ChefHat,
  Waves,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asia-Pacific — Where Global Meets Local",
  description:
    "Newly Weds Foods Asia-Pacific — Bangkok, Shanghai, Sydney. 8 facilities across the world's most dynamic food market. Specialists in Asian flavor profiles, tempura expertise, and spice blending.",
};

const specialties = [
  {
    icon: ChefHat,
    title: "Asian Flavor Profiles",
    description:
      "From Thai chili-lime to Japanese umami, Indonesian rendang to Korean gochujang — our Bangkok trend lab captures authentic regional flavors and translates them into scalable industrial ingredients.",
  },
  {
    icon: Waves,
    title: "Tempura Expertise",
    description:
      "Our Tokyo and Shanghai teams have perfected tempura coating systems that deliver the signature light, crispy texture demanded by Asian QSR markets — with superior hold-time and freeze-thaw stability.",
  },
  {
    icon: TrendingUp,
    title: "Spice Blending Mastery",
    description:
      "Leveraging proximity to the world's premier spice-growing regions, our APAC facilities blend and grind fresh spices with precision — delivering vibrant flavor profiles at competitive economics.",
  },
];

const facilities = [
  {
    city: "Bangkok, TH",
    label: "APAC Regional HQ & Trend Lab",
    description:
      "Regional headquarters and culinary innovation center. Our Bangkok trend lab tracks Southeast Asian flavor movements and translates them into scalable ingredient solutions for global partners.",
  },
  {
    city: "Shanghai, CN",
    label: "Manufacturing & Application Center",
    description:
      "Full-scale manufacturing and application center serving China's rapidly growing QSR and foodservice sectors. Specializing in region-specific coatings and seasonings with rapid scale-up capability.",
  },
  {
    city: "Sydney, AU",
    label: "Manufacturing",
    description:
      "Australian production facility with FSANZ-compliant operations. Serves Australia and New Zealand with locally tailored batter, breader, and seasoning systems for ANZAC food manufacturers.",
  },
];

export default function AsiaPacificPage() {
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
              Fastest-Growing Region
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Asia-Pacific —{" "}
              <span className="text-gradient">Where Global Meets Local</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              From Bangkok street markets to Shanghai&apos;s skyline — flavor without borders
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              The Asia-Pacific region is the most dynamic food market on Earth —
              and our fastest-growing operating region. With 8 facilities from
              Bangkok to Sydney, we bridge authentic local flavors with
              world-class manufacturing capability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "8", label: "Facilities" },
              { icon: Users, value: "600+", label: "Employees" },
              { icon: MapPin, value: "3", label: "Key Locations" },
              { icon: TrendingUp, value: "Fastest", label: "Growth" },
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
              Where centuries-old culinary traditions meet cutting-edge food
              science. Our APAC capabilities bring authentic Asian flavors to
              global scale.
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
              Anchored across the region&apos;s most vital food markets — from
              Southeast Asian trend-spotting to ANZAC manufacturing.
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
                <TrendingUp className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Explore{" "}
                <span className="text-gradient">Asia-Pacific</span>{" "}
                Opportunities
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                From product development to market entry strategy, our Bangkok
                team is your gateway to the world&apos;s most exciting food
                markets. Let&apos;s create the next big flavor together.
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
