
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Zap } from 'lucide-react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/nickstudios110/nick-studios-meeting', '_blank');
  };

  return (
    <section id="contact" ref={ctaRef} className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-green-500 rounded-full px-4 py-2 mb-8">
            <Zap size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">Limited Spots Available</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.9]">
            Ready to 10x Your
            <br />
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Content ROI?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Stop leaving money on the table. Let's turn your content into a revenue-generating machine.
          </p>
          
          <div className="flex justify-center items-center mb-16">
            <button 
              onClick={handleBookCall}
              className="bg-white text-black px-10 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all duration-200 shadow-2xl flex items-center gap-3 group min-w-[280px]"
            >
              <Calendar size={24} />
              Book Strategy Call
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">24hrs</div>
                <div className="text-sm text-muted-foreground font-medium">From Brief to Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
