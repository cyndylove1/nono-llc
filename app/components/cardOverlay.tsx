import { Zap } from "lucide-react";

export default function CardOverlay() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-purple-900 rounded-lg flex items-center justify-center text-white">
          <Zap size={18} />
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900">1.2k+</p>{" "}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Secure Trade Bridges
          </p>{" "}
        </div>
      </div>
    </>
  );
}
