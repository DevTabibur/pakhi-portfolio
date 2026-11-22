"use client";

import { useState } from "react";
import { portfolioData, ProjectResource } from "@/data/portfolio";
import { 
  FolderGit2, 
  ExternalLink, 
  Download, 
  FileText, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

type CategoryFilter = "All" | "EdTech & LMS" | "Lecture Series" | "Code & Dev" | "Study Materials";

export default function ProjectsGrid() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "EdTech & LMS",
    "Lecture Series",
    "Code & Dev",
    "Study Materials",
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Interactive Repository & Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Projects, Educational Portals & Study Resources
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Curated software applications, open-access study materials, video masterclasses, and networking labs engineered to make learning efficient.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-600/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/40 hover:text-teal-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Banner / Abstract Visualization */}
              <div className="relative aspect-[16/9] bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 p-5 flex flex-col justify-between text-white overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-25" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-teal-300 border border-teal-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/90 text-slate-950">
                      Featured
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <p className="text-base font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </p>
                  {project.metrics && (
                    <p className="text-[11px] text-teal-300 font-medium mt-0.5">
                      {project.metrics}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <a
                    href={project.linkUrl}
                    target={project.linkUrl.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.downloadUrl && (
                      <a
                        href="#contact"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Download Resource"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
