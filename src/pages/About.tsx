import { motion } from "framer-motion";
import { Award, Users, DollarSign, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const stats = [
  { icon: Award, value: "35+", label: "Years of Experience" },
  { icon: Users, value: "1000s", label: "Happy Customers" },
  { icon: Wrench, value: "10+", label: "Services Offered" },
  { icon: DollarSign, value: "Fair", label: "Honest Pricing" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="font-display text-foreground text-5xl mb-4">About Art's Auto</h1>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Quality Service Since 1985
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-[65ch] space-y-6 text-muted-foreground font-sans text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p>
              At Art's Auto, we've been providing Winnipeg with reliable automotive repair services for over 35 years. Our experienced team of certified technicians is committed to keeping your vehicle running safely and efficiently.
            </p>
            <p>
              We understand that car troubles can be stressful and inconvenient. That's why we work hard to provide honest, affordable solutions that get you back on the road quickly.
            </p>
            <p>
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
            <p>
              Our commitment to quality workmanship and customer satisfaction has made us a trusted name in Winnipeg's automotive repair industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg shadow-card p-8 text-center">
                <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="font-display text-3xl text-foreground mb-1">{stat.value}</div>
                <div className="font-sans text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default About;
