import { ArrowUpRight } from "lucide-react";
import Banner from "../components/banner";
import Cta from "../components/ui/cta";
import { services } from "../components/constant/constant";

export default function Services() {
  return (
    <>
      <Banner
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        title="Rapid Transit Solutions"
        description="Moving at the Speed of Your Ambition"
        bgImage="/assets/ship2.png"
        height="md:h-[300px] h-[250px]"
      />

      <section className="py-20 bg-slate-50 md:px-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight">
              Our Logistics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative md:h-[400px] h-[300px] w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90 z-10" />

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-20">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{service.title}</h3>{" "}
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 transition-colors group-hover:bg-purple-700 shrink-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <p className="text-slate-200 leading-relaxed text-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.desc}
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

