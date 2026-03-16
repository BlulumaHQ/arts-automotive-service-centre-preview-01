import { motion } from "framer-motion";
import { Award, Users, DollarSign, MapPin } from "lucide-react";

const trustItems = [
  { icon: Award, label: "35+ Years Experience" },
  { icon: Users, label: "Certified Technicians" },
  { icon: DollarSign, label: "Honest & Fair Pricing" },
  { icon: MapPin, label: "Winnipeg Owned & Operated" },
];

const TrustBar = () => {
  return (
    <section className="bg-surface py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="font-sans text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
