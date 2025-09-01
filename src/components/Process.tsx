
import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileEdit, Upload, CheckCircle } from 'lucide-react';

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);

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

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We start with a detailed discussion about your vision, goals, and requirements to ensure we understand your project perfectly."
    },
    {
      icon: FileEdit,
      title: "Editing",
      description: "Our expert editors work their magic, crafting your story with precision, creativity, and attention to every detail."
    },
    {
      icon: Upload,
      title: "Review",
      description: "We deliver a draft for your review and incorporate your feedback to ensure the final product exceeds expectations."
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Final delivery in your preferred format, optimized for your intended platform and ready to captivate your audience."
    }
  ];

  return (
    <section id="process" ref={processRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              How It <span className="font-medium">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 text-center group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-border">
                  <step.icon size={36} className="text-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#588157] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
