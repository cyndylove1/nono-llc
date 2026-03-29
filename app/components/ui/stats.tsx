"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "../constant/constant";

interface AnimatedStatProps {
  numberValue: string;
  duration?: number;
}

const AnimatedStatSpan: React.FC<AnimatedStatProps> = ({
  numberValue,
  duration = 1500,
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

          const targetValue = parseFloat(numberValue.replace(/[^0-9.]/g, ""));
          if (isNaN(targetValue)) return; // Safety check

          let startTime = 0;

          const animate = (time: number) => {
            if (startTime === 0) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);

            const easing = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easing * targetValue);

            setCurrentValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentValue(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },

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
      {currentValue.toLocaleString()}
    </span>
  );
};

export default function Stats  () {
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
                <span className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">
                  <AnimatedStatSpan numberValue={stat.number} />
                </span>

                {/* 2. Suffix rendering (Keep separate JSX as before) */}
                <span className="text-xl md:text-3xl font-bold text-purple-900 ml-1">
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


