"use client";
import Stats from "./components/ui/stats";
import WhatWeDo from "./components/ui/whatWeDo";
import HowItWorks from "././components/ui/howItWorks";
import Testimonials from "./components/ui/testimonial";
import Faqs from "./components/ui/faq";
import Cta from "./components/ui/cta";
import Hero from "./components/ui/hero";
import About from "./components/ui/about";
import WhyUs from "./components/ui/whyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatWeDo />
      <About />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <Cta />
    </>
  );
}
