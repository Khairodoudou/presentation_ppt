import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblematicSection from "@/components/ProblematicSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ValueSection from "@/components/ValueSection";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblematicSection />
        <ObjectivesSection />
        <ValueSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
}
