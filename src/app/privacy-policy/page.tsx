import type { Metadata } from "next";
import { Shield, Eye, Cookie, FileText, Mail, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Newly Weds Foods Privacy Policy — learn how we collect, use, share, and protect your personal information when you interact with our website, products, and services.",
};

const sections = [
  {
    id: "information-we-collect",
    icon: Eye,
    title: "Information We Collect",
    content: [
      "We collect information you provide directly when you fill out contact forms, request product information, apply for positions, or sign up for newsletters. This may include your name, email address, phone number, company name, job title, and any other details you choose to share.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on pages. This data is collected through standard web analytics tools and server logs to help us understand how visitors use our site.",
      "If you apply for a position through our careers portal, we collect employment-related information such as your work history, education, certifications, and professional references. This information is used solely for recruitment purposes and is retained in accordance with applicable employment laws.",
    ],
  },
  {
    id: "how-we-use-it",
    icon: FileText,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, process product information requests, deliver marketing communications you have opted into, improve our website experience, and consider your application for employment opportunities.",
      "Technical usage data helps us analyze site performance, understand aggregate user behavior patterns, and enhance our digital platforms. This analysis is performed on anonymized, aggregated data wherever possible.",
      "We may use your contact information to send you relevant updates about Newly Weds Foods products, services, events, and industry insights, but only when you have explicitly consented to receive such communications. You can unsubscribe at any time using the link provided in every email.",
      "Your information is never used for automated decision-making or profiling that would produce legal effects concerning you or similarly significantly affect you.",
    ],
  },
  {
    id: "data-sharing",
    icon: Lock,
    title: "Data Sharing & Disclosure",
    content: [
      "Newly Weds Foods does not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share information with trusted service providers who assist us in operating our website, conducting business operations, or serving you — provided those parties agree to keep your information confidential and use it only for the purposes we specify.",
      "These service providers may include website hosting partners, email delivery services, analytics providers, and recruitment platform operators. All third-party processors are contractually bound to data protection standards consistent with this policy.",
      "We may disclose information when required by law, to comply with legal process, to protect our rights and property, or in the event of a corporate transaction such as a merger, acquisition, or asset sale. In such cases, your information would remain subject to the protections described in this policy.",
      "Any international data transfers between our global offices or to third-party processors are governed by appropriate safeguards, including Standard Contractual Clauses where applicable.",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors originate. Cookies are small text files placed on your device by your web browser.",
      "We use essential cookies necessary for the website to function properly — these cannot be disabled. We also use analytics cookies (such as Google Analytics) to understand how visitors interact with our site, which helps us improve content and navigation. These cookies collect anonymous information and do not identify you personally.",
      "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of certain parts of our website.",
      "We do not currently respond to Do Not Track (DNT) signals due to the lack of a standardized industry approach, but we honor Global Privacy Control (GPC) signals where technically feasible.",
    ],
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "Your Rights & Choices",
    content: [
      "Depending on your jurisdiction, you may have certain rights regarding your personal information. These may include the right to access the data we hold about you, request correction of inaccurate information, request deletion of your data, restrict or object to certain processing activities, and receive your data in a portable format.",
      "If you are a resident of the European Economic Area (EEA) or the United Kingdom, you have rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local supervisory authority. If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).",
      "To exercise any of these rights, please contact us using the information in the Contact Us section below. We will respond to verifiable requests within the timeframe required by applicable law — typically 30 to 45 days.",
      "You may withdraw consent for marketing communications at any time by clicking the unsubscribe link in any marketing email or by contacting us directly. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.",
    ],
  },
  {
    id: "contact-us",
    icon: Mail,
    title: "Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      "Email: privacy@newlywedsfoods.com",
      "Phone: +1 (773) 376-9200",
      "Address: Newly Weds Foods, Inc. — Attn: Data Privacy Officer, 4140 W. 56th Street, Chicago, IL 60632, United States",
      "We take your privacy seriously and are committed to addressing any concerns promptly and transparently. This Privacy Policy was last updated on January 1, 2025, and may be updated periodically to reflect changes in our practices or applicable law. We encourage you to review it regularly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Shield className="size-3.5" />
              Legal
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              At Newly Weds Foods, we are committed to protecting your privacy
              and being transparent about how we collect, use, and safeguard
              your personal information.
            </p>
            <p className="mt-3 text-sm text-foreground/50">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Introduction */}
          <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10 mb-10">
            <p className="text-foreground/80 leading-relaxed text-lg">
              This Privacy Policy explains how Newly Weds Foods, Inc. and its
              global subsidiaries (&ldquo;Newly Weds Foods,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collect,
              use, share, and protect personal information obtained through our
              website (newlywedsfoods.com), mobile applications, product
              inquiries, recruitment activities, and other interactions. We are
              committed to handling your data responsibly, securely, and in
              compliance with applicable data protection laws.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="glass rounded-2xl p-8 md:p-10 border border-gold/10 transition-all duration-300 hover:border-gold/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <section.icon className="size-6 text-gold" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => {
                    // Check if paragraph is a single-line contact detail
                    const isContactLine =
                      section.id === "contact-us" &&
                      (paragraph.startsWith("Email:") ||
                        paragraph.startsWith("Phone:") ||
                        paragraph.startsWith("Address:"));
                    return isContactLine ? (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-surface/50 rounded-xl border border-border/30"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                          <Lock className="size-4 text-gold" />
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                          {paragraph}
                        </p>
                      </div>
                    ) : (
                      <p
                        key={idx}
                        className="text-foreground/75 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-10 text-center">
            <p className="text-xs text-foreground/40">
              This policy applies to all personal data processed by Newly Weds
              Foods, Inc. and its wholly owned subsidiaries worldwide. For
              region-specific privacy disclosures, please contact our Data
              Privacy Officer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
