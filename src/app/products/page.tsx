"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";
import { ProductFilter } from "@/components/products/product-filter";
import { ProductGrid } from "@/components/products/product-grid";

export default function ProductsPage() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold" />
              Six Product Categories
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              From adhesion batters to artisan croutons, dry seasonings to
              shelf-life extension systems — explore the full portfolio of food
              ingredient solutions trusted by the world&apos;s leading food
              brands.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ProductFilter
            selected={category}
            onSelect={(cat) => setCategory(cat as ProductCategory | "all")}
          />
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
}
