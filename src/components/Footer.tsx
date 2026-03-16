import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <img src="/images/logo.png" alt="Art's Automotive Service Centre" className="h-10 w-auto mb-4" />
            <p className="text-sm text-dark-foreground/70">
              Professional automotive repair services in Vancouver since 1996. Good & honest auto repair you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-dark-foreground mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-dark-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-dark-foreground/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-dark-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-dark-foreground mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                675 Clark Drive, Vancouver, BC V5L 3H9
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:6048798555" className="hover:text-primary transition-colors font-bold">(604) 879-8555</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-dark-foreground/10 text-center text-xs text-dark-foreground/40">
          © {currentYear} Art's Automotive Service Centre. All rights reserved. | Web Design by{" "}
          <a
            href="https://sonykundesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Sonykun Design
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
