import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  ClipboardList,
  Factory,
  FlaskConical,
  Lightbulb,
  Package,
  Rocket,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Formulation — Built Around Your Vision",
  description:
    "Newly Weds Foods' custom formulation process: Discovery, Benchtop, Pilot, and Production. Dedicated project management, IP protection, and transparent timelines turn your product vision into commercial reality.",
};

const formulationSteps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Discovery",
    description:
      "Deep-dive collaboration with your team to define sensory targets, nutritional goals, cost parameters, and regulatory requirements. We align on success criteria, timeline expectations, and critical deliverables before a single formula is written.",
    highlights: [
      "Cross-functional kickoff with R&D, culinary, QA, and commercial teams",
      "Competitive product benchmarking and gap analysis",
      "Defined project charter with milestone tracking",
    ],
  },
  {
    step: "02",
    icon: Beaker,
    title: "Benchtop",
    description:
      "Rapid prototyping in our application kitchens — typically 5–15 iterative rounds. Our food scientists and chefs work side-by-side, tasting and refining in real time. Every prototype is screened against your target specification.",
    highlights: [
      "Iterative formulation with daily cross-functional standups",
      "Preliminary sensory screening and analytical validation",
      "Cost modeling at each formulation iteration",
    ],
  },
  {
    step: "03",
    icon: FlaskConical,
    title: "Pilot",
    description:
      "Production-simulated runs in dedicated pilot plants using industrial-scale equipment. We validate process parameters, equipment compatibility, and sensory fidelity before committing capital to full-scale manufacturing.",
    highlights: [
      "Full analytical characterization (GC-MS, rheology, texture, color)",
      "Shelf-life screening under accelerated and real-time conditions",
      "Process parameter optimization and equipment qualification",
    ],
  },
  {
    step: "04",
    icon: Factory,
    title: "Production",
    description:
      "First commercial runs with R&D team on-site for real-time adjustments. Formal technology transfer to plant operations with complete documentation — SOPs, quality specs, and regulatory filings — for seamless ongoing production.",
    highlights: [
      "On-site R&D support during first production runs",
      "Complete technology transfer package and operator training",
      "Ongoing quality monitoring and continuous improvement program",
    ],
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Dedicated Project Manager",
    description:
      "Every custom formulation project is assigned a dedicated PM who serves as your single point of contact — orchestrating timelines, facilitating communication, and ensuring accountability from kickoff through commercialization.",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description:
      "Your formulations are yours. We operate under strict confidentiality agreements with IP assignment clauses. Segregated development environments, need-to-know access protocols, and legal frameworks that protect your competitive advantage.",
  },
  {
    icon: ClipboardList,
    title: "Transparent Timelines",
    description:
      "Realistic, data-driven timeline commitments backed by 80+ years of formulation experience. Stage-gated milestones with clear go/no-go criteria. No surprises — just predictable, disciplined execution.",
  },
];

export default function CustomFormulationPage() {
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
              End-to-End Development
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Custom{" "}
              <span className="text-gradient">Formulation</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Built Around Your Vision
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Your product, your specifications, your intellectual property.
              Our proven four-phase process — Discovery, Benchtop, Pilot,
              Production — transforms your concept into commercial reality
              with disciplined execution and complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Rocket className="size-3.5" />
              From Concept to Commercialization
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our{" "}
              <span className="text-gradient">
                Four-Phase
              </span>{" "}
              Process
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              A disciplined, stage-gated methodology that de-risks innovation
              and accelerates speed-to-market.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {formulationSteps.map((step) => (
              <div
                key={step.step}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-crimson/30 hover:shadow-lg hover:shadow-crimson/5 group relative"
              >
                <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
                  {step.step}
                </span>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                    <step.icon className="size-6 text-crimson" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-xs text-foreground/60"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <ArrowRight className="size-2.5 text-gold" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Shield className="size-3.5" />
              What Sets Us Apart
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The{" "}
              <span className="text-gradient">Newly Weds</span>{" "}
              Difference
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Three commitments that define every custom formulation
              partnership.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <diff.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {diff.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Package className="size-3.5" />
              What to Expect
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Timeline</span>{" "}
              Expectations
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Realistic, transparent timelines based on 80+ years of
              formulation experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "Discovery", duration: "2–3 Weeks", detail: "Brief development, benchmarking, and project charter" },
              { phase: "Benchtop", duration: "4–8 Weeks", detail: "Iterative prototyping and sensory optimization" },
              { phase: "Pilot", duration: "3–6 Weeks", detail: "Scale-up validation and analytical characterization" },
              { phase: "Production", duration: "4–8 Weeks", detail: "First commercial runs and technology transfer" },
            ].map((item) => (
              <div
                key={item.phase}
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="font-heading text-3xl font-bold text-gold">
                  {item.duration}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {item.phase}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  {item.detail}
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
                Ready to Bring Your{" "}
                <span className="text-gradient">Vision to Life</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you have a fully defined target profile or just the
                seed of an idea, our formulation team is ready to partner
                with you. Let&apos;s start the conversation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/20"
                >
                  Start Your Project
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/capabilities/research-development"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Explore R&amp;D Capabilities
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
