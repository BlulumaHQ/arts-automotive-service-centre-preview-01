import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/shop-exterior.png"
              alt="Art's Automotive Service Centre exterior"
              className="rounded-lg shadow-card w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-foreground text-3xl lg:text-4xl mb-6 uppercase">
              About <span className="text-primary">Art's Automotive</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                For over 28 years Art's Automotive has been taking care of all their customer's vehicle repair needs. We can proudly say that if you try us once you will never take your car anywhere else.
              </p>
              <p>
                It's always a bad day when your car breaks down, we can help by fixing it right the first time! Give us a call at (604) 879-8555 for an estimate or to get additional information about our services.
              </p>
              <p>
                Let Art and his crew get you back on the road fast.
              </p>
            </div>

            <div className="mt-8">
              <img
                src="/images/bccaa-approved.jpg"
                alt="BCCAA Approved Auto Repair Services"
                className="h-20 w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
