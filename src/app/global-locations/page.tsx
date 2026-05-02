import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Globe,
  ArrowRight,
  Factory,
  Building2,
  Search,
  Phone,
  FlaskConical,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Locations — Find Us Worldwide",
  description:
    "Browse Newly Weds Foods' global facility directory — 30+ manufacturing plants, R&D centers, and regional offices across North America, Europe, Asia-Pacific, Latin America, and MEA.",
};

interface Location {
  city: string;
  country: string;
  type: "Manufacturing" | "R&D Center" | "Regional Office" | "HQ & Manufacturing";
  description: string;
}

interface RegionSection {
  name: string;
  subtitle: string;
  locations: Location[];
}

const regionData: RegionSection[] = [
  {
    name: "North America",
    subtitle: "14 facilities — our largest operating region and global headquarters",
    locations: [
      {
        city: "Chicago, IL",
        country: "United States",
        type: "HQ & Manufacturing",
        description:
          "Global headquarters, flagship manufacturing plant, and primary R&D center. 400,000+ sq ft facility producing coatings, seasonings, sauces, and functional systems since 1932.",
      },
      {
        city: "Watertown, MA",
        country: "United States",
        type: "Manufacturing",
        description:
          "Northeast manufacturing hub specializing in custom seasoning blends and functional ingredient systems for East Coast foodservice and CPG partners.",
      },
      {
        city: "Guelph, ON",
        country: "Canada",
        type: "Manufacturing",
        description:
          "Canadian production facility serving QSR and foodservice customers across Canada with full-line coating and seasoning capabilities. CFIA-certified operations.",
      },
      {
        city: "Monterrey, NL",
        country: "Mexico",
        type: "Manufacturing",
        description:
          "Mexico manufacturing center providing cost-competitive coatings and seasonings for North and Central American markets with bilingual technical support.",
      },
    ],
  },
  {
    name: "Europe",
    subtitle: "6 facilities — covering Western and Eastern European markets",
    locations: [
      {
        city: "Corby",
        country: "United Kingdom",
        type: "R&D Center",
        description:
          "European headquarters and innovation hub. Houses culinary labs, sensory analysis suites, and pilot-scale production for EU market product development with clean-label focus.",
      },
      {
        city: "Oss",
        country: "Netherlands",
        type: "Manufacturing",
        description:
          "Central European production facility with advanced blending and coating lines. Strategically located for rapid distribution across Benelux, Germany, and France.",
      },
      {
        city: "Bielefeld",
        country: "Germany",
        type: "Manufacturing",
        description:
          "German manufacturing center serving DACH region food manufacturers with precision-formulated seasonings, marinades, and functional coating systems.",
      },
    ],
  },
  {
    name: "Asia-Pacific",
    subtitle: "8 facilities — powering growth in the world's most dynamic food market",
    locations: [
      {
        city: "Bangkok",
        country: "Thailand",
        type: "Regional Office",
        description:
          "APAC regional headquarters and innovation center. Culinary trend lab tracking Southeast Asian flavor movements and translating them into scalable ingredient solutions.",
      },
      {
        city: "Shanghai",
        country: "China",
        type: "Manufacturing",
        description:
          "Full-scale manufacturing and application center serving China's rapidly growing QSR and foodservice sectors. Specializing in region-specific coatings and seasonings.",
      },
      {
        city: "Sydney",
        country: "Australia",
        type: "Manufacturing",
        description:
          "Australian production facility with FSANZ-compliant operations. Serves Australia and New Zealand with locally tailored batter, breader, and seasoning systems.",
      },
      {
        city: "Tokyo",
        country: "Japan",
        type: "R&D Center",
        description:
          "Japanese innovation lab focused on umami-rich seasonings, tempura coating systems, and functional ingredients tailored to Japan's sophisticated food culture.",
      },
    ],
  },
  {
    name: "Latin America",
    subtitle: "3 facilities — serving growing South and Central American markets",
    locations: [
      {
        city: "São Paulo",
        country: "Brazil",
        type: "Manufacturing",
        description:
          "Latin American headquarters and primary production center. Full-line coatings and seasonings with ANVISA-compliant quality systems for Brazil and Mercosur markets.",
      },
      {
        city: "Santiago",
        country: "Chile",
        type: "Manufacturing",
        description:
          "Chilean facility serving Andean and Southern Cone markets. Specializing in high-performance coatings for poultry and seafood — the region's protein mainstays.",
      },
      {
        city: "Bogotá",
        country: "Colombia",
        type: "Regional Office",
        description:
          "Northern South America commercial and technical support office. On-the-ground application specialists serving Colombia, Peru, and Central American food manufacturers.",
      },
    ],
  },
  {
    name: "Middle East & Africa",
    subtitle: "2 facilities — establishing presence in high-growth emerging markets",
    locations: [
      {
        city: "Dubai",
        country: "United Arab Emirates",
        type: "Regional Office",
        description:
          "MEA headquarters and commercial hub. Halal-certified supply chain coordination, regional trend monitoring, and technical sales support for Gulf and Levant markets.",
      },
      {
        city: "Johannesburg",
        country: "South Africa",
        type: "Manufacturing",
        description:
          "Sub-Saharan African production facility. Manufactures coatings and seasonings adapted for local protein sources, taste preferences, and supply chain conditions across 15+ African nations.",
      },
    ],
  },
];

const typeIcons: Record<Location["type"], React.ComponentType<{ className?: string }>> = {
  "HQ & Manufacturing": Building2,
  Manufacturing: Factory,
  "R&D Center": FlaskConical,
  "Regional Office": MapPin,
};

const typeBadgeColors: Record<Location["type"], string> = {
  "HQ & Manufacturing": "border-gold/40 bg-gold/10 text-gold-light",
  Manufacturing: "border-blue-400/40 bg-blue-400/10 text-blue-400",
  "R&D Center": "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  "Regional Office": "border-amber-400/40 bg-amber-400/10 text-amber-400",
};

export default function GlobalLocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Globe className="size-3.5" />
              30+ Facilities Worldwide
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Global <span className="text-gradient">Locations</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl italic text-gold-light/80">
              Find Us Worldwide
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              From our Chicago headquarters to innovation centers in Bangkok and
              manufacturing plants on five continents — discover where we
              operate and how to connect with our regional teams.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Factory, value: "30+", label: "Facilities" },
              { icon: Globe, value: "60+", label: "Countries" },
              { icon: FlaskConical, value: "12", label: "R&D Centers" },
              { icon: Truck, value: "5", label: "Continents" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 text-center"
              >
                <item.icon className="size-5 text-gold mx-auto" />
                <div className="mt-2 font-heading text-2xl font-bold text-gold">
                  {item.value}
                </div>
                <p className="text-xs text-foreground/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Directory */}
      {regionData.map((region, regionIdx) => (
        <section
          key={region.name}
          className={`py-16 md:py-24 ${regionIdx % 2 === 0 ? "" : "bg-surface/30"}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-gradient">{region.name}</span>
              </h2>
              <p className="mt-2 text-foreground/60">{region.subtitle}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {region.locations.map((location) => {
                const TypeIcon = typeIcons[location.type];
                const badgeColor = typeBadgeColors[location.type];
                return (
                  <div
                    key={`${location.city}-${location.country}`}
                    className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${badgeColor}`}
                          >
                            <TypeIcon className="size-3" />
                            {location.type}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {location.city}
                        </h3>
                        <p className="text-sm text-foreground/50 flex items-center gap-1.5 mt-0.5">
                          <MapPin className="size-3.5" />
                          {location.country}
                        </p>
                        <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-3xl border border-gold/20 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.04),transparent_70%)]" />
            <div className="relative z-10">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Phone className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Need a <span className="text-gradient">Regional Contact</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Our global offices are ready to help. Reach out and we&apos;ll
                connect you with the right team in your region.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/global-view"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Global Overview
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
