"use client";

import { portfolioData } from "@/data/portfolio";
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  Star, 
  Building2, 
  Download,
  BookOpen,
  Award
} from "lucide-react";

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/70 dark:border-teal-800/70 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-teal-800 dark:text-teal-300">
                {personal.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {personal.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15]">
                Empowering Students with Intuitive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-700 dark:from-teal-400 dark:via-emerald-300 dark:to-teal-200">
                  Computer Science
                </span>{" "}
                & Rigorous Pedagogy.
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personal.subheadline}
            </p>

            {/* Key Trust Highlights (Doctor / Specialist Style Strip) */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span><strong className="text-slate-900 dark:text-white">4.9/5</strong> Rating (1.2k+ Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs">
                <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span><strong className="text-slate-900 dark:text-white">12k+</strong> Students Mentored</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Co-Founder @ <strong className="text-slate-900 dark:text-white">Studins School</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#teaching"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/25 transition-all hover:shadow-lg hover:shadow-teal-600/35 hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Teaching & Courses</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-xs"
              >
                <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Book 1-on-1 Consultation</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 text-sm font-medium transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Frame & Floating Credentials */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 via-emerald-500/10 to-transparent rounded-3xl blur-xl" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
                
                {/* Visual Avatar / Portrait Representation */}
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 flex flex-col justify-end p-6 border border-slate-200/40 dark:border-slate-700/60 shadow-inner group">
                  
                  {/* Subtle graphical backdrop */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl" />
                  
                  {/* Avatar Center Graphic */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-xl shadow-teal-500/30 border-2 border-white/20 mb-4 transform transition-transform group-hover:scale-105">
                      {personal.avatarPlaceholderInitials}
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {personal.name}
                    </span>
                    <span className="text-xs sm:text-sm text-teal-300 font-medium mt-1">
                      B.Sc. in CSE, University of Dhaka
                    </span>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{personal.location}</span>
                    </div>
                  </div>

                  {/* Bottom internal banner */}
                  <div className="relative z-10 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-semibold text-white">5+ Years Proven Pedagogy</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                        Verified
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                      HSC ICT • C/C++ • Networking • Studins School
                    </p>
                  </div>
                </div>

                {/* Floating Badge Top Left: University of Dhaka */}
                <div className="absolute -top-4 -left-3 sm:-left-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400">
                      Alma Mater
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      University of Dhaka (DU)
                    </p>
                  </div>
                </div>

                {/* Floating Badge Bottom Right: Studins School Leadership */}
                <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-400">
                      Co-Founder
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Studins School EdTech
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
