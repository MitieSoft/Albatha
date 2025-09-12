'use client';
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

const MoreThanYouKnowSection = () => {
  const { t, isRTL } = useLanguage();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    // Responsive animation timings based on screen size
    const getAnimationTimings = () => {
      if (window.innerWidth <= 640) {
        // Mobile: Faster animations for better mobile experience
        return {
          headingDelay: 200,
          navigationDelay: 600,
          cardsDelay: 1000,
          threshold: 0.2, // Trigger earlier on mobile
          rootMargin: '0px 0px -50px 0px'
        };
      } else if (window.innerWidth <= 1024) {
        // Tablet: Medium animations
        return {
          headingDelay: 300,
          navigationDelay: 800,
          cardsDelay: 1200,
          threshold: 0.25,
          rootMargin: '0px 0px -75px 0px'
        };
      } else {
        // Desktop: Standard animations
        return {
          headingDelay: 400,
          navigationDelay: 1000,
          cardsDelay: 1400,
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        };
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timings = getAnimationTimings();
            
            // Trigger heading animation when section comes into view
            setTimeout(() => {
              setIsHeadingVisible(true);
            }, timings.headingDelay);

            // Trigger navigation animation after heading
            setTimeout(() => {
              setIsNavigationVisible(true);
            }, timings.navigationDelay);

            // Trigger cards animation after navigation
            setTimeout(() => {
              setIsCardsVisible(true);
            }, timings.cardsDelay);
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsNavigationVisible(false);
            setIsCardsVisible(false);
          }
        });
      },
      {
        threshold: getAnimationTimings().threshold,
        rootMargin: getAnimationTimings().rootMargin
      }
    );

    // Handle resize events for dynamic timing adjustments
    const handleResize = () => {
      // Re-observe with new timings if section is currently visible
      if (currentSection && isHeadingVisible) {
        observer.disconnect();
        observer.observe(currentSection);
      }
    };

    window.addEventListener('resize', handleResize);

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isHeadingVisible]);

  const projects = [
    {
      id: 1,
      title: t('moreThanYouKnow.projects.project1.title'),
              image: "/assets/4.jpg",
      description: t('moreThanYouKnow.projects.project1.description')
    },
    {
      id: 2,
      title: t('moreThanYouKnow.projects.project2.title'),
              image: "/assets/5.jpg",
      description: t('moreThanYouKnow.projects.project2.description')
    },
    {
      id: 3,
      title: t('moreThanYouKnow.projects.project3.title'),
              image: "/assets/6.jpg",
      description: t('moreThanYouKnow.projects.project3.description')
    },
    {
      id: 4,
      title: t('moreThanYouKnow.projects.project4.title'),
              image: "/assets/7.jpg",
      description: t('moreThanYouKnow.projects.project4.description')
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden " ref={sectionRef}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0 mb-8 sm:mb-12 md:mb-16">
          {/* Left Side - Main Headline */}
          <div className={`max-w-full  lg:max-w-2xl transition-all duration-1500 ease-out transform ${
            isHeadingVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : '-translate-x-16 sm:-translate-x-24 lg:-translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-4 sm:mb-6 leading-tight">
              {t('moreThanYouKnow.title')}
            </h2>
          </div>

          {/* Right Side - Navigation Controls */}
          <div className={`flex items-center justify-center lg:justify-end gap-4 sm:gap-6 transition-all duration-1200 ease-out transform ${
            isNavigationVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : 'translate-x-16 sm:translate-x-24 lg:translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            {/* Page Indicator */}
            <div className="flex items-center gap-2">
                                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#661244]">{t('moreThanYouKnow.slider.currentPage')}</span>
              <span className="text-gray-400 text-base sm:text-lg">{t('moreThanYouKnow.slider.totalPages')}</span>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors hover:shadow-lg hover:scale-105 transform duration-300">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors hover:shadow-lg hover:scale-105 transform duration-300">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Cards Container */}
        <div className="relative">
          {/* Subtle Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-AlBatha -teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex-shrink-0 w-64 xs:w-72 sm:w-80 h-64 xs:h-72 sm:h-80 md:h-96 relative group cursor-pointer transition-all duration-1000 ease-out transform ${
                  isCardsVisible 
                    ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
                    : 'translate-x-32 opacity-0 scale-90 rotate-3'
                }`}
                style={{ 
                  transform: isCardsVisible 
                    ? 'translateX(0) translateY(0)' 
                    : 'translateX(32px) translateY(0)',
                  zIndex: projects.length - index,
                  transitionDelay: `${index * 300}ms`
                }}
              >
                {/* Card Image */}
                <div className="relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Enhanced Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500"></div>
                  
                  {/* Content Overlay with Enhanced Animations */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-AlBatha -teal transition-colors duration-500">
                      {project.title}
                    </h3>
                    <a href="#" className="inline-flex items-center text-white font-medium hover:text-AlBatha -teal transition-all duration-500 group-hover:translate-x-1 text-sm sm:text-base">
                      {t('moreThanYouKnow.learnMore')} <span className="text-red-500 ml-1 sm:ml-2 group-hover:text-AlBatha -teal transition-colors duration-500 group-hover:translate-x-1 inline-block">→</span>
                    </a>
                  </div>
                  
                  {/* Subtle Border Glow Effect */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-AlBatha -teal/30 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanYouKnowSection;