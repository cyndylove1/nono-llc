"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./button";

export default function Services() {
  const items = [
    {
      id: "01",
      title: "Strategic Global Sourcing",
      desc: "Direct access to verified manufacturing hubs in China and India. We eliminate middlemen to secure high-quality products at factory-direct pricing.",
      image: "/assets/container.jpg",
      reverse: false, // Image on left, text on right
    },
    {
      id: "02",
      title: "Seamless Trade Corridors",
      desc: "Expertly managing complex logistics across Asia, Africa, and the Americas. We ensure your cargo moves through international borders without friction.",
      image: "/assets/seamless.png",
      reverse: true, // Text on left, image on right
    },
    {
      id: "03",
      title: "Regulatory & Customs Mastery",
      desc: "Comprehensive documentation and clearance services. We navigate local regulations and duty structures so your business stays fully compliant.",
      image: "/assets/custom.png",
      reverse: false,
    },
    {
      id: "04",
      title: "End-to-End Visibility",
      desc: "From the factory floor to your warehouse door. Our precision-engineered tracking ensures you have full control over your supply chain milestones.",
      image: "/assets/end.png",
      reverse: true,
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
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
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Supply Chain Excellence <br />
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
              <div className="relative h-[250px] w-full rounded-[2rem] overflow-hidden shadow-xl mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="px-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-purple-900 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-300">
                    {item.id}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">
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
        <div className="mt-24 flex justify-center">
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
