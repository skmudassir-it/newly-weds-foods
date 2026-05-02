import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Store,
  Package,
  Lightbulb,
  Factory,
  Truck,
  BadgeCheck,
  BarChart3,
  TrendingUp,
  Globe,
  ShieldCheck,
  Users,
  ChefHat,
  Sparkles,
  ClipboardCheck,
  Palette,
  Box,
  CookingPot,
  Wheat,
  Droplets,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consumer Products — From B2B to Retail Shelf",
  description:
    "Newly Weds Foods partners with leading CPG brands to develop consumer-ready products. Private-label and co-branded programs, turnkey retail solutions from concept through packaging and distribution, including seasoning blends, breading mixes, and marinade kits.",
};

const turnkeySteps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Concept",
    description:
      "Our consumer insights team works with you to identify white-space opportunities on the retail shelf. We analyze category trends, competitive landscapes, and shopper behavior data to define a product concept with clear points of differentiation and a compelling consumer proposition.",
    highlights: [
      "Category gap analysis",
      "Shopper insight research",
      "Competitive benchmarking",
      "Concept validation panels",
    ],
  },
  {
    step: "02",
    icon: Factory,
    title: "Formulation",
    description:
      "Our R&D teams translate the concept into a scalable, cost-optimized formulation. We develop the seasoning blend, coating system, or marinade — complete with nutritional panels, ingredient declarations, and sensory profiles that match or exceed the category benchmark.",
    highlights: [
      "Benchtop prototyping",
      "Sensory optimization",
      "Cost modeling",
      "Shelf-life validation",
    ],
  },
  {
    step: "03",
    icon: Palette,
    title: "Packaging",
    description:
      "Packaging is your product's first impression on the retail shelf. Our packaging engineers design formats that balance shelf impact, functionality, and sustainability — from stand-up pouches to glass jars, cartons to club-store multi-packs.",
    highlights: [
      "Structural & graphic design",
      "Sustainable material options",
      "Regulatory label compliance",
      "Club & e-commerce formats",
    ],
  },
  {
    step: "04",
    icon: Truck,
    title: "Distribution",
    description:
      "We manage production, quality assurance, and logistics — delivering retail-ready product to your distribution centers or direct to store. Our nationwide manufacturing footprint and established logistics network ensure on-time, in-full delivery at scale.",
    highlights: [
      "Scaled production runs",
      "QA & hold-release protocols",
      "OTIF logistics management",
      "Replenishment planning",
    ],
  },
];

const productExamples = [
  {
    icon: CookingPot,
    category: "Seasoning Blends",
    items: [
      {
        name: "Artisan Grinder Top Spices",
        desc: "Refillable grinder-top jars with whole spice blends — Himalayan Pink Salt & Tellicherry Pepper, Mediterranean Herb, Smoky Southwest.",
      },
      {
        name: "Global Street Food Kits",
        desc: "Multi-pouch kits with separate seasoning, sauce, and garnish components — Korean BBQ, Thai Basil Chili, Mexican Elote.",
      },
      {
        name: "Single-Origin Spice Tins",
        desc: "Premium small-batch packaging highlighting single-origin spices with farmer stories — Aleppo Pepper, Maldon Salt, Tellicherry Pepper.",
      },
    ],
  },
  {
    icon: Wheat,
    category: "Breading Mixes",
    items: [
      {
        name: "Gourmet Crunch Coatings",
        desc: "Restaurant-quality breading mixes in retail-friendly pouches — Panko & Herb, Tempura Light, Southern Buttermilk, Kettle-Cooked Crisp.",
      },
      {
        name: "Better-for-You Breaders",
        desc: "Clean-label breading alternatives — Almond Flour Crust, Chickpea Crumble, Quinoa Crisp, Cauliflower Crumbs — targeting keto, gluten-free, and plant-forward consumers.",
      },
      {
        name: "Kids' Crispy Dippers",
        desc: "Fun-shaped, mild-seasoned breading mixes designed for family meal occasions — Cheddar Crackle, Honey-Oat Crunch, Pizza-Style Parm.",
      },
    ],
  },
  {
    icon: Droplets,
    category: "Marinade Kits",
    items: [
      {
        name: "30-Minute Express Marinades",
        desc: "Fast-acting liquid marinade pouches in bold flavors — Chipotle Lime, Garlic Herb, Teriyaki Sesame, Bourbon Brown Sugar.",
      },
      {
        name: "Overnight Craft Marinades",
        desc: "Premium dry-rub and wet-marinade combos for the weekend cook — Coffee-Ancho Steak Rub, Miso-Ginger Glaze, Pomegranate-Harissa.",
      },
      {
        name: "Plant-Based Protein Marinades",
        desc: "Formulated specifically for tofu, tempeh, and plant-based meat analogues — Smoky Umami, Turmeric-Tahini, Buffalo Ranch.",
      },
    ],
  },
];

const retailTrends = [
  {
    icon: TrendingUp,
    title: "Premium Private Label",
    desc: "Retailers are investing in premium-tier store brands that compete on quality, not just price. Consumers increasingly trust retailer brands — 78% view private label quality as equal to or better than national brands.",
  },
  {
    icon: Globe,
    title: "Global Discovery at Home",
    desc: "Home cooks are seeking restaurant-style global flavors in retail formats. Ethnic seasoning blends, regional sauce kits, and world-cuisine meal starters are the fastest-growing subcategories in the spice aisle.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Label Dominance",
    desc: "Shoppers scrutinize ingredient lists more than ever. Products with short, recognizable ingredient declarations command premium pricing and faster turns. 'No artificial anything' is the new table stakes.",
  },
  {
    icon: BarChart3,
    title: "E-Commerce Optimization",
    desc: "Online grocery is reshaping packaging requirements. Products need to photograph well, ship safely, and communicate value in thumbnail-sized images — packaging design must work double-duty for digital and physical shelves.",
  },
];

export default function ConsumerProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ShoppingBag className="size-3.5" />
              B2B to Retail Partner
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Consumer{" "}
              <span className="text-gradient">Products</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              From B2B to Retail Shelf
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Your expertise is your brand. Our expertise is bringing brands
              to the retail shelf. Newly Weds Foods partners with leading
              CPG companies, retailers, and foodservice brands to develop,
              manufacture, and distribute consumer-ready products — from
              gourmet seasoning blends to complete meal solution kits.
            </p>
          </div>
        </div>
      </section>

      {/* Private Label Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Store className="size-3.5" />
              Partnership Models
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Private Label &amp;{" "}
              <span className="text-gradient">Co-Branded Programs</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Two flexible partnership models designed to match your brand
              strategy and go-to-market goals.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Private Label */}
            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <Package className="size-7 text-gold" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Private Label
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Your brand, our manufacturing excellence. We develop and
                produce products under your brand name — handling everything
                from formulation to packaging to logistics. You own the brand
                equity and consumer relationship; we provide the
                infrastructure, innovation, and scale. Ideal for retailers
                expanding their store-brand portfolios and CPG companies
                entering adjacent categories without capital investment.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Full formulation & R&D support",
                  "Flexible MOQs from pilot to national scale",
                  "Regulatory & labeling compliance management",
                  "Category management & planogram support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <BadgeCheck className="size-4 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Co-Branded */}
            <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-crimson/30 hover:shadow-lg hover:shadow-crimson/5 group">
              <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                <Users className="size-7 text-crimson" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Co-Branded Programs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Two brands, one powerful product. Co-branded programs leverage
                the equity of both your brand and Newly Weds Foods&apos;
                reputation for culinary excellence. Our name on the package
                signals quality and authenticity to consumers — driving trial,
                trust, and repeat purchase. Perfect for restaurant brands
                extending into retail, celebrities launching food lines, and
                established CPG brands seeking ingredient-story credibility.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Joint brand equity & consumer trust",
                  "Co-marketing & PR campaign support",
                  "Social media & influencer program coordination",
                  "Retail buyer presentation & sell-in support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <BadgeCheck className="size-4 text-crimson shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Retail Solution */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Sparkles className="size-3.5" />
              End-to-End Partnership
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our Turnkey{" "}
              <span className="text-gradient">Retail Solution</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Four phases from concept to consumer — we manage every step so
              you can focus on your brand.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {turnkeySteps.map((step) => (
              <div
                key={step.step}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group relative flex flex-col"
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
                <p className="mt-3 text-sm leading-relaxed text-foreground/60 flex-1">
                  {step.description}
                </p>
                <ul className="mt-4 space-y-1.5 pt-4 border-t border-gold/10">
                  {step.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-foreground/50"
                    >
                      <span className="size-1 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Examples */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Box className="size-3.5" />
              What We Make
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Product{" "}
              <span className="text-gradient">Examples</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              A sampling of the consumer-ready products we develop and
              manufacture for our CPG and retail partners.
            </p>
          </div>
          <div className="mt-16 space-y-12">
            {productExamples.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-crimson/10">
                    <cat.icon className="size-5 text-crimson" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {cat.category}
                  </h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
                    >
                      <h4 className="font-heading text-base font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Trends */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <TrendingUp className="size-3.5" />
              Market Intelligence
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Retail <span className="text-gradient">Trends</span> Shaping
              the Shelf
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The forces driving consumer purchase behavior in the retail
              grocery and e-commerce channels.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {retailTrends.map((trend) => (
              <div
                key={trend.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <trend.icon className="size-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {trend.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {trend.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <ShieldCheck className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Why Partner with Newly Weds for Retail?
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-3 text-left">
                {[
                  {
                    icon: Factory,
                    title: "Manufacturing Scale",
                    desc: "30+ facilities worldwide with the capacity to support national retail launches and sustained replenishment.",
                  },
                  {
                    icon: ChefHat,
                    title: "Culinary Authority",
                    desc: "Decades of seasoning and coating expertise that translates to superior-tasting products consumers love.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Regulatory Confidence",
                    desc: "Full regulatory, labeling, and quality systems that meet the most demanding retailer requirements.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-crimson/10">
                      <item.icon className="size-5 text-crimson" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Own the{" "}
                <span className="text-gradient">Retail Shelf</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Whether you&apos;re a retailer expanding private label, a
                restaurant brand entering CPG, or a company seeking a
                turnkey manufacturing partner — let&apos;s build something
                consumers reach for.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Start a Partnership
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
