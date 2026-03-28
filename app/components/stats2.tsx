import React from "react";

const Stats = () => {
  const stats = [
    { value: "250+", label: "Successful Shipments" },
    { value: "50+", label: "Schools Supplied Across Africa" },
    { value: "75+", label: "Verified Suppliers (China & India)" },
    { value: "35+", label: "Active Business Clients" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <span className="text-4xl md:text-5xl font-black text-slate-900 transition-transform duration-300 group-hover:scale-110">
                {stat.value.split("+")[0]}
                <span className="text-purple-700">+</span>
              </span>
              <div className="mt-3 h-1 w-8 bg-purple-100 rounded-full group-hover:w-12 transition-all duration-300" />
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-500 max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
