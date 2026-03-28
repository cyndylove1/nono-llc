"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "./button";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="flex gap-4">
              <div className="w-1/2 space-y-4 pt-12">
                <div className="h-80 w-full bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <Image
                    src="/assets/about.jpg"
                    width={250}
                    height={200}
                    alt="Global Logistics Operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-1/2 space-y-4">
                <div className="h-80 w-full bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-white">
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <Image
                    src="/assets/ship.png"
                    width={250}
                    height={200}
                    alt="Global Logistics Operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50">
              <div>
                <p className="text-xl font-bold text-purple-900 tracking-tight">
                  15+
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Global Hubs
                </p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100" />
              <div>
                <p className="text-xl font-bold text-purple-900 tracking-tight">
                  1.2k+
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Secure Deliveries
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-12 h-px bg-slate-900"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
                  About Us
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Architecting Seamless <br />
                <span className="text-purple-900 italic">Global Trade.</span>
              </h2>
            </div>

            <p className="text-md text-gray-900 leading-relaxed font-medium">
              NONO-LLC serves as the critical link in the global supply chain,
              connecting industrial centers in Asia and India with high-growth
              markets across Africa and the Americas. We don't just move cargo;
              we engineer end-to-end reliability through expert sourcing and
              precision freight management.
            </p>

            <ul className="mt-10 space-y-3">
              {[
                "Direct sourcing networks across China & India",
                "Advanced multi-modal freight & air solutions",
                "Automated customs compliance & duty handling",
                "Strategic last-mile distribution centers",
                "End-to-end supply chain visibility",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle2 size={20} className="text-purple-700" />
                  </div>
                  <span className="font-light text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              className="gap-2.5 w-full sm:w-auto mt-10"
            >
              <span>Our Mission</span>
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
