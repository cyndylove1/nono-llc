"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string; 
  duration?: number;
}

export default function AnimatedStat({
  value,
  duration = 1200,
}: AnimatedStatProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
          const suffix = value.replace(/[0-9.]/g, "");

          let start = 0;
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const current = Math.floor(progress * numericPart);

            setDisplay(`${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="inline-block">
      {display}
    </span>
  );
}
