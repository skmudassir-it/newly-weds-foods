import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get in Touch with Newly Weds Foods",
  description:
    "Contact Newly Weds Foods for product inquiries, partnership opportunities, or career information. Our global team is ready to help.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Global Headquarters",
    value: "4140 W. 56th Street\nChicago, IL 60632\nUnited States",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (773) 376-9200",
    href: "tel:+17733769200",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@newlywedsfoods.com",
    href: "mailto:info@newlywedsfoods.com",
  },
  {
    icon: Globe,
    label: "Global Locations",
    value: "30+ facilities across 60+ countries",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Building2 className="size-3.5" />
              We&apos;d Love to Hear From You
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Contact</span> Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Whether you&apos;re looking for product information, interested
              in a partnership, or exploring career opportunities — our team
              is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 sticky top-24">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  Reach out to our team. We typically respond within one
                  business day.
                </p>

                <div className="mt-8 space-y-6">
                  {contactDetails.map((detail) => {
                    const content = detail.href ? (
                      <a
                        href={detail.href}
                        className="text-foreground/70 hover:text-gold transition-colors duration-200"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70 whitespace-pre-line">
                        {detail.value}
                      </p>
                    );

                    return (
                      <div key={detail.label} className="flex items-start gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                          <detail.icon className="size-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-foreground/40">
                            {detail.label}
                          </p>
                          <div className="mt-1 text-sm">{content}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Regions */}
                <div className="mt-10 pt-6 border-t border-border/50">
                  <p className="text-xs uppercase tracking-wider text-foreground/40 mb-3">
                    Regions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "North America",
                      "Europe",
                      "Asia-Pacific",
                      "Latin America",
                      "Middle East & Africa",
                    ].map((region) => (
                      <span
                        key={region}
                        className="inline-flex rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold-light/80"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
