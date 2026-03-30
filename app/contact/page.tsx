"use client";
import Banner from "../components/banner";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  
} from "lucide-react";
import Cta from "../components/ui/cta";
import Form from "../components/ui/form";

export default function ContactUs() {
  const [selectedInquiry, setSelectedInquiry] = useState("shipping");
  return (
    <>
      <Banner
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
        title="Seamless Freight"
        description="Beyond Boundaries, Ahead of Schedule."
        bgImage="/assets/contact-Us.png"
        height="md:h-[300px] h-[250px]"
      />
      <div className="mt-20 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="w-12 h-px bg-slate-900"></span>
          <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
            Contact Us
          </span>
        </motion.div>
        <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight max-w-2xl mx-auto">
          Global Shipping Made&nbsp;
          <span className="text-purple-900 italic">Simple and Predictable</span>
        </h2>
        <p className="mt-6 text-gray-900 md:text-lg text-[13px] mx-auto max-w-2xl text-md">
          From sea-ports to front doors, we manage the entire journey of your
          cargo with precision-engineered shipping solutions.
        </p>
      </div>
      <section className="bg-slate-50 py-24 md:px-6 px-4">
        <div className="max-w-7xl mx-auto overflow-hidden bg-white rounded-[1rem] shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          {/* Information*/}
          <div className="lg:w-5/12 bg-gray-200 p-6 md:p-16 text-white relative">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900 border border-purple-700/20 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                  <Globe size={12} /> Global Support Network
                </div>
                <h2 className="text-2xl text-gray-900 md:text-5xl font-black tracking-tighter leading-tight mb-6">
                  Ready to&nbsp;
                  <span className="text-purple-900">Scale?</span>
                </h2>
                <p className="text-gray-900 md:text-lg text-md leading-relaxed mb-12 max-w-sm">
                  Connect with our logistics architects to optimize your
                  Asia-to-Africa supply chain.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-purple-900 p-2 rounded-xl text-white">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="md:text-xs text-[12px] font-bold text-gray-900 uppercase tracking-widest mb-1">
                        Electronic Mail
                      </p>
                      <p className="md:text-xl text-lg text-gray-900 font-light">
                        logistics@nonosllc.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-purple-900 p-2 rounded-xl text-white">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="md:text-xs text-[12px] font-bold text-gray-900 uppercase tracking-widest mb-1">
                        Direct Line
                      </p>
                      <p className="md:text-xl text-lg text-gray-900 font-light">
                        +91 9876-543-210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-purple-900 p-2 rounded-xl text-white">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="md:text-xs text-[12px] font-bold text-gray-900 uppercase tracking-widest mb-1">
                        Headquarters
                      </p>
                      <p className="md:text-xl text-lg font-light text-gray-900 leading-tight">
                        Camerica LLC HQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form*/}
          <div className="lg:w-7/12 p-6 md:p-16">
           <Form/>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
