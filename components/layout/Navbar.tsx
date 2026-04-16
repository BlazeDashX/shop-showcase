"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Collection", href: "/#products" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 border-b border-white/5"
            : "py-5"
        )}
        style={{
          background: scrolled
            ? "rgba(20, 25, 32, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span
              className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-mono font-bold"
              style={{
                background: "var(--chartreuse)",
                color: "var(--gunmetal-dark)",
              }}
            >
              LX
            </span>
            <span
              className="font-display text-lg font-bold tracking-tight"
              style={{ color: "var(--white)" }}
            >
              LUXE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group",
                  pathname === link.href
                    ? "text-chartreuse"
                    : "text-white/60 hover:text-white"
                )}
                style={
                  pathname === link.href
                    ? { color: "var(--chartreuse)" }
                    : {}
                }
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--chartreuse)" }}
                />
              </Link>
            ))}

            <Link
              href="/#products"
              className="font-mono text-xs font-medium px-4 py-2 rounded-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "var(--chartreuse)",
                color: "var(--gunmetal-dark)",
              }}
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px"
              style={{ background: "var(--white)" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px"
              style={{ background: "var(--white)" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px"
              style={{ background: "var(--white)" }}
            />
          </button>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 md:hidden"
            style={{ background: "var(--gunmetal-dark)" }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl font-bold"
                    style={{ color: "var(--white)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.35 }}
                className="pt-4"
              >
                <Link
                  href="/#products"
                  className="inline-block font-mono text-sm font-medium px-6 py-3 rounded-sm tracking-widest uppercase"
                  style={{
                    background: "var(--chartreuse)",
                    color: "var(--gunmetal-dark)",
                  }}
                >
                  Shop Now
                </Link>
              </motion.div>
            </nav>

            <div
              className="absolute bottom-12 left-6 font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--gunmetal-lighter)" }}
            >
              Premium Collection © 2025
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}