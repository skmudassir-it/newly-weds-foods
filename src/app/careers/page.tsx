import type { Metadata } from "next";
import { jobListings } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Globe,
  Heart,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Newly Weds Foods",
  description:
    "Explore career opportunities at Newly Weds Foods — a global food ingredient leader with 3,000+ team members worldwide. Join our family-owned company.",
};

const benefits = [
  {
    icon: Heart,
    title: "Family-Owned Culture",
    description:
      "We're still family-owned after three generations — which means long-term thinking, genuine care for our people, and a culture where every voice matters.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "With 30+ facilities across 60+ countries, your career at Newly Weds Foods can take you places — literally. We support mobility and cross-cultural growth.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven",
    description:
      "Work at the cutting edge of food science, partnering with the world's top food brands to create products that millions of consumers enjoy every day.",
  },
  {
    icon: Users,
    title: "Collaborative Teams",
    description:
      "Join a team where scientists, chefs, engineers, and business professionals collaborate across borders to solve complex challenges and create winning solutions.",
  },
];

const departments = Array.from(
  new Set(jobListings.map((j) => j.department))
);

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Briefcase className="size-3.5" />
              3,000+ Team Members Worldwide
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build Your <span className="text-gradient">Career</span> With Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Join a global team of food scientists, chefs, engineers, and
              business professionals dedicated to inspiring new tastes. At
              Newly Weds Foods, your work reaches millions of consumers
              across 60+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Why <span className="text-gradient">Work Here</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              More than a job — a place to grow, innovate, and make an impact.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                  <b.icon className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Find your next opportunity across our global locations.
            </p>
          </div>

          {/* Department summary */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {departments.map((dept) => (
              <span
                key={dept}
                className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold-light"
              >
                {dept}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {job.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground/50">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="size-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                      {job.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col items-start gap-2">
                    <Badge
                      variant="secondary"
                      className="border-gold/20 text-gold-light/80 bg-gold/5"
                    >
                      {job.department}
                    </Badge>
                    <a
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-gold/30 px-4 py-2 text-sm font-medium text-gold-light hover:border-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Don&apos;t See Your Role?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                We&apos;re always looking for talented people who share our
                passion for food and innovation. Send us your resume and
                let&apos;s start a conversation.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
