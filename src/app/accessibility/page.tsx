import type { Metadata } from "next";
import Link from "next/link";
import {
  AccessibilityIcon,
  Eye,
  Keyboard,
  Monitor,
  MessageCircle,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement — Our Commitment to Digital Inclusion",
  description:
    "Newly Weds Foods is committed to digital accessibility. Learn about our efforts to meet WCAG 2.2 AA standards, our accessibility features, and how to provide feedback.",
};

const commitmentPoints = [
  {
    icon: Heart,
    title: "Inclusion at Our Core",
    description:
      "We believe everyone deserves equal access to information. Our commitment to accessibility reflects our broader values of respect, inclusion, and service to all communities.",
  },
  {
    icon: Eye,
    title: "Perceivable Content",
    description:
      "We design our digital content to be perceivable by all users — including those who rely on screen readers, magnification tools, or alternative sensory channels.",
  },
  {
    icon: Keyboard,
    title: "Operable Interfaces",
    description:
      "All interactive elements are navigable by keyboard alone. We ensure our interface does not require interactions that some users cannot perform.",
  },
];

const features = [
  {
    title: "Semantic HTML Structure",
    description:
      "Our pages use proper heading hierarchies, landmark regions, and ARIA attributes to ensure screen readers and assistive technologies can accurately interpret page content and navigation.",
  },
  {
    title: "Keyboard Navigation",
    description:
      "All menus, links, buttons, and form controls are fully operable via keyboard. Focus indicators are clearly visible so keyboard users always know where they are on the page.",
  },
  {
    title: "Color Contrast & Typography",
    description:
      "Text meets or exceeds WCAG 2.2 AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Fonts are chosen for readability, with generous line spacing and clear letterforms.",
  },
  {
    title: "Alternative Text for Images",
    description:
      "All meaningful images include descriptive alt text. Decorative images are marked appropriately so screen readers can skip them, reducing cognitive load for assistive technology users.",
  },
  {
    title: "Resizable & Responsive Design",
    description:
      "Our site adapts to all screen sizes and supports browser zoom up to 200% without loss of content or functionality. Text scales proportionally, and layouts reflow intelligently.",
  },
  {
    title: "Accessible Forms",
    description:
      "All form fields have associated labels, clear error messaging, and instructions. Error states are communicated programmatically so assistive technology users can identify and correct input issues efficiently.",
  },
];

const improvements = [
  "We conduct regular automated and manual accessibility audits using industry-standard tools and assistive technology testing.",
  "Our development team receives ongoing training on WCAG standards, inclusive design patterns, and accessible coding practices.",
  "We engage with users and accessibility experts to gather feedback and identify areas for improvement.",
  "New features and content releases include accessibility review as part of our quality assurance process.",
  "We monitor evolving standards and regulations — including WCAG 2.2, ADA, and Section 508 updates — to ensure ongoing compliance.",
  "Third-party components and integrations are evaluated for accessibility before inclusion in our digital platforms.",
];

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <AccessibilityIcon className="size-3.5" />
              Digital Inclusion
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Accessibility{" "}
              <span className="text-gradient">Statement</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              Our Commitment to Digital Inclusion
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Newly Weds Foods is committed to ensuring that our digital
              platforms are accessible to all individuals — including those
              with visual, auditory, motor, or cognitive disabilities. We are
              continuously working to improve the user experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Commitment</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Accessibility isn&apos;t an afterthought — it&apos;s a
              foundational principle guiding how we design, build, and maintain
              our digital experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {commitmentPoints.map((point) => (
              <div
                key={point.title}
                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-gold/10">
                  <point.icon className="size-7 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Standards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">WCAG Standards</span>
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10">
              <p className="text-foreground/80 leading-relaxed text-lg">
                Newly Weds Foods strives to conform to the{" "}
                <span className="text-gold-light font-semibold">
                  Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
                </span>
                , published by the World Wide Web Consortium (W3C). These
                internationally recognized guidelines define how to make web
                content more accessible to people with a wide range of
                disabilities, including visual, auditory, physical, speech,
                cognitive, language, learning, and neurological disabilities.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
                WCAG 2.2 AA conformance means our digital content meets success
                criteria across four core principles: it must be{" "}
                <span className="text-gold-light font-medium">
                  perceivable, operable, understandable, and robust
                </span>{" "}
                (POUR). We apply these principles throughout our design and
                development lifecycle to ensure an inclusive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Accessibility <span className="text-gradient">Features</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              We implement a range of features to make our website more
              accessible to all users.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="size-5 text-gold shrink-0" />
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed pl-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Improvements */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ongoing <span className="text-gradient">Improvements</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Accessibility is a journey, not a destination. Here&apos;s what
              we&apos;re doing to continuously raise the bar.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10">
              <ul className="space-y-4">
                {improvements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Monitor className="size-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground/75 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              We Welcome <span className="text-gradient">Your Feedback</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Your experience matters. If you encounter any accessibility
              barriers or have suggestions for improvement, please let us know.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-lg">
            <div className="glass rounded-2xl p-8 md:p-10 border border-gold/20 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <MessageCircle className="size-8 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                How to Reach Us
              </h3>
              <div className="mt-6 space-y-3 text-sm text-foreground/70">
                <p>
                  <span className="font-medium text-foreground/80">Email:</span>{" "}
                  accessibility@newlywedsfoods.com
                </p>
                <p>
                  <span className="font-medium text-foreground/80">Phone:</span>{" "}
                  +1 (773) 376-9200
                </p>
                <p>
                  <span className="font-medium text-foreground/80">Mail:</span>{" "}
                  Newly Weds Foods, Inc. — Attn: Accessibility Coordinator, 4140
                  W. 56th Street, Chicago, IL 60632
                </p>
              </div>
              <p className="mt-6 text-xs text-foreground/50">
                We aim to respond to accessibility feedback within 3–5 business
                days. This statement was last reviewed on January 1, 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Have Questions?{" "}
                <span className="text-gradient">Get in Touch</span>
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you need product information, want to discuss a
                partnership, or have an accessibility concern — we&apos;re here
                to help.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Us
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
