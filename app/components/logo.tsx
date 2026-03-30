import Link from "next/link";

export default function Logo() {
    return (
      <>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="md:h-9 md:w-9 h-7 w-7 bg-purple-900 rounded-full flex items-center justify-center font-black text-white group-hover:bg-blue-600 transition-colors">
            N
          </div>
          <span className="md:text-2xl text-lg font-black text-slate-900 tracking-tighter">
            NONOSLLC
          </span>
        </Link>
      </>
    );
}