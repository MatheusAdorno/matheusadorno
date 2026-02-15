import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FormationSection from "@/components/FormationSection";
import AreasSection from "@/components/AreasSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FormationSection />
      <AreasSection />
      <VisionSection />
      <FooterSection />
    </main>
  );
};

export default Index;
