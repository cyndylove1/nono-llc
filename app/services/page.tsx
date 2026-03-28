import React from "react";
import { ArrowUpRight } from "lucide-react";
import Banner from "../components/banner";
import Cta from "../components/cta";

const Services = () => {
  const services = [
    {
      title: "Warehousing Services",
      desc: "We have expansive, state-of-the-art facilities designed to provide comprehensive solutions including distribution, secure storage, and advanced inventory management.",
      image: "/assets/warehouse.jpg", //
    },
    {
      title: "Air Freight Services",
      desc: "We proudly partner with top airlines and globally recognized freight forwarders to deliver seamless, efficient, and highly reliable air freight solutions.",
      image: "/assets/air-freight.png", //
    },
    {
      title: "Sea Transport Services",
      desc: "Wherever your cargo is headed, we expertly manage the shipment process for you, ensuring efficiency and reliability while keeping your business competitive.",
      image: "/assets/ship.png", //
    },
    {
      title: "Network & Route",
      desc: "Our transportation strategy experts develop a comprehensive roadmap, identifying the most effective solutions and streamlining organization for optimal efficiency.",
      image: "/assets/globe.jpg", //
    },
    {
      title: "Local Shipping Services",
      desc: "We work closely with our strategic partners to provide comprehensive domestic trucking solutions, ensuring our clients receive everything they need, exactly where they need it.",
      image: "/assets/local.jpg", //
    },
    {
      title: "Customs Clearance",
      desc: "With certified logistics expertise and cutting-edge technology, we transform your supply chain while minimizing downtime to keep your operations running smoothly.",
      image: "/assets/clearance.png", //
    },
  ];

  return (
    <>
      <Banner
        breadcrumbs={[
          { label: "Services", href: "/services" },
          // { label: "Global Shipping", href: "/services/shipping" },
        ]}
        title="Rapid Transit Solutions"
        description="Moving at the Speed of Your Ambition"
        
        bgImage="/assets/ship2.png"
        height="h-[300px]"
      />

      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Our Logistics Services
            </h2>{" "}
            {/* */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{service.title}</h3>{" "}
                    {/* */}
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 transition-colors group-hover:bg-purple-700">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <p className="text-slate-200 leading-relaxed text-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.desc} {/* */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Services;
