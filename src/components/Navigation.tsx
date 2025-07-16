import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    window.open('https://calendly.com/nickstudios110/nick-studios-meeting', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/b539ad7a-9531-4029-a904-a052428d4da3.png" 
              alt="Nick Studios" 
              className="h-32 w-auto"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium"
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium"
              >
                Portfolio
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleSmoothScroll(e, '#process')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium"
              >
                Process
              </a>
              <button 
                onClick={handleGetStarted}
                className="btn-white-bevel-glow text-background px-8 py-3 rounded-full text-base font-bold"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
          <div className="px-6 pt-6 pb-8 space-y-6">
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleSmoothScroll(e, '#process')}
              className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium"
            >
              Process
            </a>
            <button 
              onClick={handleGetStarted}
              className="btn-white-bevel-glow text-background px-8 py-4 rounded-full text-lg font-bold text-center mt-6 w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
