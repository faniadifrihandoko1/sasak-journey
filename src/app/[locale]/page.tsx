import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularDestinations from "@/components/PopularDestinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <PopularDestinations />
    </>
  );
}
