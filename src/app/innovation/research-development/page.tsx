import type { Metadata } from "next";
import Link from "next/link";
import {
  Beaker,
  Microscope,
  FlaskConical,
  Scale,
  ChefHat,
  Factory,
  GraduationCap,
  Users,
  TestTubes,
  Gauge,
  Waves,
  Clock,
  ShieldCheck,
  ArrowRight,
  Building2,
  PieChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Development — Where Science Meets Flavor",
  description:
    "Explore Newly Weds Foods' 12 global R&D centers, ISO 17025-accredited labs, sensory suites, and benchtop-to-production capabilities that transform culinary ideas into market-ready products.",
};

const stats = [
  {
    icon: Building2,
    value: "12",
    label: "Global R&D Centers",
    description:
      "Strategically located innovation hubs with full analytical, sensory, and culinary capabilities.",
  },
  {
    icon: Users,
    value: "200+",
    label: "Scientists & Technologists",
    description:
      "Food scientists, flavor chemists, sensory specialists, and product developers collaborating worldwide.",
  },
  {
    icon: TestTubes,
    value: "10,000+",
    label: "Annual Analytical Tests",
    description:
      "Comprehensive testing spanning GC-MS profiling, rheology, texture analysis, and microbiological assays.",
  },
  {
    icon: Factory,
    value: "5",
    label: "Pilot Plants",
    description:
      "Full-scale production simulators enabling seamless benchtop-to-manufacturing transitions.",
  },
];

const analyticalServices = [
  {
    icon: Microscope,
    title: "GC-MS Flavor Profiling",
    description:
      "Gas chromatography-mass spectrometry identifies and quantifies volatile flavor compounds with parts-per-billion sensitivity. Essential for flavor matching, authenticity verification, and off-note detection.",
  },
  {
    icon: Gauge,
    title: "Rheology & Viscosity",
    description:
      "Precise measurement of flow behavior, coating thickness, and batter pickup under simulated production conditions. Ensures consistent application across thousands of units per hour.",
  },
  {
    icon: Waves,
    title: "Texture Analysis",
    description:
      "Quantitative measurement of crispness, crunch, tenderness, and mouthfeel using texture profile analysis (TPA) and acoustic envelope detectors for fried, baked, and frozen applications.",
  },
  {
    icon: Scale,
    title: "Physical Characterization",
    description:
      "Particle size distribution, bulk density, color spectrophotometry, water activity, and moisture sorption isotherms — the foundational measurements that ensure batch-to-batch consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Microbiological Testing",
    description:
      "ISO 17025-accredited pathogen screening, shelf-life challenge studies, and environmental monitoring programs that meet the most stringent global food safety standards.",
  },
  {
    icon: PieChart,
    title: "Sensory Evaluation",
    description:
      "Trained descriptive panels, consumer preference testing, and discrimination testing (triangle, duo-trio) conducted in controlled sensory suites with isolated booths and red-light capabilities.",
  },
];

const rndPhases = [
  {
    step: "01",
    title: "Concept & Brief",
    description:
      "Collaborative discovery sessions with culinary, marketing, and R&D teams. Define sensory targets, cost parameters, nutritional goals, and regulatory requirements.",
  },
  {
    step: "02",
    title: "Benchtop Development",
    description:
      "Rapid prototyping in application kitchens. Iterative formulation, tasting, and refinement — typically 5–15 rounds per concept with cross-functional daily standups.",
  },
  {
    step: "03",
    title: "Analytical Validation",
    description:
      "Full characterization suite: GC-MS, rheology, texture, color, water activity, and shelf-life screening. Every parameter documented against the target specification.",
  },
  {
    step: "04",
    title: "Pilot Scale-Up",
    description:
      "Production-simulated runs in dedicated pilot plants. Process parameter optimization, equipment compatibility testing, and preliminary sensory confirmation at scale.",
  },
  {
    step: "05",
    title: "Production Launch",
    description:
      "First commercial runs with R&D team on-site. Real-time adjustments, quality sign-off, and formal technology transfer to plant operations with complete documentation.",
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
              <Beaker className="size-3.5" />
              ISO 17025 Accredited Laboratories
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Research &amp;{" "}
              <span className="text-gradient">Development</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Where Science Meets Flavor
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              From our 12 global R&D centers to our ISO 17025-accredited
              analytical laboratories, we bring together food science, culinary
              artistry, and manufacturing expertise to turn bold ideas into
              scalable, market-winning products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <PieChart className="size-3.5" />
              R&amp;D by the Numbers
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The Scale of{" "}
              <span className="text-gradient">Our Investment</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              World-class infrastructure, exceptional talent, and a relentless
              commitment to scientific rigor.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                  <stat.icon className="size-7 text-crimson" />
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

      {/* R&D Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Clock className="size-3.5" />
              From Concept to Commercialization
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our{" "}
              <span className="text-gradient">
                Benchtop-to-Production
              </span>{" "}
              Pipeline
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              A disciplined, stage-gated process that de-risks innovation and
              accelerates speed-to-market.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {rndPhases.map((phase, idx) => (
              <div
                key={phase.step}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group relative"
              >
                <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
                  {phase.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytical Services */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <FlaskConical className="size-3.5" />
              Scientific Excellence
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Analytical{" "}
              <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              ISO 17025-accredited laboratories equipped with the most advanced
              instrumentation in food science.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analyticalServices.map((service) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Building2 className="size-3.5" />
              World-Class Facilities
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Where{" "}
              <span className="text-gradient">Discovery Happens</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Each of our 12 global R&amp;D centers is purpose-built with
              dedicated zones for every phase of the innovation lifecycle.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <ChefHat className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Application Kitchens
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Fully equipped commercial-grade kitchens with fryers, ovens,
                grills, and steamers — replicating real-world QSR and foodservice
                production environments. Where our chefs and scientists prototype
                side-by-side, tasting and iterating in real time.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10">
                <Microscope className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Analytical Laboratories
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                ISO 17025-accredited labs with GC-MS, HPLC, rheometers, texture
                analyzers, spectrophotometers, and environmental chambers. Every
                instrument networked into our global LIMS for real-time data
                sharing across centers.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10">
                <Factory className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                Pilot Plants
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Production-scale simulators with industrial mixers, coaters,
                fryers, and packaging lines. Validates process parameters,
                equipment compatibility, and sensory fidelity before committing
                to full-scale manufacturing — significantly reducing launch risk.
              </p>
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
              The <span className="text-gradient">Talent</span> Behind the
              Science
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Over 200 scientists and technologists — food chemists,
              microbiologists, sensory specialists, process engineers, and
              culinary professionals — united by a passion for delicious,
              functional food.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <ul className="space-y-4">
              {[
                "Food & flavor chemists with advanced degrees from the world's top programs",
                "Certified sensory scientists leading trained descriptive panels and consumer studies",
                "Process engineers specializing in coating, extrusion, agglomeration, and drying technologies",
                "Culinary professionals with fine-dining, QSR, and CPG product development backgrounds",
                "Regulatory specialists ensuring compliance across 60+ country markets",
                "Dedicated project managers orchestrating cross-functional timelines and deliverables",
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
                Ready to Put Science to Work for{" "}
                <span className="text-gradient">Your Next Product</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need a custom analytical project, a full-scale
                product development partnership, or access to our pilot plant —
                our global R&amp;D team is standing by.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/20"
                >
                  Contact Our R&amp;D Team
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
