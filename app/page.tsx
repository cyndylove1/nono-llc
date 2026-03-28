import React from "react";
import Image from "next/image";
import { FaArrowRight, FaShip } from "react-icons/fa";
import Button from "./components/button";
import motor from "@/public/assets/Gemini_Generated_Image_48tb4x48tb4x48tb.png";
import Stats from "./components/stats";
import WhatWeDo from "./components/whatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/services";
import { ArrowRight } from "lucide-react";
import { HowItWorks } from "./components/howItWorks";
import Testimonials from "./components/testimonial";
import Faqs from "./components/faq";
import Cta from "./components/cta";
import Link from "next/link";
// ... (imports remain the same)

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white mt-10">
        {/* Removed overflow-hidden from the section to let the glow bleed out naturally */}
        <section className="relative px-6 pt-16 lg:px-12 lg:pt-24">
          {/* --- THE RIGHT SIDE GLOW --- */}
          {/* We place it here, relative to the section, so it doesn't get cut off */}
          <div className="absolute top-0 right-0 md:right-[10%] h-[400px] w-[400px] bg-purple-50/80 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12 items-center">
              <div className="relative md:col-span-12 flex flex-col items-center text-center z-10">
                {/* Content Block */}
                <div className="mb-8 flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-[12px] font-semibold text-purple-800 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Connecting Supply Chains Across Oceans
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Unlocking Global Markets with{" "}
                  <br className="hidden md:inline" />
                  <span className="text-purple-900 italic leading-[5rem]">
                    Predictable Supply Chains
                  </span>
                </h2>

                <p className="mb-12 text-base md:text-md text-gray-600 max-w-2xl leading-relaxed">
                  We simplify logistics for businesses across Africa and the
                  Americas. By connecting you directly with trusted
                  manufacturers in China and India, we ensure seamless sourcing,
                  predictable delivery, and stress-free customs.
                </p>

                {/* Buttons and the rest of your code... */}
                <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Link href="/services">
                    {" "}
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
              </div>
            </div>

            {/* Bottom Image Container Glow (Keeping this as is) */}
            <div className="group relative mt-12 w-full max-w-[1400px] mx-auto z-10 px-20">
              <div className="absolute -inset-4 rounded-[40px] blur-3xl opacity-100 pointer-events-none" />
              <div className="relative aspect-[16/6] w-full overflow-hidden h-[400px] rounded-3xl border border-gray-100 shadow-inner bg-gray-50">
                <Image
                  src="/assets/ship1.PNG"
                  width={250}
                  height={200}
                  alt="hero image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Stats />
      <WhatWeDo />
      <WhoWeAre />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <Cta />
    </>
  );
}
