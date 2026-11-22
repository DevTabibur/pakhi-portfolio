"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Users, Video, Award, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  Video,
  Award,
};

export default function StatsStrip() {
  const { quickStats } = portfolioData;

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-none p-5 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
          {quickStats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Award;
            return (
              <div
                key={idx}
                className={`flex flex-col items-start ${idx > 0 ? "pt-5 lg:pt-0 lg:pl-6" : ""}`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/60">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
