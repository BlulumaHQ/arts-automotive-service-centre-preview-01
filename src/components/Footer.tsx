import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Art's Auto" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="font-sans text-sm text-background/70">
              Professional automotive repair services in Winnipeg since 1985.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-background mb-4">Services</h4>
            <ul className="space-y-2 font-sans text-sm text-background/70">
              <li>Engine Repair</li>
              <li>Brake Service</li>
              <li>Oil Changes</li>
              <li>Transmission Service</li>
              <li>Electrical Diagnostics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link to="/" className="text-background/70 hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-background transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-background mb-4">Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Winnipeg, MB
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:2045868347" className="hover:text-background transition-colors">(204) 586-8347</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center font-sans text-sm text-background/50">
          © 2023 Art's Auto. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
