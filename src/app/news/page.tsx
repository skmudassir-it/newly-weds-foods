import type { Metadata } from "next";
import { newsArticles } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Trends — Newly Weds Foods",
  description:
    "Stay updated with the latest news, product innovations, sustainability updates, and industry events from Newly Weds Foods.",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.15_78/0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-light">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              Latest Updates
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              News &{" "}
              <span className="text-gradient">Trends</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              The latest from Newly Weds Foods — product innovations,
              sustainability milestones, global expansions, and industry
              event coverage.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {newsArticles.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-foreground/50">
                No news articles at this time. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group block"
                >
                  <article className="glass rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-xl group-hover:shadow-gold/10 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video bg-surface/50 flex items-center justify-center">
                      <div className="text-6xl">📰</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="secondary"
                          className="border-gold/20 text-gold-light/80 bg-gold/5 text-[10px] uppercase tracking-wider"
                        >
                          {article.category}
                        </Badge>
                        <span className="flex items-center gap-1.5 text-xs text-foreground/40">
                          <Calendar className="size-3" />
                          {formatDate(article.date)}
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300">
                        {article.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-foreground/60 line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:text-gold-light transition-colors duration-200">
                        Read More
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
