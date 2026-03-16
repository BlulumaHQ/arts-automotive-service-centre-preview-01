import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-dark text-dark-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4 text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              675 Clark Drive, Vancouver, BC V5L 3H9
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6048798555" className="flex items-center gap-1.5 text-primary font-bold hover:text-primary/80 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              (604) 879-8555
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white shadow-card">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Art's Automotive Service Centre" className="h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:6048798555" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border pb-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="w-full mt-3" asChild>
              <a href="tel:6048798555" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call: (604) 879-8555
              </a>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
