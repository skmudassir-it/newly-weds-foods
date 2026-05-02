"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Animated grain/texture overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Tagline chip */}
        <motion.span
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Global Food Ingredient Innovation
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className="font-heading max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient">Inspiring New Tastes</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-2xl text-lg text-foreground/70 sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          From coatings to seasonings, sauces to functional ingredients — we
          partner with the world&apos;s leading food brands to create
          unforgettable taste experiences across 60+ countries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {/* Primary CTA */}
          <Link href="/products">
            <Button
              variant="default"
              size="lg"
              className={cn(
                "group relative h-14 gap-2 rounded-xl px-8 text-base font-semibold shadow-lg shadow-gold/20",
                "bg-gradient-to-r from-gold to-gold-light text-background",
                "hover:shadow-xl hover:shadow-gold/30 hover:brightness-110",
                "transition-all duration-300"
              )}
            >
              Explore Products
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "group relative h-14 gap-2 rounded-xl px-8 text-base font-semibold",
                "border-gold/40 text-gold-light bg-gold/5 backdrop-blur-sm",
                "hover:border-gold hover:bg-gold/15 hover:text-gold",
                "transition-all duration-300"
              )}
            >
              <MessageSquare className="size-5" />
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">
            Scroll to explore
          </span>
          <motion.div
            className="size-6 rounded-full border-2 border-gold/40 flex items-start justify-center pt-1"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="size-1 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
