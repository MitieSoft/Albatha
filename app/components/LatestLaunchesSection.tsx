'use client';
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const LatestLaunchesSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ triggerOnce: false });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: false });
  
  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Section Header */}
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          sectionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className={`text-4xl md:text-5xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              {t('launches.title')}
            </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#661244] to-[#8b6b7b] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content with Background Pattern */}
      <div className="relative overflow-hidden">
        {/* Background Image with Pattern */}
        <div className="absolute inset-0">
          <Image
            src="/images/background_with_pattern.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 py-16 md:py-20 lg:py-24" style={{ paddingBottom: '0px' }}>
          <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Left Column - Rectangular Image */}
                <div 
                  ref={imageRef as React.RefObject<HTMLDivElement>}
                  className={`${isRTL ? 'lg:order-2' : ''} transition-all duration-1000 ease-out transform ${
                    imageVisible 
                      ? 'animate-fade-in-left' 
                      : isRTL ? 'translate-x-32 opacity-0 scale-95' : '-translate-x-32 opacity-0 scale-95'
                  }`}
                >
                  <div 
                    className="relative w-full h-[400px] lg:h-[500px] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 ease-out group"
                    style={{ 
                      backgroundImage: 'url(/images/arabi.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'bottom center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {/* Project Title */}
                    <div className="animate-fade-in-up animation-delay-200">
                      <h3 className={`text-4xl lg:text-5xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                        {t('launches.joudTower')}
                      </h3>
                      <div className="mt-4">
                        <span className="text-white text-sm font-semibold uppercase tracking-wide bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                          {t('launches.residential')}
                        </span>
                  </div>
                </div>

                    {/* Description */}
                    <p className={`text-lg text-white/90 leading-relaxed max-w-lg animate-fade-in-up animation-delay-300 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                      {t('launches.joudTowerDescription')}
                    </p>
                    
                    {/* CTA Button */}
                    <div className={`${isRTL ? 'text-right' : 'text-left'} animate-fade-in-up animation-delay-400`}>
                      <Button 
                      style={{ marginBottom: '30px' }} 
                        className="bg-[#9d552d] hover:bg-[#8a4a26] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        onClick={() => window.location.href = '/launches/joud-tower'}
                          >
                            {t('launches.learnMore')} {isRTL ? '←' : '→'}
                          </Button>
                    </div>
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

export default LatestLaunchesSection;