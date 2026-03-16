import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="h-10 w-10 text-primary mx-auto mb-6" />
          <blockquote className="text-dark-foreground text-lg sm:text-xl leading-relaxed mb-6 italic">
            "Art's Automotive is the first automotive shop that I have gone to and received not only amazing service, but also honest service. Art and the staff are amazingly helpful and friendly. I have gone through hell and back with my vehicle and with other mechanics and Art and his staff make it all a little more bearable. I can trust Art, and as a woman going to see a mechanic, that says a lot! I will never trust my vehicle with anyone else."
          </blockquote>
          <p className="text-primary font-bold uppercase tracking-wide">— A Satisfied Customer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
