import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import TeachingProfile from "@/components/TeachingProfile";
import Leadership from "@/components/Leadership";
import ProjectsGrid from "@/components/ProjectsGrid";
import EducationSkills from "@/components/EducationSkills";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-500/20 selection:text-teal-700 dark:selection:text-teal-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <TeachingProfile />
        <Leadership />
        <ProjectsGrid />
        <EducationSkills />
        <Achievements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
