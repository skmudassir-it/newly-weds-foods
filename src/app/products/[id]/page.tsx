import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";

const categoryLabels: Record<string, string> = {
  coatings: "Coatings",
  seasonings: "Seasonings",
  sauces: "Sauces",
  functional: "Functional",
  croutons: "Croutons",
  packaging: "Packaging",
};

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — ${categoryLabels[product.category] || product.category}`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb / Back */}
      <section className="pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-gold transition-colors duration-200"
          >
            <ArrowLeft className="size-4" />
            All Products
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Badge */}
              <Badge
                variant="secondary"
                className="border-gold/20 text-gold-light/80 bg-gold/5 text-xs uppercase tracking-wider mb-4"
              >
                {categoryLabels[product.category] || product.category}
              </Badge>

              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Key Features
                </h2>
                <ul className="mt-6 space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Check className="size-3 text-gold" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 sticky top-24">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Interested in this product?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  Our team can provide detailed specifications, samples, and
                  formulation support tailored to your application.
                </p>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-center text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 transition-all duration-300"
                  >
                    Request Information
                  </Link>
                  <Link
                    href="/products"
                    className="block w-full rounded-xl border border-gold/30 bg-gold/5 px-6 py-3 text-center text-sm font-semibold text-gold-light hover:border-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    Browse All Products
                  </Link>
                </div>

                {/* Related product info */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-xs uppercase tracking-widest text-foreground/40 mb-3">
                    Category
                  </p>
                  <Link
                    href={`/products?category=${product.category}`}
                    className="text-sm text-gold-light hover:text-gold transition-colors"
                  >
                    {categoryLabels[product.category] || product.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
