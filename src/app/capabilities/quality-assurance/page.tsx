import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Search,
  Microscope,
  Package,
  AlertTriangle,
  Globe,
  Binoculars,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance — Trust Through Rigor",
  description:
    "Newly Weds Foods quality assurance: SQF Level 3, HACCP, GFSI, BRC, allergen management, environmental monitoring, foreign material control. Rigorous systems that protect your brand and your consumers.",
};

const certSystems = [
  {
    icon: ShieldCheck,
    title: "SQF Level 3 Certification",
    description:
      "All 30+ manufacturing facilities are certified to Safe Quality Food (SQF) Level 3 — the highest tier of the GFSI-benchmarked standard, encompassing both food safety and food quality management systems.",
  },
  {
    icon: ClipboardCheck,
    title: "HACCP & HARPC",
    description:
      "Comprehensive Hazard Analysis and Critical Control Points plans at every facility. 500+ HACCP plans monitoring 1,200+ critical control points — reviewed quarterly and updated with every process change.",
  },
  {
    icon: Globe,
    title: "GFSI & BRC Alignment",
    description:
      "All quality systems are benchmarked against Global Food Safety Initiative (GFSI) standards. BRC-compliant facilities in Europe. One unified quality culture across every region.",
  },
];

const safetyPrograms = [
  {
    icon: AlertTriangle,
    title: "Allergen Management",
    description:
      "Full VITAL compliance. ELISA-based swab verification of cleaning effectiveness. Color-coded tools by allergen zone. Dedicated production lines for certified gluten-free and top-9-allergen-free products. Multi-point label verification before release.",
  },
  {
    icon: Search,
    title: "Environmental Monitoring",
    description:
      "Zone-based environmental pathogen monitoring programs. Swab-and-send and rapid ATP verification. Trending analysis with corrective action triggers. Quarterly program reviews with continuous improvement targets.",
  },
  {
    icon: Microscope,
    title: "Foreign Material Control",
    description:
      "Multi-hurdle approach: magnets, metal detectors, X-ray inspection, optical sorters, and sifters at critical process points. Statistical process control on reject rates with automated alerts for trend deviations.",
  },
  {
    icon: Binoculars,
    title: "Full Chain Traceability",
    description:
      "Lot-level tracking from ingredient receipt through finished product shipment. Forward and backward traceability within four hours. Quarterly mock recall exercises with 100% pass rate across all facilities.",
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.52_0.19_15/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <ShieldCheck className="size-3.5" />
              SQF Level 3 · HACCP · GFSI
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Quality{" "}
              <span className="text-gradient">Assurance</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Trust Through Rigor
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Your brand&apos;s reputation is on the line with every product
              that reaches the consumer. Our SQF Level 3 certified facilities,
              comprehensive HACCP programs, and rigorous quality systems ensure
              that every bag, tote, and pouch delivers exactly what was
              specified — every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Systems */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Award className="size-3.5" />
              Certified Excellence
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Quality{" "}
              <span className="text-gradient">Management</span>{" "}
              Systems
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Three interconnected, internationally certified systems form the
              backbone of our quality assurance program.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {certSystems.map((system) => (
              <div
                key={system.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-crimson/30 hover:shadow-lg hover:shadow-crimson/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                  <system.icon className="size-7 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {system.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardCheck, value: "150+", label: "Annual Third-Party Audits", desc: "SQF, ISO, Organic, Kosher, Halal, and customer-specific" },
              { icon: Search, value: "600+", label: "Internal Audits per Year", desc: "Cross-functional audits across all facilities and processes" },
              { icon: ShieldCheck, value: "120+", label: "Mock Recalls / Year", desc: "Quarterly traceability exercises — 100% pass rate" },
              { icon: Award, value: "400+", label: "Quality Professionals", desc: "Dedicated QA, food safety, and regulatory team members worldwide" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                  <item.icon className="size-7 text-gold" />
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-gold">
                  {item.value}
                </div>
                <h3 className="mt-2 font-heading text-base font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Package className="size-3.5" />
              Day-to-Day Excellence
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Food Safety{" "}
              <span className="text-gradient">Programs</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Beyond certification — the operational programs that run every
              shift, on every line, in every facility.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {safetyPrograms.map((program) => (
              <div
                key={program.title}
                className="glass rounded-2xl p-8 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                  <program.icon className="size-6 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {program.description}
                </p>
              </div>
            ))}
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
                Partner With{" "}
                <span className="text-gradient">Confidence</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                When you partner with Newly Weds Foods, you gain more than an
                ingredient supplier — you gain a quality and food safety partner
                committed to your brand&apos;s integrity.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/20"
                >
                  Contact Quality Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/capabilities/global-sourcing"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Global Sourcing
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
