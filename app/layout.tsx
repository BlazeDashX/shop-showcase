import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}