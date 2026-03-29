"use client";
import { motion } from "framer-motion"; 
import Image from "next/image";
import Button from "../button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen bg-white mt-10">
        <section className="relative md:px-6 px-4 pt-16 lg:px-12 lg:pt-24 overflow-hidden">
          <div className="absolute top-0 right-0 md:right-[10%] h-[400px] w-[400px] bg-purple-50/80 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative md:col-span-12 flex flex-col items-center text-center z-10"
              >
                {/* Content Block Badge */}
                <div className="mb-8 flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-[12px] font-semibold text-purple-800 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Connecting Supply Chains Across Oceans
                </div>

                <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl">
                  Unlocking Global Markets with&nbsp;
                  <span className="text-purple-900 italic md:leading-[5rem]">
                    Predictable Supply Chains
                  </span>
                </h2>

                <p className="mb-12 text-sm md:text-md text-gray-600 max-w-2xl pt-6 leading-relaxed">
                  We simplify logistics for businesses across Africa and the
                  Americas. By connecting you directly with trusted
                  manufacturers in China and India, we ensure seamless sourcing,
                  predictable delivery, and stress-free customs.
                </p>

                {/* Buttons */}
                <div className="mb-16 flex items-center justify-center gap-4 w-full sm:w-auto">
                  <Link href="/services">
                    <Button
                      variant="primary"
                      className="gap-2.5 w-full sm:w-auto"
                    >
                      <span>Explore Services</span>
                      <ArrowRight size={14} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <span>Contact Us</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 3. Hero Image  */}
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Delay creates the stagger
              className="group relative mt-12 w-full mx-auto z-10"
            >
              <div className="absolute -inset-4 rounded-[40px] blur-3xl opacity-100 pointer-events-none" />
              <div className="relative aspect-[16/6] w-full overflow-hidden h-[400px] rounded-3xl border border-gray-100 shadow-inner bg-gray-50">
                <Image
                  src="/assets/ship3.png"
                  width={1920}
                  height={1080}
                  alt="Global Shipping Hero"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
