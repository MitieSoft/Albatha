'use client';
import { Button } from "./ui/button";
import { Play, ChevronLeft, ChevronRight, Phone, Plus, X, MousePointer } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "../assets/2.jpg";
import image2 from "../assets/1.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image12 from "../assets/12.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import "./HeroSection.css";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  
  const slides = [
    {
      id: 1,
      desktopImage: image1,
      mobileImage: image1,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'),
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-zoom-in"
    },
    {
      id: 2,
      desktopImage: image2,
      mobileImage: image2,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'),
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-pan-left"
    },
    {
      id: 3,
      desktopImage: image3,
      mobileImage: image3,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'), 
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-zoom-out"
    },
    {
      id: 4,
      desktopImage: image4,
      mobileImage: image4,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'),
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-pan-right"
    },
    {
      id: 5,
      desktopImage: image5,
      mobileImage: image5,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'), 
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-zoom-in"
    },
    {
      id: 6,
      desktopImage: image6,
      mobileImage: image6,
      title: t('hero.slide.title'),
      subtitle: t('hero.slide.subtitle'),
      description: t('hero.slide.description'),
      description1: t('hero.slide.description1'),
      ctaText: t('hero.slide.ctaText'),
      ctaLink: "#",
      hasVideo: false,
      kenBurnsEffect: "ken-burns-pan-left"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Auto-advance carousel every 8 seconds (increased duration)
  useEffect(() => {
    // Add 3-second delay for first slide, then start normal interval
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 8000);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, [slides.length]);

  // Trigger fade-in effect on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsLoaded(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Fallback: Ensure animation triggers even if intersection observer fails
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isInView) {
        setIsInView(true);
        setIsLoaded(true);
      }
    }, 1000); // 1 second fallback

    return () => clearTimeout(fallbackTimer);
  }, [isInView]);

  const goToNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <section ref={heroRef} className="relative min-h-[600px] md:min-h-screen overflow-hidden">
      {/* Sticky Action Buttons - Below Navbar */}
      <div
        className={`fixed top-20 sm:top-20 md:top-24 z-20 flex flex-col sm:flex-row gap-2 sm:gap-3 ${
          isRTL ? "left-2 sm:left-4 md:left-6" : "right-2 sm:right-4 md:right-6"
        }`}
      >
        <Button
          variant="ghost"
          size="sm"
          className="bg-white text-gray-800 hover:bg-gray-100 font-medium transition-all duration-300 rounded-full shadow-lg border border-white/20 text-sm sm:text-base  py-2 "
          
        >
          <Phone className={`h-3 w-3 sm:h-4 sm:w-4 ${isRTL ? "ml-1 sm:ml-1" : "mr-0 sm:mr-1"}`} />
          <span className="hidden sm:inline text-base sm:text-lg">Call <span className="font-mono" style={{ fontVariantNumeric: 'lining-nums' }}>{t('hero.number')}</span></span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="bg-white text-red-500 hover:bg-gray-100 rounded-full hover:scale-105 transition-all duration-300 shadow-lg border border-white/20 w-8 h-8 sm:w-10 sm:h-10 p-0 flex items-center justify-center"
          onClick={() => setShowPopup(true)}
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
        </Button>
      </div>

      {/* Main Hero Slider */}
      <div className="main-hero relative h-screen">
        {/* Background Images */}
        <div className="main-hero__bg absolute inset-0">
          {/* Desktop Image */}
          <figure className="hidden lg:block h-full w-full">
            <Image
              key={`desktop-${currentSlideIndex}`}
              src={slides[currentSlideIndex].desktopImage}
              alt={slides[currentSlideIndex].title}
              fill
              className={`object-cover ${currentSlideIndex === 0 && isInView ? 'first-slide-zoom' : 'w-full'}`}
              priority={currentSlideIndex === 0}
            />
          </figure>
          
          {/* Mobile Image */}
          <figure className="block lg:hidden h-full w-full relative">
            <Image
              key={`mobile-${currentSlideIndex}`}
              src={slides[currentSlideIndex].mobileImage}
              alt={slides[currentSlideIndex].title}
              fill
              className={`object-cover ${currentSlideIndex === 0 && isInView ? 'first-slide-zoom' : 'w-full'}`}
              priority={currentSlideIndex === 0}
            />
          </figure>
        </div>

        {/* Content Overlay */}
        <div className="main-hero__content absolute inset-0 flex items-center md:items-center items-start pt-16 md:pt-0">
          <div 
            key={currentSlideIndex}
            className={`main-hero__left container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 ${isRTL ? "text-right" : "text-left"} ${isInView ? 'fade-in' : ''}`}
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight max-w-4xl">
              {slides[currentSlideIndex].title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 leading-tight">
              {slides[currentSlideIndex].subtitle}
            </h2>
              <div className="space-y-0">
                <p className="body-text-18 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl" style={{ marginBottom: '0px !important' }}>
                  {slides[currentSlideIndex].description || slides[currentSlideIndex].subtitle}
                </p>
                <p className="body-text-18 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl" style={{ marginTop: '-8px' }}>
                  {slides[currentSlideIndex].description1 || slides[currentSlideIndex].subtitle}
                </p>
              </div>
            <Button
              variant="Albatha"
              size="lg"
              className={`o-button -anim -white main-hero__cta bg-white text-albatha-navy hover:bg-white/90 hover:shadow-xl hover:scale-105 font-medium transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-none ${
                slides[currentSlideIndex].hasVideo ? "hasYoutube video-button hero__button-video" : ""
              }`}
            >
              {slides[currentSlideIndex].hasVideo && (
                <Play className={`h-4 w-4 sm:h-5 sm:w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              )}
              {slides[currentSlideIndex].ctaText}
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="main-hero__controls absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1 z-10">
          <div className="o-button-group flex items-center space-x-8 sm:space-x-4">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="sm"
              className="o-button -white -square -left swiper-button-prev carousel-button__prev text-white hover:bg-white/20 hover:scale-105 border border-white/30 transition-all duration-300 p-2 sm:p-3"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Pagination */}
            <div className="swiper-pagination hidden sm:flex items-center space-x-1 sm:space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? "bg-white scale-125 active"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
              className="o-button -white -square swiper-button-next carousel-button__next text-white hover:bg-white/20 hover:scale-105 border border-white/30 transition-all duration-300 p-2 sm:p-3"
              onClick={goToNext}
        >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
          </div>
      </div>

        {/* Slide Counter */}
      <div
          className={`absolute bottom-4 sm:bottom-8 text-white text-xs sm:text-sm font-medium ${
            isRTL ? "right-4 sm:right-8" : "left-4 sm:left-8"
        }`}
      >
          {String(currentSlideIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        {/* Promotions Button */}
        <div
          className={`absolute bottom-4 sm:bottom-8 flex items-center ${
            isRTL ? "left-4 sm:left-8" : "right-4 sm:right-8"
          }`}
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg border border-white/30 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:shadow-xl hover:border-white/50"
          >
            {t("hero.promotions")}
          </Button>
        </div>
      </div>

      {/* Phone Popup Menu */}
      {showPopup && (
        <div className="fixed inset-0 bg-[#661244]/50 backdrop-blur-sm z-50">
          <div 
            className={`absolute bg-white rounded-2xl p-6 max-w-sm w-80 shadow-2xl ${
              isRTL ? 'left-2 sm:left-4 md:left-6' : 'right-2 sm:right-4 md:right-6'
            } top-32 sm:top-36 md:top-40`}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors border-2 border-red-500"
            >
              <X className="w-4 h-4 text-red-500" />
            </button>

            {/* Main Call Button */}
            <Button
              variant="ghost"
              size="lg"
                              className="w-full bg-white text-[#661244] hover:bg-gray-50 font-semibold text-lg py-4 px-6 rounded-xl border border-gray-200 shadow-sm mb-4 text-left"
              dir="ltr"
            >
              Call <span style={{ fontVariantNumeric: 'lining-nums' }}>800 1 888</span>
            </Button>

            {/* Secondary Options */}
            <div className="space-y-3">
              {/* Call Option */}
              <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <span className="text-[#661244] font-medium">Call <span style={{ fontVariantNumeric: 'lining-nums' }}>800 1 888</span></span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#661244]" />
                </div>
              </div>

              {/* Feedback Option */}
              <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <span className="text-[#661244] font-medium">Share your feedback</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MousePointer className="w-5 h-5 text-[#661244]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;