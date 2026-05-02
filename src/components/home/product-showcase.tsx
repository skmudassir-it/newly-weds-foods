"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Layers,
  FlaskConical,
  Soup,
  Microscope,
  Croissant,
  Wrench,
  ArrowRight,
} from "lucide-react";

interface ProductCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const categories: ProductCategory[] = [
  {
    title: "Coatings",
    description:
      "High-performance batters, breaders, and panko systems engineered for superior texture and adhesion.",
    icon: Layers,
    href: "/products",
  },
  {
    title: "Seasonings",
    description:
      "Custom dry seasoning blends, rubs, and marinades with global flavor profiles.",
    icon: FlaskConical,
    href: "/products",
  },
  {
    title: "Sauces",
    description:
      "Wing sauces, glazes, dipping sauces, and finishing sauces for foodservice and CPG.",
    icon: Soup,
    href: "/products",
  },
  {
    title: "Functional Ingredients",
    description:
      "Advanced starch systems, shelf-life extenders, and texture optimization solutions.",
    icon: Microscope,
    href: "/products",
  },
  {
    title: "Croutons",
    description:
      "Classic and artisan croutons, stuffing crumb, and bread base for premium applications.",
    icon: Croissant,
    href: "/products",
  },
  {
    title: "Custom Formulation",
    description:
      "Tailor-made ingredient systems developed by our culinary and R&D teams for your unique needs.",
    icon: Wrench,
    href: "/products",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ProductShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 size-[500px] rounded-full bg-crimson/5 blur-[150px]" />
        <div className="absolute top-1/3 left-0 size-[400px] rounded-full bg-gold/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <motion.span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            Our Products
          </motion.span>
          <motion.h2
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Complete{" "}
            <span className="text-gradient">Ingredient Solutions</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-foreground/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            From coatings to custom formulations, we deliver end-to-end
            ingredient systems that inspire new tastes and drive brand success.
          </motion.p>
        </div>

        {/* Product grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div key={category.title} variants={item}>
                <Link
                  href={category.href}
                  className={cn(
                    "group relative flex flex-col rounded-2xl p-8 h-full",
                    "backdrop-blur-xl bg-background/60 border border-border",
                    "hover:border-gold/40",
                    "shadow-lg shadow-black/10",
                    "hover:shadow-[0_0_40px_-10px] hover:shadow-gold/15",
                    "transition-all duration-500",
                    "hover:scale-[1.02]",
                    "overflow-hidden"
                  )}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/10 via-transparent to-crimson/10" />
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                    <Icon className="size-7 text-gold group-hover:text-gold-light transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                      {category.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold/0 group-hover:text-gold transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                      <span>Explore</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm transition-colors group"
          >
            View All Product Categories
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
