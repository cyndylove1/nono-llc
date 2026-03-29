export default function FLoatingCard(){
    return (
      <>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50">
          <div>
            <p className="text-xl font-bold text-purple-900 tracking-tight">
              15+
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Global Hubs
            </p>
          </div>
          <div className="h-10 w-[1px] bg-slate-100" />
          <div>
            <p className="text-xl font-bold text-purple-900 tracking-tight">
              1.2k+
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Secure Deliveries
            </p>
          </div>
        </div>
      </>
    );
}