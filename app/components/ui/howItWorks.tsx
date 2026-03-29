"use client";
import { motion } from "framer-motion";
import { ArrowRight, Building } from "lucide-react"; // Replaced Truck for diversity
import Button from "../button";
import Image from "next/image";
import Link from "next/link";
import CardOverlay from "../cardOverlay";
import { steps } from "../constant/constant";

export default function HowItWorks() {
  return (
    <section className="bg-[#F7F8FA] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl md:px-6 px-4 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* Card Overlay */}
          <div className="absolute -top-10 -right-10 z-20 bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/50 block">
            <CardOverlay />
          </div>
          <div className="aspect-square bg-slate-200 rounded-[2rem] overflow-hidden shadow-inner relative w-full h-full">
            {/* image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 to-transparent" />
            <Image
              src="/assets/world.png"
              width={200}
              height={250}
              alt="Global Supply Chain Hubs"
              className="w-full"
            />
          </div>
        </div>

        <div>
          {/* title */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-px bg-slate-900"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
                How IT WORKS
              </span>
            </motion.div>
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight mb-10 leading-tight max-w-lg">
              Streamline Your&nbsp;
              <span className="text-purple-900 italic">Asia-Africa</span> Supply
              Chain.
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="text-3xl font-black text-purple-100 group-hover:text-purple-900 transition-colors duration-300">
                  {step.id}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    {step.title}{" "}
                    {i === 2 && (
                      <Building className="w-4 h-4 text-purple-600" />
                    )}{" "}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/services">
              <Button variant="primary" className="gap-2.5 w-full sm:w-auto">
                <span> Explore services</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
