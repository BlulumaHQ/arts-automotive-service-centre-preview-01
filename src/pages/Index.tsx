import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonial from "@/components/Testimonial";
import TeamSection from "@/components/TeamSection";
import LeadCapture from "@/components/LeadCapture";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesGrid limit={6} />
      <Testimonial />
      <TeamSection />
      <LeadCapture />
      <CtaBanner />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
