import type { Metadata } from "next";
import { ScrollText, Scale, Ban, AlertTriangle, Gavel, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Newly Weds Foods Terms of Use — please read these terms carefully before using our website. They govern your access to and use of newlywedsfoods.com and related digital properties.",
};

const sections = [
  {
    id: "acceptance",
    icon: ScrollText,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Newly Weds Foods website (newlywedsfoods.com) and any related digital properties, mobile applications, or online services (collectively, the \"Site\"), you agree to be bound by these Terms of Use and all applicable laws and regulations.",
      "If you do not agree with any of these terms, you are prohibited from using or accessing this Site. The materials contained on this Site are protected by applicable copyright, trademark, and other intellectual property laws.",
      "Newly Weds Foods reserves the right to update, modify, or replace these Terms of Use at any time without prior notice. Your continued use of the Site following the posting of any changes constitutes acceptance of those changes. We encourage you to review these terms periodically.",
    ],
  },
  {
    id: "intellectual-property",
    icon: Scale,
    title: "Intellectual Property Rights",
    content: [
      "All content on this Site — including but not limited to text, graphics, logos, icons, images, audio clips, video clips, digital downloads, data compilations, software, and the selection and arrangement thereof — is the exclusive property of Newly Weds Foods, Inc. or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.",
      "The trademarks, logos, and service marks displayed on the Site (collectively, \"Marks\") are registered and unregistered marks of Newly Weds Foods, Inc. and its affiliates. Nothing on this Site should be construed as granting — by implication, estoppel, or otherwise — any license or right to use any Mark without the prior written permission of Newly Weds Foods.",
      "You may view, download, and print pages from the Site for your personal, non-commercial use only, provided you do not modify or alter the content in any way and retain all copyright and proprietary notices. Any other use — including reproduction, distribution, display, or transmission of Site content — is strictly prohibited without our express prior written consent.",
    ],
  },
  {
    id: "user-conduct",
    icon: Ban,
    title: "User Conduct",
    content: [
      "When using our Site, you agree not to engage in any activity that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or otherwise objectionable.",
      "You specifically agree not to: upload or transmit viruses, malware, or any other malicious code; attempt to gain unauthorized access to our servers, systems, or networks; interfere with or disrupt the Site's functionality or servers; use any robot, spider, scraper, or other automated means to access the Site for any purpose without our express written permission; collect or harvest personally identifiable information of other users; or impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.",
      "We reserve the right to terminate or suspend your access to the Site without prior notice for any conduct that we, in our sole discretion, believe violates these Terms of Use or is harmful to our interests or the interests of other users.",
    ],
  },
  {
    id: "disclaimers",
    icon: AlertTriangle,
    title: "Disclaimers",
    content: [
      "The materials on the Newly Weds Foods Site are provided on an \"as is\" and \"as available\" basis. Newly Weds Foods makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, non-infringement of intellectual property, or other violation of rights.",
      "We do not warrant or make any representations concerning the accuracy, likely results, completeness, or reliability of the use of the materials on the Site or otherwise relating to such materials or on any sites linked to this Site. Product specifications, availability, and descriptions are subject to change without notice.",
      "The Site may contain links to third-party websites that are not owned or controlled by Newly Weds Foods. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You access such linked sites at your own risk.",
    ],
  },
  {
    id: "limitation-of-liability",
    icon: ShieldAlert,
    title: "Limitation of Liability",
    content: [
      "In no event shall Newly Weds Foods, its officers, directors, employees, agents, suppliers, or affiliates be liable for any damages — including, without limitation, direct, indirect, incidental, special, consequential, or punitive damages — arising out of the use or inability to use the materials on the Site, even if Newly Weds Foods or an authorized representative has been notified orally or in writing of the possibility of such damage.",
      "This limitation includes damages for loss of profits, business interruption, loss of information, or any other pecuniary loss. Some jurisdictions do not allow limitations on implied warranties or the exclusion or limitation of certain damages, so these limitations may not apply to you. In such jurisdictions, our liability is limited to the greatest extent permitted by law.",
      "Newly Weds Foods' total liability for any claim arising out of or relating to these Terms of Use or your use of the Site shall not exceed the amount paid by you, if any, for accessing the Site during the twelve (12) months preceding the claim.",
    ],
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing Law & Jurisdiction",
    content: [
      "These Terms of Use and any disputes arising out of or relating to your use of the Site shall be governed by and construed in accordance with the laws of the State of Illinois, United States of America, without regard to its conflict of law provisions.",
      "Any legal action or proceeding relating to your access to or use of the Site shall be instituted exclusively in a state or federal court located in Cook County, Illinois. You agree to submit to the personal jurisdiction of such courts and waive any jurisdictional, venue, or inconvenient forum objections.",
      "If any provision of these Terms of Use is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be deemed severable and the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.",
      "For international users: you are responsible for compliance with local laws applicable to your use of the Site from your jurisdiction. Accessing the Site from territories where its content is illegal is prohibited.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ScrollText className="size-3.5" />
              Legal
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Terms of <span className="text-gradient">Use</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Please read these Terms of Use carefully before using our website.
              They establish the rules and guidelines governing your access to
              and use of newlywedsfoods.com and our related digital properties.
            </p>
            <p className="mt-3 text-sm text-foreground/50">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Introduction */}
          <div className="glass rounded-2xl p-8 md:p-10 border border-gold/10 mb-10">
            <p className="text-foreground/80 leading-relaxed text-lg">
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally
              binding agreement between you and Newly Weds Foods, Inc. and its
              affiliates (&ldquo;Newly Weds Foods,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to
              and use of our website, including any content, functionality,
              products, and services offered on or through the Site. By using the
              Site, you represent that you are of legal age to form a binding
              contract and accept these Terms on behalf of yourself and any
              entity you represent.
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
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-crimson/10">
                    <section.icon className="size-6 text-crimson" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-foreground/75 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Note */}
          <div className="mt-10 glass rounded-2xl p-6 border border-gold/10 text-center">
            <p className="text-sm text-foreground/60">
              Questions about these Terms of Use? Contact us at{" "}
              <span className="text-gold-light">legal@newlywedsfoods.com</span> or
              call <span className="text-gold-light">+1 (773) 376-9200</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
