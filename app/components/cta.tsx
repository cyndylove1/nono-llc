"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./button";

const Cta = () => {
  return (
    <section className="relative w-full min-h-[400px] flex items-center overflow-hidden my-10 max-w-7xl mx-auto">
      {/* Background Image - Replace URL with your actual ship image path */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/assets/ship.png')` }}
      />

      {/* Black Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full h-full px-8 md:px-16 py-16 flex flex-col justify-between md:flex-row">
        {/* Bottom Left Headline */}
        <div className="self-end md:max-w-md">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Trustworthy and <br />
            Customized to <br />
            Your Needs.
          </motion.h2>
        </div>

        {/* Top Right Content */}
        <div className="md:text-right md:max-w-sm space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-2xl font-semibold mb-2">
              Service Consulting
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              If you need any advice or information about Nono-LLC and logistics
              services, Our Team members always ready to help you.
            </p>
          </motion.div>

          {/* Glassmorphism Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center mt-6"
          >
            <Button variant="primary" className="gap-2.5 w-full sm:w-auto">
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
