import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Products from "@/components/Products";
import CropShowcase from "@/components/CropShowcase";
import Audiences from "@/components/Audiences";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <Products />
      <CropShowcase />
      <Audiences />
      <Trust />
      <Contact />
    </>
  );
}
