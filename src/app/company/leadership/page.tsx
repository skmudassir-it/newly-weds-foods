import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Globe,
  Languages,
  Leaf,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Leadership — Guiding the Next Century | Newly Weds Foods",
  description:
    "Meet the executive leadership team and board of directors guiding Newly Weds Foods into its next century of innovation. Family-owned leadership with global expertise in food science, operations, and sustainability.",
};

const executives = [
  {
    name: "Charles Angell",
    role: "Chairman & Chief Executive Officer",
    bio: "Third-generation family leader who has spent over 30 years with Newly Weds Foods. Under his stewardship, the company has expanded from a North American ingredient supplier to a global leader with operations on five continents. Charles holds an MBA from Northwestern University's Kellogg School of Management and champions the company's long-term, family-oriented approach to business.",
    icon: Users,
  },
  {
    name: "Dr. Maria Santos",
    role: "Chief Innovation Officer",
    bio: "Leads 12 global R&D and culinary centers with a team of over 200 food scientists, chemists, and chefs. Dr. Santos holds a Ph.D. in Food Science from Cornell University and has authored 40+ peer-reviewed publications. She previously led R&D at a Fortune 500 CPG company before joining Newly Weds Foods to drive breakthrough innovation in coatings, seasonings, and functional systems.",
    icon: Microscope,
  },
  {
    name: "Robert Langford",
    role: "Chief Operating Officer",
    bio: "Oversees 30+ manufacturing facilities worldwide with a relentless focus on operational excellence, quality systems, and supply chain optimization. Robert brings 25 years of food manufacturing leadership experience, including Lean Six Sigma Black Belt certification. He has led the deployment of SQF Level 3 certification across the company's global manufacturing network.",
    icon: Building2,
  },
  {
    name: "James Chin",
    role: "President, Asia-Pacific",
    bio: "Driving expansion and culinary innovation across the fast-growing Asia-Pacific food market from the regional headquarters in Bangkok, Thailand. James has opened four new manufacturing facilities in the region over the past decade, establishing Newly Weds as a premier supplier to QSR chains and CPG brands across 14 APAC countries.",
    icon: Globe,
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Sustainability Officer",
    bio: "Championing the company's environmental stewardship, responsible sourcing, and community engagement initiatives. Sarah has led programs that reduced water consumption by 35%, achieved zero-waste-to-landfill at eight facilities, and established the company's first comprehensive Scope 1-3 carbon emissions tracking system. She holds an M.Sc. in Environmental Management from Duke University.",
    icon: Leaf,
  },
  {
    name: "David Okafor",
    role: "President, EMEA",
    bio: "Leading European, Middle Eastern, and African operations from the UK headquarters in Corby, Northamptonshire. David brings deep expertise in international food regulations, halal certification systems, and cross-cultural team leadership. Under his tenure, EMEA revenue has doubled through strategic expansion into emerging markets and premium product categories.",
    icon: Languages,
  },
];

const boardMembers = [
  {
    name: "Margaret Angell-Wright",
    role: "Board Chair",
    bio: "Fourth-generation family board leader with extensive experience in corporate governance and strategic planning. Margaret ensures the board maintains the company's founding values while driving forward-looking strategy.",
  },
  {
    name: "Dr. Thomas Keller",
    role: "Independent Director",
    bio: "Former Chief Scientific Officer at a global ingredients company with 35 years in food science and regulatory affairs. Dr. Keller chairs the board's Innovation & Technology Committee.",
  },
  {
    name: "Patricia Nakamura",
    role: "Independent Director",
    bio: "Seasoned financial executive and former CFO of a publicly traded food manufacturer. Patricia chairs the Audit Committee and brings deep expertise in global financial strategy and risk management.",
  },
  {
    name: "Michael Okonkwo",
    role: "Independent Director",
    bio: "Supply chain and logistics expert with 30 years of experience across food, beverage, and CPG sectors. Michael chairs the Operations & Sustainability Committee and advises on global supply network optimization.",
  },
];

export default function LeadershipPage() {
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
              Executive Team & Board
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our{" "}
              <span className="text-gradient">Leadership</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Guided by third-generation family leadership and supported by a
              world-class executive team — our leaders bring decades of
              expertise across food science, global operations, and sustainable
              business to guide Newly Weds Foods into its next century.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-gold/20 bg-surface p-8 md:p-12 backdrop-blur-xl">
              <div className="absolute -top-5 left-8 rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Leadership Philosophy
                </span>
              </div>
              <div className="mt-4 grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <ShieldCheck className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    Long-Term Thinking
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    As a family-owned company, we make decisions that serve the
                    next generation — not just the next quarter.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                    <Award className="size-6 text-crimson" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    Global Expertise
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Our leaders bring diverse perspectives from across
                    continents, cultures, and disciplines — united by a shared
                    commitment to excellence.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Users className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    People First
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Every strategy starts with our 3,000+ team members worldwide
                    — their safety, growth, and empowerment are the foundation
                    of our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Executive{" "}
              <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Six leaders driving strategy, innovation, and operational
              excellence across five continents.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((exec) => (
              <div
                key={exec.name}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 border border-gold/10"
              >
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-crimson/20 ring-2 ring-gold/20">
                  <exec.icon className="size-10 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {exec.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {exec.role}
                </p>
                <div className="mt-4 h-px w-12 mx-auto bg-gold/20" />
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ShieldCheck className="size-3" />
              Governance
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Board of{" "}
              <span className="text-gradient">Directors</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our board combines family stewardship with independent expertise —
              ensuring strong governance and strategic oversight.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/30 border border-gold/10"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-gold/10 to-crimson/10 ring-1 ring-gold/10">
                  <Users className="size-8 text-gold/70" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gold">
                  {member.role}
                </p>
                <p className="mt-3 text-xs text-foreground/60 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Leadership Network */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gold/10">
                  <Globe className="size-8 text-gold" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Regional Leadership Network
                  </h2>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    Beyond our executive team, Newly Weds Foods is supported by
                    a deep bench of regional presidents, plant managers, R&D
                    directors, and functional leaders in every market we serve.
                    This distributed leadership model ensures that every
                    customer — from a global QSR chain to a regional CPG brand —
                    receives responsive, locally informed support backed by
                    global resources and expertise.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        region: "North America",
                        hq: "Chicago, IL",
                        reach: "14 facilities across the US, Canada, and Mexico",
                      },
                      {
                        region: "Europe",
                        hq: "Corby, UK",
                        reach: "6 facilities serving EU, UK, and EFTA markets",
                      },
                      {
                        region: "Asia-Pacific",
                        hq: "Bangkok, Thailand",
                        reach: "8 facilities across 14 countries in APAC",
                      },
                      {
                        region: "Latin America",
                        hq: "São Paulo, Brazil",
                        reach: "3 facilities serving Central and South America",
                      },
                    ].map((r) => (
                      <div
                        key={r.region}
                        className="rounded-xl border border-gold/10 bg-surface/50 p-4"
                      >
                        <p className="font-heading text-sm font-semibold text-foreground">
                          {r.region}
                        </p>
                        <p className="mt-1 text-xs text-gold">{r.hq}</p>
                        <p className="mt-1 text-xs text-foreground/60">
                          {r.reach}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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
                Connect With{" "}
                <span className="text-gradient">Our Team</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Ready to discuss how Newly Weds Foods can support your next
                product innovation? Our leadership team and regional experts are
                here to help.
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
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Join Our Team
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
