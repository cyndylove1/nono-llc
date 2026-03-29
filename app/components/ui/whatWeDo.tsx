"use client";
import { services } from "../constant/constant";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 lg:py-32 md:mx-6 mx-4">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-px bg-slate-900"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
              What We Do
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight max-w-xl">
            Reliable Solutions for&nbsp;
            <span className="text-purple-900 italic">Global Supply Chains</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl text-md leading-relaxed">
            From factory sourcing in Asia to last-mile delivery across Africa
            and the Americas, we manage every milestone of your cargo's journey
            with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white p-4 rounded-2xl border-[1px] border-gray-100 shadow-xl shadow-slate-200/40 hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute -right-8 -top-8 h-32 w-32 bg-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-900 group-hover:bg-purple-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
