
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-4">Nick Studios</h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Professional video editing services that transform your content into compelling stories that captivate and convert.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">hello@nickstudios.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Video Production</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Post-Production</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Motion Graphics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Audio Enhancement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 Nick Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
