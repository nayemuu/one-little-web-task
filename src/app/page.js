import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import TrustedSection from "@/components/pages/Home/TrustedSection/TrustedSection";
import Footer from "@/components/reuseable/Footer/Footer";
import Navbar from "@/components/reuseable/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <Footer />
    </div>
  );
}
