import AirnbnAssistentPricingSection from "@/components/pages/Home/AirnbnAssistentPricingSection/AirnbnAssistentPricingSection";
import FrequentlyAskedQuestionsSection from "@/components/pages/Home/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import GettingStartedSection from "@/components/pages/Home/GettingStartedSection/GettingStartedSection";
import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import OurServiceSection from "@/components/pages/Home/OurServiceSection/OurServiceSection";
import PatnerSection from "@/components/pages/Home/PatnerSection/PatnerSection";
import TrustedSection from "@/components/pages/Home/TrustedSection/TrustedSection";
import Footer from "@/components/reuseable/Footer/Footer";
import Navbar from "@/components/reuseable/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <OurServiceSection />
      <AirnbnAssistentPricingSection />
      <PatnerSection />
      <GettingStartedSection />
      <FrequentlyAskedQuestionsSection />
      <Footer />
    </div>
  );
}
