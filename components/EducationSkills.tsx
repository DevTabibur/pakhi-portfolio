"use client";

import { portfolioData } from "@/data/portfolio";
import {
  GraduationCap,
  Award,
  Terminal,
  Server,
  Laptop,
  BookOpenCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

const categoryIconMap: Record<string, React.ElementType> = {
  BookOpenCheck,
  Terminal,
  Server,
  Laptop,
};

export default function EducationSkills() {
  const { education } = portfolioData;

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Technical Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Education, Certifications & Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Grounded in university-level theoretical computer science with
            practical hands-on proficiency in systems, networking, and
            instructional design.
          </p>
        </div>

        {/* Academic Degrees & Certifications Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Academic Background
            </h3>

            <div className="space-y-6">
              {education.degrees.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 relative hover:border-teal-500/40 transition-colors shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                      {item.institution}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span> • <span>{item.location}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                      Key Coursework & Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Industry Track */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Certifications & Specialized Training
            </h3>

            <div className="space-y-4">
              {education.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/40 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong>Focus:</strong> {cert.topics}
                  </p>
                </div>
              ))}

              {/* Verified Scholar Badge Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white border border-teal-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">
                      Verified Academic Credential
                    </h5>
                    <p className="text-xs text-teal-300">
                      Department of CSE, DU
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Academic transcripts, admission ranking records, and
                  certification verifications available upon institutional
                  request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed 4-Category Technical & Domain Skills Matrix */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            Technical & Pedagogical Competencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {education.skillCategories.map((cat, idx) => {
              const IconComp = categoryIconMap[cat.icon] || Terminal;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 border border-teal-100 dark:border-teal-900/60">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                            <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                              {skill.note || `${skill.level}%`}
                            </span>
                          </div>

                          {/* Progress track */}
                          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
