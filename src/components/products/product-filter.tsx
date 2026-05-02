"use client";

import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/lib/types";

const categories: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Coatings", value: "coatings" },
  { label: "Seasonings", value: "seasonings" },
  { label: "Sauces", value: "sauces" },
  { label: "Functional", value: "functional" },
  { label: "Croutons", value: "croutons" },
  { label: "Packaging", value: "packaging" },
];

interface ProductFilterProps {
  selected: ProductCategory | "all";
  onSelect: (value: ProductCategory | "all") => void;
}

export function ProductFilter({ selected, onSelect }: ProductFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={cn(
            "inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
            "border",
            selected === cat.value
              ? "border-gold bg-gold text-background shadow-md shadow-gold/20"
              : "border-gold/30 text-gold-light/80 hover:border-gold/60 hover:text-gold hover:bg-gold/5"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
