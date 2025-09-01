import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    window.open('https://calendly.com/nickstudios110/nick-studios-meeting', '_blank');
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/nickstudios110/nick-studios-meeting', '_blank');
  };

  const plans = [
    {
      name: "Pack 1",
      price: "$979",
      period: "/month",
      description: "Perfect for creators getting started with professional editing",
      features: [
        "2 videos per month",
        "2 thumbnails",
        "Full management"
      ],
      popular: false
    },
    {
      name: "Pack 2",
      price: "$1,275",
      period: "/month",
      description: "Our most popular plan for growing creators",
      features: [
        "4 videos per month",
        "4 thumbnails",
        "Full management"
      ],
      popular: true
    },
    {
      name: "Pack 3",
      price: "$2,049",
      period: "/month",
      description: "Complete solution for established creators",
      features: [
        "6 videos per month",
        "6 shorts per month",
        "6 thumbnails per month",
        "Full management"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" ref={pricingRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Choose Your <span className="font-medium text-[#588157]">Growth Plan</span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 relative hover:scale-110 hover:z-10 transform-gpu ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#588157] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-card border border-border rounded-2xl p-8 h-full transition-all duration-0 hover:shadow-xl ${
                plan.popular ? 'border-[#588157]/50 shadow-lg shadow-[#588157]/10' : ''
              }`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={handleGetStarted}
                  className={`w-full transition-all duration-0 ${
                    plan.popular 
                      ? 'btn-gradient-bevel-glow text-white' 
                      : 'btn-bevel-glow bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Custom plans are available. <button onClick={handleBookCall} className="text-foreground underline hover:no-underline cursor-pointer">Book a call to enquire.</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
