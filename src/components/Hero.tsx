
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
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border/50">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Trusted by many creators</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[0.9] mb-2 tracking-tight">
              Transform Your Content Into
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-green-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Sales Machines
              </span>
            </h1>
          </div>
          
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-300">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Professional video editing that doesn't just look good—it converts viewers into paying customers.
            </p>
          </div>
          
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={handleStartGrowingClick}
                className="btn-white-bevel-glow text-black px-8 py-5 rounded-full text-lg font-semibold flex items-center gap-2 group"
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
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">48hrs</div>
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
