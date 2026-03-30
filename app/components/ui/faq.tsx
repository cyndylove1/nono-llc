"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Button from "../button";
import Link from "next/link";
import { shippingFaqs } from "../constant/constant";

export default function ShippingFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <section className="py-24 md:px-6 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-px bg-slate-900"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
              FAQ
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-6xl font-black text-slate-900 tracking-tight max-w-xl">
            Logistics & Delivery&nbsp;
            <span className="text-purple-900 italic">Clarified.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-2">
          {shippingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className={`transition-all duration-500 rounded-3xl ${isOpen ? "bg-slate-50 md:p-8 p-4" : "bg-transparent md:p-8 p-4 border-b border-slate-100 rounded-none"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start gap-6 text-left focus:outline-none"
                >
                  <span
                    className={`text-sm font-mono font-bold mt-1 transition-colors ${isOpen ? "text-purple-700" : "text-gray-900"}`}
                  >
                    {itemNumber}
                  </span>

                  <div className="flex-1">
                    <h3
                      className={`text-md md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}
                    >
                      {faq.question}
                    </h3>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                        >
                          <p className="mt-6 text-slate-500 md:text-lg text-sm leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className={`mt-1 md:text-[28px] text-[20px] transition-transform duration-500 ${isOpen ? "rotate-45 text-purple-700" : "text-gray-900"}`}
                  >
                    <Plus />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-slate-100 rounded-3xl">
          <p className="text-slate-600 font-medium">
            Have a specific cargo requirement?
          </p>
          <Link href="/contact">
            {" "}
            <Button variant="primary" className="gap-2.5 w-full sm:w-auto">
              <span>Speak to a Shipping Expert</span>
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
