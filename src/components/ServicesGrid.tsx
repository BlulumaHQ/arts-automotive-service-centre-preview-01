import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Disc, Droplets, Cog, Zap, Thermometer, Car, Wind, Snowflake, CalendarCheck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Engine Repair", description: "Complete engine diagnostics and repair" },
  { icon: Disc, title: "Brake Service", description: "Brake inspection, repair and replacement" },
  { icon: Droplets, title: "Oil Changes", description: "Regular oil changes and filter replacement" },
  { icon: Cog, title: "Transmission Service", description: "Transmission diagnostics and service" },
  { icon: Zap, title: "Electrical Diagnostics", description: "Electrical system troubleshooting" },
  { icon: Thermometer, title: "Cooling System Service", description: "Radiator and cooling system maintenance" },
  { icon: Car, title: "Suspension Repair", description: "Shock and strut replacement" },
  { icon: Wind, title: "Exhaust System Repair", description: "Muffler and exhaust system repair" },
  { icon: Snowflake, title: "Air Conditioning Service", description: "A/C service and repair" },
  { icon: CalendarCheck, title: "Preventive Maintenance", description: "Scheduled maintenance services" },
];

interface ServicesGridProps {
  limit?: number;
  showHeading?: boolean;
}

const ServicesGrid = ({ limit, showHeading = true }: ServicesGridProps) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {showHeading && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h2 className="font-display text-foreground text-4xl mb-4">Complete Automotive Care</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <service.icon className="h-8 w-8 text-secondary mb-4" strokeWidth={2} />
              <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-sans text-sm mb-4">{service.description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-primary font-sans text-sm font-medium hover:gap-2 transition-all duration-200"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-secondary font-sans font-semibold text-base hover:gap-3 transition-all duration-200"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
