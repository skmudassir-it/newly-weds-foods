"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";
import {
  Atom,
  Cookie,
  ChefHat,
  Container,
  CookingPot,
  Croissant,
  Droplets,
  Flame,
  FlaskConical,
  Microscope,
  Package,
  PackageOpen,
  ShieldCheck,
  Soup,
  Sparkles,
  Waves,
  WheatOff,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Cookie,
  ChefHat,
  Container,
  CookingPot,
  Croissant,
  Droplets,
  Flame,
  FlaskConical,
  Microscope,
  Package,
  PackageOpen,
  ShieldCheck,
  Soup,
  Sparkles,
  Waves,
  WheatOff,
};

const categoryLabels: Record<string, string> = {
  coatings: "Coatings",
  seasonings: "Seasonings",
  sauces: "Sauces",
  functional: "Functional",
  croutons: "Croutons",
  packaging: "Packaging",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = iconMap[product.icon] || Flame;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
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
              {categoryLabels[product.category] || product.category}
            </Badge>
          </div>

          {/* Name */}
          <h3 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300">
            {product.name}
          </h3>

          {/* Description (2-line clamp) */}
          <p className="mt-2 text-sm leading-relaxed text-foreground/60 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Features (2 items) */}
          <ul className="mt-4 space-y-1.5 border-t border-border/50 pt-4">
            {product.features.slice(0, 2).map((feature) => (
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
    </motion.div>
  );
}
