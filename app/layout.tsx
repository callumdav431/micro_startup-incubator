import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: "Micro-Startup Incubator | 6-week pilot for students",
  description:
    "A 6-week pilot helping students launch £0–£500 micro-startups with practical support, ethical sales skills, and measurable outcomes.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/programme", label: "Programme" },
  { href: "/apply", label: "Apply" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen bg-background text-foreground antialiased
          dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_45%)]
        "
      >
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4">
              <a href="/" className="font-semibold whitespace-nowrap heading">
                Micro-Startup Incubator
              </a>

              <nav className="flex flex-1 items-center gap-4 text-sm">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className="muted hover:text-foreground">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
