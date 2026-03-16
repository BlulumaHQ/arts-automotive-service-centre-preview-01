import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-secondary-foreground text-4xl lg:text-5xl mb-4 uppercase">Our Services</h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl">
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
          </motion.div>
        </div>
      </section>
      <ServicesGrid showHeading={false} />
      <LeadCapture />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
