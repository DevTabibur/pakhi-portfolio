"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  GraduationCap,
  Sparkles
} from "lucide-react";

export default function Achievements() {
  const { testimonials, milestones, faqs } = portfolioData;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Social Proof & Verified Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Student Success Stories & Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Real feedback from high school students, parents, and university peers who experienced transformative results.
          </p>
        </div>

        {/* Testimonials Grid (Doctor / Clinic Style Trust Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-teal-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 dark:text-slate-700" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • <span className="font-semibold text-slate-700 dark:text-slate-300">{item.institution}</span>
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>{item.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 mb-20 shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            Key Leadership & Academic Milestones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-black text-teal-600 dark:text-teal-400">
                      {m.year}
                    </span>
                    {m.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300">
                        {m.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    {m.organization}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions (Accordion) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Frequently Asked Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Clear answers regarding batch admissions, mentorship structure, and school collaborations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
