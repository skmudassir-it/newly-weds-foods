import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Droplets,
  Globe,
  Heart,
  Leaf,
  LeafyGreen,
  Package,
  Recycle,
  Sprout,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability — Responsibility in Action | Newly Weds Foods",
  description:
    "Newly Weds Foods' commitment to environmental stewardship: 35% water reduction, zero-waste-to-landfill facilities, responsible sourcing, carbon footprint tracking, sustainable packaging, and community engagement programs. Responsibility in action.",
};

const sustainabilityInitiatives = [
  {
    icon: Droplets,
    title: "Water Stewardship",
    badge: "35% Reduction",
    description:
      "Water is essential to food manufacturing — and we treat it as the precious resource it is. Through advanced water recycling systems, closed-loop cooling, and process optimization across our global facilities, we have reduced water consumption by 35% per metric ton of production since our 2015 baseline. Key initiatives include: installation of membrane filtration systems that recycle up to 80% of process water, rainwater harvesting at six facilities, low-flow equipment upgrades, and real-time water monitoring dashboards at every plant. Our target: 50% reduction by 2030.",
    metrics: [
      { label: "Reduction Since 2015", value: "35%", icon: TrendingDown },
      { label: "2030 Target", value: "50%", icon: TrendingUp },
      { label: "Water Recycled Annually", value: "120M gal", icon: Recycle },
    ],
  },
  {
    icon: Recycle,
    title: "Waste Reduction & Circularity",
    badge: "8 Zero-Waste Facilities",
    description:
      "We are building a circular production model where waste becomes a resource. Eight of our facilities have achieved zero-waste-to-landfill status, with company-wide landfill diversion exceeding 85%. Programs include: comprehensive recycling streams for cardboard, plastics, metals, and pallets; organic waste composting and anaerobic digestion partnerships; ingredient optimization that minimizes production scrap; and a 'reduce-first' packaging design philosophy that eliminates unnecessary materials at the source. Byproduct from coating and seasoning production is repurposed as animal feed where food safety permits.",
    metrics: [
      { label: "Landfill Diversion", value: "85%+", icon: TrendingUp },
      { label: "Zero-Waste Sites", value: "8", icon: Recycle },
      { label: "Waste-to-Feed Programs", value: "12 sites", icon: Sprout },
    ],
  },
  {
    icon: LeafyGreen,
    title: "Responsible Sourcing",
    badge: "RSPO Certified",
    description:
      "The integrity of our products begins with the integrity of our supply chain. Our responsible sourcing program encompasses: 100% RSPO Mass Balance certified palm oil across all facilities, with a roadmap to RSPO Segregated by 2028; sustainable vanilla sourcing through partnerships with farming cooperatives in Madagascar; traceable spice supply chains with direct-from-origin relationships that support fair pricing and community development; and supplier diversity targets that expand opportunities for minority-, women-, and veteran-owned businesses in our procurement spend.",
    metrics: [
      { label: "RSPO Palm Oil", value: "100%", icon: Leaf },
      { label: "Direct-Origin Spices", value: "40%", icon: Globe },
      { label: "Diverse Suppliers", value: "150+", icon: Users },
    ],
  },
  {
    icon: BarChart3,
    title: "Carbon Footprint & Climate",
    badge: "Scope 1-3 Tracking",
    description:
      "We measure what matters. Newly Weds Foods has implemented comprehensive Scope 1, 2, and 3 greenhouse gas emissions tracking across all global operations, aligned with the GHG Protocol and CDP reporting standards. Our climate strategy includes: energy efficiency upgrades (LED lighting, high-efficiency motors, heat recovery systems) that have reduced energy intensity by 18% since 2018; on-site solar installations at five facilities generating 4.2 MW of renewable capacity; fleet optimization reducing logistics emissions through route planning and modal shifts to rail; and active participation in customer-sponsored Scope 3 reduction initiatives.",
    metrics: [
      { label: "Energy Intensity Reduction", value: "18%", icon: TrendingDown },
      { label: "Solar Capacity", value: "4.2 MW", icon: BarChart3 },
      { label: "GHG Protocol Aligned", value: "Yes", icon: Globe },
    ],
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    badge: "Reduce-First Philosophy",
    description:
      "Packaging protects product quality — but it shouldn&apos;t burden the planet. Our sustainable packaging strategy follows a reduce-first hierarchy: eliminate unnecessary packaging layers, lightweight materials where function allows, incorporate post-consumer recycled (PCR) content, and ensure end-of-life recyclability. Recent achievements include: transitioning bulk packaging to 30% PCR resin across North American operations, introducing recyclable mono-material pouches for portion-control applications, eliminating PVC from all packaging components, and implementing a pallet reuse program that recovers and refurbishes over 500,000 pallets annually. We partner with customers to co-develop packaging that meets both performance and sustainability goals.",
    metrics: [
      { label: "PCR Content in Bulk Packaging", value: "30%", icon: Recycle },
      { label: "Pallets Recovered/Year", value: "500K+", icon: Package },
      { label: "PVC Eliminated", value: "100%", icon: Leaf },
    ],
  },
  {
    icon: Heart,
    title: "Community & People",
    badge: "Giving Back",
    description:
      "Sustainability extends to the communities where we live and work. Our community engagement programs focus on food security, STEM education, and local economic development. Initiatives include: partnerships with food banks and community kitchens in every city where we operate — donating over 2 million pounds of food annually; the Newly Weds Foods STEM Scholarship program supporting food science and engineering students at 10 partner universities; paid volunteer time for all employees (16 hours per year); and local hiring commitments that prioritize workforce development in the neighborhoods surrounding our facilities. We believe that strong communities create strong companies — and vice versa.",
    metrics: [
      { label: "Food Donated Annually", value: "2M+ lbs", icon: Heart },
      { label: "Partner Universities", value: "10", icon: Users },
      { label: "Volunteer Hours/Year", value: "48,000+", icon: Globe },
    ],
  },
];

const progressItems = [
  { label: "Water Reduction", pct: 35, target: "50% by 2030" },
  { label: "Landfill Diversion", pct: 85, target: "95% by 2028" },
  { label: "Energy Intensity Reduction", pct: 18, target: "30% by 2030" },
  { label: "RSPO Segregated Palm", pct: 25, target: "100% by 2028" },
  { label: "PCR Packaging Adoption", pct: 30, target: "50% by 2027" },
  { label: "Direct-Origin Sourcing", pct: 40, target: "65% by 2030" },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold" />
              Responsibility in Action
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Sustainability</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              We believe that great food and a healthy planet go hand in hand.
              Our sustainability commitments span water stewardship, waste
              reduction, responsible sourcing, carbon management, and community
              engagement — because doing the right thing is simply good
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Promise */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-gold/20 bg-surface p-8 md:p-12 backdrop-blur-xl">
              <div className="absolute -top-5 left-8 rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Our Commitment
                </span>
              </div>
              <p className="mt-4 font-heading text-2xl font-semibold italic leading-relaxed text-foreground md:text-3xl">
                &ldquo;Sustainability is not a program or a department — it is
                how we do business. Every investment in water efficiency, waste
                reduction, and responsible sourcing is an investment in our
                customers&apos; supply chains, our communities&apos; futures,
                and our planet&apos;s health.&rdquo;
              </p>
              <p className="mt-4 text-sm text-gold font-medium">
                — Sarah Mitchell, Chief Sustainability Officer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Sustainability{" "}
              <span className="text-gradient">Progress</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Measurable progress toward ambitious goals — tracked and reported
              transparently.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {progressItems.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 border border-gold/10 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <span className="text-sm font-bold text-gold">
                    {item.pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-surface overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-crimson transition-all duration-1000"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-foreground/50">
                  Target: {item.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Initiative Sections */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Six pillars of action — each with measurable targets and
              continuous improvement programs driving real results.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {sustainabilityInitiatives.map((initiative, idx) => (
              <div
                key={initiative.title}
                className="glass rounded-2xl p-8 md:p-10 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${
                          idx % 2 === 0 ? "bg-gold/10" : "bg-crimson/10"
                        }`}
                      >
                        <initiative.icon
                          className={`size-7 ${
                            idx % 2 === 0 ? "text-gold" : "text-crimson"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-foreground">
                          {initiative.title}
                        </h3>
                        <span className="inline-block mt-1 rounded-full border border-gold/20 bg-gold/5 px-3 py-0.5 text-xs font-medium text-gold">
                          {initiative.badge}
                        </span>
                      </div>
                    </div>
                    <p className="mt-5 text-foreground/70 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                  <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 justify-center">
                    {initiative.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 rounded-xl border border-gold/10 bg-surface/50 p-4 text-center"
                      >
                        <div className="font-heading text-2xl font-bold text-gold">
                          {m.value}
                        </div>
                        <p className="mt-1 text-xs text-foreground/60">
                          {m.label}
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

      {/* Certifications & Partnerships */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Partnerships &amp;{" "}
              <span className="text-gradient">Recognition</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              We collaborate with leading organizations to advance
              sustainability across the food industry.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "RSPO", desc: "Roundtable on Sustainable Palm Oil — Mass Balance certified across all operations." },
              { name: "CDP", desc: "Carbon Disclosure Project — annual Scope 1-3 emissions reporting and disclosure." },
              { name: "SBTi", desc: "Science Based Targets initiative — committed to setting validated reduction targets." },
              { name: "SEDEX", desc: "Supplier Ethical Data Exchange — SMETA 4-pillar audits at all facilities." },
            ].map((p) => (
              <div
                key={p.name}
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/30 border border-gold/10"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <Award className="size-6 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Globe className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Global Impact, Local Action
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
                With operations on five continents, our sustainability programs
                are tailored to local environmental contexts — water
                conservation where water is scarce, renewable energy where the
                grid allows, and community programs that address the specific
                needs of each neighborhood we call home. Global standards
                ensure consistency; local action ensures relevance.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold-light">
                <Leaf className="size-4" />
                <span>Think globally. Act locally. Report transparently.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Build a More{" "}
                <span className="text-gradient">Sustainable Supply Chain</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Partner with a supplier that shares your sustainability values.
                Let&apos;s discuss how our environmental programs can support
                your brand&apos;s ESG goals and consumer commitments.
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
                  href="/company/quality-safety"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Quality &amp; Safety
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
