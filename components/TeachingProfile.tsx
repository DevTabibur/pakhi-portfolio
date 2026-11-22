"use client";

import { useState } from "react";
import { portfolioData, DemoLecture } from "@/data/portfolio";
import LectureModal from "./LectureModal";
import { 
  BookOpen, 
  Code2, 
  Network, 
  Cpu, 
  Play, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Code2,
  Network,
  Cpu,
};

export default function TeachingProfile() {
  const { teaching } = portfolioData;
  const [selectedLecture, setSelectedLecture] = useState<DemoLecture | null>(null);

  return (
    <section id="teaching" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Doctor / Specialist Style Presentation */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Excellence & Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Teaching Profile & Curriculum Specializations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Meticulously architected courses that bridge foundational computer science, board exam mastery, and university transition for ambitious learners.
          </p>
        </div>

        {/* 4 Core Subject Specializations (Doctor's "Services / Treatments" layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {teaching.subjects.map((subject) => {
            const IconComponent = iconMap[subject.icon] || BookOpen;
            return (
              <div
                key={subject.id}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100 dark:border-teal-900/60 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                      {subject.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-3">
                    {subject.level}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {subject.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      Core Modules & Syllabus:
                    </p>
                    <ul className="space-y-1.5">
                      {subject.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    {subject.enrolledStudents}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    <span>Enroll / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaching Methodology / Pedagogical Philosophy Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 mb-20 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {teaching.philosophy.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                {teaching.philosophy.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {teaching.philosophy.description}
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs shadow-sm transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Request Custom School Syllabus</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teaching.philosophy.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Demo Lectures & Recorded Classes Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Live Video Demonstrations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                Demo Lectures & Masterclasses
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Experience the teaching style firsthand. Visual, engaging, and zero-memorization lectures.
              </p>
            </div>
            <a
              href="https://youtube.com/@studinsschool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
            >
              <span>View All on YouTube</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaching.demoLectures.map((lecture) => (
              <div
                key={lecture.id}
                onClick={() => setSelectedLecture(lecture)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg hover:border-teal-500/50 transition-all flex flex-col"
              >
                {/* Visual Video Thumbnail Placeholder */}
                <div className="relative aspect-video bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 p-4 flex flex-col justify-between text-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-teal-300 border border-teal-500/30">
                      {lecture.subject}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-slate-300 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lecture.duration}
                    </span>
                  </div>

                  <div className="self-center my-auto w-11 h-11 rounded-full bg-teal-500/90 group-hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span>{lecture.views}</span>
                    <span className="flex items-center gap-1 text-amber-400 font-medium">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {lecture.rating}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2 mb-2">
                      {lecture.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                      {lecture.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                      Watch Lecture
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {lecture.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Lecture Modal */}
      <LectureModal
        lecture={selectedLecture}
        onClose={() => setSelectedLecture(null)}
      />
    </section>
  );
}
