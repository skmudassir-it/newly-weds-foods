import type { Metadata } from "next";
import {
  BookOpen,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Recipes, Trends & Taste Tech University",
  description:
    "Access Newly Weds Foods' resources — recipes and flavor trends, Taste Tech University training, and consumer product information.",
};

const resourceSections = [
  {
    icon: UtensilsCrossed,
    title: "Recipes & Trends",
    description:
      "Stay ahead of the curve with our curated collection of trend-forward recipes and culinary insights. Our global network of chefs and trend scouts brings you actionable inspiration — from plant-based innovations to global street-food flavors.",
    linkLabel: "Explore Recipes & Trends",
    linkHref: "/resources/recipes-trends",
  },
  {
    icon: GraduationCap,
    title: "Taste Tech University",
    description:
      "Taste Tech University is our industry-leading educational program designed to help food professionals deepen their knowledge of coating technology, seasoning science, and functional ingredient systems. Courses cover everything from batter rheology to clean-label formulation.",
    highlights: [
      "Hands-on application workshops",
      "Online and in-person courses available",
      "Certification programs for R&D professionals",
      "Custom training for your team",
    ],
    linkLabel: "Learn About Taste Tech",
    linkHref: "/resources/taste-tech",
  },
  {
    icon: ShoppingBag,
    title: "Consumer Products",
    description:
      "Bringing our B2B expertise to the retail shelf. Newly Weds Foods partners with leading CPG brands to develop consumer-ready products — from gourmet breading mixes to specialty seasoning blends — under private-label and co-branded programs.",
    highlights: [
      "Turnkey retail product development",
      "Private-label and co-branded programs",
      "Retail packaging design and compliance",
      "Shopper-insight-driven innovation",
    ],
    linkLabel: "Consumer Product Capabilities",
    linkHref: "/resources/consumer-products",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <BookOpen className="size-3.5" />
              Knowledge & Inspiration
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              From culinary inspiration to professional development, our
              resource hub helps you stay informed, inspired, and ahead of
              the trends shaping the food industry.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            {resourceSections.map((section, idx) => (
              <div
                key={section.title}
                className={`flex flex-col gap-10 ${
                  idx % 2 === 1
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }`}
              >
                {/* Icon */}
                <div className="shrink-0 flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-crimson/10 border border-gold/20 shadow-lg shadow-gold/5">
                  <section.icon className="size-9 text-gold" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                    {section.description}
                  </p>

                  {section.highlights && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.highlights.map((h) => (
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
                  )}

                  <a
                    href={section.linkHref}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    {section.linkLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional resource card */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Sparkles className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Looking for Something Specific?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Our team of experts is ready to help you find the right
                resources, formulations, or training for your unique needs.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
