'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import ceoImage from '../assets/ceo.png';
import { useEffect, useState, useRef } from 'react';

const CeoAbout = () => {
  const { t, isRTL, fontFamily } = useLanguage();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
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

            // Trigger text animation after heading
            setTimeout(() => {
              setIsTextVisible(true);
            }, 800);

            // Trigger image animation after text
            setTimeout(() => {
              setIsImageVisible(true);
            }, 1200);
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsTextVisible(false);
            setIsImageVisible(false);
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

  return (
    <div className="bg-white">
      {/* CEO Message Section - Matching the uploaded image design */}
      <section className="pt-10" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`max-w-7xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content Section */}
              <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 transition-all duration-1500 ease-out transform ${
                    isHeadingVisible
                      ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                      : isRTL 
                        ? 'translate-x-32 opacity-0 scale-95 rotate-3'
                        : '-translate-x-32 opacity-0 scale-95 rotate-3'
                  } ${isRTL ? 'font-arabic' : 'font-english'}`}
                  style={{ fontWeight: 600, fontFamily, color: '#661244' }}
                >
                  {t('ceo.title')}
                </h1>
                
                <div className={`relative transition-all duration-1200 ease-out transform ${
                  isTextVisible 
                    ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
                    : isRTL 
                      ? 'translate-x-32 opacity-0 scale-95 rotate-3'
                      : '-translate-x-32 opacity-0 scale-95 rotate-3'
                }`}>
                  {/* Large Opening Quote */}
                  <div className={`absolute -top-14 text-8xl lg:text-9xl font-bold text-black z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${isRTL ? 'right-0' : 'left-0'}`} style={{ fontFamily: 'Univers, sans-serif' }}>
                    &apos;&apos;
                  </div>
                  
                  {/* Main Text Content */}
                  <div className="relative z-10 ">
                    <div className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily }}>
                    <p className="mb-6 mt-3">{t('ceo.message1')}</p>
                    <p className="mb-6 mt-3">{t('ceo.message2')}</p>
                    </div>
                  </div>
                  
                  {/* Large Closing Quote */}
                  <div className={`absolute -bottom-18 text-8xl lg:text-9xl font-bold text-black z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${isRTL ? 'left-4' : 'right-4'}`} style={{ fontFamily: 'Univers, sans-serif' }}>
                    &apos;&apos;
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`relative transition-all duration-1000 ease-out transform ${
                  isImageVisible 
                    ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
                    : isRTL 
                      ? '-translate-x-32 opacity-0 scale-95 rotate-3'
                      : 'translate-x-32 opacity-0 scale-95 rotate-3'
                }`}>
                  {/* Image with custom rounded border effect */}
                  <div className={`relative w-full aspect-square lg:aspect-[4/4] overflow-hidden rounded-2xl group-hover:shadow-2xl transition-all duration-500 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                    <Image
                      src={ceoImage}
                      alt="CEO Message - Albatha Real Estate"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeoAbout;
