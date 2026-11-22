"use client";

import { X, Play, Clock, Eye, Star, ExternalLink, BookOpen, CheckCircle } from "lucide-react";
import { DemoLecture } from "@/data/portfolio";

interface LectureModalProps {
  lecture: DemoLecture | null;
  onClose: () => void;
}

export default function LectureModal({ lecture, onClose }: LectureModalProps) {
  if (!lecture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
              {lecture.subject}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lecture.level}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation / Visual Banner */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex flex-col items-center justify-center text-center p-6 text-white overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 w-16 h-16 rounded-full bg-teal-500/90 hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-teal-500/30 transition-transform group-hover:scale-110 cursor-pointer">
            <Play className="w-7 h-7 fill-slate-950 ml-1" />
          </div>

          <p className="relative z-10 mt-4 text-xs font-medium uppercase tracking-widest text-teal-300">
            Interactive Lecture Preview
          </p>
          <p className="relative z-10 text-sm text-slate-300 max-w-md mt-1">
            Click to watch the full lecture on YouTube or access the verified study notes.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {lecture.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{lecture.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{lecture.views}</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">{lecture.rating} / 5.0</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {lecture.summary}
          </p>

          {/* Key takeaways */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Concepts Explored in This Module
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lecture.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={lecture.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-colors shadow-sm shadow-teal-600/20"
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Full Lecture on YouTube
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
