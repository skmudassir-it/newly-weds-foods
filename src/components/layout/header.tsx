"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { primaryNavItems, secondaryNavItems, regions } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Search, Menu, Globe, ChevronDown, MapPin } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        regionRef.current &&
        !regionRef.current.contains(e.target as Node)
      ) {
        setRegionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-background/80 backdrop-blur-md border-b border-border/40"
      )}
    >
      {/* Secondary Navigation Bar */}
      <div className="hidden lg:block border-b border-border/30">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-1 px-6 h-9">
          {/* Region Selector */}
          <div className="relative" ref={regionRef}>
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
              )}
            >
              <MapPin className="size-3 text-gold" />
              <span>Region</span>
              <ChevronDown
                className={cn(
                  "size-3 transition-transform duration-200",
                  regionOpen && "rotate-180"
                )}
              />
            </button>

            {regionOpen && (
              <div className="absolute top-full right-0 mt-1 w-52 bg-popover border border-border rounded-lg shadow-xl py-1 z-50">
                {regions.map((region) => (
                  <Link
                    key={region.label}
                    href={region.href}
                    onClick={() => setRegionOpen(false)}
                    className="block px-3 py-2 text-xs text-foreground hover:bg-muted hover:text-gold transition-colors"
                  >
                    {region.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Secondary Nav Links */}
          {secondaryNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface-hover rounded-md transition-colors"
            >
              {item.icon === "Globe" && <Globe className="size-3" />}
              {item.label}
            </Link>
          ))}

          {/* Search Toggle (Desktop) */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface-hover rounded-md transition-colors"
            aria-label="Search"
          >
            <Search className="size-3" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Newly Weds Foods"
            width={48}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden sm:inline font-heading text-lg font-bold text-gold tracking-tight">
            Newly Weds
          </span>
        </Link>

        {/* Desktop Primary Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {primaryNavItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="h-9 text-sm font-medium text-foreground/80 hover:text-gold data-[popup-open]:text-gold">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavigationMenuLink>
                                <Link
                                  href={child.href ?? "#"}
                                  className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-gold focus:bg-muted"
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink>
                      <Link
                        href={item.href ?? "#"}
                        className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium text-foreground/80 hover:text-gold hover:bg-muted transition-all"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 lg:hidden">
          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>

          {/* Mobile Hamburger */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Menu">
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="left" className="w-full sm:max-w-sm p-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar (expandable) */}
      {searchOpen && (
        <div className="border-t border-border/30 bg-surface/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search Newly Weds Foods..."
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
