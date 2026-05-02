"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { primaryNavItems, secondaryNavItems, regions } from "@/lib/data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Search,
  Globe,
  MapPin,
  ChevronRight,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";

export function MobileNav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Mobile Nav Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-border/40 shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-gold tracking-tight">
            Newly Weds Foods
          </span>
        </Link>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-border/30">
        {!searchOpen ? (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm text-muted-foreground bg-surface hover:bg-surface-hover hover:text-foreground transition-colors"
          >
            <Search className="size-4" />
            <span>Search Newly Weds Foods...</span>
          </button>
        ) : (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/50"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Escape") setSearchOpen(false);
              }}
            />
          </div>
        )}
      </div>

      {/* Scrollable Nav Content */}
      <div className="flex-1 overflow-y-auto py-2">
        {/* Primary Navigation with Accordion */}
        <Accordion className="px-2">
          {primaryNavItems.map((item) => (
            <AccordionItem
              key={item.label}
              value={item.label}
              className="border-border/30"
            >
              {item.children ? (
                <>
                  <AccordionTrigger className="px-3 text-sm font-medium text-foreground hover:text-gold data-[panel-open]:text-gold">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-0.5 px-3 pb-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href ?? "#"}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                          >
                            <ChevronRight className="size-3.5 text-gold/60" />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Separator className="mx-4 my-3 bg-border/30" />

        {/* Region Selector */}
        <div className="px-4 py-1">
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-gold" />
            <span className="font-medium text-foreground">Region</span>
          </div>
          <ul className="space-y-0.5 px-3">
            {regions.map((region) => (
              <li key={region.label}>
                <Link
                  href={region.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                >
                  <ChevronRight className="size-3.5 text-gold/60" />
                  {region.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="mx-4 my-3 bg-border/30" />

        {/* Secondary Nav Links */}
        <div className="px-4">
          <ul className="space-y-0.5">
            {secondaryNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                >
                  {item.icon === "Globe" && (
                    <Globe className="size-4 text-gold/60" />
                  )}
                  {item.label}
                  <ArrowUpRight className="size-3 ml-auto opacity-40" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Contact */}
      <div className="shrink-0 border-t border-border/40 px-5 py-4 space-y-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Phone className="size-4 text-gold" />
          <a
            href="tel:+17733767000"
            className="hover:text-gold transition-colors"
          >
            +1 (773) 376-7000
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Mail className="size-4 text-gold" />
          <a
            href="mailto:info@newlywedsfoods.com"
            className="hover:text-gold transition-colors"
          >
            info@newlywedsfoods.com
          </a>
        </div>
        <Link href="/contact">
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-2 border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
          >
            Get in Touch
            <ArrowUpRight className="size-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
