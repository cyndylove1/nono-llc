"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import Logo from "../logo";
import NewsLetter from "./newsLetter";

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section - Integrated Design */}
        <NewsLetter />

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* logo*/}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm">
              Premier logistics and sourcing partner bridging the gap between
              Asian manufacturing and African/American markets.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <MapPin size={18} className="text-purple-900" />
                <span>NONOSLLC Headquarters, New Delhi / Lagos</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone size={18} className="text-purple-900" />
                <span>+91 9876-543-210</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Mail size={18} className="text-purple-900" />
                <span>logistics@nonosllc.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Blocks */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-purple-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-900 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Industry Expertise
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li>
                <Link href="#" className="hover:purple-900 transition-colors">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:purple-900 transition-colors">
                  Customs Brokerage
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-900 transition-colors"
                >
                  Last-Mile Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:purple-900 transition-colors">
                  Global Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Follow Our Journey
            </h4>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-white hover:bg-purple-900 transition-all shadow-sm"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 NONOSLLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <Link
              href="/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-900 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/cookies"
              className="hover:text-slate-900 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
