
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      id: "1111398030",
      title: "Creative Project",
      embedUrl: "https://player.vimeo.com/video/1111398030"
    },
    {
      id: "1100959227",
      title: "Brand Video Campaign",
      embedUrl: "https://player.vimeo.com/video/1100959227"
    },
    {
      id: "1100959279",
      title: "Product Launch Video",
      embedUrl: "https://player.vimeo.com/video/1100959279"
    },
    {
      id: "1100959364",
      title: "Social Media Content",
      embedUrl: "https://player.vimeo.com/video/1100959364"
    },
    {
      id: "1111400640",
      title: "Premium Video Content",
      embedUrl: "https://player.vimeo.com/video/1111400640"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section id="portfolio" ref={portfolioRef} className="py-24 relative">
      {/* Top gradient overlay to continue the transition from services section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <span className="font-medium">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our recent work and see how we've helped creators and businesses transform their content.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-300 ease-out">
            <div className="relative overflow-hidden">
              {/* Carousel container with smooth transitions */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-700/20 rounded-3xl overflow-hidden border border-purple-500/20 backdrop-blur-sm transition-all duration-500 ease-out">
                      <div className="aspect-video">
                        <iframe
                          src={`${video.embedUrl}?autoplay=0&muted=1`}
                          title={video.title}
                          className="w-full h-full rounded-3xl"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows with smooth hover transitions */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 hover:border-purple-500/50 rounded-full flex items-center justify-center text-purple-300 hover:text-purple-100 backdrop-blur-md transition-all duration-300 ease-out hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 hover:border-purple-500/50 rounded-full flex items-center justify-center text-purple-300 hover:text-purple-100 backdrop-blur-md transition-all duration-300 ease-out hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Dots indicator with smooth transitions */}
        <div className="text-center mt-12">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-500 ease-out">
            <div className="flex justify-center space-x-3">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                    index === currentIndex 
                      ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50' 
                      : 'bg-purple-400/30 hover:bg-purple-400/60 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Get Started Button */}
        <div className="text-center mt-16">
          <div className="opacity-0 translate-y-8 [.animate-fade-in_&]:opacity-100 [.animate-fade-in_&]:translate-y-0 transition-all duration-1000 delay-700 ease-out">
            <a 
              href="https://calendly.com/nickstudios110/nick-studios-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
