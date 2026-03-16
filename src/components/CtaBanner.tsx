import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="bg-card rounded-lg shadow-card p-10 lg:p-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="font-display text-foreground text-3xl lg:text-4xl mb-4">
            Schedule Your Appointment Today
          </h2>
          <p className="text-muted-foreground font-sans text-lg mb-8 max-w-xl mx-auto">
            We understand that car troubles can be stressful and inconvenient. That's why we work hard to provide honest, affordable solutions that get you back on the road quickly.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="tel:2045868347" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Us: (204) 586-8347
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
