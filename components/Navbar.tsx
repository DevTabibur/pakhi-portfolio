"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight, GraduationCap, Calendar, Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                Educator & Co-Founder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full hover:bg-white dark:hover:bg-slate-900 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Area & Theme Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            {/* Book Consultation / Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm shadow-teal-600/25 transition-all hover:shadow-md hover:shadow-teal-600/35 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Session</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 text-white font-medium text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Session / Contact Me
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download Academic CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
