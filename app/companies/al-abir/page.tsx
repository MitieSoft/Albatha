'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function AlAbirPage() {
  const { t, isRTL } = useLanguage();
  
  // Helper function to get services list safely
  const getServicesList = (): string[] => {
    const services = t('alAbir.services.list');
    return Array.isArray(services) ? services : [];
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/21.jfif"
            alt="Office background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('alAbir.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('alAbir.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${isRTL ? 'lg:col-start-2' : ''}`}>
              <h2 className={`text-4xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('alAbir.business.title')}
              </h2>
              <p className={`text-gray-700 mb-6 text-lg leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('alAbir.business.description')}
              </p>
            </div>
            <div className={`relative w-full h-96 lg:h-[400px] ${isRTL ? 'lg:col-start-1' : ''}`}>
              <Image
                src="/images/22.jfif"
                alt="Engineering work"
                fill
                className="object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold text-[#661244] mb-12 text-center ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('alAbir.services.title')}
            </h2>
            
            <div className="space-y-8">
              {/* First 9 services in 3x3 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getServicesList().slice(0, 9).map((service, index) => (
                  <div key={index} className="flex items-center p-4 border-2 border-[#661244] rounded-2xl h-25 space-x-4">
                    <div className="w-8 h-8 bg-[#661244] text-white rounded flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className={`text-gray-700 text-sm leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {service}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Last 2 services centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  {getServicesList().slice(9, 11).map((service, index) => (
                    <div key={index + 9} className="flex items-center p-4 border-2 border-[#661244] rounded-2xl h-25 space-x-4">
                      <div className="w-8 h-8 bg-[#661244] text-white rounded flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 10}
                      </div>
                      <p className={`text-gray-700 text-sm leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {service}
                      </p>
                    </div>
                  ))}
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
