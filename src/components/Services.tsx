import React, { useEffect, useRef } from 'react';
import { Film, Image, Zap, Target } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Sales-focused video editing that hooks viewers in the first 3 seconds and keeps them watching until they buy.",
      gradient: "bg-[#588157]",
      textColor: "text-white"
    },
    {
      icon: Image,
      title: "Thumbnail Design", 
      description: "Click-worthy thumbnails designed using psychology and data to maximize your click-through rates.",
      gradient: "bg-[#588157]",
      textColor: "text-white"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "24-hour delivery guaranteed. We understand that speed = more content = more revenue for your business.",
      gradient: "bg-[#588157]",
      textColor: "text-white"
    },
    {
      icon: Target,
      title: "Conversion Focus",
      description: "Every edit is optimized for one thing: turning viewers into customers. We track metrics, not just views.",
      gradient: "bg-[#588157]",
      textColor: "text-white"
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              We don't just edit videos. We create conversion machines that turn your content into revenue.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`${service.gradient} transition-all duration-500 rounded-3xl p-8 h-full hover:scale-[1.02] shadow-xl hover:shadow-2xl`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                  {service.title}
                </h3>
                <p className={`${service.textColor} leading-relaxed text-lg opacity-90`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
