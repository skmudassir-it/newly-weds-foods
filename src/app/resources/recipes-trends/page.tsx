import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Leaf,
  Globe,
  Sparkles,
  UtensilsCrossed,
  Beef,
  Fish,
  Drumstick,
  Calendar,
  Sun,
  CloudSun,
  Wind,
  Snowflake,
  Flame,
  Heart,
  TrendingUp,
  Clock,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recipes & Trends — Inspiration for Your Next Innovation",
  description:
    "Explore Newly Weds Foods' curated collection of trend-forward recipes, seasonal inspirations, protein application ideas, and food trend insights. From plant-based innovations to global fusion flavors — fuel your next product launch.",
};

const seasonalRecipes = [
  {
    icon: Sun,
    season: "Spring",
    name: "Lemon-Herb Crusted Salmon",
    description:
      "Bright citrus and fresh dill coating with a crispy panko finish. Perfect for light, clean-label menus — pairs beautifully with asparagus and spring pea purée.",
    category: "Seafood",
    trend: "Clean Label",
  },
  {
    icon: Flame,
    season: "Summer",
    name: "Smoky Chipotle-Lime Chicken",
    description:
      "Charred chipotle and lime zest seasoning system with a fiery adobo glaze. Ideal for grilling season — delivers bold backyard flavor at QSR scale.",
    category: "Poultry",
    trend: "Global Fusion",
  },
  {
    icon: Wind,
    season: "Autumn",
    name: "Maple-Bourbon Glazed Pork Belly",
    description:
      "Rich maple sweetness balanced with bourbon-smoked paprika in a multi-layer coating. Captures the comfort-elevated trend — perfect for premium sandwich builds.",
    category: "Pork",
    trend: "Comfort Elevated",
  },
  {
    icon: Snowflake,
    season: "Winter",
    name: "Miso-Butter Roasted Root Vegetables",
    description:
      "Umami-rich miso and browned butter seasoning blend for plant-based center-plate dishes. Warming, indulgent, and entirely plant-based — hitting both comfort and clean-label targets.",
    category: "Plant-Based",
    trend: "Plant-Based 2.0",
  },
];

const trendChips = [
  { label: "Plant-Based", icon: Leaf },
  { label: "Global Fusion", icon: Globe },
  { label: "Clean Label", icon: Sparkles },
  { label: "Comfort Elevated", icon: Heart },
  { label: "Swicy Heat", icon: Flame },
  { label: "Functional Foods", icon: TrendingUp },
];

const proteinApplications = [
  {
    icon: Drumstick,
    protein: "Chicken",
    ideas: [
      {
        name: "Korean Gochujang Glaze",
        desc: "Sweet-spicy fermented chili coating with sesame crunch — the QSR darling of 2026.",
      },
      {
        name: "Nashville Hot & Honey",
        desc: "Cayenne-forward heat with a honey-drizzle finish. Swicy perfection for sandwiches and tenders.",
      },
      {
        name: "Lemon-Pepper Ranch Crust",
        desc: "Classic American flavor reimagined with buttermilk-ranch seasoning and cracked black pepper.",
      },
    ],
  },
  {
    icon: Beef,
    protein: "Beef",
    ideas: [
      {
        name: "Bulgogi-Seared Steak Rub",
        desc: "Korean BBQ-inspired seasoning with soy, garlic, and pear — caramelizes beautifully on flat-tops.",
      },
      {
        name: "Chimichurri Crusted Sirloin",
        desc: "Herb-forward Argentine coating with parsley, oregano, and red wine vinegar brightness.",
      },
      {
        name: "Cracked Peppercorn & Brandy",
        desc: "Premium steakhouse flavor in a scalable breading system — au poivre for the masses.",
      },
    ],
  },
  {
    icon: Fish,
    protein: "Seafood",
    ideas: [
      {
        name: "Yuzu-Kosho Tempura Batter",
        desc: "Japanese citrus and green chili in an ultra-light, crispy tempura coating — delicate but memorable.",
      },
      {
        name: "Cajun Blackening Seasoning",
        desc: "Bold Louisiana-style spice blend that forms a flavorful crust on any fish fillet.",
      },
      {
        name: "Coconut-Curry Crunch",
        desc: "Toasted coconut and Thai yellow curry in a panko breading — tropical escape in every bite.",
      },
    ],
  },
  {
    icon: Leaf,
    protein: "Plant-Based",
    ideas: [
      {
        name: "Mushroom Umami Crust",
        desc: "Porcini and shiitake powder with truffle salt — deep savory notes that satisfy meat cravings.",
      },
      {
        name: "Za'atar & Sumac Coating",
        desc: "Middle Eastern herb blend with tangy sumac — bright, complex, and entirely craveable.",
      },
      {
        name: "Smoky Paprika & Chickpea",
        desc: "Spanish-inspired pimentón with chickpea flour binder — clean-label crunch for plant proteins.",
      },
    ],
  },
];

const seasonalCalendar = [
  {
    icon: Sun,
    season: "Spring",
    months: "Mar – May",
    trends: ["Bright citrus & herbs", "Fresh pea & asparagus", "Floral botanicals", "Light tempura coatings"],
    color: "from-emerald-500/20 to-gold/10",
  },
  {
    icon: Flame,
    season: "Summer",
    months: "Jun – Aug",
    trends: ["Charred & smoky profiles", "Tropical fruit heat", "Grill-marked breadings", "Street-food sauces"],
    color: "from-crimson/20 to-orange-500/10",
  },
  {
    icon: Wind,
    season: "Autumn",
    months: "Sep – Nov",
    trends: ["Maple & bourbon", "Roasted root vegetables", "Warm spice blends", "Comfort-food coatings"],
    color: "from-amber-500/20 to-crimson/10",
  },
  {
    icon: Snowflake,
    season: "Winter",
    months: "Dec – Feb",
    trends: ["Miso & umami bombs", "Hearty braised flavors", "Festive spice blends", "Indulgent breading systems"],
    color: "from-blue-500/20 to-gold/10",
  },
];

export default function RecipesTrendsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <UtensilsCrossed className="size-3.5" />
              Culinary Inspiration Hub
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Recipes &amp;{" "}
              <span className="text-gradient">Trends</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
              Inspiration for Your Next Innovation
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
              Great products start with great ideas. Our global network of
              chefs, food scientists, and trend analysts brings you a
              constantly refreshed collection of on-trend recipes and
              application concepts — designed to spark your next breakthrough
              and accelerate your development pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Now — Trend Chips */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <TrendingUp className="size-3.5" />
              Trending Now
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The <span className="text-gradient">Forces</span> Shaping Menus
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Six macro trends driving consumer choice and product innovation
              across every category we serve.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {trendChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5 text-sm font-medium text-gold-light transition-all duration-200 hover:border-gold/50 hover:bg-gold/10 hover:shadow-md hover:shadow-gold/5 cursor-default"
              >
                <chip.icon className="size-4" />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Seasonal Recipes */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ChefHat className="size-3.5" />
              Seasonal Spotlight
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Featured <span className="text-gradient">Seasonal Recipes</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Four flavor concepts, each designed for a specific season —
              ready to inspire your next LTO or core menu addition.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalRecipes.map((recipe) => (
              <div
                key={recipe.name}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group flex flex-col"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <recipe.icon className="size-6 text-gold" />
                </div>
                <span className="mt-4 inline-block self-start rounded-full bg-crimson/10 px-2.5 py-0.5 text-xs font-medium text-crimson">
                  {recipe.season}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground leading-snug">
                  {recipe.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70 flex-1">
                  {recipe.description}
                </p>
                <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gold/10">
                  <span className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-xs text-gold-light">
                    {recipe.category}
                  </span>
                  <span className="rounded-full border border-crimson/20 bg-crimson/5 px-2.5 py-0.5 text-xs text-crimson">
                    {recipe.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Ideas by Protein */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <ShoppingCart className="size-3.5" />
              Application Ideas
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Inspiration by{" "}
              <span className="text-gradient">Protein Platform</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Flavor concepts designed for specific protein applications —
              plug-and-play inspiration for your R&D team.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {proteinApplications.map((platform) => (
              <div
                key={platform.protein}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-crimson/10 group-hover:bg-crimson/20 transition-colors">
                    <platform.icon className="size-6 text-crimson" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {platform.protein}
                  </h3>
                </div>
                <div className="space-y-4">
                  {platform.ideas.map((idea) => (
                    <div
                      key={idea.name}
                      className="rounded-xl border border-gold/10 bg-surface/50 p-4 transition-colors hover:border-gold/20"
                    >
                      <h4 className="text-sm font-semibold text-gold-light">
                        {idea.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                        {idea.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Trend Calendar */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-crimson">
              <Calendar className="size-3.5" />
              Year-Round Planning
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Seasonal Trend{" "}
              <span className="text-gradient">Calendar</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              What consumers crave changes with the seasons. Plan your
              innovation pipeline around the flavors that resonate most
              powerfully at each point in the calendar year.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasonalCalendar.map((season) => (
              <div
                key={season.season}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group text-center"
              >
                <div className={`mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${season.color} border border-gold/20`}>
                  <season.icon className="size-8 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {season.season}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {season.months}
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  {season.trends.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gold/10">
                <Clock className="size-8 text-gold" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                From Inspiration to Commercialization
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
                Every recipe concept you see here is backed by our full R&D
                and applications infrastructure. We don&apos;t just share
                ideas — we build them. Our team can take any concept from
                this page and develop it into a production-ready formulation
                with optimized cost, shelf life, and manufacturing
                compatibility. Inspiration meets execution.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold-light">
                <Sparkles className="size-4" />
                <span>Concept-to-commercialization in as little as 8 weeks</span>
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
                Ready to Bring a Concept{" "}
                <span className="text-gradient">to Life</span>?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
                Our culinary and R&D teams are ready to collaborate on your
                next product. Share your vision or challenge — we&apos;ll
                bring the trend-forward solutions.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                >
                  Start a Conversation
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/resources/taste-tech"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-gold-light transition-all hover:bg-gold/10"
                >
                  Explore Taste Tech University
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
