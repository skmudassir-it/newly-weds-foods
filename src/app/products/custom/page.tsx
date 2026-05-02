import type { Metadata } from "next";
import Link from "next/link";
import {
  Beaker,
  ChefHat,
  Factory,
  Truck,
  ArrowRight,
  Check,
  Shield,
  Users,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Formulation",
  description:
    "Your vision, our expertise — custom food ingredient formulation from discovery through commercial production, backed by dedicated project management and IP protection.",
};

const processSteps = [
  {
    step: "01",
    icon: Beaker,
    title: "Discovery & Briefing",
    description:
      "We start by understanding your brand, target consumer, and performance requirements. Our cross-functional team — culinary, R&D, sensory, and commercial — aligns on the brief, timelines, and success criteria. Whether you need a flavor match, a texture target, or a clean-label reformulation, we scope the project end-to-end before the first gram is weighed.",
    highlights: [
      "Cross-functional kickoff with culinary, R&D, and commercial teams",
      "Competitive benchmarking and target profiling",
      "Defined timeline, milestones, and success metrics",
    ],
  },
  {
    step: "02",
    icon: ChefHat,
    title: "Benchtop Development",
    description:
      "Our food scientists and chefs develop initial prototypes in our ISO 17025-accredited labs. Iterative benchtop trials refine flavor, texture, appearance, and functionality. Sensory panels evaluate against targets. Typically 4–8 weeks depending on complexity, with regular checkpoints and tasting sessions.",
    highlights: [
      "Rapid iterative prototyping in accredited labs",
      "Internal sensory panels with descriptive analysis",
      "Raw material sourcing and supply chain validation",
    ],
  },
  {
    step: "03",
    icon: Factory,
    title: "Pilot Scale-Up",
    description:
      "Validated benchtop formulas transition to pilot-plant production. We replicate your manufacturing conditions — mixing, cooking, freezing, packaging — to identify and resolve scale-up challenges before they reach your line. Process parameters are documented for seamless tech transfer.",
    highlights: [
      "Pilot trials under simulated production conditions",
      "Process parameter documentation and control limits",
      "Shelf-life and stability studies initiated",
    ],
  },
  {
    step: "04",
    icon: Truck,
    title: "Commercial Production",
    description:
      "Full-scale production with rigorous QA/QC protocols. Our dedicated project manager oversees the first production runs at your facility or ours. Ongoing quality monitoring, sensory verification, and continuous improvement support ensure every batch matches the gold standard.",
    highlights: [
      "First-production supervision by dedicated PM",
      "Full QA/QC documentation and COA program",
      "Continuous improvement and formula optimization",
    ],
  },
];

const partnershipCards = [
  {
    icon: Users,
    title: "Dedicated Project Manager",
    description:
      "A single point of contact who owns your project from brief to first production — coordinating R&D, sourcing, QA, and commercial teams so you never have to chase status updates.",
  },
  {
    icon: Lock,
    title: "IP Protection",
    description:
      "Your formulations are your intellectual property. We operate under strict confidentiality agreements with secure, segregated documentation systems and clean-room protocols for competitive projects.",
  },
  {
    icon: Shield,
    title: "Quality You Can Trust",
    description:
      "ISO 17025-accredited labs, GFSI-certified facilities, and a quality culture built over 90+ years. Every formulation is backed by full traceability, allergen control, and regulatory compliance.",
  },
];

export default function CustomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.08),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold" />
              Custom Formulation
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Vision,{" "}
              <span className="text-gradient">Our Expertise</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Every iconic food product started as an idea. Our custom
              formulation team transforms your concept into a commercial
              reality — with the science, scale, and partnership model that
              the world&rsquo;s top food brands trust.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Our{" "}
              <span className="text-gradient">Formulation Process</span>
            </h2>
            <p className="mt-4 text-foreground/60">
              A proven four-stage process that takes your concept from napkin
              sketch to nationwide distribution — with transparency and
              collaboration at every step.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="glass rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
                >
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gold/10 font-heading select-none">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="relative flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground relative">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60 relative">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2 border-t border-border/50 pt-5 relative">
                    {step.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs text-foreground/60"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              A{" "}
              <span className="text-gradient">Partnership</span>{" "}
              Model
            </h2>
            <p className="mt-4 text-foreground/60">
              More than a supplier — a true innovation partner committed to
              your brand&rsquo;s success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-7 text-gold" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Ready to Create{" "}
                <span className="text-gradient">Something Remarkable?</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/60">
                Whether you&rsquo;re launching a new product line or
                reformulating an existing one, our team is ready to bring your
                vision to life. Let&rsquo;s start the conversation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-3.5 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-8 py-3.5 text-sm font-semibold text-gold-light hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  Explore Product Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
