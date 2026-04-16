import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LUXE — Premium Product Showcase",
    template: "%s | LUXE",
  },
  description:
    "A curated collection of premium products. Discover quality craftsmanship and modern design.",
  keywords: ["products", "premium", "showcase", "design"],
  openGraph: {
    title: "LUXE — Premium Product Showcase",
    description: "A curated collection of premium products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain-overlay antialiased">
        {children}
      </body>
    </html>
  );
}