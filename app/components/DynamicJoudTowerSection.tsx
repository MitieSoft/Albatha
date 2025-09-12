'use client';
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

const DynamicJoudTowerSection = () => {
  const { t, isRTL, fontFamily } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section className="py-10 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Heading */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
          }`}>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
              {t('joudTower.title')}
            </h2>
          </div>

          {/* Main Image Section */}
          <div className={`mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
          }`} style={{ transitionDelay: '300ms' }}>
            <div
              className="relative h-[500px] md:h-[600px] lg:h-[750px] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: "url('/images/AlJoud_Exteriors_Cam005-Fullres_.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className={`text-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
          }`} style={{ transitionDelay: '600ms' }}>
            
            {/* Sub Heading */}
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
              {t('joudTower.subtitle')}
            </h3>

            {/* Description Paragraph */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className={`text-lg md:text-xl text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
                {t('joudTower.description')}
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center">
              <Button 
                className="bg-[#661244] hover:bg-[#551133] text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg shadow-lg"
                onClick={() => window.location.href = '/launches/joud-tower'}
              >
                {t('joudTower.discover')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicJoudTowerSection;
