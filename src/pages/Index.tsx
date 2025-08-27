
import Hero from "@/components/Hero";
import Description from "@/components/Description"; 
import WhySIP from "@/components/WhySIP";
import CTAButton from "@/components/CTAButton";
import MemesSection from "@/components/MemesSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page is rendering");
  
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Description />
      <CTAButton />
      <MemesSection />
      <Footer />
    </div>
  );
};

export default Index;
