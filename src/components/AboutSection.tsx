import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-[65ch] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans text-sm font-medium mb-8">
            Since 1985
          </div>
          <h2 className="font-display text-foreground text-4xl mb-6">About Art's Auto</h2>
          <div className="space-y-4 text-muted-foreground font-sans text-lg text-left">
            <p>
              At Art's Auto, we've been providing Winnipeg with reliable automotive repair services for over 35 years. Our experienced team of certified technicians is committed to keeping your vehicle running safely and efficiently.
            </p>
            <p>
              We understand that car troubles can be stressful and inconvenient. That's why we work hard to provide honest, affordable solutions that get you back on the road quickly.
            </p>
            <p>
              Our commitment to quality workmanship and customer satisfaction has made us a trusted name in Winnipeg's automotive repair industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
