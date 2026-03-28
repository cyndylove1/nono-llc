

const stats = [
  {
    number: "250",
    label: "Global Shipments Delivered",
    suffix: "+",
  },
  {
    number: "50",
    label: "Partnerships Across Africa",
    suffix: "+",
  },
  {
    number: "75",
    label: "Verified Global Manufacturers",
    suffix: "+",
  },
  {
    number: "35",
    label: "Strategic Corporate Clients",
    suffix: "+",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-10 border-t-[1px] border-gray-200 border-b mt-24 mx-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center px-4"
            >
              {/* Demarcation Border (Right) */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-100 to-transparent" />
              )}

              {/* Stats Content */}
              <div className="flex items-baseline justify-center mb-3">
                <span className="text-6xl md:text-4xl font-bold text-slate-900 tracking-tighter transition-transform duration-300 group-hover:scale-105">
                  {stat.number}
                </span>
                <span className="text-4xl md:text-3xl font-bold text-purple-900 ml-1">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-xs md:text-[10px] font-light uppercase text-gray-900 tracking-[0.2em] text-slate-500 max-w-[200px] leading-relaxed">
                {stat.label}
              </p>

              {/* Subtle hover accent */}
              <div className="mt-4 h-1 w-0 bg-purple-700 transition-all duration-300 group-hover:w-12 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
