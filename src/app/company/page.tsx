import type { Metadata } from "next";
import { Timeline } from "@/components/company/history-timeline";
import {
  Building2,
  Globe,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company — About Newly Weds Foods",
  description:
    "Learn about Newly Weds Foods — a global leader in food ingredient innovation since 1932. Our mission, values, and history of inspiring new tastes worldwide.",
};

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description:
      "We love food and the science behind it. Every formulation starts with genuine culinary passion and the desire to create unforgettable taste experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "From ingredient sourcing to finished product, our ISO 17025-accredited labs and rigorous quality systems ensure consistent excellence at every step.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description:
      "We don't just supply ingredients — we partner with your team to solve challenges, optimize processes, and bring innovative products to market faster.",
  },
  {
    icon: Building2,
    title: "Innovation Leadership",
    description:
      "With 12 R&D and culinary centers worldwide, we invest continuously in the technologies, talent, and trend intelligence that keep our customers ahead.",
  },
];

export default function CompanyPage() {
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
              Est. 1932 — Chicago, Illinois
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              For over 90 years, Newly Weds Foods has been at the intersection
              of culinary art and food science — helping the world&apos;s top
              food brands and foodservice operators create products that
              delight, nourish, and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-gold/20 bg-surface p-8 md:p-12 backdrop-blur-xl">
              <div className="absolute -top-5 left-8 rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Our Mission
                </span>
              </div>
              <p className="mt-4 font-heading text-2xl font-semibold italic leading-relaxed text-foreground md:text-3xl">
                &ldquo;To be the global leader in food ingredient solutions
                by inspiring new tastes — delivering innovation, quality, and
                partnership that empowers our customers to create products
                consumers love.&rdquo;
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="glass rounded-2xl p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <Globe className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  With over 30 manufacturing facilities across North America,
                  Europe, Asia-Pacific, and the Middle East, we serve customers
                  in 60+ countries — delivering locally relevant solutions at
                  global scale.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                  <ShieldCheck className="size-6 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Family-Owned, Globally Minded
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  Still family-owned after three generations, we combine the
                  stability of long-term thinking with the agility to respond
                  quickly to market shifts and customer opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What <span className="text-gradient">Drives Us</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our core values guide every decision — from the lab bench to the
              boardroom.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <v.icon className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Nine decades of innovation, growth, and partnership — from a
              small Chicago bakery supplier to a global food ingredient leader.
            </p>
          </div>

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>
    </>
  );
}
