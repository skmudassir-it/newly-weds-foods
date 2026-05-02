import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Beaker,
  Binoculars,
  ClipboardCheck,
  FileCheck,
  FlaskConical,
  Globe,
  Microscope,
  Package,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Food Safety — Excellence Without Compromise | Newly Weds Foods",
  description:
    "Newly Weds Foods' commitment to quality and food safety: ISO 17025-accredited labs, SQF Level 3 certified facilities, HACCP programs, allergen control, full traceability, and rigorous supplier qualification. Excellence without compromise.",
};

const qualitySystems = [
  {
    icon: Microscope,
    title: "ISO 17025 Accredited Labs",
    description:
      "Our 12 global R&D and quality laboratories are accredited to ISO/IEC 17025:2017 — the international gold standard for testing and calibration competence. This accreditation, granted by third-party bodies including A2LA, ensures that every analytical result, from allergen testing to nutritional profiling, meets the highest standards of accuracy, reliability, and reproducibility. Our labs participate in proficiency testing programs and undergo annual surveillance audits to maintain accreditation.",
    stats: [
      { label: "Accredited Labs", value: "12" },
      { label: "Annual Tests", value: "500,000+" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "SQF Level 3 Certification",
    description:
      "All Newly Weds Foods manufacturing facilities are certified to Safe Quality Food (SQF) Level 3 — the highest tier of the globally recognized GFSI-benchmarked standard. SQF Level 3 encompasses both food safety (Level 2) and food quality management systems, requiring documented controls for every process from receiving through shipping. Facilities undergo unannounced annual audits and maintain continuous improvement programs to ensure ongoing compliance.",
    stats: [
      { label: "Certified Facilities", value: "30+" },
      { label: "Audit Score Avg", value: "98/100" },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "HACCP & Preventive Controls",
    description:
      "Every facility operates under a comprehensive Hazard Analysis and Critical Control Points (HACCP) plan — or the FDA-mandated HARPC (Hazard Analysis and Risk-Based Preventive Controls) framework where applicable. Our food safety teams identify biological, chemical, and physical hazards at every stage of production, establish critical limits, implement monitoring procedures, and maintain rigorous corrective action and verification protocols. HACCP plans are reviewed quarterly and updated whenever new products, processes, or equipment are introduced.",
    stats: [
      { label: "HACCP Plans", value: "500+" },
      { label: "CCPs Monitored", value: "1,200+" },
    ],
  },
];

const safetyPrograms = [
  {
    icon: Search,
    title: "Allergen Control & Management",
    description:
      "Dedicated allergen management programs govern every aspect of production — from segregated receiving and storage to validated cleaning procedures between production runs. Our allergen control protocols include full VITAL (Voluntary Incidental Trace Allergen Labelling) compliance, ELISA-based swab verification of cleaning effectiveness, color-coded tools and utensils by allergen zone, and dedicated production lines for certified gluten-free and top-9-allergen-free products. Every label undergoes multi-point verification before release.",
  },
  {
    icon: Binoculars,
    title: "Full Chain Traceability",
    description:
      "Complete lot-level traceability from ingredient origin to finished product shipment. Our ERP-integrated system captures every ingredient lot, every production parameter, and every quality check — enabling full forward and backward traceability within four hours. In the event of a recall scenario, we can identify and isolate affected lots with surgical precision, minimizing disruption while maximizing consumer safety. Mock trace exercises are conducted quarterly across all facilities.",
  },
  {
    icon: Truck,
    title: "Supplier Qualification & Verification",
    description:
      "Every ingredient supplier undergoes a rigorous qualification process before their first shipment reaches our docks. Our supplier approval program includes: GFSI-benchmarked certification requirements for all raw material suppliers, on-site audits conducted by our global quality team, certificate of analysis (COA) verification for every incoming lot, annual scorecard reviews, and a supplier code of conduct encompassing food safety, ethics, and sustainability expectations. Suppliers are re-qualified on a 24-month cycle.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance & Certifications",
    description:
      "Our global regulatory affairs team maintains compliance across FDA (21 CFR 117), USDA FSIS, EU Regulation 852/2004, CFIA SFCR, FSANZ, and other frameworks governing the 60+ countries we serve. Additional certifications include: Organic (USDA NOP, EU Organic), Non-GMO Project Verified, Gluten-Free (GFCO), Kosher (OU, OK, Star-K), Halal (IFANCA, MUI, JAKIM), and RSPO Mass Balance for sustainable palm oil. Our team navigates evolving regulations so our customers don&apos;t have to.",
  },
];

export default function QualitySafetyPage() {
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
              ISO 17025 · SQF Level 3 · HACCP
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Quality &amp;{" "}
              <span className="text-gradient">Food Safety</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Excellence without compromise. From ISO 17025-accredited
              laboratories to SQF Level 3 certified facilities, every product
              that bears the Newly Weds name is backed by the most rigorous
              quality and food safety systems in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-gold/20 bg-surface p-8 md:p-12 backdrop-blur-xl">
              <div className="absolute -top-5 left-8 rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Our Promise
                </span>
              </div>
              <p className="mt-4 font-heading text-2xl font-semibold italic leading-relaxed text-foreground md:text-3xl">
                &ldquo;Quality is not a department at Newly Weds Foods — it is
                the culture that runs through every team member, every process,
                and every product we ship. When our customers open a bag, a
                tote, or a pouch, they find exactly what they expect. Every
                time.&rdquo;
              </p>
              <p className="mt-4 text-sm text-gold font-medium">
                — Robert Langford, Chief Operating Officer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Systems — Icon-Led Glass Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Quality <span className="text-gradient">Management Systems</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Three interconnected systems form the backbone of our quality
              assurance program — each independently certified, each continuously
              improving.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {qualitySystems.map((system, idx) => (
              <div
                key={system.title}
                className={`glass rounded-2xl p-8 md:p-10 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 ${
                  idx % 2 === 0 ? "" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                        <system.icon className="size-7 text-gold" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {system.title}
                      </h3>
                    </div>
                    <p className="mt-5 text-foreground/70 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                  <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 justify-center">
                    {system.stats.map((s) => (
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

      {/* Safety Programs */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Food Safety{" "}
              <span className="text-gradient">Programs</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Beyond certification — the day-to-day programs that ensure every
              product is safe, consistent, and exactly as specified.
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

      {/* Audit & Certification Stats */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Audits &amp;{" "}
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our commitment to quality is verified continuously — by
              independent third parties, by our internal teams, and by our
              customers.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardCheck,
                stat: "150+",
                label: "Annual Third-Party Audits",
                desc: "Including SQF, ISO, Organic, Kosher, Halal, and customer-specific audits.",
              },
              {
                icon: Search,
                stat: "600+",
                label: "Internal Audits per Year",
                desc: "Cross-functional internal audits across all facilities and processes.",
              },
              {
                icon: ShieldCheck,
                stat: "120+",
                label: "Mock Recalls / Year",
                desc: "Quarterly traceability exercises across every facility — 100% pass rate.",
              },
              {
                icon: Award,
                stat: "400+",
                label: "Quality Professionals",
                desc: "Dedicated quality, food safety, and regulatory team members worldwide.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                  <item.icon className="size-7 text-gold" />
                </div>
                <div className="mt-5 font-heading text-4xl font-bold text-gold">
                  {item.stat}
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

      {/* Certifications Badge Grid */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Global <span className="text-gradient">Certifications</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Certifications that demonstrate our commitment to quality, safety,
              and responsible sourcing across every market we serve.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { cert: "SQF Level 3", body: "SQFI / GFSI", scope: "All 30+ facilities" },
              { cert: "ISO 17025:2017", body: "A2LA / IAS", scope: "12 R&D laboratories" },
              { cert: "Organic", body: "USDA NOP / EU Organic", scope: "Select product lines" },
              { cert: "Non-GMO Verified", body: "Non-GMO Project", scope: "200+ formulations" },
              { cert: "Gluten-Free", body: "GFCO", scope: "Dedicated facilities" },
              { cert: "Kosher", body: "OU / OK / Star-K", scope: "All facilities" },
              { cert: "Halal", body: "IFANCA / MUI / JAKIM", scope: "Global certification" },
              { cert: "RSPO", body: "RSPO Mass Balance", scope: "Sustainable palm supply" },
            ].map((c) => (
              <div
                key={c.cert}
                className="glass rounded-2xl p-5 text-center transition-all duration-300 hover:border-gold/30 border border-gold/10"
              >
                <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-gold/10">
                  <Award className="size-5 text-gold" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                  {c.cert}
                </h3>
                <p className="mt-1 text-xs text-gold">{c.body}</p>
                <p className="mt-1 text-xs text-foreground/50">{c.scope}</p>
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
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Partner With{" "}
                <span className="text-gradient">Confidence</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                When you partner with Newly Weds Foods, you gain more than an
                ingredient supplier — you gain a quality and food safety partner
                committed to your brand&apos;s integrity. Let&apos;s discuss how
                our systems can support your next innovation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Our Quality Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/company/sustainability"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Explore Sustainability
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
