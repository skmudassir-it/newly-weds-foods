import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Factory,
  Users,
  Globe,
  ArrowRight,
  BadgeCheck,
  Flame,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Middle East & Africa — New Frontiers of Flavor",
  description:
    "Newly Weds Foods Middle East & Africa — Dubai UAE, Johannesburg ZA. 2 facilities specializing in halal-certified ingredient solutions, spice expertise, and emerging market development.",
};

const specialties = [
  {
    icon: BadgeCheck,
    title: "Halal-Certified Excellence",
    description:
      "Full halal-certified supply chain from sourcing through production. Our Dubai hub coordinates halal compliance across all product categories — coatings, seasonings, sauces, and functional systems — for Gulf, Levant, and Southeast Asian markets.",
  },
  {
    icon: Flame,
    title: "Regional Spice Expertise",
    description:
      "The Middle East and Africa are the historic heart of the global spice trade. Our teams leverage this heritage with advanced blending technology to create za'atar, baharat, berbere, ras el hanout, and custom profiles at industrial scale.",
  },
  {
    icon: Rocket,
    title: "Emerging Market Strategy",
    description:
      "MEA is our newest frontier — and our fastest path to new growth. We bring the full weight of Newly Weds' global R&D and manufacturing expertise to help partners enter and scale across these dynamic, rapidly urbanizing markets.",
  },
];

const facilities = [
  {
    city: "Dubai, UAE",
    label: "MEA HQ & Commercial Hub",
    description:
      "Regional headquarters coordinating halal-certified supply chains, market intelligence, and technical sales support for Gulf, Levant, and North African markets. Gateway to the region's most dynamic food economies.",
  },
  {
    city: "Johannesburg, ZA",
    label: "Manufacturing",
    description:
      "Sub-Saharan African production facility manufacturing coatings and seasonings adapted for local protein sources, taste preferences, and supply chain conditions. Serving food manufacturers across 15+ African nations.",
  },
];

export default function MEAPage() {
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
              Emerging Markets — High Growth
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Middle East & Africa —{" "}
              <span className="text-gradient">New Frontiers of Flavor</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              From Dubai&apos;s crossroads to Africa&apos;s rising markets
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              The Middle East and Africa represent the next great chapter in
              global food — and Newly Weds Foods is building the infrastructure
              to lead it. With halal-certified operations and deep regional
              spice expertise, we&apos;re helping partners seize the
              opportunities of these high-growth markets.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "2", label: "Facilities" },
              { icon: Users, value: "150+", label: "Employees" },
              { icon: MapPin, value: "2", label: "Key Locations" },
              { icon: BadgeCheck, value: "Halal", label: "Certified" },
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
              From halal certification to the world&apos;s richest spice
              traditions — our MEA capabilities are built for the unique
              demands of these vibrant markets.
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
              Two strategic hubs anchoring our presence across the Middle East
              and Sub-Saharan Africa — with room to grow.
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
                <Rocket className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Enter <span className="text-gradient">New Markets</span> With
                Confidence
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need halal-certified supply or want to launch
                across Africa&apos;s fastest-growing economies, our MEA team
                provides the infrastructure, insight, and ingredient solutions
                to fuel your growth.
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
