'use client';
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Shield, Target, BarChart3, DollarSign, Clock, TrendingUp as TrendingUpIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const InvestmentSection = () => {
  const { t, isRTL } = useLanguage();
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isSharePriceVisible, setIsSharePriceVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
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

            // Trigger share price animation after heading
            setTimeout(() => {
              setIsSharePriceVisible(true);
            }, 800);

            // Trigger cards animation after share price
            setTimeout(() => {
              setIsCardsVisible(true);
            }, 1200);
          } else {
            // Reset animations when section goes out of view
            setIsHeadingVisible(false);
            setIsSharePriceVisible(false);
            setIsCardsVisible(false);
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
  
  const investmentCards = [
    {
      title: t('investment.cards.annualReport.title') || 'Annual Report 2024',
      description: t('investment.cards.annualReport.description') || 'View Annual Report →',
      isRed: true
    },
    {
      title: t('investment.cards.development.title') || 'Development',
      description: t('investment.cards.development.description') || 'AlBatha  is Abu Dhabi\'s leading regional developer. To date, we\'ve created more than 26,000 homes that people love to live in across the emirate.',
      action: t('investment.cards.development.action') || 'View details →',
      isRed: true
    },
    {
      title: t('investment.cards.investment.title') || 'Investment',
      description: t('investment.cards.investment.description') || 'AlBatha  owns and manages a diverse portfolio of assets in Abu Dhabi, with a value of AED 20 billion.',
      action: t('investment.cards.investment.action') || 'View details →',
      isRed: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.02),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.02),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-8 lg:gap-0">
          {/* Left Side - Main Headline */}
          <div className={`max-w-2xl transition-all duration-1500 ease-out transform ${
            isHeadingVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : '-translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-4 sm:mb-6 leading-tight">
              {t('investment.title') || 'Invest for long term value'}
          </h2>
        </div>

          {/* Right Side - Share Price Widget */}
          <div className={`transition-all duration-1200 ease-out transform ${
            isSharePriceVisible 
              ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
              : 'translate-x-32 opacity-0 scale-95 rotate-3'
          }`}>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-2xl min-w-[250px] sm:min-w-[280px]">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium text-blue-200 mb-2">{t('investment.sharePrice.label') || 'SHARE PRICE'}</div>
                <div className="text-base sm:text-lg font-bold mb-3">{t('investment.sharePrice.company') || 'AlBatha  Properties'}</div>
                <div className="text-xs sm:text-sm text-blue-300 mb-4">{t('investment.sharePrice.dateTime') || '22 / 08 / 2025 | 12:55'}</div>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10.02</div>
                  <div className="text-xs sm:text-sm">{t('investment.sharePrice.currency') || 'AED'}</div>
              </div>
                <div className="flex items-center justify-center gap-2 mt-3 text-green-400">
                  <TrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">{t('investment.sharePrice.change') || '+0.15 / +1.52 %'}</span>
              </div>
            </div>
        </div>
            {/* Connecting Line */}
            <div className="w-px h-12 sm:h-16 bg-gray-300 mx-auto mt-4"></div>
                </div>
              </div>
              
        {/* Investment Cards Container */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {investmentCards.map((card, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 ease-out transform ${
                  isCardsVisible 
                    ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
                    : 'translate-y-32 opacity-0 scale-90 rotate-3'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#661244] mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  {card.description && card.description !== (t('investment.cards.annualReport.description') || 'View Annual Report →') && (
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {card.description}
                    </p>
                  )}
                  <a 
                    href="#" 
                    className={`inline-flex items-center font-medium transition-all duration-300 hover:translate-x-1 text-sm sm:text-base ${
                      card.isRed ? 'text-red-500 hover:text-red-600' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {card.action || card.description}
                  </a>
                </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
