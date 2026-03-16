import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Disc, Droplets, Cog, Zap, Thermometer, Car, Wind, Snowflake, CalendarCheck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Engine Repair", description: "Complete engine diagnostics and repair services" },
  { icon: Disc, title: "Brake Service", description: "Brake inspection, repair and replacement" },
  { icon: Droplets, title: "Oil Changes", description: "Regular oil changes and filter replacement" },
  { icon: Cog, title: "Transmission Service", description: "Transmission diagnostics and service" },
  { icon: Zap, title: "Electrical Diagnostics", description: "Electrical system troubleshooting and repair" },
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
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        {showHeading && (
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-foreground text-3xl lg:text-4xl mb-4 uppercase">Our <span className="text-primary">Services</span></h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <div className="bg-secondary/10 rounded-lg p-3 w-fit mb-4">
                <service.icon className="h-7 w-7 text-secondary" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all duration-200"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-secondary font-bold text-base uppercase tracking-wide hover:gap-3 transition-all duration-200"
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
