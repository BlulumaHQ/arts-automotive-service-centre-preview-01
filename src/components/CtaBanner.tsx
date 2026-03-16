import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-primary rounded-lg p-10 lg:p-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-primary-foreground text-3xl lg:text-4xl mb-4 uppercase">
            Need Auto Repair?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            It's always a bad day when your car breaks down. Let Art and his crew get you back on the road fast.
          </p>
          <Button
            size="xl"
            className="bg-dark text-dark-foreground hover:bg-dark/90 hover:scale-[1.02] active:scale-[0.98] font-bold text-lg"
            asChild
          >
            <a href="tel:6048798555" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call: (604) 879-8555
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
