'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import sustainabilityImage from '../assets/vecteezy_young-arab-father-and-his-adorable-daughter-enjoying-time_27185141.jpg';

const SustainabilityReportSection = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white" ref={sectionRef}>
      {/* Black Overlay for entire section */}
      <div className="absolute inset-0  z-10"></div>
      
      <div className="container1 mx-auto relative z-20">
        {/* Sustainability Report Banner */}
        <div className="relative w-screen">
          <div className="relative h-[350px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] overflow-hidden">
            <Image
              src={sustainabilityImage}
              alt="Sustainability"
              fill
              className="object-cover transition-opacity duration-1000"
              priority
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-Albatha -dark-navy/85 via-Albatha -dark-navy/70 flex items-center">
              <div className={`text-left text-white max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 transition-all duration-800 ease-out transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
                  : 'translate-y-16 sm:translate-y-20 opacity-0 scale-95 rotate-1'
              }`} style={{ transitionDelay: '300ms' }}>
                <h3 className={`text-left text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight transition-all duration-600 ease-out transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 sm:translate-y-12 opacity-0 scale-90'
                }`} style={{ transitionDelay: '450ms' }}>
                  <span className="whitespace-nowrap">{t('sustainabilityReport.banner.title')} {t('sustainabilityReport.banner.subtitle')}</span>
                </h3>
                <p className={`text-left text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 transition-all duration-600 ease-out transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 sm:translate-y-12 opacity-0 scale-90'
                }`} style={{ transitionDelay: '600ms' }}>
                  {t('sustainabilityReport.banner.description')}
                </p>
                <div className="text-left">
                  <button className={`mt-4 xs:mt-5 sm:mt-6 md:mt-8 bg-transparent text-white border-2 border-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base font-semibold hover:bg-white hover:text-Albatha -dark-navy transition-all duration-600 ease-out transform hover:scale-105 active:scale-95 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 sm:translate-y-12 opacity-0 scale-90'
                  }`} style={{ transitionDelay: '750ms' }}>
                    {t('sustainabilityReport.banner.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityReportSection;
