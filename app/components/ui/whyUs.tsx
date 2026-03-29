"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../button";
import { items } from "../constant/constant";

export default function WhyUs() {
  return (
    <section className="bg-white py-24 md:px-6 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-px bg-slate-900"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
              WHY US
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight max-w-xl">
            Supply Chain Excellence&nbsp;
            <span className="text-purple-900 italic">Redefined.</span>
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col ${item.reverse ? "md:flex-col-reverse" : ""}`}
            >
              {/* Image Container */}
              <div className="relative md:h-[250px] h-[200px] w-full rounded-[1rem] overflow-hidden shadow-xl mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="h-full w-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-purple-900 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-300">
                    {item.id}
                  </span>
                  <h3 className="md:text-2xl text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex md:justify-center justify-start w-full">
          <Link href="/services">
            <Button
              variant="primary"
              className="gap-2.5 w-full sm:w-auto transition-colors"
            >
              <span>Our Services</span>
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
