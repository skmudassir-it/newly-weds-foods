import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Newly Weds Foods — Inspiring New Tastes",
    template: "%s | Newly Weds Foods",
  },
  description:
    "Newly Weds Foods is a global leader in food ingredient solutions — custom coatings, seasonings, sauces, and functional systems for the world's top food brands and foodservice operators.",
  keywords: [
    "food ingredients",
    "coatings",
    "batters",
    "breaders",
    "seasonings",
    "sauces",
    "functional ingredients",
    "food manufacturing",
    "Newly Weds Foods",
  ],
  authors: [{ name: "Newly Weds Foods" }],
  creator: "Newly Weds Foods",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Newly Weds Foods",
    title: "Newly Weds Foods — Inspiring New Tastes",
    description:
      "Global leader in food ingredient solutions — custom coatings, seasonings, sauces, and functional systems.",
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newly Weds Foods — Inspiring New Tastes",
    description:
      "Global leader in food ingredient solutions — custom coatings, seasonings, sauces, and functional systems.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
                --font-heading: 'Playfair Display', ui-serif, Georgia, serif;
                --font-mono: 'JetBrains Mono', ui-monospace, monospace;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `,
        }}
      />
      {children}
    </>
  );
}
