import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ProductShowcase } from "@/components/home/product-showcase";
import { Trends } from "@/components/home/trends";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Newly Weds Foods — Inspiring New Tastes | Global Food Ingredients",
  description:
    "Newly Weds Foods is a global leader in food ingredient solutions — custom coatings, seasonings, sauces, and functional systems for the world's top food brands and foodservice operators.",
};

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="product-showcase">
        <ProductShowcase />
      </section>

      <section id="trends">
        <Trends />
      </section>

      <section id="cta">
        <CtaSection />
      </section>
    </>
  );
}
