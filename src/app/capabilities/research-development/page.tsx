import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Microscope,
  FlaskConical,
  Scale,
  ChefHat,
  Gauge,
  Waves,
  ShieldCheck,
  PieChart,
  Clock,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Development — The Science Behind Success",
  description:
    "Newly Weds Foods R&D: analytical chemistry, rheology, microbiology, shelf-life studies, sensory evaluation, and application testing. Advanced equipment and methodologies that power food ingredient innovation.",
};

const analyticalCapabilities = [
  {
    icon: Microscope,
    title: "Analytical Chemistry",
    description:
      "GC-MS, HPLC, and ICP-MS instrumentation for flavor compound profiling, nutritional verification, and contaminant screening at parts-per-billion sensitivity. Full characterization of volatile and non-volatile flavor components.",
  },
  {
    icon: Gauge,
    title: "Rheology & Texture Analysis",
    description:
      "Precise measurement of viscosity, flow behavior, coating pickup, and batter adhesion under simulated production conditions. Texture profile analysis (TPA) quantifies crispness, crunch, tenderness, and mouthfeel.",
  },
  {
    icon: Waves,
    title: "Microbiology",
    description:
      "ISO 17025-accredited pathogen screening, shelf-life challenge studies, and environmental monitoring programs. Full indicator organism, pathogen, and spoilage organism panels with rapid turnaround.",
  },
  {
    icon: Clock,
    title: "Shelf-Life Studies",
    description:
      "Accelerated and real-time shelf-life protocols across frozen, refrigerated, and ambient conditions. Moisture migration, oxidation, texture degradation, and sensory fade monitored at defined intervals.",
  },
  {
    icon: PieChart,
    title: "Sensory Evaluation",
    description:
      "Trained descriptive panels, consumer preference testing, and discrimination testing (triangle, duo-trio) in controlled sensory suites. Red-light capabilities eliminate visual bias for objective flavor assessment.",
  },
  {
    icon: ChefHat,
    title: "Application Testing",
    description:
      "Full-scale application kitchens replicating QSR, foodservice, and industrial production environments. Fryers, ovens, grills, steamers, and packaging lines validate real-world performance before commercial launch.",
  },
];

const equipment = [
  {
    category: "Chromatography",
    items: [
      "GC-MS with headspace and SPME autosamplers",
      "HPLC with UV, RI, and fluorescence detectors",
      "ICP-MS for trace metal and mineral analysis",
    ],
  },
  {
    category: "Rheology & Texture",
    items: [
      "Rotational rheometers with temperature control",
      "Texture analyzers with 50+ probe attachments",
      "Rapid Visco Analyzer (RVA) for starch characterization",
    ],
  },
  {
    category: "Physical Characterization",
    items: [
      "Laser diffraction particle size analyzers",
      "Spectrophotometers with integrating sphere",
      "Water activity meters and moisture sorption analyzers",
    ],
  },
  {
    category: "Microbiology",
    items: [
      "Real-time PCR for rapid pathogen detection",
      "ELISA readers for allergen swab verification",
      "Biosafety level 2 microbiology suites",
    ],
  },
];

export default function ResearchDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.52_0.19_15/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <FlaskConical className="size-3.5" />
              ISO 17025 Accredited Laboratories
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Research &amp;{" "}
              <span className="text-gradient">Development</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              The Science Behind Success
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              World-class analytical chemistry, rheology, microbiology,
              shelf-life science, and sensory evaluation — all under one roof.
              Our ISO 17025-accredited laboratories transform data into
              delicious, scalable products.
            </p>
          </div>
        </div>
      </section>

      {/* Analytical Capabilities Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Microscope className="size-3.5" />
              Scientific Capabilities
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Core{" "}
              <span className="text-gradient">Analytical</span>{" "}
              Capabilities
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Six interconnected disciplines — each one a critical link in the
              chain from raw material to market-ready product.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analyticalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
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

      {/* Equipment & Methodology */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Scale className="size-3.5" />
              Our Toolkit
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Equipment &amp;{" "}
              <span className="text-gradient">Methodology</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              State-of-the-art instrumentation operated by expert scientists
              who understand food — not just data.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((eq) => (
              <div
                key={eq.category}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <h3 className="font-heading text-lg font-semibold text-gold mb-4">
                  {eq.category}
                </h3>
                <ul className="space-y-2">
                  {eq.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-xs text-foreground/60 leading-relaxed"
                    >
                      <span className="mt-0.5 flex size-3 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <ArrowRight className="size-2 text-gold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ShieldCheck className="size-3.5" />
              Why It Matters
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              An{" "}
              <span className="text-gradient">Integrated</span>{" "}
              Approach
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Data from every analytical discipline flows into a unified
              view of your product — because isolated data points don&apos;t
              tell the full story.
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10">
              <ul className="space-y-4">
                {[
                  "GC-MS flavor profiles correlated with sensory panel scores — connecting chemistry to consumer perception",
                  "Rheology data mapped to coating pickup and texture analysis — optimizing process and product simultaneously",
                  "Microbiological challenge studies paired with real-time shelf-life monitoring — predictive safety without guesswork",
                  "Application testing in commercial-grade kitchens — validating lab data against real-world cooking conditions",
                  "Global LIMS network enables real-time data sharing across 12 R&D centers — every lab, every scientist, one truth",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 glass rounded-xl p-4"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <ArrowRight className="size-3 text-gold" />
                    </span>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talent */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <GraduationCap className="size-3.5" />
              Our Greatest Asset
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The <span className="text-gradient">Scientists</span> Behind the
              Science
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Over 200 scientists and technologists — food chemists,
              microbiologists, sensory specialists, and process engineers —
              united by a passion for delicious, functional food.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <ul className="space-y-4">
              {[
                "Food &amp; flavor chemists with advanced degrees from the world&apos;s top programs",
                "Certified sensory scientists leading trained descriptive panels and consumer studies",
                "Process engineers specializing in coating, extrusion, agglomeration, and drying technologies",
                "Microbiologists with expertise in pathogen control, shelf-life science, and environmental monitoring",
                "Regulatory specialists ensuring compliance across 60+ country markets",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 glass rounded-xl p-4"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <ArrowRight className="size-3 text-gold" />
                  </span>
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-crimson/20 bg-gradient-to-br from-crimson/5 to-gold/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.52_0.19_15/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Put Science to Work for{" "}
                <span className="text-gradient">Your Next Product</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need a custom analytical project, shelf-life
                validation, or a complete R&amp;D partnership — our global
                team of scientists is ready to collaborate.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/20"
                >
                  Contact R&amp;D Team
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
