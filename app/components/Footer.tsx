'use client';
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
// Logo paths for public folder
const logo = "/images/final-logo.png";
const arabicLogo = "/images/final-logo-arabic.png";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const footerLinks = {
    company: [
      { name: t('footer.company.about'), href: "/about" },
      { name: t('footer.company.properties'), href: "/properties" },
      { name: t('footer.company.launches'), href: "/launches" },
      { name: t('footer.company.contactUs'), href: "#" }
    ],
    developments: [
      { name: t('footer.developments.residential'), href: "/properties/residential" },
      { name: t('footer.developments.commercial'), href: "/properties/commercial" },
      { name: t('footer.developments.industrial'), href: "/properties/industrial" },
    ],
    ourCompanies: [
      { name: t('footer.ourCompanies.tawazunConstruction'), href: "/companies/tawazun-construction" },
      { name: t('footer.ourCompanies.alAbir'), href: "/companies/al-abir" },
      
      
    ],
    legal: [
      { name: t('footer.legal.privacyPolicy'), href: "#" },
      { name: t('footer.legal.termsOfService'), href: "#" },
      { name: t('footer.legal.cookiePolicy'), href: "#" },
      { name: t('footer.legal.accessibility'), href: "#" },
      { name: t('footer.legal.legalNotice'), href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: t('footer.social.facebook') },
    { icon: Twitter, href: "#", label: t('footer.social.twitter') },
    { icon: Instagram, href: "#", label: t('footer.social.instagram') },
    { icon: Linkedin, href: "#", label: t('footer.social.linkedin') },
    { icon: Youtube, href: "#", label: t('footer.social.youtube') }
  ];

  return (
    <footer className="bg-[#661244] text-aldar-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20">
        <div className={`grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-8 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className={`mb-6 sm:mb-8 text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
              <div className="mb-4">
                <Image 
                  src={isRTL ? arabicLogo : logo} 
                  alt="Albatha REAL ESTATE" 
                  width={200}
                  height={64}
                  className="h-12 sm:h-16 w-auto mx-auto md:mx-0 hover-scale smooth-transition"
                />
              </div>
              <p className={`text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base ${isRTL ? 'md:text-right font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('footer.companyDescription')}
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className={`flex items-center gap-3 text-gray-300 text-sm sm:text-base ${isRTL ? 'justify-start' : 'justify-center md:justify-start'}`}>
                <span className={`${isRTL ? 'text-left font-arabic' : 'text-center md:text-left font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('footer.contact.address')}</span>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-aldar-teal flex-shrink-0" />
              </div>
              <div className={`flex items-center gap-3 text-gray-300 text-sm sm:text-base ${isRTL ? 'justify-start' : 'justify-center md:justify-start'}`}>
                <span className={`${isRTL ? 'text-left' : ''} font-mono`}>{t('footer.contact.phone')}</span>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-aldar-teal flex-shrink-0" />
              </div>
              <div className={`flex items-center gap-3 text-gray-300 text-sm sm:text-base ${isRTL ? 'justify-start' : 'justify-center md:justify-start'}`}>
                <span className={`${isRTL ? 'text-left' : ''} font-mono`}>{t('footer.contact.email')}</span>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-aldar-teal flex-shrink-0" />
              </div>
              
            </div>
          </div>

          {/* Company Links */}
          <div className={`text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
            <h4 className={`text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('footer.headings.company')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-gray-300 hover:text-aldar-teal transition-colors duration-300 text-sm sm:text-base block hover:translate-x-1 transform duration-200 ${isRTL ? 'md:text-right hover:translate-x-[-4px] font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developments Links */}
          <div className={`text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
            <h4 className={`text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('footer.headings.developments')}</h4>
            <ul className="space-y-3">
              {footerLinks.developments.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-gray-300 hover:text-aldar-teal transition-colors duration-300 text-sm sm:text-base block hover:translate-x-1 transform duration-200 ${isRTL ? 'md:text-right hover:translate-x-[-4px] font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className={`text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
            <h4 className={`text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('footer.headings.ourCompanies')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.ourCompanies.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-gray-300 hover:text-aldar-teal transition-colors duration-300 text-sm sm:text-base block hover:translate-x-1 transform duration-200 ${isRTL ? 'md:text-right hover:translate-x-[-4px] font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-aldar-navy to-aldar-dark-navy rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 ${isRTL ? 'text-right font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('footer.stayUpdated')}
            </h3>
            <p className={`text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base ${isRTL ? 'text-right font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('footer.newsletterDescription')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder={isRTL ? "أدخل عنوان بريدك الإلكتروني" : "Enter your email address"}
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-aldar-light placeholder-aldar-muted focus:outline-none focus:border-aldar-teal transition-colors text-sm sm:text-base ${isRTL ? 'text-right' : ''}`}
              />
              <Button variant="default" className="bg-white text-[#661244] hover:bg-gray-100 hover:shadow-xl hover:scale-105 font-medium transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                {t('footer.subscribe')}
                <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 ${isRTL ? 'mr-1 sm:mr-2 rotate-180' : 'ml-1 sm:ml-2'}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className={`flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Copyright */}
            <div className={`text-gray-300 text-xs sm:text-sm text-center lg:text-left ${isRTL ? 'lg:text-right font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('footer.copyright')}
            </div>

            {/* Legal Links */}
            <div className={`flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center lg:justify-start ${isRTL ? 'flex-row-reverse lg:justify-end' : ''}`}>
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`text-gray-300 hover:text-aldar-teal transition-colors duration-300 hover:underline ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className={`flex gap-3 sm:gap-4 justify-center lg:justify-start ${isRTL ? 'flex-row-reverse lg:justify-end' : ''}`}>
              {socialLinks.map((social) => {
                // Define a mapping from social label to hover color classes
                const socialHoverColors: Record<string, string> = {
                  Twitter: "hover:bg-[#1da1f2] hover:text-white hover:scale-110",
                  X: "hover:bg-[#1a1a1a] hover:text-white hover:scale-110",
                  Facebook: "hover:bg-[#1877f3] hover:text-white hover:scale-110",
                  Instagram: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:scale-110",
                  LinkedIn: "hover:bg-[#0077b5] hover:text-white hover:scale-110",
                  YouTube: "hover:bg-[#ff0000] hover:text-white hover:scale-110",
                  // fallback
                  Default: "hover:bg-aldar-teal hover:text-aldar-navy hover:scale-110"
                };
                // Pick the color class based on label, fallback to Default
                const hoverClass = socialHoverColors[social.label] || socialHoverColors.Default;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 hover:shadow-lg ${hoverClass}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;