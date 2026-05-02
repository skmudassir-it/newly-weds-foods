"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { trendItems } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";

export function Trends() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const formatDate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Trends & Insights
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What&apos;s Shaping the{" "}
            <span className="text-gradient">Future of Food</span>
          </h2>
          <p className="mt-3 max-w-xl text-foreground/60 text-base leading-relaxed">
            Stay ahead with the latest culinary innovations, flavor trends, and
            ingredient breakthroughs from our global R&D centers.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin",
            scrollbarColor: "oklch(0.28 0.02 260) transparent",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {trendItems.map((trend, index) => (
            <motion.div
              key={trend.id}
              className={cn(
                "shrink-0 w-[320px] sm:w-[380px]",
                "rounded-2xl overflow-hidden",
                "backdrop-blur-xl bg-background/60 border border-border",
                "hover:border-gold/30",
                "shadow-lg shadow-black/10",
                "hover:shadow-[0_0_30px_-10px] hover:shadow-gold/10",
                "transition-all duration-300",
                "group cursor-pointer"
              )}
              style={{ scrollSnapAlign: "start" }}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${trend.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-gold/15 backdrop-blur-md border border-gold/20 px-3 py-1 text-xs font-medium text-gold-light">
                    {trend.category}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-background/60 backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="size-4 text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-foreground/40 mb-3">
                  <Clock className="size-3" />
                  <span>{formatDate(trend.date)}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300 mb-2 line-clamp-2">
                  {trend.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/50 leading-relaxed line-clamp-3">
                  {trend.description}
                </p>

                {/* Read more link */}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-gold/60 group-hover:text-gold transition-colors duration-300">
                  <span>Read more</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint (visible on mobile) */}
        <motion.div
          className="mt-4 flex justify-center lg:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs text-foreground/30 flex items-center gap-2">
            <span className="size-1 rounded-full bg-gold/40 animate-pulse" />
            Swipe to explore trends
          </span>
        </motion.div>
      </div>
    </section>
  );
}
