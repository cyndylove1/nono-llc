"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../button";
import Image from "next/image";
import FLoatingCard from "../floatingcard";
import Link from "next/link";

export default function About ()  {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl md:px-6 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content*/}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex gap-4">
              <div className="w-1/2 space-y-4 pt-12">
                <div className="h-80 w-full bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <Image
                    src="/assets/about.jpg"
                    width={500}
                    height={600}
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
                    width={500}
                    height={600}
                    alt="International Shipping"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <FLoatingCard />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-px bg-slate-900"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-xl">
                Architecting Seamless&nbsp;
                <span className="text-purple-900 italic">Global Trade.</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              NONO-LLC serves as the critical link in the global supply chain,
              connecting industrial centers in Asia and India with high-growth
              markets across Africa and the Americas. We engineer end-to-end
              reliability through expert sourcing and precision freight
              management.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Direct sourcing networks across China & India",
                "Advanced multi-modal freight & air solutions",
                "Automated customs compliance & duty handling",
                "Strategic last-mile distribution centers",
                "End-to-end supply chain visibility",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 size={22} className="text-purple-700" />
                  </div>
                  <span className="font-medium text-slate-700">{text}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="/services">
              <Button
                variant="primary"
                className="gap-2.5 sm:w-auto mt-10 shadow-lg shadow-purple-200"
              >
                <span>Our Mission</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


