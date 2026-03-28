"use client";
import Banner from "../components/banner";
import Cta from "../components/cta";
import Testimonials from "../components/testimonial";
// import WhatWeDo from "../components/whatWeDo";
import WhoWeAre from "../components/WhoWeAre";

export default function AboutUs() {
  return (
    <>
      <Banner
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          // { label: "Global Shipping", href: "/services/shipping" },
        ]}
        title="International Logistics"
        description="Seamlessly moving cargo from Asia to Africa with real-time tracking and expert customs clearance."
        bgImage="/assets/container1.jpg"
        height="h-[300px]"
      />
      <WhoWeAre />
      <Testimonials />
      <Cta />
    </>
  );
}
