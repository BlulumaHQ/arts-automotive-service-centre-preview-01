import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-auto.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Art's Automotive Service Centre shop interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-dark-foreground text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight uppercase">
            Good & Honest <span className="text-primary">Auto Repair</span> in Vancouver
          </h1>
          <p className="text-dark-foreground/80 text-lg sm:text-xl mb-8 max-w-2xl font-medium">
            For over 28 years Art's Automotive has been taking care of all their customer's vehicle repair needs. We fix it right the first time!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:6048798555" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (604) 879-8555
              </a>
            </Button>
            <Button variant="hero-ghost" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
