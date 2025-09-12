'use client';
import { Button } from "./ui/button";
import { ArrowRight, MapPin, Calendar, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

const LatestLaunchesSection = () => {
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
    <section ref={sectionRef}>
      {/* Header Section - Outside on white background */}
      <div className="bg-white pt-5 pb-10">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`text-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
          }`}>
            <h2 className={`text-5xl font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
              {t('launches.title')}
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section with Blurred Background */}
      <div className="relative overflow-hidden">
        {/* Blurred City Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/home-latest-update-banner.jpg"
            alt="Dubai city background"
            fill
            className="object-cover filter blur-sm"
          />
          
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:pt-12">
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* First Card - White Background */}
                <div className={`transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-x-0 opacity-100' : isRTL ? 'translate-x-16 opacity-0' : '-translate-x-16 opacity-0'
                } ${isRTL ? 'lg:order-2' : 'lg:order-1'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="lg:-mt-12">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className={`flex flex-col lg:flex-row min-h-[500px] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Text Content Section */}
                      <div className={`flex-1 pt-8 pb-8 lg:pt-12 lg:pb-12 flex flex-col lg:justify-between ${isRTL ? 'pr-8 pl-8 lg:pr-12 lg:pl-12' : 'pl-8 pr-8 lg:pl-12 lg:pr-12'}`}>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <div className="mb-6">
                            <span className="text-red-600 text-sm font-semibold uppercase tracking-wide">
                              {t('launches.residential')}
                            </span>
                          </div>
                          
                          <h3 className={`text-4xl lg:text-5xl font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
                            {t('launches.joudTower')}
                          </h3>
                        </div>
                        
                        <div className={`mt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <Button 
                            className="bg-[#661244] hover:bg-[#551133] text-white px-8 py-4  font-semibold transition-all duration-300 hover:scale-105 text-lg"
                            onClick={() => window.location.href = '/launches/joud-tower'}
                          >
                            {t('launches.learnMore')} {isRTL ? '←' : '→'}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Image Section */}
                      <div className={`relative h-[28rem] sm:h-[32rem] lg:flex-1 lg:h-auto ${isRTL ? 'pr-5 pl-2' : 'pl-5 pr-2'}`}>
                        {/* Arch Shape Container */}
                        <div className="absolute inset-1 sm:inset-2 flex items-center justify-center h-full">
                          <div className="relative w-full h-full">
                            {/* Arch Top */}
                            {/* <div className="absolute top-0 left-0 right-0 h-6 bg-white rounded-t-full shadow-sm"></div> */}
                            
                            {/* Arch Sides */}
                            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-b-2xl overflow-hidden">
                              <Image
                                src="/images/latest_launcher_first.png"
                                alt={t('launches.joudTowerAlt')}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Second Card - Dark Background */}
                <div className={`transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-x-0 opacity-100' : isRTL ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0'
                } ${isRTL ? 'lg:order-1' : 'lg:order-2'}`} style={{ transitionDelay: '600ms' }}>
                  <div className="lg:mt-10">
                  <div className="bg-[#661244] rounded-3xl shadow-2xl overflow-hidden border-2 border-white">
                    <div className={`flex flex-col lg:flex-row min-h-[500px] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Text Content Section */}
                      <div className={`flex-1 pt-8 pb-8 lg:pt-12 lg:pb-12 flex flex-col lg:justify-between ${isRTL ? 'pr-8 pl-8 lg:pr-12 lg:pl-12' : 'pl-8 pr-8 lg:pl-12 lg:pr-12'}`}>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <div className="mb-6">
                            <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">
                              {t('launches.commercial')}
                            </span>
                          </div>
                          
                          <h3 className={`text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-nowrap ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
                            {t('launches.joudTowerApartment')}
                          </h3>
                        </div>
                        
                        <div className={`mt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <Button className="bg-white hover:bg-gray-100 text-[#661244] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg
                          "
                            onClick={() => window.location.href = '/launches/joud-tower-apartment'}
                          >
                            {t('launches.learnMore')} {isRTL ? '←' : '→'}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Image Section */}
                      <div className={`relative h-[28rem] sm:h-[32rem] lg:flex-1 lg:h-auto ${isRTL ? 'pr-5 pl-2' : 'pl-5 pr-2'}`}>
                        {/* Arch Shape Container */}
                        <div className="absolute inset-1 sm:inset-2 flex items-center justify-center h-full">
                          <div className="relative w-full h-full">
                            {/* Arch Top */}
                            {/* <div className="absolute top-0 left-0 right-0 h-6 bg-white rounded-t-full shadow-sm"></div> */}
                            
                            {/* Arch Sides */}
                            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-b-2xl overflow-hidden">
                              <Image
                                src="/images/latest_launcher_Second.png"
                                alt={t('launches.joudTowerApartmentAlt')}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default LatestLaunchesSection;
