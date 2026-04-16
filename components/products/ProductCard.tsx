"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/mock-products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 5) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col"
    >
      {/* Image wrapper */}
      <div
        className="relative overflow-hidden rounded-sm aspect-[4/5]"
        style={{ background: "var(--gunmetal-light)" }}
      >
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm"
            style={{
              background: "rgba(20,25,32,0.75)",
              color: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Quick view overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-end p-4"
          style={{
            background:
              "linear-gradient(to top, rgba(20,25,32,0.85) 0%, transparent 50%)",
          }}
        >
          <Link
            href={`/product/${product.id}`}
            className="w-full font-mono text-xs tracking-widest uppercase py-2.5 rounded-sm text-center transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "var(--chartreuse)",
              color: "var(--gunmetal-dark)",
            }}
          >
            View Details
          </Link>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="pt-4 flex flex-col gap-1 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-display text-sm font-semibold leading-tight line-clamp-1 group-hover:text-white transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {product.title}
          </h3>
          <span
            className="font-mono text-sm font-medium shrink-0"
            style={{ color: "var(--chartreuse)" }}
          >
            {formatPrice(product.price)}
          </span>
        </div>

        <p
          className="font-body text-xs leading-relaxed line-clamp-2"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {product.description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-auto pt-3">
          <Link
            href={`/product/${product.id}`}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase transition-all duration-200 group/link"
            style={{ color: "var(--chartreuse)" }}
          >
            <span>Explore</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}