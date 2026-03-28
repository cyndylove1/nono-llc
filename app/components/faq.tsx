"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Button from "./button";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const shippingFaqs: FAQItem[] = [
  {
    question: "How do I track my international shipment in real-time?",
    answer:
      "Once your cargo is dispatched, you will receive a unique tracking ID compatible with our global portal. This provides live updates on vessel location for sea freight and flight milestones for air cargo, ensuring full visibility from port to port.",
  },
  {
    question: "What is the estimated transit time for sea vs. air freight?",
    answer:
      "Air freight typically takes 5–10 business days for global delivery. Sea freight transit times vary by route: China to Africa generally takes 30–45 days, while India to the Americas ranges between 25–35 days, depending on transshipment hubs.",
  },
  {
    question: "Are my goods insured during the shipping process?",
    answer:
      "We offer comprehensive Marine Cargo Insurance that covers loss or damage from external causes during transit. We highly recommend this for high-value electronics and fragile building materials to mitigate risks during handling.",
  },
  {
    question: "Do you provide 'Door-to-Door' delivery in Africa?",
    answer:
      "Yes. Our logistics network includes robust last-mile delivery services across major African hubs. We handle the transition from the arrival port to our local warehouses and finally to your specified commercial or residential address.",
  },
  {
    question: "Who handles the customs documentation and duties?",
    answer:
      "Our specialized clearing agents manage all paperwork, including Bill of Lading, Form M, and commercial invoices. We calculate estimated duties upfront to ensure your shipment complies with local regulations and avoids costly port delays.",
  },
  {
    question: "What happens if my shipment is delayed at the port?",
    answer:
      "While we strive for punctuality, port congestion can occur. In such cases, our local teams coordinate directly with port authorities to prioritize your containers and provide you with daily status reports until clearance is secured.",
  },
];

export default function ShippingFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <section className="py-24 px-6 bg-white">
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
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Logistics & Delivery <br />
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
                className={`transition-all duration-500 rounded-3xl ${isOpen ? "bg-slate-50 p-8" : "bg-transparent p-8 border-b border-slate-100 rounded-none"}`}
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
                      className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}
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
                          <p className="mt-6 text-slate-500 text-lg leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    className={`mt-1 transition-transform duration-500 ${isOpen ? "rotate-45 text-purple-700" : "text-gray-900"}`}
                  >
                    <Plus size={28} />
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
