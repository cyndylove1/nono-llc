"use client";

import React, { useEffect, useRef, useState } from "react";

// --- START: ANIMATED STAT LOGIC (INTEGRATED) ---
interface AnimatedStatProps {
  // Pass only the NUMBER part here (e.g., "250")
  numberValue: string;
  duration?: number;
}

// Minimalist counter that only handles numeric progression
const AnimatedStatSpan: React.FC<AnimatedStatProps> = ({
  numberValue,
  duration = 1500, // Slightly longer default for better visualization
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Convert the number string (e.g. "250") to a number (e.g., 250)
          const targetValue = parseFloat(numberValue.replace(/[^0-9.]/g, ""));
          if (isNaN(targetValue)) return; // Safety check

          let startTime = 0;

          const animate = (time: number) => {
            if (startTime === 0) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);

            // Apply easing (easeOutExpo) for a more professional feel
            // easeOutExpo function: 1 - Math.pow(2, -10 * progress)
            const easing = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easing * targetValue);

            setCurrentValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure we hit the precise target at the very end
              setCurrentValue(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      // Trigger when 40% of the element is visible
      { threshold: 0.4, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [numberValue, duration]);

  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-300 group-hover:scale-105"
    >
      {currentValue.toLocaleString()} {/* Adds commas (e.g., 1,200) */}
    </span>
  );
};
// --- END: ANIMATED STAT LOGIC ---

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

const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-10 border-t-[1px] border-gray-200 border-b mt-24 mx-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center px-4"
            >
              {/* Demarcation Border (Right) MAINTAINED */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-100 to-transparent" />
              )}

              {/* Stats Content - INTEGRATION HERE */}
              <div className="flex items-baseline justify-center mb-3 min-h-[50px]">
                {/* 1. USE THE NEW ANIMATED COMPONENT (Passing only numberValue) */}
                <span className="text-6xl md:text-4xl font-bold text-slate-900 tracking-tighter">
                  <AnimatedStatSpan numberValue={stat.number} />
                </span>

                {/* 2. Suffix rendering (Keep separate JSX as before) */}
                <span className="text-4xl md:text-3xl font-bold text-purple-900 ml-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Label Content MAINTAINED */}
              <p className="text-xs md:text-[10px] font-light uppercase text-slate-500 max-w-[200px] leading-relaxed tracking-[0.2em]">
                {stat.label}
              </p>

              {/* Hover Accent MAINTAINED */}
              <div className="mt-4 h-1 w-0 bg-purple-700 transition-all duration-300 group-hover:w-12 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
