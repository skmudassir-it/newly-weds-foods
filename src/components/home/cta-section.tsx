"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Beaker,
  ChevronRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Crimson accent background */}
      <div className="absolute inset-0 bg-crimson-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.52_0.19_15/0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.72_0.15_78/0.06),transparent_50%)]" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="size-32 text-gold-light" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Beaker className="size-40 text-gold-light" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-crimson/30">
          {/* Left — Partner With Us */}
          <motion.div
            className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <MessageSquare className="size-3.5" />
              Let&apos;s Collaborate
            </motion.span>

            <motion.h2
              className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Partner{" "}
              <span className="text-gold-light">With Us</span>
            </motion.h2>

            <motion.p
              className="text-foreground/60 text-base leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Whether you&apos;re launching a new product, optimizing an existing
              formula, or exploring the next big flavor trend — our team of
              food scientists, chefs, and engineers is ready to bring your
              vision to life.
            </motion.p>

            {/* Enquiry teaser */}
            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {[
                "Dedicated project manager for every partnership",
                "ISO 17025-accredited R&D and sensory labs",
                "Scale-up from benchtop to full production",
                "Global manufacturing across 30+ facilities",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <ChevronRight className="size-4 text-gold mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className={cn(
                    "group h-12 gap-2 rounded-xl px-6 text-sm font-semibold",
                    "bg-gold text-background",
                    "hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25",
                    "transition-all duration-300"
                  )}
                >
                  Start Your Project
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Explore Innovation */}
          <motion.div
            className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <Sparkles className="size-3.5" />
              Discover
            </motion.span>

            <motion.h2
              className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Explore{" "}
              <span className="text-gold-light">Innovation</span>
            </motion.h2>

            <motion.p
              className="text-foreground/60 text-base leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              Dive into our innovation hub to see how we&apos;re pushing the
              boundaries of food science — from plant-based breakthroughs to
              global flavor fusions and clean-label ingredient systems.
            </motion.p>

            {/* Innovation highlights */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {[
                {
                  label: "R&D Centers",
                  value: "12",
                  desc: "Global culinary and research facilities",
                },
                {
                  label: "Annual Formulations",
                  value: "10,000+",
                  desc: "Custom recipes developed each year",
                },
                {
                  label: "Countries Served",
                  value: "60+",
                  desc: "Worldwide customer partnerships",
                },
              ].map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/10 border border-crimson/30 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 border border-gold/20">
                    <span className="text-sm font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gold-light">
                      {highlight.value}
                    </div>
                    <p className="text-xs text-foreground/50">
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              <Link href="/innovation/research-development">
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "group h-12 gap-2 rounded-xl px-6 text-sm font-semibold",
                    "border-gold/30 text-gold-light bg-gold/5",
                    "hover:border-gold hover:bg-gold/15 hover:text-gold",
                    "transition-all duration-300"
                  )}
                >
                  Visit Innovation Hub
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
