import type { Metadata } from "next";
import Link from "next/link";
import { timelineEvents } from "@/lib/data";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Globe,
  Heart,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our History — Nine Decades of Innovation | Newly Weds Foods",
  description:
    "Trace the journey of Newly Weds Foods from a small Chicago bakery supplier in 1932 to a global food ingredient leader serving customers in over 60 countries. Nine decades of innovation, growth, and partnership.",
};

const legacyValues = [
  {
    icon: Heart,
    title: "Family-Owned Legacy",
    description:
      "Three generations of the Angell family have stewarded Newly Weds Foods with a commitment to integrity, long-term thinking, and genuine care for our people, partners, and communities.",
  },
  {
    icon: Award,
    title: "Pioneering Spirit",
    description:
      "From introducing Japanese-style panko to North America to developing the first dedicated gluten-free coating facility — innovation runs through our story like a golden thread.",
  },
  {
    icon: Globe,
    title: "Global Vision, Local Roots",
    description:
      "What began on a single Chicago block now spans 30+ facilities across five continents — yet every decision still reflects the values of a family business grounded in its community.",
  },
];

export default function HistoryPage() {
  const half = Math.ceil(timelineEvents.length / 2);
  const leftEvents = timelineEvents.slice(0, half);
  const rightEvents = timelineEvents.slice(half);

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
              1932 — Present
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our{" "}
              <span className="text-gradient">History</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Nine decades of innovation, resilience, and partnership — from a
              small Chicago bakery supplier to a global food ingredient leader.
              This is the story of Newly Weds Foods.
            </p>
          </div>
        </div>
      </section>

      {/* Family Legacy Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-gold/20 bg-surface p-8 md:p-12 backdrop-blur-xl">
              <div className="absolute -top-5 left-8 rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  The Beginning
                </span>
              </div>
              <div className="mt-4 flex items-start gap-6">
                <div className="hidden sm:flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gold/10">
                  <BookOpen className="size-8 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                    In 1932, Paul M. Angell founded Newly Weds Foods in Chicago,
                    Illinois, with a simple yet powerful vision: to create
                    products that bring joy to life&apos;s most celebrated
                    moments.
                  </p>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    Originally focused on cake decorating supplies and ice cream
                    coatings for the wedding industry — hence the company&apos;s
                    distinctive name — the business quickly earned a reputation
                    for quality, consistency, and customer partnership. That
                    reputation became the foundation for everything that
                    followed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {legacyValues.map((v) => (
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
        </div>
      </section>

      {/* Timeline — Alternating Left/Right Cards */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The <span className="text-gradient">Timeline</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Every decade brought new challenges, new opportunities, and new
              breakthroughs — each one shaping the company we are today.
            </p>
          </div>

          <div className="mt-16 relative mx-auto max-w-5xl">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-px h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

            <div className="grid gap-6 md:grid-cols-2 md:gap-y-16">
              {timelineEvents.map((event, index) => {
                const isLeft = index < half;
                const adjustedIndex = isLeft ? index : index - half;

                return (
                  <div
                    key={event.year}
                    className={`relative ${
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    } ${adjustedIndex > 0 ? "md:mt-0" : ""} ${
                      isLeft && adjustedIndex === 0 ? "" : ""
                    }`}
                  >
                    {/* Year marker dot */}
                    <div
                      className={`hidden md:flex absolute top-6 ${
                        isLeft ? "-right-[7px]" : "-left-[7px]"
                      } z-10 size-3.5 rounded-full border-2 border-gold bg-background`}
                    />

                    <div className="glass rounded-2xl p-6 md:p-8 border border-gold/10 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
                      <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-bold text-gold tracking-wider">
                        {event.year}
                      </span>
                      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              A Legacy <span className="text-gradient">by the Numbers</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Nine decades of growth — captured in the metrics that define our
              global impact.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "90+",
                label: "Years in Business",
                desc: "Family-owned and operated since 1932.",
              },
              {
                stat: "8",
                label: "Major Eras",
                desc: "Each decade brought transformative growth and innovation.",
              },
              {
                stat: "60+",
                label: "Countries Served",
                desc: "From one Chicago facility to a truly global footprint.",
              },
              {
                stat: "3",
                label: "Generations",
                desc: "Still guided by the founding family's values and vision.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="font-heading text-4xl font-bold text-gold">
                  {item.stat}
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Building2 className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                The Next Chapter
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
                As we approach our centennial, Newly Weds Foods continues to
                invest in the technologies, talent, and partnerships that will
                define the next era of food ingredient innovation. Our history
                is our foundation — our future is what we build together.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold-light">
                <Users className="size-4" />
                <span>Still family-owned. Still innovating. Still inspiring new tastes.</span>
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
                Be Part of{" "}
                <span className="text-gradient">Our Story</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you&apos;re a potential customer, partner, or team
                member — we invite you to join us as we write the next chapter
                of Newly Weds Foods.
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
                  href="/company/leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Meet Our Leadership
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
