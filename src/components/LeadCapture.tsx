import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Engine Repair",
  "Brake Service",
  "Oil Changes",
  "Transmission Service",
  "Electrical Diagnostics",
  "Cooling System Service",
  "Suspension Repair",
  "Exhaust System Repair",
  "Air Conditioning Service",
  "Preventive Maintenance",
  "Other",
];

const LeadCapture = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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
        toast({ title: "Request Sent", description: "Thank you! We'll get back to you as soon as possible." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
    }
  };

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-secondary-foreground text-3xl lg:text-4xl mb-4 text-center uppercase">
            Get a <span className="text-primary">Quote</span>
          </h2>
          <p className="text-secondary-foreground/80 text-base text-center mb-10">
            Contact us today for reliable auto repair services.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12"
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12"
            />
            <Input
              placeholder="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12"
            />
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="bg-secondary-foreground/10 border-0 text-secondary-foreground h-12 [&>span]:text-secondary-foreground/50 data-[state=open]:text-secondary-foreground">
                <SelectValue placeholder="Service Needed" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 min-h-[100px]"
            />
            <Button variant="cta" size="xl" type="submit" className="w-full">
              Send Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
