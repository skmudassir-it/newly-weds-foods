import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Globe,
  Eye,
  Clock,
  Truck,
  Store,
  ChefHat,
  ArrowRight,
  Compass,
  BarChart4,
  Search,
  Flame,
  Leaf,
  Wheat,
  MapPin,
  Ship,
  Scale,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Culinary Trends — Anticipating Tomorrow's Flavors",
  description:
    "Discover how Newly Weds Foods tracks, analyzes, and translates global culinary trends into market-ready products. 60+ country trend intelligence network, consumer behavior tracking, and 2026+ predictions.",
};

const trendRegions = [
  {
    icon: Globe,
    region: "Asia-Pacific",
    spotlight: "Fermented Heat & Umami Explosion",
    description:
      "Gochujang, doubanjiang, and miso are crossing category boundaries — appearing in snacks, sauces, and even desserts. Korean fried chicken seasonings are surging across Southeast Asia and Australia. Japanese yuzu and shiso are the new citrus-and-herb power couple in beverages and confections.",
    tags: ["Korean Fried Chicken", "Gochujang Caramel", "Yuzu-Kosho", "Miso Butter", "Sichuan Málà"],
  },
  {
    icon: Globe,
    region: "North America",
    spotlight: "Swicy & Comfort Remix",
    description:
      "The 'swicy' (sweet + spicy) trend continues to dominate — hot honey, chili-infused maple, and cayenne-spiked chocolate. Nostalgic comfort flavors are being reimagined with global twists: birria ramen, Nashville hot fish sandwiches, and everything-bagel-seasoned everything.",
    tags: ["Hot Honey", "Nashville Hot", "Birria Fusion", "Everything Seasoning", "Swicy"],
  },
  {
    icon: Globe,
    region: "Europe",
    spotlight: "Mediterranean Reimagined & Functional Flavors",
    description:
      "Za'atar, harissa, and preserved lemon are moving beyond restaurants into retail and QSR menus. Nordic-inspired smoke, dill, and juniper flavors are gaining traction. Functional botanicals — elderflower, lavender, rosemary — are being incorporated for both flavor and perceived wellness benefits.",
    tags: ["Harissa", "Za'atar", "Nordic Smoke", "Elderflower", "Preserved Lemon"],
  },
  {
    icon: Globe,
    region: "Latin America",
    spotlight: "Aji Amarillo & Tropical Heat",
    description:
      "Peruvian aji amarillo, Brazilian pimenta biquinho, and Mexican salsa macha are the next wave of Latin heat. Tropical fruits — passionfruit, guava, açaí — are being paired with chili in beverages, sauces, and seasoning blends. Street-food influences from Mexico City to Lima are driving QSR menu innovation worldwide.",
    tags: ["Aji Amarillo", "Salsa Macha", "Passionfruit Chili", "Guava Glaze", "Pimenta Biquinho"],
  },
];

const trendCategories = [
  {
    icon: Leaf,
    title: "Plant-Based 2.0",
    description:
      "Beyond meat analogues — whole-vegetable center-plate concepts, mushroom-based umami boosters, and fermentation-derived proteins. Clean-label plant-based coatings that deliver the crunch and mouthfeel consumers expect without modified starches or methylcellulose.",
  },
  {
    icon: Flame,
    title: "Global Heat Evolution",
    description:
      "Consumers are moving beyond generic 'spicy' toward specific pepper varietals with origin stories. Calabrian chili, Kashmiri chili, and Aleppo pepper are the new premium heat sources. Layered heat — combining different chili profiles for depth — is replacing one-dimensional burn.",
  },
  {
    icon: Wheat,
    title: "Texture Innovation",
    description:
      "Crunch, crisp, and snap are becoming primary purchase drivers. Multi-texture coatings — combining panko, cracker meal, and extruded inclusions — create sensory experiences that differentiate products on crowded menus and shelves.",
  },
  {
    icon: Search,
    title: "Clean Label 3.0",
    description:
      "Beyond 'free-from' claims — consumers now demand recognizable ingredients they can picture in a home kitchen. Single-origin spices, named varietal peppers, and whole-grain inclusions communicate transparency and quality. Minimalist ingredient declarations are the new premium.",
  },
  {
    icon: Ship,
    title: "Street-Food Globalization",
    description:
      "Authentic street-food flavors — from Bangkok's night markets to Istanbul's bazaars — are being translated into scalable QSR and CPG formats. Regional sauces, spice blends, and marinade systems capture the soul of street food with the consistency of industrial production.",
  },
  {
    icon: Compass,
    title: "Regional Authenticity",
    description:
      "Consumers can distinguish between generic 'Asian' and specific regional cuisines. Hyper-regional positioning — Szechuan vs. Hunan, Oaxacan vs. Yucatecan, Calabrian vs. Sicilian — commands premium pricing and builds brand trust through specificity and storytelling.",
  },
];

const pipelineSteps = [
  {
    step: "01",
    icon: Eye,
    title: "Trend Spotting",
    description:
      "60+ country scout network monitors street food, fine dining, social media, and consumer behavior to identify early signals of emerging flavor movements.",
  },
  {
    step: "02",
    icon: BarChart4,
    title: "Data Validation",
    description:
      "Quantitative consumer research and purchase-intent studies validate which trends have commercial staying power versus passing fads — saving you costly missteps.",
  },
  {
    step: "03",
    icon: ChefHat,
    title: "Culinary Translation",
    description:
      "Our global chef network prototypes authentic flavor experiences, then adapts them for QSR, foodservice, and CPG applications — preserving the soul of the trend.",
  },
  {
    step: "04",
    icon: Scale,
    title: "Product Development",
    description:
      "R&D teams scale culinary prototypes into production-ready formulations with optimized cost, shelf life, and manufacturing compatibility.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Market Launch",
    description:
      "Launch-ready products with full documentation, nutritional panels, and regulatory compliance — timed to hit the market ahead of the trend curve.",
  },
];

const predictiveTrends = [
  {
    icon: Clock,
    year: "2026–2027",
    title: "Regenerative Flavors",
    description:
      "Ingredients tied to regenerative agriculture practices — heirloom grains, perennial legumes, and biodynamic spices — will signal environmental consciousness through flavor choices.",
  },
  {
    icon: Clock,
    year: "2026–2028",
    title: "AI-Co-Created Cuisine",
    description:
      "AI-driven flavor pairing algorithms will identify unexpected combinations that delight consumers. Human chefs and AI tools will co-create the next generation of craveable products.",
  },
  {
    icon: Clock,
    year: "2026–2027",
    title: "Mood-Functional Foods",
    description:
      "Adaptogenic herbs, nootropics, and calming botanicals (ashwagandha, lion's mane, lavender) will cross from supplements into mainstream seasoning blends, beverages, and coatings.",
  },
];

export default function CulinaryTrendsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <TrendingUp className="size-3.5" />
              60+ Country Intelligence Network
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Culinary{" "}
              <span className="text-gradient">Trends</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Anticipating Tomorrow&apos;s Flavors
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Taste doesn&apos;t stand still. Our global network of chefs, trend
              scouts, and consumer analysts tracks the pulse of flavor across
              every continent — translating street-food discoveries and
              consumer behavior into the products that define tomorrow&apos;s menus.
            </p>
          </div>
        </div>
      </section>

      {/* Trend-to-Product Pipeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Compass className="size-3.5" />
              From Observation to Innovation
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The Trend-to-Product{" "}
              <span className="text-gradient">Pipeline</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              How we convert cultural signals into commercial products before
              the competition even notices.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pipelineSteps.map((step, idx) => (
              <div
                key={step.step}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group relative"
              >
                <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-black">
                  {step.step}
                </span>
                <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <step.icon className="size-5 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Directions */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Flame className="size-3.5" />
              Where Flavor Is Heading
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Six <span className="text-gradient">Trend Directions</span>{" "}
              Shaping the Industry
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The macro forces driving consumer choice and product innovation
              across every market we serve.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendCategories.map((category) => (
              <div
                key={category.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                  <category.icon className="size-7 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Spotlights */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <MapPin className="size-3.5" />
              Global Lens, Local Insight
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Regional{" "}
              <span className="text-gradient">Trend Spotlights</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              What our trend scouts are tracking in key markets around the
              world — and what it means for your next product.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {trendRegions.map((region) => (
              <div
                key={region.region}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10">
                    <region.icon className="size-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {region.region}
                    </h3>
                    <p className="text-sm text-crimson font-medium">
                      {region.spotlight}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Trends */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Eye className="size-3.5" />
              Looking Ahead
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              2026+{" "}
              <span className="text-gradient">Predictions</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The emerging signals our trend intelligence team believes will
              reshape the food industry over the next 2–3 years.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {predictiveTrends.map((trend) => (
              <div
                key={trend.title}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group text-center"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-crimson/20 border border-gold/20">
                  <trend.icon className="size-8 text-gold" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-crimson/10 px-3 py-1 text-xs font-medium text-crimson">
                  {trend.year}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                  {trend.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street Food Inspirations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <Truck className="size-3.5" />
              Born on the Streets
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Street-Food{" "}
              <span className="text-gradient">Inspirations</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              The world&apos;s most exciting flavors don&apos;t start in Michelin-star
              kitchens — they start on the streets. We capture that energy.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                city: "Bangkok",
                dish: "Hat Yai Fried Chicken",
                insight:
                  "Turmeric-forward marinades with crispy shallot toppings and sweet chili dipping sauces — the blueprint for next-gen QSR fried chicken platforms across Asia and beyond.",
              },
              {
                city: "Mexico City",
                dish: "Tacos al Pastor",
                insight:
                  "Achiote-adobo marinades with pineapple sweetness and charred salsa roja. The al pastor flavor profile is translating to seasoning blends for proteins, snacks, and even plant-based applications.",
              },
              {
                city: "Istanbul",
                dish: "Balık Ekmek",
                insight:
                  "Grilled fish sandwiches with sumac-onion salad and pomegranate molasses. Mediterranean street food is inspiring clean-label seasoning systems that deliver brightness without heat.",
              },
            ].map((item) => (
              <div
                key={item.city}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10">
                  <Store className="size-6 text-crimson" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {item.city}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {item.dish}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {item.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-crimson/5 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.15_78/0.06),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Want to Know What&apos;s{" "}
                <span className="text-gradient">Coming Next</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Our trend intelligence team provides quarterly briefings to
                innovation partners. Get ahead of the curve with insights
                that drive product strategy.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Request a Trend Briefing
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/innovation"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Innovation Overview
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
