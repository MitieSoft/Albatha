'use client';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

const SustainabilitySection = () => {
  const { t, isRTL } = useLanguage();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger heading animation when section comes into view
            setTimeout(() => {
              setIsHeadingVisible(true);
            }, 300);

            // Trigger content animation after heading
            setTimeout(() => {
              setIsContentVisible(true);
            }, 800);

            // Trigger navigation animation after content
            setTimeout(() => {
              setIsNavigationVisible(true);
            }, 1200);
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsContentVisible(false);
            setIsNavigationVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before section is fully in view
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  const sustainabilityNavItems = [
    t('sustainability.nav.strategy'),
    t('sustainability.nav.reporting'), 
    t('sustainability.nav.governance'),
    t('sustainability.nav.csr')
  ];

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      {/* Header Section - White Background */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`text-center transition-all duration-1500 ease-out transform ${
            isHeadingVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-32 opacity-0 scale-95'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-4 sm:mb-6 leading-tight">
              {t('sustainability.title')}
              <span className="block text-aldar-teal">{t('sustainability.subtitle')}</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Section - Black Background */}
              <div className="bg-[#661244] py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className={`transition-all duration-1200 ease-out transform ${
              isContentVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-32 opacity-0 scale-95'
            }`}>
              <div className="space-y-4 sm:space-y-6 text-white">
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('sustainability.commitment')}
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('sustainability.framework')}
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  {t('sustainability.accountability')}
                </p>
                
                {/* Read More Link */}
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300 font-medium text-sm sm:text-base"
                  >
                    {t('sustainability.readMore')}
                    <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-4 w-4 sm:h-5 sm:w-5`} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Navigation Menu */}
            <div className={`transition-all duration-1200 ease-out transform ${
              isNavigationVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-32 opacity-0 scale-95'
            }`}>
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
                <div className="space-y-0">
                  {sustainabilityNavItems.map((item, index) => (
                    <div key={index}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between py-3 sm:py-4 px-3 sm:px-4 hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <span className="text-[#661244] font-medium text-sm sm:text-base">{item}</span>
                        <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 text-red-500 group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`} />
                      </a>
                      {index < sustainabilityNavItems.length - 1 && (
                        <div className="border-t border-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;