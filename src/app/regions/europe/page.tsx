import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Factory,
  Users,
  Globe,
  Award,
  ArrowRight,
  Leaf,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Europe — Innovation With European Precision",
  description:
    "Newly Weds Foods Europe — Corby UK HQ, 6 manufacturing facilities. Specialists in clean-label formulations, organic certifications, and EU regulatory compliance for food ingredient solutions.",
};

const specialties = [
  {
    icon: Leaf,
    title: "Clean-Label Formulations",
    description:
      "Europe leads our global clean-label initiative with naturally derived ingredients, minimal processing declarations, and transparent supply chains that meet evolving EU consumer expectations.",
  },
  {
    icon: Award,
    title: "Organic Certifications",
    description:
      "Our European facilities maintain EU Organic, Soil Association, and Bio-Siegel certifications — enabling partners to launch certified organic products with full traceability.",
  },
  {
    icon: ShieldCheck,
    title: "EU Regulatory Mastery",
    description:
      "Deep expertise in EFSA requirements, allergen management directives, and novel food regulations. Our Corby R&D center ensures every formulation meets the strictest European standards.",
  },
];

const facilities = [
  {
    city: "Corby, UK",
    label: "European HQ & R&D Center",
    description:
      "Innovation hub housing culinary labs, sensory analysis suites, and pilot-scale production. The epicenter of our European clean-label and organic development programs.",
  },
  {
    city: "Oss, NL",
    label: "Manufacturing",
    description:
      "Central European production facility with advanced blending and coating lines. Strategically located for rapid distribution across Benelux, Germany, and France.",
  },
  {
    city: "Bielefeld, DE",
    label: "Manufacturing",
    description:
      "German manufacturing center serving the DACH region with precision-formulated seasonings, marinades, and functional coating systems for leading food manufacturers.",
  },
];

export default function EuropePage() {
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
              6 Facilities Across Europe
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Europe —{" "}
              <span className="text-gradient">Innovation With European Precision</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              Clean-label expertise from Corby to Bielefeld
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Our European operations combine British innovation heritage,
              Dutch logistical excellence, and German engineering precision
              to deliver ingredient solutions that meet the continent&apos;s
              exacting standards for quality, transparency, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "6", label: "Facilities" },
              { icon: Users, value: "800+", label: "Employees" },
              { icon: MapPin, value: "3", label: "Key Locations" },
              { icon: FileCheck, value: "EU Organic", label: "Certified" },
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
              Europe sets the global standard for clean-label and organic
              ingredient systems. These pillars define our European advantage.
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
              Strategically positioned across Western Europe for seamless
              distribution and local regulatory expertise.
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
                <Leaf className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Connect With Our{" "}
                <span className="text-gradient">European Team</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                From clean-label innovation to EU regulatory navigation, our
                Corby-based team brings precision and insight to every
                partnership.
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
