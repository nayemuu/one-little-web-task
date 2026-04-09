import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import Footer from "@/components/reuseable/Footer/Footer";
import Navbar from "@/components/reuseable/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
