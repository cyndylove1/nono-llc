"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BannerProps {
  title: string;
  subtitle?: string;
  description: string;
  bgImage: string;
  height?: string;
  breadcrumbs?: BreadcrumbItem[]; // New Prop
}

const Banner = ({
  title,
  subtitle,
  description,
  bgImage,
  height = "min-h-[600px]",
  breadcrumbs = [],
}: BannerProps) => {
  return (
    <section
      className={`relative w-full ${height} flex items-center overflow-hidden my-6 mx-auto shadow-2xl`}
    >
      {/* 1. Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* 2. Black Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10" />

      {/* 3. Content Layer */}
      <div className="relative z-20 w-full px-8 md:px-16 py-12 flex flex-col justify-center h-full">
        {/* Breadcrumbs Section */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Home size={14} />
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={14} className="text-slate-600" />
                <Link
                  href={crumb.href}
                  className={`transition-colors ${
                    idx === breadcrumbs.length - 1
                      ? "text-slate-300 font-medium"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block bg-green-600/20 backdrop-blur-sm border border-green-500/30 text-green-500 px-4 py-1.5 rounded-full font-bold tracking-widest uppercase text-sm mb-6"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-xl md:text-xl lg:text-3xl font-bold tracking-tighter mb-2"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-sm max-w-lg mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
