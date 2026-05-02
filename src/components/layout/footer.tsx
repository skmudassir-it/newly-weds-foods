"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  MessageCircle,
  MessageSquare,
  Camera,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/company/about" },
  { label: "Products", href: "/products/coatings" },
  { label: "Innovation", href: "/innovation/research-development" },
  { label: "Careers", href: "/careers" },
  { label: "News & Trends", href: "/news" },
  { label: "Sustainability", href: "/company/sustainability" },
  { label: "Global View", href: "/global-view" },
  { label: "Global Locations", href: "/global-locations" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
  { label: "Facebook", href: "#", icon: MessageCircle },
  { label: "X", href: "#", icon: MessageSquare },
  { label: "Instagram", href: "#", icon: Camera },
];

export function Footer() {
  return (
    <footer className="bg-surface/90 border-t border-border/40">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Newly Weds Foods"
                width={44}
                height={44}
                className="h-9 w-auto"
              />
              <span className="font-heading text-xl font-bold text-gold tracking-tight">
                Newly Weds Foods
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Global leader in food ingredient solutions. Custom coatings,
              seasonings, sauces, and functional systems serving the world&#39;s
              top food brands and foodservice operators for over 90 years.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-gold hover:bg-surface-hover transition-colors"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors group"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  4140 W. 56th Street
                  <br />
                  Chicago, IL 60632
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold shrink-0" />
                <a
                  href="tel:+17733767000"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  +1 (773) 376-7000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold shrink-0" />
                <a
                  href="mailto:info@newlywedsfoods.com"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  info@newlywedsfoods.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50">
                  Get in Touch
                  <ArrowUpRight className="size-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-border/40" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Newly Weds Foods, Inc. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy-policy"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Use
          </Link>
          <Link
            href="/accessibility"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
