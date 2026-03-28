"use client";
import React from "react";
import { ArrowRight, Zap, Building } from "lucide-react"; // Replaced Truck for diversity
import Button from "./button";
import Image from "next/image";
import Link from "next/link";

export const HowItWorks: React.FC = () => {
  // NEW LOGISTICS-SPECIFIC CONTENT
  const steps = [
    {
      id: "01",
      title: "Consolidate Requirements",
      desc: "Submit your sourcing needs from Asia or India. Our agents unify product specifications and confirm factory compliance.",
    },
    {
      id: "02",
      title: "Optimized Freight Routing",
      desc: "We select the optimal air or sea path, ensuring competitive transit and secure handling for your specialized cargo.",
    },
    {
      id: "03",
      title: "Customs Clearance Mastery",
      desc: "Our regulatory experts manage all documentation (Form M/Bill of Lading) for rapid release at African ports.",
    },
  ];

  return (
    <section className="bg-[#F7F8FA] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* Glassmorphism Card Overlay */}
          <div className="absolute -top-10 -right-10 z-20 bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/50 hidden md:block">
            <div className="flex items-center gap-4">
              {/* BRAND COLOR MAINTAINED (PURPLE) */}
              <div className="h-10 w-10 bg-purple-900 rounded-lg flex items-center justify-center text-white">
                <Zap size={18} /> {/* Updated Icon */}
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">1.2k+</p>{" "}
                {/* Updated Stat */}
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Secure Trade Bridges
                </p>{" "}
                {/* Updated Stat Label */}
              </div>
            </div>
          </div>
          <div className="aspect-square bg-slate-200 rounded-[3.5rem] overflow-hidden shadow-inner relative w-full h-full">
            {/* BRAND COLOR MAINTAINED (PURPLE) */}
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
          {/* HEADER CONTENT UPDATED */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-10 leading-tight">
            Streamline Your <br />
            {/* BRAND COLOR MAINTAINED (PURPLE) */}
            <span className="text-purple-900 italic">Asia-Africa</span> Supply
            Chain.
          </h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 group">
                {/* BRAND COLOR MAINTAINED (PURPLE) */}
                <div className="text-3xl font-black text-purple-100 group-hover:text-purple-900 transition-colors duration-300">
                  {step.id}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    {step.title}{" "}
                    {i === 2 && (
                      <Building className="w-4 h-4 text-purple-600" />
                    )}{" "}
                    {/* Added icon for extra flair */}
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
};
