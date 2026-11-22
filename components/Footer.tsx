"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, ArrowUp, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const { personal, socialLinks, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  {personal.name}
                </span>
                <p className="text-xs text-teal-400 font-medium">
                  Educator • EdTech Co-Founder • CSE (DU)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering learners through rigorous, intuitive computer science
              education and pioneering digital learning ecosystems with Studins
              School.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Department of Computer Science & Engineering
              <br />
              University of Dhaka, Dhaka, Bangladesh
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Teaching Tracks
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#teaching"
                  className="hover:text-teal-400 transition-colors"
                >
                  HSC ICT Complete Syllabus
                </a>
              </li>
              <li>
                <a
                  href="#teaching"
                  className="hover:text-teal-400 transition-colors"
                >
                  C & C++ Programming Foundations
                </a>
              </li>
              <li>
                <a
                  href="#teaching"
                  className="hover:text-teal-400 transition-colors"
                >
                  Computer Networks & CCNA
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="hover:text-teal-400 transition-colors"
                >
                  Studins School Programs
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-teal-400 transition-colors"
                >
                  Free Lecture Notes & Slides
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Connect & Portals
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={socialLinks.studinsSchool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                >
                  Studins School Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Kabibur Rahman. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with care for students & learners
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
