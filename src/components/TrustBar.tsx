import { motion } from "framer-motion";
import { Award, Users, DollarSign, Clock } from "lucide-react";

const trustItems = [
  { icon: Award, label: "28+ Years Experience" },
  { icon: Users, label: "BCCAA Approved" },
  { icon: DollarSign, label: "Honest & Fair Pricing" },
  { icon: Clock, label: "Fast Turnaround" },
];

const TrustBar = () => {
  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center py-2">
              <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
