import type { Metadata } from "next";
import {
  Beaker,
  Globe,
  Lightbulb,
  Search,
  Sprout,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation — Food Science & Culinary Trends",
  description:
    "Explore Newly Weds Foods' innovation capabilities — R&D, culinary trends, and global innovation centers that drive the future of food ingredients.",
};

const innovationPillars = [
  {
    icon: Beaker,
    title: "Research & Development",
    description:
      "Our 12 global R&D centers combine food science, sensory analysis, and culinary expertise to develop breakthrough ingredient solutions. From benchtop concept to full-scale production, our scientists and chefs work side-by-side to turn trends into scalable products.",
    highlights: [
      "ISO 17025-accredited analytical laboratories",
      "Over 10,000 custom formulations developed annually",
      "Advanced flavor chemistry and GC-MS profiling",
      "Rapid benchtop-to-production scale-up",
    ],
  },
  {
    icon: TrendingUp,
    title: "Culinary Trend Intelligence",
    description:
      "Our global network of chefs, trend scouts, and market analysts track emerging flavor movements across 60+ countries. We translate consumer behavior into actionable product concepts that get to market before the trend peaks.",
    highlights: [
      "Dedicated culinary trend team on every continent",
      "Quarterly trend forecasting reports for partners",
      "Street-food-inspired flavor collections",
      "Plant-based, clean-label, and functional food innovations",
    ],
  },
  {
    icon: Globe,
    title: "Global Innovation Network",
    description:
      "Innovation isn't confined to one lab — it flows across our worldwide network. Our innovation centers in Chicago, Bangkok, Shanghai, Sydney, and Corby share insights, technology, and talent to deliver globally inspired, locally relevant solutions.",
    highlights: [
      "12 innovation and culinary centers worldwide",
      "Cross-regional technology transfer programs",
      "Regional flavor authenticity verified by local experts",
      "24/7 development cycles across time zones",
    ],
  },
];

const capabilities = [
  {
    icon: Sprout,
    title: "Plant-Based & Alternative Proteins",
    description:
      "Proprietary coating and flavor systems purpose-built for plant-based proteins, delivering the taste, texture, and visual appeal consumers expect.",
  },
  {
    icon: Lightbulb,
    title: "Clean-Label Formulation",
    description:
      "Natural, recognizable ingredients that meet consumer demand for transparency without sacrificing performance, shelf life, or flavor impact.",
  },
  {
    icon: Search,
    title: "Sensory Science",
    description:
      "Advanced sensory evaluation suites with trained panels and consumer testing capabilities that ensure every product delivers on its flavor promise.",
  },
];

export default function InnovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.52_0.19_15/0.08),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <span className="size-1.5 rounded-full bg-crimson animate-pulse" />
              R&D · Trends · Global Reach
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A World of{" "}
              <span className="text-gradient">Flavorful Innovation</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Innovation is at the heart of everything we do. From our ISO
              17025-accredited labs to our global network of culinary centers,
              we invest in the science and artistry that turn bold ideas into
              irresistible products.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {innovationPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`flex flex-col gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Icon */}
                <div className="shrink-0 flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 to-crimson/10 border border-gold/20 shadow-lg shadow-gold/5">
                  <pillar.icon className="size-10 text-gold" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {pillar.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <span className="size-1.5 rounded-full bg-gold" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Innovation{" "}
              <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The tools, talent, and technology that power our innovation engine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <cap.icon className="size-7 text-gold" />
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Create the Next Big Taste?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need a custom coating system, a trend-forward
                seasoning, or a complete product development partner — our
                innovation team is ready to collaborate.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
