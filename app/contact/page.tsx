"use client";
import Banner from "../components/banner";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Cta from "../components/cta";
import Button from "../components/button";

export default function ContactUs() {
  const [selectedInquiry, setSelectedInquiry] = useState("shipping");
  return (
    <>
      <Banner
        breadcrumbs={[
          { label: "Contact Us", href: "/contact" },
          // { label: "Global Shipping", href: "/services/shipping" },
        ]}
        title="Seamless Freight"
        description="Beyond Boundaries, Ahead of Schedule."
        bgImage="/assets/container1.jpg"
        height="h-[300px]"
      />
      <div className="my-20 text-center">
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
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Global Shipping Made <br />
          <span className="text-purple-900 italic">Simple and Predictable</span>
        </h2>
        <p className="mt-6 text-gray-600 mx-auto max-w-2xl text-md">
          From sea-ports to front doors, we manage the entire journey of your
          cargo with precision-engineered shipping solutions.
        </p>
      </div>
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto overflow-hidden bg-white rounded-[3rem] shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          {/* Left Wing: The Network (Dark Side) */}
          <div className="lg:w-5/12 bg-gray-200 p-12 md:p-16 text-white relative">
            {/* Subtle Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-700 border border-purple-700/20 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                  <Globe size={12} /> Global Support Network
                </div>
                <h2 className="text-4xl text-gray-900 md:text-5xl font-black tracking-tighter leading-tight mb-6">
                  Ready to <br />
                  <span className="text-purple-700">Scale?</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-sm">
                  Connect with our logistics architects to optimize your
                  Asia-to-Africa supply chain.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-slate-900 p-3 rounded-2xl text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Electronic Mail
                      </p>
                      <p className="text-xl text-gray-900 font-bold">
                        logistics@nono-llc.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-slate-900 p-3 rounded-2xl text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Direct Line
                      </p>
                      <p className="text-xl text-gray-900 font-bold">
                        +91 9876-543-210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-slate-900 p-3 rounded-2xl text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Headquarters
                      </p>
                      <p className="text-xl font-bold text-gray-900 leading-tight">
                        Camerica LLC HQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credibility Footer */}
              {/* <div className="mt-16 pt-8 border-t border-slate-800 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold"
                      >
                        HQ
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Expert consultants active in 4 regions.
                  </p>
                </div> */}
            </div>
          </div>

          {/* Right Wing: The Interface (Light Side) */}
          <div className="lg:w-7/12 p-12 md:p-16">
            <div className="mb-12">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <MessageSquare className="text-purple-900" />
                Configure Your Request
              </h3>
              <p className="text-slate-500 mt-2">
                Fill out the parameters below for a personalized quote.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1 mb-2 block group-focus-within:text-blue-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all text-slate-900 font-medium"
                  />
                </div>
                <div className="group">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1 mb-2 block group-focus-within:text-blue-600 transition-colors">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all text-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-black uppercase text-slate-400 ml-1 mb-2 block group-focus-within:text-blue-600 transition-colors">
                  Inquiry Type
                </label>
                <select className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all text-slate-900 font-bold appearance-none">
                  <option>International Shipping</option>
                  <option>Global Sourcing</option>
                  <option>Customs Clearance</option>
                  <option>Warehousing & Logistics</option>
                </select>
              </div>

              <div className="group">
                <label className="text-xs font-black uppercase text-slate-400 ml-1 mb-2 block group-focus-within:text-blue-600 transition-colors">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your cargo, origin, and destination..."
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all text-slate-900 font-medium resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-tighter">
                    <CheckCircle2 size={16} className="text-green-500" />
                    Response time: under 24 hours
                  </div> */}
                <div className="w-full">
                  <Button
                    variant="primary"
                    className="gap-2.5 w-full sm:w-auto"
                  >
                    <span>Submit Request</span>
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
