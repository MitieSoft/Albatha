'use client';
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

const WhatsNewSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
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
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsContentVisible(false);
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
  
  const newsItems = [
    {
      id: 1,
      category: t('whatsNew.news.category'),
      type: t('whatsNew.news.type'),
      date: t('whatsNew.news.date1'),
      title: t('whatsNew.news.title1'),
      description: t('whatsNew.news.description1'),
              image: "/assets/11.jpg",
      readMoreText: t('whatsNew.news.readMore'),
      downloadText: t('whatsNew.news.download')
    },
    {
      id: 2,
      category: t('whatsNew.news.category'), 
      type: t('whatsNew.news.type'),
      date: t('whatsNew.news.date2'),
      title: t('whatsNew.news.title2'),
      description: t('whatsNew.news.description2'),
              image: "/assets/10.jpg",
      readMoreText: t('whatsNew.news.readMore'),
      downloadText: t('whatsNew.news.download')
    }
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 gap-6 lg:gap-0">
          {/* Left Side - Main Heading */}
          <div className={`text-center lg:text-left transition-all duration-1500 ease-out transform ${
            isHeadingVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : '-translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] leading-tight">
              {t('whatsNew.title')}
            </h2>
          </div>

          {/* Right Side - Navigation Controls */}
          <div className={`flex items-center gap-4 sm:gap-6 transition-all duration-1200 ease-out transform ${
            isHeadingVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : 'translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            {/* Page Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-400 text-sm sm:text-base md:text-lg">
                {String(newsItems.length).padStart(2, "0")}
              </span>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button 
                onClick={goToPrevious}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors hover:shadow-lg hover:scale-105 transform duration-300"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
              <button 
                onClick={goToNext}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors hover:shadow-lg hover:scale-105 transform duration-300"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* News Carousel */}
        <div className={`relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-1000 ease-out transform ${
          isContentVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-32 opacity-0 scale-95'
        }`}>
          {/* Background Image */}
          <img
            src={newsItems[currentSlide].image}
            alt={newsItems[currentSlide].title}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          
          {/* Content Card */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl max-w-2xl">
              {/* Category Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                  {newsItems[currentSlide].category}
                </span>
              </div>

              {/* Press Release Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {newsItems[currentSlide].type}
                </span>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">
                  {newsItems[currentSlide].date}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#661244] mb-3 sm:mb-4 leading-tight">
                {newsItems[currentSlide].title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {newsItems[currentSlide].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <a 
                  className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  {newsItems[currentSlide].readMoreText}
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a 
                  className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  {newsItems[currentSlide].downloadText}
                  <Download className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;