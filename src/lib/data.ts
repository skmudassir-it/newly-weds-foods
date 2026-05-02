import type {
  NavItem,
  Product,
  TimelineEvent,
  StatItem,
  JobListing,
  NewsArticle,
  TrendItem,
} from "./types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface SecondaryNavItem {
  label: string;
  href?: string;
  icon?: string;
}

export const secondaryNavItems: SecondaryNavItem[] = [
  { label: "Our Global View", href: "/global-view", icon: "Globe" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const regions: { label: string; href: string }[] = [
  { label: "North America", href: "/regions/north-america" },
  { label: "Europe", href: "/regions/europe" },
  { label: "Asia-Pacific", href: "/regions/asia-pacific" },
  { label: "Latin America", href: "/regions/latin-america" },
  { label: "Middle East & Africa", href: "/regions/mea" },
];

export const primaryNavItems: NavItem[] = [
  {
    label: "Company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "History", href: "/company/history" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Quality & Safety", href: "/company/quality-safety" },
      { label: "Sustainability", href: "/company/sustainability" },
    ],
  },
  {
    label: "Innovation",
    children: [
      { label: "R&D", href: "/innovation/research-development" },
      { label: "Culinary Trends", href: "/innovation/culinary-trends" },
      { label: "Global Innovation", href: "/innovation/global-innovation" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Coatings", href: "/products/coatings" },
      { label: "Seasonings", href: "/products/seasonings" },
      { label: "Sauces", href: "/products/sauces" },
      { label: "Functional", href: "/products/functional" },
      { label: "Croutons", href: "/products/croutons" },
      { label: "Custom", href: "/products/custom" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Recipes & Trends", href: "/resources/recipes-trends" },
      { label: "Taste Tech", href: "/resources/taste-tech" },
      { label: "Consumer Products", href: "/resources/consumer-products" },
    ],
  },
];

export const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Coatings & Batter Systems", href: "/products/coatings" },
      { label: "Seasonings & Spices", href: "/products/seasonings" },
      { label: "Sauces & Marinades", href: "/products/sauces" },
      { label: "Functional Ingredients", href: "/products/functional" },
      { label: "Croutons & Stuffing", href: "/products/croutons" },
      { label: "Packaging Solutions", href: "/products/packaging" },
    ],
  },
  {
    label: "Capabilities",
    children: [
      { label: "Custom Formulation", href: "/capabilities/custom-formulation" },
      { label: "R&D Innovation", href: "/capabilities/research-development" },
      { label: "Global Sourcing", href: "/capabilities/global-sourcing" },
      { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      { label: "Culinary Expertise", href: "/capabilities/culinary" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "News & Trends", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── Coatings ──
  {
    id: "coat-batter",
    name: "Adhesion Batters",
    category: "coatings",
    description:
      "High-performance adhesion batters engineered for consistent pickup, superior cling, and exceptional texture across proteins, vegetables, and alternative proteins. Available in traditional flour-based, tempura-style, and gluten-free formulations.",
    features: [
      "Superior adhesion and pickup control",
      "Freeze-thaw stable formulations",
      "Available gluten-free and clean-label",
      "Custom viscosity profiles for any application",
    ],
    image: "/images/products/batters.jpg",
    icon: "Flame",
  },
  {
    id: "coat-breader",
    name: "Japanese-Style Panko Breaders",
    category: "coatings",
    description:
      "Authentic Japanese-style panko bread crumbs delivering distinctive crispy texture, excellent plate coverage, and extended hold times. The industry-standard breader for premium fried applications worldwide.",
    features: [
      "Hand-crafted crumb structure for maximum crispness",
      "Outstanding plate coverage and visual appeal",
      "Extended hold time under heat lamps",
      "Custom crumb sizes and colors available",
    ],
    image: "/images/products/panko.jpg",
    icon: "Croissant",
  },
  {
    id: "coat-gluten-free",
    name: "Gluten-Free Coating Systems",
    category: "coatings",
    description:
      "Complete gluten-free batter and breader systems that deliver the taste, texture, and appearance consumers expect — without compromise. Made in dedicated facilities with rigorous allergen control.",
    features: [
      "Certified gluten-free by GFCO",
      "Crispy texture comparable to wheat-based coatings",
      "Produced in dedicated gluten-free facilities",
      "Full flavor development without off-notes",
    ],
    image: "/images/products/gluten-free.jpg",
    icon: "WheatOff",
  },
  {
    id: "coat-tempura",
    name: "Tempura & Delicate Coatings",
    category: "coatings",
    description:
      "Light, airy tempura-style coatings for seafood, vegetables, and specialty appetizers. Engineered for delicate, lacy textures that enhance — rather than mask — the natural character of the substrate.",
    features: [
      "Ultra-light, crispy texture profile",
      "Designed for seafood and vegetable applications",
      "Hot-water and cold-water mixing options",
      "Custom leavening systems for unique crunch",
    ],
    image: "/images/products/tempura.jpg",
    icon: "Waves",
  },
  // ── Seasonings ──
  {
    id: "season-dry",
    name: "Dry Seasoning Blends",
    category: "seasonings",
    description:
      "Custom dry seasoning systems for snacks, meats, poultry, seafood, and plant-based proteins. Tailored flavor profiles from regional classics to global street-food inspirations, developed in our ISO 17025-accredited labs.",
    features: [
      "Fully custom flavor profiling and matching",
      "Heat-stable and freeze-thaw stable",
      "Clean-label, organic, and non-GMO options",
      "Scale-up from gram batch to full production",
    ],
    image: "/images/products/dry-seasonings.jpg",
    icon: "FlaskConical",
  },
  {
    id: "season-marinade",
    name: "Marinades & Brines",
    category: "seasonings",
    description:
      "Functional marinades and brines that deliver flavor penetration, moisture retention, and yield improvement. Dry and liquid formats for vacuum tumbling, injection, or immersion applications.",
    features: [
      "Improved cook yields of 8–15%",
      "Consistent flavor distribution throughout",
      "Phosphate-free and natural options",
      "Compatible with all major processing equipment",
    ],
    image: "/images/products/marinades.jpg",
    icon: "Droplets",
  },
  {
    id: "season-rubs",
    name: "Dry Rubs & Topical Seasonings",
    category: "seasonings",
    description:
      "Visual, aromatic dry rubs and topical seasonings that create striking surface appearance and bold first-bite flavor. Designed for smoked meats, roasted proteins, and snack applications.",
    features: [
      "High-impact visual appearance with herbs and spices",
      "Heat-tolerant — no scorching on the grill or in the fryer",
      "Custom particle sizes for optimal adhesion",
      "Ethnic and regional profiles: Cajun, Korean, Mexican, Mediterranean",
    ],
    image: "/images/products/rubs.jpg",
    icon: "Atom",
  },
  // ── Sauces ──
  {
    id: "sauce-wing",
    name: "Wing & Coating Sauces",
    category: "sauces",
    description:
      "Full-bodied wing sauces, glazes, and finishing sauces engineered for commercial foodservice and CPG applications. Superior cling, heat stability, and vibrant color — from classic Buffalo to global fusion flavors.",
    features: [
      "Excellent cling and coverage on fried and baked proteins",
      "Heat-and-hold stability for foodservice applications",
      "Over 200 documented flavor profiles available",
      "Custom viscosity, color, and heat levels",
    ],
    image: "/images/products/wing-sauces.jpg",
    icon: "Flame",
  },
  {
    id: "sauce-glaze",
    name: "Glazes & Finishing Sauces",
    category: "sauces",
    description:
      "High-gloss glazes and finishing sauces that deliver visual impact and flavor punch. Designed for post-cook application on proteins, vegetables, and plant-based alternatives.",
    features: [
      "High-gloss, photo-ready appearance",
      "Cling without dripping or pooling",
      "Sugar-free and reduced-sugar formulations",
      "Sweet-heat, savory, and tangy profiles",
    ],
    image: "/images/products/glazes.jpg",
    icon: "Sparkles",
  },
  {
    id: "sauce-dip",
    name: "Dipping & Specialty Sauces",
    category: "sauces",
    description:
      "A comprehensive portfolio of dipping sauces, aiolis, and specialty condiments for foodservice and retail. Developed with culinary-forward techniques and globally inspired flavor profiles.",
    features: [
      "Clean-label and chef-inspired recipes",
      "Shelf-stable, refrigerated, and frozen formats",
      "Portion-control cups, pouches, and bulk packaging",
      "Trend-forward profiles: gochujang, harissa, truffle, yuzu",
    ],
    image: "/images/products/dipping-sauces.jpg",
    icon: "Soup",
  },
  // ── Functional ──
  {
    id: "func-starch",
    name: "Functional Starches & Binders",
    category: "functional",
    description:
      "Advanced functional starch systems for moisture management, texture optimization, and process efficiency. Clean-label native starches and modified starches for every application requirement.",
    features: [
      "Water-binding for improved cook yields",
      "Texture enhancement throughout shelf life",
      "Clean-label tapioca, potato, and rice starches",
      "Freeze-thaw and retort stability",
    ],
    image: "/images/products/starches.jpg",
    icon: "Microscope",
  },
  {
    id: "func-shelf",
    name: "Shelf-Life Extension Systems",
    category: "functional",
    description:
      "Natural shelf-life extension solutions that maintain freshness, texture, and flavor while meeting clean-label demands. Oxidation management, moisture control, and microbial protection.",
    features: [
      "Natural antioxidants — rosemary, green tea, acerola",
      "Extends shelf life by 30–90+ days",
      "Clean-label and consumer-friendly ingredients",
      "Validated across protein, bakery, and snack matrices",
    ],
    image: "/images/products/shelf-life.jpg",
    icon: "ShieldCheck",
  },
  {
    id: "func-texture",
    name: "Texture & Mouthfeel Systems",
    category: "functional",
    description:
      "Proprietary texture systems that optimize mouthfeel, body, and structure in sauces, soups, dressings, and dairy alternatives. From rich indulgence to light and refreshing.",
    features: [
      "Fat-mimetic systems for reduced-calorie products",
      "Viscosity control without gumminess",
      "Plant-based dairy alternative optimization",
      "Process-stable across hot-fill, cold-fill, and aseptic",
    ],
    image: "/images/products/texture.jpg",
    icon: "CookingPot",
  },
  // ── Croutons ──
  {
    id: "crouton-classic",
    name: "Classic Croutons",
    category: "croutons",
    description:
      "Time-tested, perfectly seasoned croutons that deliver the crunch and flavor profiles foodservice operators and CPG brands demand. Available in a full range of cuts, sizes, and flavors.",
    features: [
      "Consistent cut size for uniform coverage",
      "Extended shelf-life crunch retention",
      "Classic flavors: Garlic & Herb, Caesar, Parmesan, Sea Salt",
      "Bulk, foodservice, and retail packaging options",
    ],
    image: "/images/products/croutons-classic.jpg",
    icon: "Bread",
  },
  {
    id: "crouton-artisan",
    name: "Artisan Croutons",
    category: "croutons",
    description:
      "Premium, handcrafted-style artisan croutons made with specialty breads, visible herbs, and whole spices. Designed for premium salad programs, soup toppers, and gourmet snack mixes.",
    features: [
      "Made with sourdough, rye, and whole-grain breads",
      "Large, rustic cuts with visible seasoning pieces",
      "Small-batch aesthetic at commercial scale",
      "Custom oil blends: olive oil, butter, avocado oil",
    ],
    image: "/images/products/croutons-artisan.jpg",
    icon: "Bread",
  },
  {
    id: "crouton-stuffing",
    name: "Stuffing Crumb & Bread Base",
    category: "croutons",
    description:
      "Custom-milled stuffing crumb and bread base for holiday stuffing mixes, casserole toppings, and recipe components. Engineered particle size distribution for optimal liquid absorption.",
    features: [
      "Precision particle size for recipe consistency",
      "Butter-toasted and seasoned options",
      "Absorptive capacity tailored to your formula",
      "Private-label and co-branded programs",
    ],
    image: "/images/products/stuffing.jpg",
    icon: "ChefHat",
  },
  // ── Packaging ──
  {
    id: "pack-bulk",
    name: "Bulk Industrial Packaging",
    category: "packaging",
    description:
      "Efficient bulk packaging solutions for high-volume food manufacturing: totes, super-sacks, drums, and bulk bins. Optimized for seamless integration into your production line.",
    features: [
      "50-lb bags, 2,000-lb super-sacks, and custom formats",
      "Easy-open and recloseable options",
      "Pallet-optimized dimensions for warehouse efficiency",
      "Bar-coded and RFID-tagged for inventory management",
    ],
    image: "/images/products/bulk-packaging.jpg",
    icon: "Package",
  },
  {
    id: "pack-portion",
    name: "Portion-Control Pouches",
    category: "packaging",
    description:
      "Pre-portioned pouches and sachets for foodservice, QSR, and meal kit applications. Precise, consistent portions that reduce waste and simplify operator training.",
    features: [
      "Precision fill weights from 0.5 oz to 48 oz",
      "Tear-notch and easy-pour features",
      "Custom-printed or clear film options",
      "Nitrogen-flushed for extended shelf life",
    ],
    image: "/images/products/portion-pouches.jpg",
    icon: "PackageOpen",
  },
  {
    id: "pack-shaker",
    name: "Retail Shaker Bottles & Jars",
    category: "packaging",
    description:
      "Consumer-ready packaging in shaker bottles, glass jars, and PET containers. Complete turnkey retail programs from formulation to shelf — private label and branded.",
    features: [
      "Full turnkey: formula, fill, label, pack, ship",
      "Flip-top shaker caps, grinder tops, and pour spouts",
      "Shelf-ready display trays in retailer planogram formats",
      "Graphic design support and regulatory label compliance",
    ],
    image: "/images/products/shaker-bottles.jpg",
    icon: "Container",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1932",
    title: "Founded in Chicago",
    description:
      "Paul M. Angell founds Newly Weds Foods in Chicago, Illinois, pioneering the commercial production of cake decorating supplies and ice cream coatings. The company's name reflects its early focus on the wedding cake and celebration foods market.",
  },
  {
    year: "1940s",
    title: "Wartime Innovation & Growth",
    description:
      "During World War II, Newly Weds pivots to support the war effort, supplying batters and breading to military food programs. This era establishes the company's expertise in high-volume, consistent-quality food ingredient manufacturing.",
  },
  {
    year: "1950s",
    title: "Post-War Expansion into Foodservice",
    description:
      "The post-war economic boom drives rapid growth in the restaurant and foodservice industry. Newly Weds expands its batter and breader product lines, becoming a trusted supplier to the emerging quick-service restaurant (QSR) sector.",
  },
  {
    year: "1960s",
    title: "Breader & Batter Innovation Leadership",
    description:
      "Newly Weds invests heavily in R&D, developing proprietary coating technologies that become industry standards. The company introduces Japanese-style panko bread crumbs to the North American market, transforming fried food texture expectations.",
  },
  {
    year: "1970s",
    title: "International Expansion & Canadian Merger",
    description:
      "Newly Weds merges with Newly Weds Foods of Canada, expanding its North American footprint. The company opens its first dedicated seasoning manufacturing facility, launching a new era of flavor innovation.",
  },
  {
    year: "1980s",
    title: "Seasonings, Sauces & Diversification",
    description:
      "The product portfolio expands dramatically with the addition of dry seasoning blends, marinades, and sauces. Newly Weds becomes a total solutions provider — coatings, seasonings, and functional ingredients under one roof.",
  },
  {
    year: "1990s",
    title: "Asia-Pacific Expansion",
    description:
      "Newly Weds opens manufacturing facilities in Thailand, China, and Australia, establishing a strong presence in the fast-growing Asia-Pacific food market. Global seasoning capabilities are developed to serve regional taste preferences.",
  },
  {
    year: "2000s–Today",
    title: "Innovation for a Changing World",
    description:
      "The company accelerates clean-label, gluten-free, and plant-based product development. With over a dozen global facilities, Newly Weds Foods serves customers in over 60 countries, remaining family-owned and true to its founding mission: 'Inspiring New Tastes.'",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  {
    label: "Years of Innovation",
    value: "90+",
    icon: "Calendar",
  },
  {
    label: "Global Manufacturing Facilities",
    value: "30+",
    icon: "Factory",
  },
  {
    label: "Countries Served",
    value: "60+",
    icon: "Globe",
  },
  {
    label: "R&D & Culinary Centers",
    value: "12",
    icon: "FlaskConical",
  },
  {
    label: "Custom Formulations Annually",
    value: "10,000+",
    icon: "Beaker",
  },
  {
    label: "Team Members Worldwide",
    value: "3,000+",
    icon: "Users",
  },
];

// ─── Job Listings ─────────────────────────────────────────────────────────────

export const jobListings: JobListing[] = [
  {
    id: "job-rd",
    title: "Senior Food Scientist — Coatings & Batters",
    department: "Research & Development",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Lead new product development for batter and breader systems across protein, vegetable, and plant-based applications. Drive innovation from benchtop concept through scale-up and commercialization in a fast-paced, collaborative R&D environment.",
  },
  {
    id: "job-seasoning",
    title: "Flavor Chemist — Savory Applications",
    department: "Research & Development",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Develop custom dry seasoning blends, marinades, and topical systems for global QSR and CPG customers. Strong GC-MS and flavor-matching expertise required. Collaborate with culinary and applications teams to deliver winning flavor profiles.",
  },
  {
    id: "job-qa",
    title: "Quality Assurance Manager",
    department: "Quality & Food Safety",
    location: "Guelph, ON, Canada",
    type: "Full-time",
    description:
      "Oversee all aspects of plant QA and food safety programs including HACCP, SQF, and BRC compliance. Lead a team of QA technicians and drive continuous improvement in a high-volume manufacturing environment producing over 5,000 SKUs.",
  },
  {
    id: "job-sales",
    title: "Regional Sales Director — Southeast Asia",
    department: "Sales & Business Development",
    location: "Bangkok, Thailand",
    type: "Full-time",
    description:
      "Lead sales strategy and customer relationships across the Southeast Asian market. Develop new business in QSR, foodservice, and CPG channels. Deep knowledge of regional flavor profiles and food manufacturing required. 40% travel.",
  },
];

// ─── News Articles ────────────────────────────────────────────────────────────

export const newsArticles: NewsArticle[] = [
  {
    id: "news-plant-based",
    title: "Newly Weds Foods Launches Next-Gen Plant-Based Coating Systems",
    excerpt:
      "Responding to surging demand in the alternative protein market, Newly Weds Foods introduces a complete portfolio of plant-based coating systems that deliver the crunch, color, and flavor consumers expect — without animal-derived ingredients.",
    date: "2025-11-15",
    category: "Product Innovation",
    image: "/images/news/plant-based-coatings.jpg",
    slug: "next-gen-plant-based-coating-systems",
  },
  {
    id: "news-sustainability",
    title: "Sustainability Report: Reducing Water Usage by 35% Across Global Facilities",
    excerpt:
      "Newly Weds Foods publishes its annual sustainability report, highlighting a 35% reduction in water usage and a 28% decrease in Scope 1 and 2 emissions across its global manufacturing network since 2020.",
    date: "2025-09-01",
    category: "Sustainability",
    image: "/images/news/sustainability.jpg",
    slug: "sustainability-water-reduction-2025",
  },
  {
    id: "news-thailand",
    title: "Newly Weds Foods Opens Expanded Culinary Innovation Center in Thailand",
    excerpt:
      "The newly expanded 25,000 sq. ft. culinary center in Bangkok features state-of-the-art application kitchens, sensory evaluation suites, and a dedicated team of regional chefs focused on Southeast Asian flavor innovation.",
    date: "2025-05-20",
    category: "Expansion",
    image: "/images/news/thailand-center.jpg",
    slug: "culinary-innovation-center-thailand",
  },
  {
    id: "news-snack-expo",
    title: "Newly Weds Foods Showcases Global Snack Seasoning Trends at SNAXPO 2025",
    excerpt:
      "At SNAXPO 2025, Newly Weds Foods unveiled four trend-forward snack seasoning collections — Global Street Food, Umami Explosion, Sweet Heat Fusion, and Better-for-You Botanicals — designed to capture the next wave of snacking innovation.",
    date: "2025-04-10",
    category: "Events",
    image: "/images/news/snaxpo-2025.jpg",
    slug: "snack-seasoning-trends-snaxpo-2025",
  },
];

// ─── Trend Items ──────────────────────────────────────────────────────────────

export const trendItems: TrendItem[] = [
  {
    id: "trend-plant-based",
    title: "The Plant-Based Coating Revolution",
    description:
      "Alternative proteins demand entirely new coating architectures. Newly Weds has developed methylcellulose-free systems that deliver authentic crunch, adhesion, and juiciness — redefining what's possible in plant-based fried foods.",
    image: "/images/trends/plant-based.jpg",
    category: "Plant-Based",
    date: "2025-03-15",
  },
  {
    id: "trend-global-flavors",
    title: "Borderless Flavor: The Rise of Global Fusion",
    description:
      "Korean gochujang meets Southern barbecue. Mexican tajín influences Thai street food. Consumers crave bold, cross-cultural flavor mashups, and Newly Weds' culinary team is leading the charge with authentic, scalable seasoning systems.",
    image: "/images/trends/global-fusion.jpg",
    category: "Flavor Trends",
    date: "2025-01-28",
  },
  {
    id: "trend-clean-label",
    title: "Clean Label 3.0: Beyond the Buzzwords",
    description:
      "Today's consumers scrutinize ingredient lists like never before. Newly Weds' clean-label portfolio eliminates artificial flavors, colors, and preservatives while maintaining the taste, texture, and shelf life that brands require.",
    image: "/images/trends/clean-label.jpg",
    category: "Clean Label",
    date: "2024-11-10",
  },
  {
    id: "trend-air-fryer",
    title: "Air Fryer-Optimized Coatings: The Home Kitchen Shift",
    description:
      "With over 60% of US households now owning an air fryer, Newly Weds has engineered a new class of retail and foodservice coatings specifically optimized for convection and air-fryer cooking — delivering deep-fried crispness without the oil.",
    image: "/images/trends/air-fryer.jpg",
    category: "Consumer Tech",
    date: "2024-09-05",
  },
];

// ─── Region Locations ─────────────────────────────────────────────────────────

export interface RegionLocation {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  type: "headquarters" | "manufacturing" | "culinary-center" | "sales-office";
  region: string;
  coordinates: { lat: number; lng: number };
}

export const regionLocations: RegionLocation[] = [
  {
    id: "loc-chicago",
    name: "Global Headquarters & Innovation Center",
    country: "United States",
    city: "Chicago, Illinois",
    address: "4140 W. 56th Street, Chicago, IL 60632",
    type: "headquarters",
    region: "North America",
    coordinates: { lat: 41.7937, lng: -87.7271 },
  },
  {
    id: "loc-guelph",
    name: "Newly Weds Foods Canada",
    country: "Canada",
    city: "Guelph, Ontario",
    address: "150 Silvercreek Parkway North, Guelph, ON N1H 3T2",
    type: "manufacturing",
    region: "North America",
    coordinates: { lat: 43.5461, lng: -80.2589 },
  },
  {
    id: "loc-uk",
    name: "Newly Weds Foods UK — Corby",
    country: "United Kingdom",
    city: "Corby, Northamptonshire",
    address: "Earlstrees Industrial Estate, Corby, Northants NN17 4AZ",
    type: "manufacturing",
    region: "Europe",
    coordinates: { lat: 52.4862, lng: -0.6884 },
  },
  {
    id: "loc-china",
    name: "Newly Weds Foods China",
    country: "China",
    city: "Shanghai",
    address: "No. 88 Yindu Road, Xinzhuang Industrial Zone, Shanghai 201108",
    type: "manufacturing",
    region: "Asia-Pacific",
    coordinates: { lat: 31.1053, lng: 121.3701 },
  },
  {
    id: "loc-thailand",
    name: "Newly Weds Foods Thailand — Asia Culinary Center",
    country: "Thailand",
    city: "Bangkok",
    address: "700/472 Moo 7, Bangna-Trad Road, Mueang Chonburi, Chonburi 20000",
    type: "culinary-center",
    region: "Asia-Pacific",
    coordinates: { lat: 13.3611, lng: 100.9847 },
  },
  {
    id: "loc-australia",
    name: "Newly Weds Foods Australia",
    country: "Australia",
    city: "Sydney, New South Wales",
    address: "12-14 Millennium Court, Prestons, NSW 2170",
    type: "manufacturing",
    region: "Asia-Pacific",
    coordinates: { lat: -33.9328, lng: 150.8812 },
  },
  {
    id: "loc-new-zealand",
    name: "Newly Weds Foods New Zealand",
    country: "New Zealand",
    city: "Auckland",
    address: "20 Ha Crescent, Wiri, Auckland 2104",
    type: "manufacturing",
    region: "Asia-Pacific",
    coordinates: { lat: -36.9983, lng: 174.8667 },
  },
  {
    id: "loc-india",
    name: "Newly Weds Foods India",
    country: "India",
    city: "Mumbai, Maharashtra",
    address: "Plot No. 45, MIDC Industrial Area, Taloja, Navi Mumbai 410208",
    type: "manufacturing",
    region: "Asia-Pacific",
    coordinates: { lat: 19.0354, lng: 73.0942 },
  },
];
