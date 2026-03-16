import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import LeadCapture from "@/components/LeadCapture";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid limit={6} />
      <AboutSection />
      <LeadCapture />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Index;
