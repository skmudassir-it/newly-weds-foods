import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Beaker,
  FlaskConical,
  Wheat,
  Leaf,
  ClipboardCheck,
  Users,
  Building2,
  Microscope,
  Award,
  Star,
  Clock,
  Monitor,
  MapPin,
  Calendar,
  ChefHat,
  ShoppingCart,
  BadgeCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taste Tech University — Mastering the Science of Flavor",
  description:
    "Newly Weds Foods' industry-leading educational program for food professionals. Hands-on courses in batter technology, seasoning science, functional ingredients, and clean-label formulation. Online and in-person training with certification programs for R&D teams.",
};

const courses = [
  {
    icon: Beaker,
    title: "Batter Technology",
    tagline: "The Foundation of Coating Excellence",
    description:
      "Master the science behind batters — from rheology and viscosity control to adhesion mechanics and freeze-thaw stability. This course covers wheat flour chemistry, starch systems, hydrocolloid functionality, and leavening dynamics. Students formulate and test batters for tempura, adhesion, and puff applications in our pilot plant, gaining hands-on experience with viscometers, adhesion testers, and fryer optimization.",
    modules: [
      "Flour protein & starch chemistry",
      "Hydrocolloid selection & synergy",
      "Viscosity measurement & control",
      "Freeze-thaw & hold-time stability",
    ],
    duration: "3 days (in-person) or 6 weeks (online)",
  },
  {
    icon: FlaskConical,
    title: "Seasoning Science",
    tagline: "Building Flavor Systems That Sell",
    description:
      "Dive deep into the art and science of seasoning. Learn flavor chemistry fundamentals, sensory evaluation methodology, top-note design for heat-process survival, and the principles of layered flavor architecture. Participants design complete seasoning systems — from concept brief to finished product — and learn to troubleshoot common seasoning challenges like caking, color fade, and flavor loss during frying.",
    modules: [
      "Flavor chemistry & Maillard pathways",
      "Sensory panel design & analysis",
      "Top-note survival through processing",
      "Anti-caking & flow optimization",
    ],
    duration: "2 days (in-person) or 4 weeks (online)",
  },
  {
    icon: Wheat,
    title: "Functional Ingredients",
    tagline: "Beyond Taste — Performance That Delivers",
    description:
      "Functional ingredients are the unsung heroes of food product design. This course explores starches, proteins, fibers, emulsifiers, and enzyme systems — how they interact in complex matrices and how to select the right functional system for your application. Topics include water-binding optimization, texture modulation, shelf-life extension, and fat-mimetic systems for healthier product profiles without sacrificing eating quality.",
    modules: [
      "Starch chemistry & modification",
      "Protein functionality in coatings",
      "Enzyme systems for texture & shelf life",
      "Fat reduction & mouthfeel strategies",
    ],
    duration: "2 days (in-person) or 4 weeks (online)",
  },
  {
    icon: Leaf,
    title: "Clean Label Formulation",
    tagline: "Simplifying Without Compromising",
    description:
      "The clean-label movement is reshaping the food industry — and this course teaches you how to lead it. Learn to replace modified starches, synthetic emulsifiers, and artificial preservatives with recognizable alternatives that deliver equivalent performance. Covers ingredient declaration strategies, 'pantry-friendly' formulation principles, and how to communicate clean-label stories that resonate with consumers and retail buyers alike.",
    modules: [
      "Ingredient declaration optimization",
      "Natural preservation systems",
      "Clean-label starch & flour alternatives",
      "Consumer communication strategies",
    ],
    duration: "2 days (in-person) or 5 weeks (online)",
  },
];

const testimonials = [
  {
    quote:
      "Taste Tech transformed how our R&D team approaches coating development. The hands-on pilot plant sessions gave us practical skills we applied immediately — we reduced our product development cycle by 30% after sending three team members through the program.",
    name: "Maria Gonzalez",
    role: "VP of R&D, National QSR Chain",
    icon: Star,
  },
  {
    quote:
      "The Seasoning Science course is unlike anything else in the industry. Understanding the chemistry behind flavor interactions — not just following a formula — has made me a dramatically better product developer. I reference my course materials weekly.",
    name: "James Chen",
    role: "Senior Food Scientist, CPG Brand",
    icon: Star,
  },
  {
    quote:
      "We brought Taste Tech on-site for a customized training program with our entire innovation team. The instructors tailored every module to our specific product categories. The ROI was immediate — better prototypes, faster approvals, fewer reformulations.",
    name: "David Park",
    role: "Director of Innovation, Foodservice Distributor",
    icon: Star,
  },
];

const enrollmentSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Choose Your Course",
    desc: "Browse our catalog and select the program that matches your team's needs — individual courses or bundled certification tracks.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Assess Your Needs",
    desc: "Schedule a needs-assessment call with our education team to tailor the curriculum to your specific product categories and challenges.",
  },
  {
    step: "03",
    icon: MapPin,
    title: "Select Your Format",
    desc: "Choose between on-site training at your facility, sessions at our Innovation Centers, or our flexible online learning platform.",
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Earn Certification",
    desc: "Complete coursework and practical assessments to earn Taste Tech Certification — recognized across the food industry.",
  },
];

export default function TasteTechPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <GraduationCap className="size-3.5" />
              Professional Development Program
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Taste Tech{" "}
              <span className="text-gradient">University</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Mastering the Science of Flavor
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Taste Tech University is Newly Weds Foods&apos; industry-leading
              educational program — designed to help food professionals deepen
              their expertise in coating systems, seasoning design, functional
              ingredients, and clean-label formulation. Whether you&apos;re a
              seasoned R&D leader or new to the bench, our courses deliver
              practical, immediately applicable knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <BookOpen className="size-3.5" />
              Program Overview
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Where Science Meets{" "}
              <span className="text-gradient">Application</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Taste Tech bridges the gap between food science theory and
              real-world product development. Every course combines classroom
              learning with hands-on pilot plant experience — because the
              best way to learn is by doing.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Microscope, label: "Hands-On Lab Work", desc: "Formulate, test, and refine in our pilot plants" },
              { icon: Monitor, label: "Online & In-Person", desc: "Flexible formats to fit your schedule and location" },
              { icon: Users, label: "Expert Instructors", desc: "Learn from industry veterans with decades of experience" },
              { icon: Award, label: "Industry Certification", desc: "Earn credentials recognized across the food sector" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <GraduationCap className="size-3.5" />
              Course Catalog
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Four <span className="text-gradient">Core Courses</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Each course is a deep dive into a critical competency for
              modern food product development — available individually or as
              part of a comprehensive certification track.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                    <course.icon className="size-7 text-crimson" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold">
                      {course.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70 flex-1">
                  {course.description}
                </p>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40">
                    Key Modules
                  </p>
                  {course.modules.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <ChevronRight className="size-3.5 text-gold shrink-0" />
                      {m}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 pt-4 border-t border-gold/10">
                  <Clock className="size-4 text-gold-light" />
                  <span className="text-xs text-foreground/50">
                    {course.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Users className="size-3.5" />
              Who Should Attend
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Built for{" "}
              <span className="text-gradient">Food Professionals</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Taste Tech is designed for anyone who touches product
              development — from the bench to the boardroom.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Microscope,
                title: "R&D Scientists",
                desc: "Deepen your technical understanding of ingredient interactions, processing effects, and formulation strategies.",
              },
              {
                icon: ChefHat,
                title: "Corporate Chefs",
                desc: "Bridge the gap between culinary creativity and industrial-scale production with science-backed techniques.",
              },
              {
                icon: Building2,
                title: "Product Managers",
                desc: "Gain the technical literacy to brief R&D teams effectively and evaluate prototypes with confidence.",
              },
              {
                icon: ClipboardCheck,
                title: "QA & Regulatory",
                desc: "Understand how ingredient choices impact label claims, nutritional panels, and regulatory compliance.",
              },
              {
                icon: ShoppingCart,
                title: "Procurement Teams",
                desc: "Learn to evaluate ingredient specifications and supplier capabilities with a technical lens.",
              },
              {
                icon: Award,
                title: "Sales & Marketing",
                desc: "Build the product knowledge to tell compelling technical stories that win with customers.",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <audience.icon className="size-6 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ClipboardCheck className="size-3.5" />
              Getting Started
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Enrollment{" "}
              <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Four simple steps from interest to certification — our
              education team guides you through every stage.
            </p>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {enrollmentSteps.map((step) => (
              <div
                key={step.step}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group relative"
              >
                <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-black">
                  {step.step}
                </span>
                <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors mt-2">
                  <step.icon className="size-5 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Award className="size-3.5" />
              Alumni Voices
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What Our{" "}
              <span className="text-gradient">Graduates</span> Say
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Hundreds of food professionals have advanced their careers
              through Taste Tech University.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/70 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-gold/10">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <GraduationCap className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Invest in Your Team&apos;s{" "}
                <span className="text-gradient">Expertise</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Ready to elevate your R&D capabilities? Contact our education
                team to discuss course enrollment, custom on-site training, or
                bundled certification programs for your entire team.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Enroll Your Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/resources/recipes-trends"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Explore Recipes &amp; Trends
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
