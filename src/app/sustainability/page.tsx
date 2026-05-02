import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  Droplets,
  Trash2,
  Recycle,
  TreePine,
  Globe,
  Award,
  ArrowRight,
  Factory,
  Heart,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability — Our Responsibility, Our Future | Newly Weds Foods",
  description:
    "Newly Weds Foods is committed to environmental stewardship. Learn about our water conservation, waste reduction, responsible sourcing, and carbon footprint goals across 30+ global facilities.",
};

const initiatives = [
  {
    icon: Droplets,
    stat: "35%",
    label: "Water Usage Reduction",
    description:
      "Advanced water reclamation systems and closed-loop cooling across manufacturing facilities have reduced water consumption by over one-third since our baseline year.",
    highlights: [
      "Closed-loop water systems in 80% of facilities",
      "Rainwater harvesting at 12 locations",
      "Real-time water monitoring and leak detection",
    ],
  },
  {
    icon: Trash2,
    stat: "Zero",
    label: "Waste-to-Landfill Goal",
    description:
      "We're on track to achieve zero waste-to-landfill across all manufacturing operations by 2030. Current diversion rate exceeds 78% through recycling, composting, and energy recovery.",
    highlights: [
      "78% waste diversion rate achieved",
      "Organic byproduct composting programs",
      "Packaging reduction and right-sizing initiatives",
    ],
  },
  {
    icon: TrendingDown,
    stat: "25%",
    label: "Carbon Footprint Reduction",
    description:
      "Targeting a 25% reduction in Scope 1 and Scope 2 emissions by 2030 through energy efficiency, renewable energy adoption, and process optimization across global operations.",
    highlights: [
      "Solar panel installations at 6 facilities",
      "LED retrofits and energy management systems",
      "Fleet optimization and route efficiency programs",
    ],
  },
  {
    icon: TreePine,
    stat: "100%",
    label: "Responsible Sourcing",
    description:
      "Committed to 100% traceable and responsibly sourced raw materials. Our supplier code of conduct sets rigorous standards for environmental practices, labor conditions, and ethical business.",
    highlights: [
      "Supplier sustainability scorecards",
      "Third-party auditing of high-risk supply chains",
      "Partnerships with Rainforest Alliance and Fair Trade",
    ],
  },
];

const commitments = [
  {
    icon: Factory,
    title: "Sustainable Manufacturing",
    description:
      "Every new facility is designed to LEED Silver standards or equivalent. Existing facilities undergo continuous retrofitting for energy and water efficiency. Our manufacturing excellence program includes sustainability KPIs alongside quality and safety metrics.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "We're designing for circularity — from ingredient sourcing to packaging. Organic byproducts from our manufacturing processes are repurposed as animal feed, compost, or bioenergy. We're piloting reusable bulk container systems with key customers.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description:
      "Sustainability extends beyond our factory walls. We invest in the communities where we operate through educational partnerships, food bank donations, local environmental projects, and STEM education programs that inspire the next generation of food scientists.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency & Reporting",
    description:
      "We publish an annual Sustainability Report aligned with GRI Standards. Our progress is independently verified, and we engage regularly with stakeholders — customers, suppliers, employees, and communities — to ensure our sustainability strategy reflects shared priorities.",
  },
];

const goals = [
  { year: "2026", goal: "100% renewable electricity for global operations" },
  { year: "2028", goal: "Zero waste-to-landfill at all manufacturing sites" },
  { year: "2030", goal: "25% reduction in Scope 1 & 2 emissions" },
  { year: "2030", goal: "100% traceable and sustainably sourced raw materials" },
  { year: "2035", goal: "Net-zero carbon emissions across full value chain" },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.18_145/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Leaf className="size-3" />
              Environmental Stewardship
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Responsibility</span>, Our Future
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Sustainability isn&apos;t a department — it&apos;s woven into
              every decision we make. From responsible sourcing to carbon
              reduction, we&apos;re committed to doing business in a way that
              respects our planet, our people, and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Key <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Measurable progress across the environmental priorities that
              matter most to our stakeholders.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {initiatives.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-8 md:p-10 border border-gold/10 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex items-start gap-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <item.icon className="size-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-4xl font-bold text-gold">
                      {item.stat}
                    </div>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/60"
                        >
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Commitments</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Sustainability is embedded in how we operate, source, and partner.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                  <c.icon className="size-6 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Sustainability Roadmap</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Bold targets backed by concrete action plans.
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            {goals.map((goal, i) => (
              <div key={goal.year} className="relative flex gap-6 pb-10 last:pb-0">
                {i < goals.length - 1 && (
                  <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gold/20" />
                )}
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-surface text-sm font-bold text-gold">
                  {goal.year}
                </div>
                <div className="pt-3">
                  <p className="text-lg text-foreground leading-relaxed">
                    {goal.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.18_145/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Globe className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Learn More About Our{" "}
                <span className="text-gradient">Sustainability Journey</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Download our annual Sustainability Report, explore case studies,
                or connect with our sustainability team to learn how we can
                support your environmental goals.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Our Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/company/sustainability"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Company Sustainability
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
