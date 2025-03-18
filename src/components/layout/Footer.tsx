
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="elegant-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium">Shiran Itzhaki</h3>
            <p className="text-muted-foreground max-w-xs">
              Capturing precious moments and enhancing natural beauty through the art of photography and makeup.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-muted-foreground" />
                <a 
                  href="mailto:contact@shiranitzhaki.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@shiranitzhaki.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-muted-foreground" />
                <a 
                  href="tel:+12125551234" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram size={18} className="text-muted-foreground" />
                <a 
                  href="https://instagram.com/shiranitzhaki" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  @shiranitzhaki
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Shiran Itzhaki. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://instagram.com/shiranitzhaki" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
