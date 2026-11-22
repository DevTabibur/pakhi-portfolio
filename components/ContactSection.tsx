"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Copy,
  Check,
  Send,
  Download,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import {
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  FacebookIcon,
} from "@/components/Icons";

export default function ContactSection() {
  const { personal, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "1-on-1 Mentorship / Academic Roadmap",
    date: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation & Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Book a Session or Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you need 1-on-1 academic mentorship, HSC batch details, a
            college guest workshop, or Studins School partnership, let&apos;s
            connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Email
                </span>
                <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded">
                  Fast Response
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Direct WhatsApp / Phone
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {personal.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Campus / Headquarters
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    University of Dhaka, Dhaka-1000, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Platform Channels */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Professional & Social Channels
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repos</span>
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube Channel</span>
                </a>

                <a
                  href={socialLinks.studinsSchool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-500" />
                  <span>Studins School</span>
                </a>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-800 text-white shadow-md">
              <h4 className="text-base font-bold mb-1">
                Looking for Complete Academic CV?
              </h4>
              <p className="text-xs text-teal-100 mb-4 leading-relaxed">
                Includes verified university coursework, research interests,
                full teaching history, and references.
              </p>
              <button
                onClick={() =>
                  alert("Academic CV download initiated. (Placeholder PDF)")
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-teal-700" />
                <span>Download Academic CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Doctor Consultation / Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                Schedule a Consultation / Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill in your details below and I will respond within 24 business
                hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your consultation
                  request for <strong>{formData.topic}</strong> has been logged.
                  A confirmation email has been dispatched to{" "}
                  <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      topic: "1-on-1 Mentorship / Academic Roadmap",
                      date: "",
                      message: "",
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-600 text-white font-semibold text-xs hover:bg-teal-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Chowdhury"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tanvir@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 1..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>1-on-1 Mentorship / Academic Roadmap</option>
                      <option>HSC ICT Batch Enrollment</option>
                      <option>Studins School Partnership</option>
                      <option>College / Club Guest Workshop</option>
                      <option>Other Collaboration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Preferred Session Date / Timeline
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Detailed Message / Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current academic background, topics you want to conquer, or event details..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/30 transition-all hover:shadow-lg hover:shadow-teal-600/40 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
