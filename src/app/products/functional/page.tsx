import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Microscope,
  ShieldCheck,
  CookingPot,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Functional Ingredients",
  description:
    "Performance-driven functional ingredients — starches, binders, shelf-life extension, and texture systems that deliver beyond taste, optimizing yield, freshness, and mouthfeel.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Microscope,
  ShieldCheck,
  CookingPot,
};

export default function FunctionalPage() {
  const functional = products.filter((p) => p.category === "functional");

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.08),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold" />
              Functional Ingredients
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Performance{" "}
              <span className="text-gradient">Beyond Taste</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Great food isn&rsquo;t just about flavor — it&rsquo;s about how it
              performs on the line, on the shelf, and in the mouth. Our
              functional ingredient systems optimize moisture, texture, shelf
              life, and process efficiency without compromising clean labels.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {functional.map((product) => {
              const Icon = iconMap[product.icon] || Microscope;
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group block h-full"
                >
                  <div className="glass rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group-hover:border-gold/40 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:bg-surface/80">
                    {/* Icon */}
                    <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon className="size-7 text-gold" />
                    </div>

                    {/* Category Badge */}
                    <div className="mt-4">
                      <Badge
                        variant="secondary"
                        className="border-gold/20 text-gold-light/80 bg-gold/5 text-[10px] uppercase tracking-wider"
                      >
                        Functional
                      </Badge>
                    </div>

                    {/* Name */}
                    <h3 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60 line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-4">
                      {product.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-foreground/60"
                        >
                          <span className="mt-0.5 flex size-3 shrink-0 items-center justify-center rounded-full bg-gold/10">
                            <span className="size-1 rounded-full bg-gold" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-3.5 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
            >
              Talk to a Functional Specialist
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              The Science of{" "}
              <span className="text-gradient">Performance</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Check,
                title: "Yield Optimization",
                desc: "Water-binding and moisture-management systems that improve cook yields by 5–15%.",
              },
              {
                icon: Check,
                title: "Shelf-Life Extension",
                desc: "Natural antioxidants and clean-label preservation — 30 to 90+ additional days.",
              },
              {
                icon: Check,
                title: "Texture Engineering",
                desc: "Fat-mimetic systems, viscosity control, and mouthfeel optimization for every matrix.",
              },
              {
                icon: Check,
                title: "Process Stability",
                desc: "Formulations tested across hot-fill, cold-fill, aseptic, retort, and freeze-thaw.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 text-center">
                <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-gold/10">
                  <item.icon className="size-5 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
