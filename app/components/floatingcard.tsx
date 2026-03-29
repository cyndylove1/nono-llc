"use client"; // Required because AnimatedStat uses client hooks
import React from "react";
// Assuming both files are in the same directory.
// Adjust the import path if they are elsewhere.
import AnimatedStat from "./AnimatedStat";

export default function FloatingCard() {
  return (
    <>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50 z-20">
        <div>
          <p className="text-xl font-bold text-purple-900 tracking-tight">
            <AnimatedStat value="1.5k+" duration={1500} />
          </p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Global Hubs
          </p>
        </div>
        <div className="h-10 w-[1px] bg-slate-100" />
        <div>
          <p className="text-xl font-bold text-purple-900 tracking-tight">
            <AnimatedStat value="1.2k+" duration={1500} />
          </p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Secure Deliveries
          </p>
        </div>
      </div>
    </>
  );
}
