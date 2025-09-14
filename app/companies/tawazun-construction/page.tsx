'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactUsSection from '../../components/ContactUsSection';
import Image from 'next/image';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

export default function TawazunConstructionPage() {
  const { t, isRTL } = useLanguage();
  
  // Scroll animation hooks
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: businessRef, isVisible: businessVisible } = useScrollAnimation();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef as React.RefObject<HTMLElement>} className={`relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/19.jpeg"
            alt="Office background"
            fill
            className="object-cover opacity-30 object-top"
          />
        </div>
        
         <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
           <div className={`text-center mt-20 transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-8'}`}>
             <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
               {t('tawazun.hero.title')}
             </h1>
             <p className={`text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-7xl mx-auto transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
               {t('tawazun.hero.description')}
             </p>
           </div>
         </div>
      </section>

      {/* Our Business Section */}
      <section ref={businessRef as React.RefObject<HTMLElement>} className={`py-12 sm:py-16 lg:py-20 bg-white transition-all duration-1000 ease-out ${businessVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${isRTL ? 'lg:col-start-2' : ''} order-1 transition-all duration-1000 ease-out ${businessVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#661244] mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                 {t('tawazun.business.title')}
               </h2>
               <p className={`text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-center lg:text-left transition-all duration-1000 ease-out ${businessVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                 {t('tawazun.business.description1')}
               </p>
               <p className={`text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center lg:text-left transition-all duration-1000 ease-out ${businessVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                 {t('tawazun.business.description2')}
               </p>
             </div>
            <div className={`relative w-full h-96 sm:h-[500px] md:h-[500px] lg:h-[550px] ${isRTL ? 'lg:col-start-1' : ''} order-2 transition-all duration-1000 ease-out ${businessVisible ? 'animate-fade-in-right animation-delay-200' : 'opacity-0 translate-x-8'}`}>
              {/* Image Collage - Two overlapping images */}
              <div className="relative w-full h-full">
                 {/* Larger Image - Right side, vertical orientation */}
                 <div className={`absolute top-0 right-0 w-4/5 h-full z-10 transition-all duration-1000 ease-out ${businessVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0 scale-95'}`}>
                   <Image
                     src="/images/36.jpg"
                     alt="Modern construction project"
                     fill
                     className="object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg hover:scale-105 transition-transform duration-500"
                   />
                 </div>
                 
                 {/* Smaller Square Image - Left side, overlapping */}
                 <div className={`absolute bottom-8 sm:bottom-4 md:bottom-6 lg:bottom-20 left-2 sm:left-4 md:left-6 lg:left-4 w-3/5 h-3/5 z-20 transition-all duration-1000 ease-out ${businessVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0 scale-95'}`}>
                   <Image
                     src="/images/37.jpg"
                     alt="Construction site"
                     fill
                     className="object-cover object-bottom shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg hover:scale-105 transition-transform duration-500"
                   />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Tawazun Expertise Section */}
      <section ref={expertiseRef as React.RefObject<HTMLElement>} className={`pb-15 pt-5 bg-white transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-5xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.expertise.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.expertise.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`relative transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full h-80 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/18.jfif"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full h-80 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/17.jpeg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ease-out ${expertiseVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full h-80 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/16.jpeg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className={`py-20 bg-gray-800 relative overflow-hidden transition-all duration-1000 ease-out ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/2.jpg"
            alt="Construction background"
            fill
            className="object-cover opacity-50 blur-xs"
          />
        </div>
        
         <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
           <div className={`text-center mb-16 transition-all duration-1000 ease-out ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
             <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
               {t('tawazun.services.title')}
             </h2>
           </div>

          <div className="space-y-8">
            {/* First row - 4 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                t('tawazun.services.item1'),
                t('tawazun.services.item2'),
                t('tawazun.services.item3'),
                t('tawazun.services.item4')
              ].map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-32 sm:h-36 lg:h-25 flex items-center transition-all duration-1000 ease-out ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-3'} sm:${isRTL ? 'space-x-reverse' : 'space-x-4'} w-full`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                      {index + 1}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mr-2 flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{service}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 4 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                t('tawazun.services.item5'),
                t('tawazun.services.item6'),
                t('tawazun.services.item7'),
                t('tawazun.services.item8')
              ].map((service, index) => (
                <div key={index + 4} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-32 sm:h-36 lg:h-25 flex items-center transition-all duration-1000 ease-out ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-3'} sm:${isRTL ? 'space-x-reverse' : 'space-x-4'} w-full`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                      {index + 5}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mr-2 flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{service}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Third row - 3 boxes centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto lg:max-w-4xl">
              {[
                t('tawazun.services.item9'),
                t('tawazun.services.item10'),
                t('tawazun.services.item11')
              ].map((service, index) => (
                <div key={index + 8} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-32 sm:h-36 lg:h-25 flex items-center transition-all duration-1000 ease-out ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-3'} sm:${isRTL ? 'space-x-reverse' : 'space-x-4'} w-full`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                      {index + 9}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mr-2 flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUsSection />

    

      <Footer />
    </div>
  );
}
