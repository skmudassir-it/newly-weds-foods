"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timelineEvents } from "@/lib/data";

function TimelineCard({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  const slideX = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [index % 2 === 0 ? -60 : 60, 0, 0]
  );

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x: slideX }}
      className="relative mb-16 md:mb-24 last:mb-0"
    >
      {/* Center line visible on md+ */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-px h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

      <div
        className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Year Pill */}
        <div className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-surface px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-gold/5">
            <span className="text-sm font-bold text-gold tracking-wider">
              {event.year}
            </span>
          </div>
        </div>

        {/* Spacer for year pill position on mobile */}
        <div className="hidden md:block md:w-1/2" />

        {/* Card */}
        <div
          className={`glass rounded-2xl p-6 md:p-8 md:w-[calc(50%-2rem)] transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 ${
            isLeft ? "md:mr-auto" : "md:ml-auto"
          }`}
        >
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {event.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Timeline vertical line for mobile */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:hidden" />

      <div className="md:space-y-0">
        {timelineEvents.map((event, index) => (
          <TimelineCard key={event.year} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
