import { ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../button";

export default function NewsLetter() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-slate-100 mb-20">
        <div className="lg:col-span-5">
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">
            Stay ahead of the <br />
            <span className="text-purple-900 italic">global supply chain.</span>
          </h3>
        </div>
        <div className="lg:col-span-7">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 bg-slate-50 border border-slate-200 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
            />
            <Button variant="primary" className="gap-2.5 w-full py-4 sm:w-auto">
              <span>Subscribe</span>
              <ArrowRight size={14} />
            </Button>
          </div>
          <p className="mt-4 text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck size={14} />
            Your data is encrypted and protected under our privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}
