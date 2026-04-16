"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/lib/mock-products";

/* ─── Hero background grid ─── */
function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.06 }}
      aria-hidden
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ─── Marquee ticker ─── */
const tickerItems = [
  "Premium Quality",
  "Crafted with Precision",
  "Minimal by Design",
  "Built to Last",
  "Curated Collection",
];

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div
      className="overflow-hidden border-y py-3"
      style={{
        borderColor: "var(--gunmetal-lighter)",
        background: "var(--gunmetal-dark)",
      }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-mono text-[11px] tracking-widest uppercase shrink-0"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {item}
            <span style={{ color: "var(--chartreuse)" }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--gunmetal-dark)" }}
    >
      <GridBackground />

      {/* Chartreuse glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "var(--chartreuse)",
          opacity: 0.04,
          filter: "blur(120px)",
          top: "10%",
          right: "-10%",
        }}
        aria-hidden
      />

      <motion.div style={{ y, opacity }}>
        <Container className="pt-32 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="h-px w-10"
                style={{ background: "var(--chartreuse)" }}
              />
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--chartreuse)" }}
              >
                2025 Collection
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                color: "var(--white)",
              }}
            >
              Objects
              <br />
              <span style={{ color: "var(--chartreuse)" }}>Worth</span>
              <br />
              Owning.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-8 font-body text-base md:text-lg max-w-md leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Ten carefully selected products. Each one chosen for its material
              honesty, functional beauty, and enduring quality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/#products"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--chartreuse)",
                  color: "var(--gunmetal-dark)",
                }}
              >
                Shop Collection
              </Link>
              <Link
                href="/#products"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm border transition-all duration-200 hover:border-white/40"
                style={{
                  borderColor: "var(--gunmetal-lighter)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Browse All →
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t flex items-center gap-12 flex-wrap"
              style={{ borderColor: "var(--gunmetal-lighter)" }}
            >
              {[
                { value: "10", label: "Curated Products" },
                { value: "100%", label: "Premium Materials" },
                { value: "∞", label: "Free Returns" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: "var(--white)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--chartreuse), transparent)",
          }}
        />
        <span
          className="font-mono text-[9px] tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

/* ─── Products Section ─── */
function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 md:py-32"
      style={{ background: "var(--gunmetal-dark)" }}
    >
      <Container>
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--chartreuse)" }}
            >
              The Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--white)" }}
            >
              All Products
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {mockProducts.length} items
          </motion.p>
        </div>

        {/* Grid — 5 columns on large, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {mockProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProductsSection />
    </>
  );
}