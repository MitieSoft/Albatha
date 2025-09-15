'use client';
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const DynamicJoudTowerSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: false });
  
  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className=" mx-auto">
        <div className="mx-auto">
          {/* Section Header */}
          <div className={`text-left mb-8 pl-4 sm:pl-8 md:pl-20 lg:pl-24 xl:pl-28 transition-all duration-1000 ease-out transform ${
            sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              Dynamic Joud Tower
            </h1>
             </div>
          
          <div className={`grid grid-cols-1  gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            
            {/* Left Column - Full Section Image with Overlapping Images */}
            <div 
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`${isRTL ? 'lg:order-2' : ''} transition-all duration-1000 ease-out transform ${
                imageVisible 
                  ? 'animate-fade-in-left' 
                  : isRTL ? 'translate-x-32 opacity-0 scale-95' : '-translate-x-32 opacity-0 scale-95'
              }`}
            >
              <div className="relative w-full h-[350px] lg:h-[450px]">
                {/* Main Building Image - Full Section */}
                <div 
                  className="absolute inset-0  overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: "url('/images/AlJoud_Exteriors_Cam005-Fullres_.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }} 
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                {/* Top Overlapping Image - Bedroom - Hidden on Mobile */}
                <div className={`hidden md:block absolute -top-24 right-16 w-90 h-58 overflow-hidden shadow-lg hover:scale-105 transition-all duration-1000 ease-out z-10 ${imageVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-16'}`} style={{ animationDelay: '0.6s' }}>
                  <Image
                    src="/images/L45_Bedroom_Cam02__v04_0000.png"
                    alt="Luxury Bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Bottom Overlapping Image - Lobby - Hidden on Mobile */}
                <div className={`hidden md:block absolute -bottom-38 left-16 w-90 h-58 overflow-hidden shadow-lg hover:scale-105 transition-all duration-1000 ease-out z-10 ${imageVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-16'}`} style={{ animationDelay: '0.8s' }}>
                  <Image
                    src="/images/Lobby_Cam01_v05_Alt2_0000.png"
                    alt="Modern Lobby"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div 
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className={`${isRTL ? 'lg:order-1' : ''} transition-all duration-1000 ease-out transform ${
                contentVisible 
                  ? 'animate-fade-in-right animation-delay-400' 
                  : isRTL ? '-translate-x-32 opacity-0 scale-95' : 'translate-x-32 opacity-0 scale-95'
              }`}
            >
              <div className={`container mx-auto space-y-8 ${isRTL ? 'text-right' : 'text-left'} `}>
                {/* Title */}
                <div className="animate-fade-in-up animation-delay-200 text-right pr-4 sm:pr-16 md:pr-28 lg:pr-28 xl:pr-32">
                  <h2 className={`text-4xl lg:text-6xl font-bold  text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                    {t('joudTower.welcomeTo')}
                  </h2>
                  <h3 className={`text-4xl lg:text-6xl font-bold text-[#9d552d] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                    {t('joudTower.luxuryRedefined')}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="container mx-auto text-center">
                  <p className={`text-lg text-gray-700 leading-relaxed px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-40 animate-fade-in-up animation-delay-300 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('joudTower.description')}
                </p>
               
                 {/* CTA Button */}
                 <div className={`text-center mt-8 animate-fade-in-up animation-delay-400`}>
                   <Button 
                     className="bg-[#9d552d] hover:bg-[#8a4a26] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                     onClick={() => window.location.href = '/launches/joud-tower'}
                   >
                    {t('joudTower.discover')}
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicJoudTowerSection;