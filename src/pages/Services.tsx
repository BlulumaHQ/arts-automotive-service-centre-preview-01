import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="font-display text-foreground text-5xl mb-4">Our Services</h1>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
          </motion.div>
        </div>
      </section>
      <ServicesGrid showHeading={false} />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default Services;
