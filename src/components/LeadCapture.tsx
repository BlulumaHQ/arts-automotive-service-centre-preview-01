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
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent",
      description: "Thank you! We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="font-display text-secondary-foreground text-4xl mb-4 text-center">Need a Quote?</h2>
          <p className="text-secondary-foreground/80 font-sans text-lg text-center mb-10">
            Contact us today for reliable auto repair services.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12 font-sans"
            />
            <Input
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12 font-sans"
            />
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="bg-secondary-foreground/10 border-0 text-secondary-foreground h-12 font-sans [&>span]:text-secondary-foreground/50 data-[state=open]:text-secondary-foreground">
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
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary-foreground/10 border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 min-h-[100px] font-sans"
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
