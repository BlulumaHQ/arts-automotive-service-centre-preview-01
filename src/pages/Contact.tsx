import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Engine Repair", "Brake Service", "Oil Changes", "Transmission Service",
  "Electrical Diagnostics", "Cooling System Service", "Suspension Repair",
  "Exhaust System Repair", "Air Conditioning Service", "Preventive Maintenance", "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you! We'll get back to you soon." });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

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
            <h1 className="font-display text-foreground text-5xl mb-4">Get In Touch</h1>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl">
              Contact us today for reliable auto repair services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h2 className="font-display text-foreground text-3xl mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 font-sans"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 font-sans"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 font-sans"
                  />
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 font-sans">
                      <SelectValue placeholder="Service Needed" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] font-sans"
                />
                <Button variant="hero" size="xl" type="submit">
                  Send Request
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-md p-3">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground">Phone</div>
                      <a href="tel:2045868347" className="font-sans text-muted-foreground hover:text-primary transition-colors">(204) 586-8347</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-md p-3">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground">Location</div>
                      <div className="font-sans text-muted-foreground">Winnipeg, MB</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-md p-3">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground">Call Us</div>
                      <div className="font-sans text-muted-foreground">Call us at (204) 586-8347</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
