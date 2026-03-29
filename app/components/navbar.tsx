"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./logo";

// 1. Defining standard navigation routes
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // For active link styling

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-[1px] border-gray-200  md:px-6 px-4 py-2 ">
      <div className="mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/*Navigation*/}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-100 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-2 rounded-full font-semibold text-[13px] tracking-tight transition-all duration-300 ${
                pathname === link.href
                  ? "bg-purple-900 text-white shadow-md shadow-slate-200" // Active state
                  : "text-slate-600 hover:text-slate-900 hover:bg-white" // Inactive state
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* button*/}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2.5 bg-purple-900 text-white px-3 py-2 rounded-full font-bold hover:bg-purple-700 transition-all shadow-xl shadow-blue-100 hidden lg:flex"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-slate-100 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Sliding Overlay) */}
      <div
        className={`fixed inset-0 top-[55px] bg-white lg:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
              className={`block text-xl font-semibold ${
                pathname === link.href
                  ? "text-purple-900 tracking-tighter" // Active state
                  : "text-gray-900 hover:text-purple-700" // Inactive state
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/*button*/}
          <Link
            href="/quote"
            className="flex w-full items-center justify-center gap-2.5 bg-purple-900 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all shadow-xl shadow-blue-100"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
