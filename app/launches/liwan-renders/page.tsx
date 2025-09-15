'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { useScrollAnimation } from '../../hooks/use-scroll-animation';

export default function LiwanRendersPage() {
  const { t, isRTL } = useLanguage();
  
  // Animation refs
  const heroRef = useScrollAnimation({ triggerOnce: false });
  const lavishRef = useScrollAnimation({ triggerOnce: false });
  const specRef = useScrollAnimation({ triggerOnce: false });
  const amenitiesRef = useScrollAnimation({ triggerOnce: false });
  const featuresRef = useScrollAnimation({ triggerOnce: false });
  const viewsRef = useScrollAnimation({ triggerOnce: false });
  const sanctuaryRef = useScrollAnimation({ triggerOnce: false });
  const feastRef = useScrollAnimation({ triggerOnce: false });
  const perspectiveRef = useScrollAnimation({ triggerOnce: false });
  const aestheticRef = useScrollAnimation({ triggerOnce: false });
  const eleganceRef = useScrollAnimation({ triggerOnce: false });
  
  const heroVisible = heroRef.isVisible;
  const lavishVisible = lavishRef.isVisible;
  const specVisible = specRef.isVisible;
  const amenitiesVisible = amenitiesRef.isVisible;
  const featuresVisible = featuresRef.isVisible;
  const viewsVisible = viewsRef.isVisible;
  const sanctuaryVisible = sanctuaryRef.isVisible;
  const feastVisible = feastRef.isVisible;
  const perspectiveVisible = perspectiveRef.isVisible;
  const aestheticVisible = aestheticRef.isVisible;
  const eleganceVisible = eleganceRef.isVisible;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef.ref as React.RefObject<HTMLElement>} className={`relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden min-h-screen flex items-center transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Liwan/3.jpg"
            alt="Cityscape background"
            fill
            className="object-cover "
          />
        </div>
        
        {/* Black Overlay - Right Half */}
        <div className="absolute inset-0 bg-black opacity-60 lg:bg-gradient-to-l lg:from-transparent lg:via-black/40 lg:to-black/80"></div>

        <div className="container mx-auto px-4 sm:px-12 md:px-16 xl:px-24 relative z-10">
          <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
            <div className={`text-white ${isRTL ? 'text-right' : 'text-right'} max-w-4xl transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0 translate-y-8'}`}>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.hero.title')}
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-5xl text-white mb-8 transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.hero.subtitle')}
              </p>
              <p className={`text-lg text-white ${isRTL ? 'text-right' : 'text-end'} leading-relaxed ${isRTL ? 'pr-8' : 'pl-8'} transition-all duration-1000 ease-out ${heroVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0 translate-y-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAVISH.DELUXE.OPULENT Section */}
      <section ref={lavishRef.ref as React.RefObject<HTMLElement>} className={`py-20 bg-white transition-all duration-1000 ease-out ${lavishVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Left side - Text */}
            <div className={`lg:col-span-3 ${isRTL ? 'lg:col-start-3' : ''}`}>
               <h2 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#661244] leading-[0.9] ${isRTL ? 'font-arabic text-right' : 'font-english text-left'} transition-all duration-1000 ease-out ${lavishVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.lavish.title') }}>
              </h2>
            </div>
            
            {/* Right side - Two overlapping images */}
            <div className={`lg:col-span-2 ${isRTL ? 'lg:col-start-1' : ''} relative`}>
              <div className="relative w-full h-96 sm:h-[500px] md:h-[500px] lg:h-[500px] transition-all duration-1000 ease-out ${lavishVisible ? 'animate-fade-in-right animation-delay-200' : 'opacity-0 translate-x-8'}">
                {/* Image Collage - Two overlapping images */}
                <div className="relative w-full h-full">
                  {/* Larger Image - Right side, vertical orientation */}
                  <div className={`absolute top-0 right-0 w-5/6 h-full z-10 transition-all duration-1000 ease-out ${lavishVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0 scale-95'}`}>
                    <Image
                      src="/images/Liwan/9.jpg"
                      alt="Joud Tower exterior view"
                      fill
                      className="object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Smaller Square Image - Left side, overlapping */}
                  <div className={`absolute bottom-8 sm:bottom-4 md:bottom-6 lg:bottom-20 -left-4 sm:-left-4 md:-left-6 lg:-left-8 w-2/3 h-2/3 z-20 transition-all duration-1000 ease-out ${lavishVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0 scale-95'}`}>
                    <Image
                      src="/images/Liwan/5.jpg"
                      alt="Luxury interior kitchen"
                      fill
                      className="object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom description - Centered, full width */}
          <div className="text-center px-4">
            <p className={`text-base sm:text-lg text-black leading-relaxed max-w-5xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'} transition-all duration-1000 ease-out ${lavishVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
               {t('liwanRenders.lavish.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Joud Tower Specification Section */}
      <section ref={specRef.ref as React.RefObject<HTMLElement>} className={`bg-[#decfca] transition-all duration-1000 ease-out ${specVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {/* Main Title - Outside Container */}
        <div className="text-center py-8   bg-white ">
          <h2 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl   font-bold text-[#661244] transition-all duration-1000 ease-out ${specVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}" style={{ fontFamily: 'Univers, Arial, sans-serif' }}>
            Joud Tower Specification
          </h2>
        </div>
        <div className='container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-8 pb-8'>
          <h3 className="text-3xl pt-4 sm:text-4xl md:text-5xl font-bold text-[#661244] mb-4" style={{ fontFamily: 'Univers, Arial, sans-serif' }}>
                Total of 55 Storeys
              </h3>
          </div>
        {/* 3 Divs Layout - No Gaps */}
        <div className=" container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24  pb-30" >
          <div className="grid grid-cols-1 lg:grid-cols-3 px-4 sm:px-4 md:px-0 lg:px-0">
          
          
          {/* Div 1 - Text + Image */}
          <div className="transition-all duration-1000 ease-out ${specVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'} flex flex-col justify-between h-full">
            <div>
              
              
              <div className="space-y-4 text-lg text-black pt-4 sm:pt-4 md:pt-6 lg:pt-8 pr-8">
                <p>1 Basement + Ground Floor + 5 Podium Levels for parking and services</p>
                <p><strong>48 floors residential at its highest point</strong></p>
              </div>
            </div>

             <div className="relative w-full h-80 mt-auto -right-20 -bottom-20 z-20 hidden lg:block">
               <Image
                 src="/images/Liwan/10.jpg"
                 alt="Joud Tower interior view"
                 fill
                 className="object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg"
               />
             </div>
          </div>

          {/* Div 2 - Big Image Covering Whole Div */}
          <div 
      className={`relative min-h-[400px] transition-all duration-1000 ease-out ${specVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0 scale-95'}`}
      style={{
        backgroundImage: 'url(/images/arc.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
          </div>

          {/* Div 3 - Image + Apartment List */}
          <div className="transition-all  duration-1000 ease-out ${specVisible ? 'animate-fade-in-right animation-delay-600' : 'opacity-0 translate-x-8'}">
             <div className="relative w-full h-64 mb-8 -left-20 -top-20 z-20 hidden lg:block">
               <Image
                 src="/images/Liwan/11.jpg"
                 alt="Joud Tower curved exterior"
                 fill
                 className="object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-lg"
               />
             </div>

            <div className="space-y-2 text-lg text-black leading-relaxed pl-2 sm:pl-2 md:pl-8 lg:pl-8 pt-4 sm:pt-4 md:pt-0 lg:pt-0">
              <p className="m-0">• 2-bedroom</p>
              <p className="m-0">• 3-bedroom</p>
              <p className="m-0">• 3-bedroom + private garden at the podium level</p>
              <p className="m-0">• 4-bedroom</p>
              <p className="m-0">• 4-bedroom + private garden at the podium level</p>
              <p className="m-0">• 4-bedroom duplex on the floor from 45 upwards (skyvilla)</p>
              <p className="m-0">• Penthouse: 5 bedrooms, bespoke with private pool</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section ref={amenitiesRef.ref as React.RefObject<HTMLElement>} className={`py-16 bg-white transition-all duration-1000 ease-out ${amenitiesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
               {t('liwanRenders.amenities.title')}
            </h2>
          </div>
          
          {/* 3x4 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* Row 1 */}
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/1.jpeg"
                  alt="Functional Gym"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.gym')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/2.jpeg"
                  alt="Sauna"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.sauna')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/3.jpeg"
                  alt="Swimming Pool"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.pool')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/4.jpeg"
                  alt="Padel Court"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.padel')}
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/5.jpeg"
                  alt="Running Track"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.running')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/6.jpeg"
                  alt="BBQ Area"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.bbq')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/7.jpeg"
                  alt="Kids Play Area"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.kids')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/8.jpeg"
                  alt="Multipurpose Hall"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.hall')}
              </p>
            </div>

            {/* Row 3 */}
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/9.jpeg"
                  alt="Cafe"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.cafe')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/10.jpeg"
                  alt="Prayer Room"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.prayer')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/11.jpeg"
                  alt="Kindergarten"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.kindergarten')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/images/Amenities/12.jpeg"
                  alt="Retail Shop"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
              <p className={`text-base font-bold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.amenities.retail')}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Other Features Section */}
      <section ref={featuresRef.ref as React.RefObject<HTMLElement>} className={` py-20 bg-gray-800 relative overflow-hidden transition-all duration-1000 ease-out ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
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
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.features.title')}
              </h2>
                  </div>

            <div className="space-y-8 mb-12">
              {/* Top row - 3 boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                   t('liwanRenders.features.delivery'),
                   t('liwanRenders.features.concierge'),
                   t('liwanRenders.features.access'),
                ].map((operation, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        {index + 1}
                  </div>
                      <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{operation}</p>
                </div>
                  </div>
                ))}
                  </div>

              {/* Bottom row - 2 boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto lg:max-w-3xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        4
                      </div>
                       <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{t('liwanRenders.features.booking')}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        5
                      </div>
                       <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{t('liwanRenders.features.maintenance')}</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="text-center">
              <p className={`text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                 {t('liwanRenders.features.description')}
              </p>
                </div>
              </div>
            </div>
      </section>

      {/* Enjoy Unparalleled Views Section */}
      <section ref={viewsRef.ref as React.RefObject<HTMLElement>} className={`py-8 lg:py-20 bg-white transition-all duration-1000 ease-out ${viewsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then images */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.views.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('liwanRenders.views.description')}
                </p>
              </div>
              <div className="space-y-6">
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/Liwan/5.jpg"
                    alt="Living space with balcony and pool"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/Liwan/6.jpg"
                    alt="Bedroom with city view"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Images first */}
            <div className="hidden lg:block space-y-6">
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/Liwan/5.jpg"
                  alt="Living space with balcony and pool"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/Liwan/6.jpg"
                  alt="Bedroom with city view"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.views.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                {t('liwanRenders.views.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Sanctuary Section */}
      <section ref={sanctuaryRef.ref as React.RefObject<HTMLElement>} className={`bg-[#decfca]  transition-all duration-1000 ease-out ${sanctuaryVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-16 pb-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              {t('liwanRenders.sanctuary.title')}
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              {t('liwanRenders.sanctuary.description')}
            </p>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/Liwan/1.jpg"
              alt="Luxury bedroom"
              fill
              className="object-cover shadow-xl rounded-lg"
            />
          </div>
                  </div>
      </section>

      {/* A Feast For The Senses Section */}
      <section ref={feastRef.ref as React.RefObject<HTMLElement>} className={`py-8 lg:py-20 bg-white transition-all duration-1000 ease-out ${feastVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  <span className="block">A Feast</span>
                  <span className="block">For The Senses</span>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('liwanRenders.feast.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/Liwan/2.jpg"
                    alt="Modern kitchen"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                <span className="block">A Feast</span>
                <span className="block">For The Senses</span>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                {t('liwanRenders.feast.description')}
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/Liwan/2.jpg"
                  alt="Modern kitchen"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priceless Perspective Section */}
      <section ref={perspectiveRef.ref as React.RefObject<HTMLElement>} className={`py-8 lg:py-20 bg-white transition-all duration-1000 ease-out ${perspectiveVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.perspective.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('liwanRenders.perspective.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/Liwan/7.jpg"
                    alt="Modern lobby"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/Liwan/7.jpg"
                  alt="Modern lobby"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.perspective.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                {t('liwanRenders.perspective.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AESTHETIC.EXCUISITE.IDYLLIC Section */}
      <section ref={aestheticRef.ref as React.RefObject<HTMLElement>} className={`py-8 lg:py-20 bg-[#decfca] transition-all duration-1000 ease-out ${aestheticVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.aesthetic.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('liwanRenders.aesthetic.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/Liwan/8.jpg"
                    alt="Private terrace"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.aesthetic.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                {t('liwanRenders.aesthetic.description')}
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/Liwan/8.jpg"
                  alt="Private terrace"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELEGANCE.STYLE.REFINEMENT Section */}
      <section ref={eleganceRef.ref as React.RefObject<HTMLElement>} className={`py-8 lg:py-20 bg-white transition-all duration-1000 ease-out ${eleganceVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.elegance.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('liwanRenders.elegance.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/Liwan/3.jpg"
                    alt="Luxury bathroom"
                    fill
                    className="object-cover shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/Liwan/3.jpg"
                  alt="Luxury bathroom"
                  fill
                  className="object-cover shadow-xl rounded-lg"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('liwanRenders.elegance.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                {t('liwanRenders.elegance.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

