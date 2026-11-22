"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Building2,
  Users,
  BookOpenCheck,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section
      id="leadership"
      className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Badge & Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Co-Founder & Chief Academic Officer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Studins School — Democratizing High-Standard EdTech
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {leadership.tagline}
          </p>
        </div>

        {/* Hero Split Card for Studins School */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-8 sm:p-12 border border-teal-500/30 shadow-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-dot-pattern opacity-15" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Academic Leadership & Platform Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Pioneering Accessible Learning Infrastructure for Bangladesh
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {leadership.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={portfolioData.socialLinks.studinsSchool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-teal-500/30"
                >
                  <span>Visit Studins School Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-xs transition-colors"
                >
                  <span>Partner With Our Academic Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Impact Metric Cubes */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {leadership.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-center flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-200">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities & Academic Operations Grid */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <BookOpenCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            Core Academic & Operational Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.responsibilities.map((resp, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-teal-500/40 transition-colors shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {resp.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {resp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EdTech Initiatives / Case Studies */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Key EdTech Initiatives & Social Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.initiatives.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                      {item.badge}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Active Initiative
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
