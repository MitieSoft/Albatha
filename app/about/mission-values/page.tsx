'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

export default function MissionValuesPage() {
  const { t, isRTL } = useLanguage();
  
  // Animation refs
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const operationsRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  
  const heroVisible = heroRef.isVisible;
  const aboutVisible = aboutRef.isVisible;
  const operationsVisible = operationsRef.isVisible;
  const missionVisible = missionRef.isVisible;

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef.ref as React.RefObject<HTMLElement>} className={`relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/4.jpg"
            alt="Office background"
            fill
            className="object-cover opacity-30 object-bottom"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mt-20">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4 transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('missionValues.hero.title')}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('missionValues.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef.ref as React.RefObject<HTMLElement>} className={`py-20 bg-gray-100 transition-all duration-1000 ease-out ${aboutVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${isRTL ? 'lg:col-start-2' : ''} transition-all duration-1000 ease-out ${aboutVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] mb-6 sm:mb-8 ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('missionValues.about.title')}
                </h2>
                <div className={`space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  <p>{t('missionValues.about.description1')}</p>
                  <p>{t('missionValues.about.description2')}</p>
                  <p>{t('missionValues.about.description3')}</p>
                  <p>{t('missionValues.about.description4')}</p>
                </div>
              </div>
              
              <div className={`flex justify-center ${isRTL ? 'lg:col-start-1' : ''} transition-all duration-1000 ease-out ${aboutVisible ? 'animate-fade-in-right animation-delay-200' : 'opacity-0 translate-x-8'}`}>
                <div className={`relative w-full max-w-2xl h-[420px] lg:h-[550px] ${isRTL ? 'mr-4' : 'ml-4'} hover:scale-105 transition-transform duration-500`}>
                  <Image
                    src="/images/1.jpg"
                    alt="Modern skyscrapers"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Operations Section */}
      <section ref={operationsRef.ref as React.RefObject<HTMLElement>} className={`py-20 bg-gray-800 relative overflow-hidden transition-all duration-1000 ease-out ${operationsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/2.jpg"
            alt="Office background"
            fill
            className="object-cover opacity-50 blur-xs"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div>
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 transition-all duration-1000 ease-out ${operationsVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('missionValues.operations.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {[
                t('missionValues.operations.item1'),
                t('missionValues.operations.item2'),
                t('missionValues.operations.item3'),
                t('missionValues.operations.item4'),
                t('missionValues.operations.item5'),
                t('missionValues.operations.item6')
              ].map((operation, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center transition-all duration-1000 ease-out ${operationsVisible ? `animate-fade-in-up animation-delay-${(index + 1) * 200}` : 'opacity-0 translate-y-8'}`}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-3'} sm:${isRTL ? 'space-x-reverse' : 'space-x-4'} w-full`}>
                    <div className="w-8 h-8 sm:w-10  text-[#661244] sm:h-10 bg-white  rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                      {index + 1}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mr-2 flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Arial, sans-serif' }}>{operation}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className={`text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 transition-all duration-1000 ease-out ${operationsVisible ? 'animate-fade-in-up animation-delay-1200' : 'opacity-0 translate-y-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('missionValues.operations.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section ref={missionRef.ref as React.RefObject<HTMLElement>} className={`py-20 bg-gray-100 transition-all duration-1000 ease-out ${missionVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`flex justify-center ${isRTL ? 'lg:justify-end lg:col-start-2' : 'lg:justify-start'} transition-all duration-1000 ease-out ${missionVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
                <div className={`relative w-full max-w-2xl h-[500px] lg:h-[730px] ${isRTL ? 'mr-4' : 'ml-4'} hover:scale-105 transition-transform duration-500`}>
                  <Image
                    src="/images/3.jpg"
                    alt="Modern buildings"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <div className={`${isRTL ? 'lg:col-start-1' : ''} transition-all duration-1000 ease-out ${missionVisible ? 'animate-fade-in-right animation-delay-200' : 'opacity-0 translate-x-8'}`}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] mb-6 sm:mb-8 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('missionValues.mission.title')}
                </h2>
                <div className={`space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  <p>{t('missionValues.mission.description1')}</p>
                  <p>{t('missionValues.mission.description2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
