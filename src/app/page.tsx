import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import PrototypePreviewSection from "@/components/PrototypePreviewSection";
import ContactCta from "@/components/ContactCta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex flex-1 flex-col gap-28 pb-24 md:gap-32">
        <HeroSection />
        <ProjectsShowcase />
        <PrototypePreviewSection />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
