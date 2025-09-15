'use client';
import { Button } from "./ui/button";
import { Search, Phone, Plus, Globe, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
// Logo paths for public folder
const logo = "/images/final-logo.png";
const arabicLogo = "/images/final-logo-arabic.png";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";

const Navigation = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isAlbathaDropdownOpen, setIsAlbathaDropdownOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isInvestorRelationsDropdownOpen, setIsInvestorRelationsDropdownOpen] = useState(false);
  const [isBuyDropdownOpen, setIsBuyDropdownOpen] = useState(false);
  const [isRentDropdownOpen, setIsRentDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  
  // Language options
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const exploreDropdownRef = useRef<HTMLDivElement>(null);
  const alBathaDropdownRef = useRef<HTMLDivElement>(null);
  const mediaDropdownRef = useRef<HTMLDivElement>(null);
  const investorRelationsDropdownRef = useRef<HTMLDivElement>(null);
  const buyDropdownRef = useRef<HTMLDivElement>(null);
  const rentDropdownRef = useRef<HTMLDivElement>(null);
  const exploreDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const alBathaDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mediaDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const investorRelationsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buyDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rentDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target as Node)) {
        setIsExploreDropdownOpen(false);
      }
      if (alBathaDropdownRef.current && !alBathaDropdownRef.current.contains(event.target as Node)) {
        setIsAlbathaDropdownOpen(false);
      }
      if (mediaDropdownRef.current && !mediaDropdownRef.current.contains(event.target as Node)) {
        setIsMediaDropdownOpen(false);
      }
      if (investorRelationsDropdownRef.current && !investorRelationsDropdownRef.current.contains(event.target as Node)) {
        setIsInvestorRelationsDropdownOpen(false);
      }
      if (buyDropdownRef.current && !buyDropdownRef.current.contains(event.target as Node)) {
        setIsBuyDropdownOpen(false);
      }
      if (rentDropdownRef.current && !rentDropdownRef.current.contains(event.target as Node)) {
        setIsRentDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleExploreMouseEnter = () => {
    if (exploreDropdownTimeoutRef.current) {
      clearTimeout(exploreDropdownTimeoutRef.current);
    }
    setIsExploreDropdownOpen(true);
  };

  const handleExploreMouseLeave = () => {
    exploreDropdownTimeoutRef.current = setTimeout(() => {
      setIsExploreDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleAlbathaMouseEnter = () => {
    if (alBathaDropdownTimeoutRef.current) {
      clearTimeout(alBathaDropdownTimeoutRef.current);
    }
    setIsAlbathaDropdownOpen(true);
  };

  const handleAlbathaMouseLeave = () => {
    alBathaDropdownTimeoutRef.current = setTimeout(() => {
      setIsAlbathaDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleMediaMouseEnter = () => {
    if (mediaDropdownTimeoutRef.current) {
      clearTimeout(mediaDropdownTimeoutRef.current);
    }
    setIsMediaDropdownOpen(true);
  };

  const handleMediaMouseLeave = () => {
    mediaDropdownTimeoutRef.current = setTimeout(() => {
      setIsMediaDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleInvestorRelationsMouseEnter = () => {
    if (investorRelationsDropdownTimeoutRef.current) {
      clearTimeout(investorRelationsDropdownTimeoutRef.current);
    }
    setIsInvestorRelationsDropdownOpen(true);
  };

  const handleInvestorRelationsMouseLeave = () => {
    investorRelationsDropdownTimeoutRef.current = setTimeout(() => {
      setIsInvestorRelationsDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleBuyMouseEnter = () => {
    if (buyDropdownTimeoutRef.current) {
      clearTimeout(buyDropdownTimeoutRef.current);
    }
    setIsBuyDropdownOpen(true);
  };

  const handleBuyMouseLeave = () => {
    buyDropdownTimeoutRef.current = setTimeout(() => {
      setIsBuyDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleRentMouseEnter = () => {
    if (rentDropdownTimeoutRef.current) {
      clearTimeout(rentDropdownTimeoutRef.current);
    }
    setIsRentDropdownOpen(true);
  };

  const handleRentMouseLeave = () => {
    rentDropdownTimeoutRef.current = setTimeout(() => {
      setIsRentDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (languageCode: 'en' | 'ar') => {
    setLanguage(languageCode);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#661244] border-b border-white/20">
      <div className="container mx-auto px-2 sm:px-4 md:px-2 lg:px-3 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Always on the left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="hover-scale smooth-transition">
            <Image 
              src={language === 'ar' ? arabicLogo : logo} 
              alt="Albatha Real Estate" 
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
            </Link>
          </div>

          {/* Mobile Right Side - Language Selector and Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0 ml-auto">
            {/* Language Selector Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-white hover:bg-white/20 p-2 relative"
              aria-label="Select language"
            >
              <Globe className="h-5 w-5" />
              
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[140px] z-50 ${
                  isRTL ? 'right-0' : 'right-0'
                }`}>
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code as 'en' | 'ar')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer ${
                        language === lang.code ? 'text-white font-medium' : 'text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{lang.nativeName}</span>
                        {language === lang.code && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/20 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Main Navigation - Hidden on Mobile */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4 xl:space-x-reverse xl:space-x-8' : 'space-x-4 xl:space-x-8'}`}>
            {/* About Us with Dropdown */}
            <div 
              className="relative group nav-item-container"
              ref={exploreDropdownRef}
              onMouseEnter={handleExploreMouseEnter}
              onMouseLeave={handleExploreMouseLeave}
            >
              <Link href="/about/mission-values" className="text-white hover:text-white transition-all duration-200  text-sm relative flex items-center">
                {t('nav.aboutUs')}
                <ChevronDown className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3 transition-transform duration-200 group-hover:rotate-180`} />
                <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
              
              {/* Dropdown Menu */}
              {isExploreDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[200px] z-50 ${isRTL ? 'right-0' : 'left-0'}`}
                  onMouseEnter={handleExploreMouseEnter}
                  onMouseLeave={handleExploreMouseLeave}
                >
                  <Link 
                    href="/about/ceo-message" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.ceoMessage')}
                  </Link>
                  <Link 
                    href="/about/mission-values" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.albathaRealEstate')}
                  </Link>
                 
                </div>
              )}
            </div>

            {/* Our Properties with Dropdown */}
            <div 
              className="relative group nav-item-container"
              ref={alBathaDropdownRef}
              onMouseEnter={handleAlbathaMouseEnter}
              onMouseLeave={handleAlbathaMouseLeave}
            >
              <Link href="/properties" className="text-white hover:text-white transition-all duration-200  text-sm relative flex items-center">
                {t('nav.ourProperties')}
                <ChevronDown className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3 transition-transform duration-200 group-hover:rotate-180`} />
                <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
              
              {/* Dropdown Menu */}
              {isAlbathaDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[220px] z-50 ${isRTL ? 'right-0' : 'left-0'}`}
                  onMouseEnter={handleAlbathaMouseEnter}
                  onMouseLeave={handleAlbathaMouseLeave}
                >
                  <Link 
                    href="/properties/commercial" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.commercial')}
                  </Link>
                  <Link 
                    href="/properties/residential" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.residential')}
                  </Link>
                  <Link 
                    href="/properties/industrial" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.industrial')}
                  </Link>
                  <Link 
                    href="/properties/special-projects" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.specialProjects')}
                  </Link>
               
                </div>
              )}
            </div>

            {/* New Launches with Dropdown */}
            <div 
              className="relative group nav-item-container"
              ref={mediaDropdownRef}
              onMouseEnter={handleMediaMouseEnter}
              onMouseLeave={handleMediaMouseLeave}
            >
              <Link href="/launches/joud-tower" className="text-white hover:text-white transition-all duration-200  text-sm relative flex items-center">
                {t('nav.newLaunches')}
                <ChevronDown className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3 transition-transform duration-200 group-hover:rotate-180`} />
                <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
              
              {/* Dropdown Menu */}
              {isMediaDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[160px] z-50 ${isRTL ? 'right-0' : 'left-0'}`}
                  onMouseEnter={handleMediaMouseEnter}
                  onMouseLeave={handleMediaMouseLeave}
                >
                  <Link 
                    href="/launches/joud-tower" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    
                  >
                    {t('nav.dropdown.joudTower')}
                  </Link>
                  <Link 
                    href="/launches/liwan-renders" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    
                  >
                    {t('nav.dropdown.liwanRenders')}
                  </Link>
              
                </div>
              )}
            </div>

            {/* Our Companies*/}
            <div 
              className="relative group nav-item-container"
              ref={investorRelationsDropdownRef}
              onMouseEnter={handleInvestorRelationsMouseEnter}
              onMouseLeave={handleInvestorRelationsMouseLeave}
            >
              <Link href="#" className="text-white hover:text-white transition-all duration-200  text-sm relative flex items-center">
                {t('nav.ourCompanies')}
                <ChevronDown className={`${isRTL ? 'mr-1' : 'ml-1'} h-3 w-3 transition-transform duration-200 group-hover:rotate-180`} />
                <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
              
              {/* Dropdown Menu */}
              {isInvestorRelationsDropdownOpen && (
                <div 
                  className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[200px] z-50 ${isRTL ? 'right-0' : 'left-0'}`}
                  onMouseEnter={handleInvestorRelationsMouseEnter}
                  onMouseLeave={handleInvestorRelationsMouseLeave}
                >
                  <Link 
                    href="/companies/tawazun-construction" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.tawazunConstruction')}
                  </Link>
                  <Link 
                    href="/companies/al-abir" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.alAbir')}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2 sm:space-x-reverse sm:space-x-4' : 'space-x-2 sm:space-x-4'}`}>
            <div className={`hidden lg:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse space-x-3 xl:space-x-reverse xl:space-x-4' : 'space-x-3 xl:space-x-4'}`}>
              {/* Buy Button with Dropdown */}
              <div 
                className="relative z-[9999]"
                ref={buyDropdownRef}
                onMouseEnter={handleBuyMouseEnter}
                onMouseLeave={handleBuyMouseLeave}
              >
                <button className="text-white hover:text-white transition-all duration-200  text-sm px-3 py-2 relative group">
                  {t('nav.buy')}
                  <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                </button>
                
                {/* Buy Dropdown Menu */}
                {isBuyDropdownOpen && (
                  <div 
                    className={`absolute top-full mt-2 bg-[#661244] border border-white/30 rounded-xl shadow-2xl py-6 min-w-[360px] z-[9999] ${isRTL ? 'right-0' : 'left-0'}`}
                    onMouseEnter={handleBuyMouseEnter}
                    onMouseLeave={handleBuyMouseLeave}
                  >
                    {/* Close Button */}
                    {/* <button 
                      onClick={() => setIsBuyDropdownOpen(false)}
                      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 text-xl  p-2 rounded-full hover:bg-white/10"
                    >
                      ×
                    </button> */}
                    
                    {/* Title */}
                    <div className="text-center mb-6 px-6">
                      <h3 className={`text-white text-xl whitespace-nowrap ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.whatLookingToBuy')}
                      </h3>
                    </div>
                    
                    {/* Options */}
                    <div className="space-y-0">
                      <a 
                        href="/properties/residential" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.residential')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                      
                      {/* Separator */}
                      <div className="border-t border-white/20 mx-6"></div>
                      
                      <a 
                        href="/properties/commercial" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.commercial')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                      
                      {/* Separator */}
                      <div className="border-t border-white/20 mx-6"></div>
                      
                      <a 
                        href="/properties/industrial" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.industrial')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Vertical Separator between BUY and RENT */}
              <div className="w-px h-6 bg-white/30 mx-2"></div>
              
              {/* Rent Button with Dropdown */}
              <div 
                className="relative z-[9999]"
                ref={rentDropdownRef}
                onMouseEnter={handleRentMouseEnter}
                onMouseLeave={handleRentMouseLeave}
              >
                <button className="text-white hover:text-white transition-all duration-200  text-sm px-3 py-2 relative group">
                  {t('nav.rent')}
                  <div className="absolute -bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                </button>
                
                {/* Rent Dropdown Menu */}
                {isRentDropdownOpen && (
                  <div 
                    className={`absolute top-full mt-2 bg-[#661244] border border-white/30 rounded-xl shadow-2xl py-6 min-w-[360px] z-[9999] ${isRTL ? 'right-0' : 'left-0'}`}
                    onMouseEnter={handleRentMouseEnter}
                    onMouseLeave={handleRentMouseLeave}
                  >
                    {/* Close Button */}
                    {/* <button 
                      onClick={() => setIsRentDropdownOpen(false)}
                      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 text-xl  p-2 rounded-full hover:bg-white/10"
                    >
                      ×
                    </button> */}
                    
                    {/* Title */}
                    <div className="text-center mb-6 px-6">
                      <h3 className={`text-white text-xl whitespace-nowrap ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.whatLookingToRent')}
                      </h3>
                    </div>
                    
                    {/* Options */}
                    <div className="space-y-0">
                      <a 
                        href="/rent/residential" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.residential')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                      
                      {/* Separator */}
                      <div className="border-t border-white/20 mx-6"></div>
                      
                      <a 
                        href="/rent/commercial" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.commercial')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                      
                      {/* Separator */}
                      <div className="border-t border-white/20 mx-6"></div>
                      
                      <a 
                        href="/rent/industrial" 
                        className="block px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 hover:text-white flex items-center justify-between group"
                      >
                        <span className={`text-base font-medium ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('nav.dropdown.industrial')}</span>
                        <span className={`text-white text-lg group-hover:translate-x-1 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''}`}>{isRTL ? '←' : '→'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={dropdownRef}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/20 hover:text-white transition-all duration-200 rounded-md p-2"
                  onClick={toggleLanguage}
                >
                  <Globe className="h-4 w-4" />
                </Button>
                
                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className={`absolute top-full mt-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[140px] z-50 ${isRTL ? 'left-0' : 'right-0'}`}>
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code as 'en' | 'ar')}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer ${
                          language === lang.code ? 'text-white font-medium' : 'text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{lang.nativeName}</span>
                          {language === lang.code && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
                        
               
               {/* Phone Button */}
               <Button
                 variant="ghost"
                 size="sm"
                 className="bg-white text-gray-800 hover:bg-gray-100 font-medium transition-all duration-300 rounded-full shadow-lg border border-white/20 text-sm px-3 py-2"
               >
                 <Phone className="h-3 w-3 mr-1" />
                 <span
                   className="font-mono"
                   lang="en"
                   dir="ltr"
                   style={{
                     fontVariantNumeric: 'lining-nums',
                     direction: 'ltr',
                     unicodeBidi: 'bidi-override',
                     fontFeatureSettings: '"lnum"',
                     fontFamily: 'Poppins, Arial, sans-serif !important'
                   }}
                 >
                   Call 800 1 8888
                 </span>
               </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#661244]/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <Image 
                src={language === 'ar' ? arabicLogo : logo} 
                alt="Albatha Real Estate" 
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMobileMenu}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* About Us */}
                <div className="space-y-3">
                  <h3 className="text-white  text-sm text-[#661244]">
                    {t('nav.aboutUs')}
                  </h3>
                  <div className="space-y-2 pl-4">
                    <Link href="/about/ceo-message" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.ceoMessage')}
                    </Link>
                    <Link 
                    href="/about/mission-values" 
                    className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200 hover:text-white ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {t('nav.dropdown.albathaRealEstate')}
                  </Link>
                
                 
                  </div>
                </div>

                {/* Our Properties */}
                <div className="space-y-3">
                  <h3 className="text-white  text-sm text-[#661244]">
                    {t('nav.ourProperties')}
                  </h3>
                  <div className="space-y-2 pl-4">
                    <Link href="/properties/commercial" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.commercial')}
                    </Link>
                    <Link href="/properties/residential" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.residential')}
                    </Link>
                    <Link href="/properties/industrial" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.industrial')}
                    </Link>
                 
                    <Link href="/properties/special-projects" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.specialProjects')}
                    </Link>
                  </div>
                </div>

                {/* New Launches */}
                <div className="space-y-3">
                  <h3 className="text-white  text-sm text-[#661244]">
                    {t('nav.newLaunches')}
                  </h3>
                  <div className="space-y-2 pl-4">
                    <Link href="/launches/joud-tower" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.joudTower')}
                    </Link>
                    <Link href="/launches/liwan-renders" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.liwanRenders')}
                    </Link>
                  </div>
                </div>

                {/* Our Companies */}
                <div className="space-y-3">
                  <h3 className="text-white  text-sm text-[#661244]">
                    {t('nav.ourCompanies')}
                  </h3>
                  <div className="space-y-2 pl-4">
                    <Link href="/companies/tawazun-construction" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.tawazunConstruction')}
                    </Link>
                    <Link href="/companies/al-abir" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.dropdown.alAbir')}
                    </Link>
                  </div>
                </div>

                {/* Buy & Rent Section */}
                <div className="space-y-4 pt-4 border-t border-white/20">
                  <h3 className={`text-white text-sm text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    {t('nav.dropdown.property')}
                  </h3>
                  
                  {/* Buy */}
                  <div className="space-y-3">
                    <h4 className={`text-white font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.buy')}
                    </h4>
                    <div className="space-y-2 pl-4">
                      <Link href="/buy/residential" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.residential')}
                      </Link>
                      <Link href="/buy/building-plots" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.buildingPlots')}
                      </Link>
                    </div>
                  </div>

                  {/* Rent */}
                  <div className="space-y-3">
                    <h4 className={`text-white font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('nav.rent')}
                    </h4>
                    <div className="space-y-2 pl-4">
                    <Link href="/rent/commercial" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.commercial')}
                      </Link>
                      <Link href="/rent/residential" className={`block text-white hover:text-white transition-colors duration-200 text-sm py-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('nav.dropdown.residential')}
                      </Link>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                {/* Language Selector */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-white/20 hover:text-white transition-all duration-200 rounded-md p-2"
                    onClick={toggleLanguage}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'English' : 'العربية'}
                  </Button>
                  
                  {/* Language Dropdown */}
                  {isLanguageOpen && (
                    <div className="absolute bottom-full mb-2 bg-[#661244] border border-white/20 rounded-lg shadow-lg py-2 min-w-[140px] z-50 left-0">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          onClick={() => selectLanguage(lang.code as 'en' | 'ar')}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer ${
                            language === lang.code ? 'text-white font-medium' : 'text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lang.nativeName}</span>
                            {language === lang.code && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 hover:text-white transition-all duration-200 rounded-md p-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;