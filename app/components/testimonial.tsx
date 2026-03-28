"use client";
import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}
const testimonials: Testimonial[] = [
  {
    name: "Adebayo O.",
    role: "Construction Project Lead, Lagos",
    image: "/assets/man1.jpg", // NEW ASSET PATH
    content:
      "Nono-llc made the process of sourcing quality building materials from China incredibly smooth. From consultation to delivery at the Apapa Port, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "Dr. Elara Vance",
    role: "Director, Accra Medical Supply",
    image: "/assets/man2.jpg", // NEW ASSET PATH
    content:
      "Importing sensitive diagnostic equipment requires extreme precision. Nono-llc's Air Freight Solutions delivered critical tech to Ghana under tight deadlines, fully compliant and secure.",
    rating: 5,
  },
  {
    name: "Michael Osei",
    role: "Owner, Global Tech Traders Ltd.",
    image: "/assets/man3.jpg", // NEW ASSET PATH
    content:
      "We needed a reliable partner for bulk electronics sourcing in India. Nono-llc delivered on all counts—competitively priced, on time, and with full customs handling for the Accra market.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Sourcing Manager, Mumbai Dynamics",
    image: "/assets/man4.jpg", // NEW ASSET PATH
    content:
      "Nono-llc simplified our outbound logistics to African markets significantly. Their network optimization between Mumbai and Lagos has reduced our transit costs and delivery times by 20%.",
    rating: 5,
  },
  {
    name: "Sidi Mohamed",
    role: "Logistics Lead, Casablanca Textile Corp.",
    image: "/assets/man5.jpg", // NEW ASSET PATH
    content:
      "For raw textile sourcing in China, Nono-llc is unparalleled. Their dedicated account management keeps us informed, ensuring our manufacturing lines never face downtime. They are a crucial partner.",
    rating: 5,
  },
];


const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-px bg-slate-900"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-700">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What Our Customers <br />
            <span className="text-purple-900 italic">Say.</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-2xl max-w-lg">
            Over the years, we have proudly served hundreds of businesses
            worldwide with trusted logistics solutions.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[500px] p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                {/* User Image Above Stars */}
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-full border-4 border-purple-50 overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="80px" // Optimization hint for Next.js
                    />
                    <div className="bg-slate-200 h-full w-full flex items-center justify-center font-bold text-purple-700">
                      {item.name[0]}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-purple-700 text-white p-1.5 rounded-full shadow-lg">
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Feedback Content */}
                <p className="text-slate-600 leading-relaxed italic mb-8 italic">
                  "{item.content}"
                </p>

                {/* Identity */}
                <div className="mt-auto">
                  <h4 className="font-black text-slate-900 text-lg">
                    {item.name}
                  </h4>
                  <p className="text-purple-900 font-bold text-xs uppercase tracking-widest mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Styling */}
        <div className="custom-pagination flex justify-center gap-2 mt-4" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #7e22ce !important; /* Purple-900 */
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
