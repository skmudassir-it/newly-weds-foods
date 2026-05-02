import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Search,
  Leaf,
  Truck,
  BarChart4,
  Award,
  Building2,
  Ship,
  Wheat,
  Factory,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Sourcing — Quality Ingredients, Worldwide Reach",
  description:
    "Newly Weds Foods' global sourcing capabilities: 40+ country supplier network, rigorous quality vetting, full traceability, sustainability programs, risk management, and deep commodity expertise.",
};

const sourcingPillars = [
  {
    icon: Globe,
    title: "40+ Country Network",
    description:
      "Direct relationships with growers, processors, and brokers across more than 40 countries. From paprika in Peru to black pepper in Vietnam, our procurement teams are embedded in the regions where the world's finest ingredients originate.",
    stats: [
      { label: "Source Countries", value: "40+" },
      { label: "Active Suppliers", value: "1,200+" },
    ],
  },
  {
    icon: Search,
    title: "Rigorous Supplier Vetting",
    description:
      "Every supplier undergoes a comprehensive qualification process: GFSI-benchmarked certification requirements, on-site audits by our global quality team, COA verification for every incoming lot, annual scorecard reviews, and re-qualification on a 24-month cycle.",
    stats: [
      { label: "Annual Audits", value: "200+" },
      { label: "Approval Rate", value: "< 60%" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Full Traceability",
    description:
      "Complete lot-level traceability from farm to finished product. Our ERP-integrated system captures every ingredient lot, every transport leg, and every quality checkpoint — enabling full forward and backward traceability within four hours.",
    stats: [
      { label: "Traceability", value: "4 hrs" },
      { label: "Mock Traces", value: "120+/yr" },
    ],
  },
];

const riskManagement = [
  {
    icon: BarChart4,
    title: "Commodity Intelligence",
    description:
      "Dedicated commodity analysts track pricing trends, crop forecasts, weather events, and geopolitical factors across every key ingredient category. Real-time market intelligence informs procurement strategy and protects customer supply chains.",
  },
  {
    icon: Ship,
    title: "Supply Chain Resilience",
    description:
      "Multi-sourced critical ingredients with contingency plans for every material. Strategic safety stock programs, regional warehousing, and alternative logistics routes ensure continuity during disruptions.",
  },
  {
    icon: Leaf,
    title: "Sustainability Programs",
    description:
      "RSPO Mass Balance certified palm oil supply chain. Direct-trade partnerships with grower cooperatives. Regenerative agriculture pilot programs. Ethical sourcing policies aligned with UN Sustainable Development Goals.",
  },
];

export default function GlobalSourcingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Globe className="size-3.5" />
              40+ Country Supplier Network
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Global{" "}
              <span className="text-gradient">Sourcing</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Quality Ingredients, Worldwide Reach
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              The finest ingredients don&apos;t come from one place — they come
              from the right place. Our global procurement network spans 40+
              countries, with deep relationships, rigorous vetting, and
              complete traceability built into every link of the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Building2 className="size-3.5" />
              Our Sourcing Infrastructure
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Three Pillars of{" "}
              <span className="text-gradient">Sourcing</span>{" "}
              Excellence
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              A global network, rigorous vetting, and complete transparency —
              the foundation of every ingredient that enters our facilities.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {sourcingPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="glass rounded-2xl p-8 md:p-10 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                        <pillar.icon className="size-7 text-gold" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-5 text-foreground/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 justify-center">
                    {pillar.stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex-1 rounded-xl border border-gold/10 bg-surface/50 p-5 text-center"
                      >
                        <div className="font-heading text-3xl font-bold text-gold">
                          {s.value}
                        </div>
                        <p className="mt-1 text-xs text-foreground/60">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodity Expertise */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Wheat className="size-3.5" />
              Deep Market Knowledge
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Commodity</span>{" "}
              Expertise
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Category-specific procurement teams with decades of experience in
              the ingredients that matter most.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { category: "Spices & Herbs", detail: "Black pepper, paprika, turmeric, cumin, coriander, chili — direct relationships with growers in Vietnam, India, Peru, and Ethiopia" },
              { category: "Grains & Flours", detail: "Wheat, corn, rice, and ancient grains — deep partnerships with millers and processors across the Americas, Europe, and Asia" },
              { category: "Oils & Fats", detail: "RSPO-certified palm oil, high-oleic sunflower, canola — sustainable sourcing programs with full chain-of-custody documentation" },
              { category: "Functional Ingredients", detail: "Starches, proteins, fibers, hydrocolloids — technical procurement team evaluates functional performance, not just price per kilo" },
            ].map((item) => (
              <div
                key={item.category}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-crimson/10 mb-4">
                  <Factory className="size-5 text-crimson" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.category}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ShieldCheck className="size-3.5" />
              Protecting Your Supply Chain
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Risk{" "}
              <span className="text-gradient">Management</span>{" "}
              &amp; Resilience
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Sourcing is about more than finding ingredients — it&apos;s about
              ensuring they arrive, on spec, every time.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {riskManagement.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Source With{" "}
                <span className="text-gradient">Confidence</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Let our global procurement team put 40+ countries of sourcing
                expertise to work for your supply chain. Quality, traceability,
                and reliability — guaranteed.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Sourcing Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/capabilities/quality-assurance"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Quality Assurance
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
