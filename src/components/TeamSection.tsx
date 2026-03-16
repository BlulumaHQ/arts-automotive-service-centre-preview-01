import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-foreground text-3xl lg:text-4xl mb-6 uppercase">
              Our <span className="text-primary">Team</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                Our automotive repair technicians will get your vehicle back on the road fast. With over 28 years of experience, Art and his crew are committed to providing honest and quality service every time.
              </p>
              <p>
                We specialize in good & honest auto repair. Our commitment to customer satisfaction has made us one of Vancouver's most trusted automotive service centres.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">We Accept</p>
              <div className="flex items-center gap-3">
                <img src="/images/cc-visa.jpg" alt="Visa" className="h-8" />
                <img src="/images/cc-mc.jpg" alt="Mastercard" className="h-8" />
                <img src="/images/interac.png" alt="Interac" className="h-8" />
                <img src="/images/cc-cash.jpg" alt="Cash" className="h-8" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/team.jpg"
              alt="Art's Automotive team"
              className="rounded-lg shadow-card w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
