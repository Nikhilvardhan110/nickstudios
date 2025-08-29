
import React, { useEffect, useRef } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStartGrowingClick = () => {
    window.open('https://calendly.com/nickstudios110/nick-studios-meeting', '_blank');
  };

  const handleViewWorkClick = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="pt-20 pb-12 lg:pt-28 lg:pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-tight">
                Your YouTube,
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                OUR Focus.
              </h1>
            </div>
            
            <div className="max-w-5xl mx-auto mb-6">
              <img 
                src="/lovable-uploads/73bbb36a-6bfa-4eb6-866b-1bddcb049507.png" 
                alt="YouTube Analytics Dashboard showing growth in views, watch time, and subscribers"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={handleStartGrowingClick}
                className="btn-green-bevel-glow text-white px-8 py-5 rounded-full text-lg font-semibold flex items-center gap-2 group"
              >
                Start Growing Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleViewWorkClick}
                className="btn-bevel-glow border-2 border-border text-foreground px-8 py-5 rounded-full text-lg font-semibold backdrop-blur-sm"
              >
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">200+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">24hrs</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Turnaround Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">98%</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">10M+</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Views Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
