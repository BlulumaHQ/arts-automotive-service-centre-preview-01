import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({ title: "Message Sent", description: "Thank you! We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-secondary-foreground text-4xl lg:text-5xl mb-4 uppercase">Contact Us</h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl">
              Give us a call or send us a message. We'll get you back on the road fast.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-foreground text-2xl lg:text-3xl mb-8 uppercase">Send Us a <span className="text-primary">Message</span></h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12">
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
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px]"
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
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 uppercase">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-md p-3">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm uppercase">Phone</div>
                      <a href="tel:6048798555" className="text-muted-foreground hover:text-primary transition-colors">(604) 879-8555</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-md p-3">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm uppercase">Address</div>
                      <div className="text-muted-foreground">675 Clark Drive<br />Vancouver, BC V5L 3H9</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-surface">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5!2d-123.0715!3d49.2655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d46b9e3e9d%3A0x5c2b3e6d5f4e5a1a!2s675%20Clark%20Dr%2C%20Vancouver%2C%20BC%20V5L%203H9!5e0!3m2!1sen!2sca!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Art's Automotive Service Centre Location"
          className="w-full"
        />
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
