'use client';
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FileText, BarChart3, Lock, Volume2 } from "lucide-react";

const LiveLifeSection = () => {
  const { t, isRTL } = useLanguage();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    // Responsive animation timings based on screen size
    const getAnimationTimings = () => {
      if (window.innerWidth <= 640) {
        // Mobile: Faster animations for better mobile experience
        return {
          headingDelay: 150,
          cardsDelay: 600,
          threshold: 0.15, // Trigger earlier on mobile
          rootMargin: '0px 0px -30px 0px'
        };
      } else if (window.innerWidth <= 1024) {
        // Tablet: Medium animations
        return {
          headingDelay: 250,
          cardsDelay: 800,
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        };
      } else {
        // Desktop: Standard animations
        return {
          headingDelay: 350,
          cardsDelay: 1000,
          threshold: 0.25,
          rootMargin: '0px 0px -75px 0px'
        };
      }
    };

    // Handle resize events for dynamic timing adjustments
    const handleResize = () => {
      // Re-observe with new timings if section is currently visible
      if (currentSection && isHeadingVisible) {
        observer.disconnect();
        observer.observe(currentSection);
      }
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timings = getAnimationTimings();
            
            // Trigger heading animation when section comes into view
            setTimeout(() => {
              setIsHeadingVisible(true);
            }, timings.headingDelay);

            // Trigger cards animation after heading animation
            setTimeout(() => {
              setIsCardsVisible(true);
            }, timings.cardsDelay);
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsCardsVisible(false);
          }
        });
      },
      {
        threshold: getAnimationTimings().threshold,
        rootMargin: getAnimationTimings().rootMargin
      }
    );

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

  return (
    <section className="py-12 sm:py-16 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10" ref={sectionRef}>
        {/* Hero Section - Two Column Layout */}
        <div className="grid lg:grid-cols-4">
          {/* Left Column - Main Heading */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'} transition-all duration-700 ease-out transform ${isHeadingVisible ? 'translate-y-0 opacity-100 scale-100 rotate-0' : '-translate-y-16 opacity-0 scale-90 rotate-1'}`}>
            <h2 className="text-[#661244] text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-AlBatha -navy mb-4 sm:mb-6 md:mr-2 lg:mr-4 leading-tight">
              <span className="block text-[#661244]">{t('liveLife.title')}</span>
            </h2>
          </div>
          {/* Right Column - Description */}
          <div className={`lg:col-span-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-sm sm:text-base md:text-lg text-[#1c1c1c] leading-relaxed mb-4">
              <span className="block">{t('liveLife.description1')}</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#1c1c1c] leading-relaxed">
              <span className="block">{t('liveLife.description2')}</span>
            </p>
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white sm md:py-16 mb-8 sm:mb-12">
          <div className="mb-16">
            <h3 className="text-5xl sm:text-5xl font-bold text-[#661244] mb-6 leading-tight">
              {t('liveLife.reports.title')}
            </h3>
          </div>
          
          {/* Clean Minimalist Report Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Report Card 1 - Press Release */}
            <div className={`bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out transform hover:scale-[1.02] ${isCardsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <h4 className="font-bold text-[#661244] mb-4 text-base leading-tight text-center">
                {t('liveLife.reports.pressRelease.title')}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-[#661244] font-medium">{t('liveLife.reports.pressRelease.action')}</span>
                <FileText className="w-4 h-4 text-red-500" />
              </div>
            </div>

            {/* Report Card 2 - Presentation */}
            <div className={`bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out transform hover:scale-[1.02] ${isCardsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`} style={{ transitionDelay: '100ms' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-8 h-8 text-gray-600" />
                </div>
                {/* <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Presentation
                </div> */}
              </div>
              <h4 className="font-bold text-[#661244] mb-4 text-base leading-tight text-center">
                {t('liveLife.reports.presentation.title')}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-[#661244] font-medium">{t('liveLife.reports.presentation.action')}</span>
                <FileText className="w-4 h-4 text-red-500" />
              </div>
            </div>

            {/* Report Card 3 - Financial Statements */}
            <div className={`bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out transform hover:scale-[1.02] ${isCardsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-8 h-8 text-gray-600" />
                </div>
                {/* <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Financial
                </div> */}
              </div>
              <h4 className="font-bold text-[#661244] mb-4 text-base leading-tight text-center">
                {t('liveLife.reports.financialStatements.title')}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-[#661244] font-medium">{t('liveLife.reports.financialStatements.action')}</span>
                <FileText className="w-4 h-4 text-red-500" />
              </div>
            </div>

            {/* Report Card 4 - Earnings Call Transcript */}
            <div className={`bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out transform hover:scale-[1.02] ${isCardsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`} style={{ transitionDelay: '300ms' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Volume2 className="w-8 h-8 text-gray-600" />
                </div>
                {/* <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Audio
                </div> */}
              </div>
              <h4 className="font-bold text-[#661244] mb-4 text-base leading-tight text-center">
                {t('liveLife.reports.earningsCallTranscript.title')}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-[#661244] font-medium">{t('liveLife.reports.earningsCallTranscript.action')}</span>
                <FileText className="w-4 h-4 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveLifeSection;