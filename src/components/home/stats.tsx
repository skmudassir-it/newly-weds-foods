"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { stats } from "@/lib/data";
import { Calendar, Factory, Globe, FlaskConical } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Factory,
  Globe,
  FlaskConical,
};

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const duration = 2000; // ms
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const animate = () => {
      currentStep++;
      const nextValue = Math.min(
        Math.round(increment * currentStep),
        target
      );
      setCount(nextValue);

      if (currentStep < steps) {
        animationRef.current = window.setTimeout(animate, stepDuration);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isInView, target]);

  return (
    <span className="tabular-nums">
      {count >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

function parseStatValue(value: string): { num: number; suffix: string } {
  // Extract numeric part and suffix from strings like "90+", "10,000+", "12"
  const match = value.match(/^([\d,]+)(.*)$/);
  if (match) {
    const num = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] || "";
    return { num, suffix };
  }
  return { num: 0, suffix: "" };
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Use the first 4 stats from the data
  const displayStats = stats.slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gold/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            By the Numbers
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            A Legacy of{" "}
            <span className="text-gradient">Global Excellence</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => {
            const { num, suffix } = parseStatValue(stat.value);
            const Icon = stat.icon ? iconMap[stat.icon] : null;

            return (
              <motion.div
                key={stat.label}
                className={cn(
                  "relative overflow-hidden rounded-2xl p-8 text-center",
                  "backdrop-blur-xl bg-background/60",
                  "border border-gold/20",
                  "shadow-[0_0_30px_-5px] shadow-gold/5"
                )}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Gold glow on top border */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

                {/* Icon */}
                {Icon && (
                  <motion.div
                    className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20"
                    initial={{ rotateY: 90 }}
                    animate={
                      isInView ? { rotateY: 0 } : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.15 * index + 0.2,
                    }}
                  >
                    <Icon className="size-6 text-gold" />
                  </motion.div>
                )}

                {/* Counter value */}
                <div className="font-heading text-4xl sm:text-5xl font-bold text-gold-light mb-2">
                  <AnimatedCounter
                    target={num}
                    suffix={suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-foreground/60 font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
