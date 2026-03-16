import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-auto.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-medium">
              Quality Service Since 1985
            </div>
            <h1 className="font-display text-foreground" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
              Professional Auto Repair Services You Can Trust
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl font-sans">
              Quality Winnipeg service since 1985. Experienced technicians, fair pricing, and complete automotive care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:2045868347" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="hero-ghost" size="xl" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  View Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="rounded-lg overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Professional auto repair diagnostic equipment at Art's Auto"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
