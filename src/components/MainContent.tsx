import { Navbar } from "../sections/Navbar";
import { HeroSection } from "../sections/HeroSection";
import { AboutContent } from "../sections/AboutSection/components/AboutContent";
import { SkillsSection } from "../sections/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ServicesSection } from "../sections/ServicesSection";
import { AchievementsSection } from '../sections//AcheivementsSection';
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";

export const MainContent = () => {
  return (
    <div className="bg-neutral-900 box-border caret-transparent min-h-[1000px]">
      <Navbar />
      <HeroSection />
      <AboutContent />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};