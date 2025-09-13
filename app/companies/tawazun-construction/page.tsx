'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function TawazunConstructionPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center">
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
          <div className="text-center mt-20">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.hero.title')}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-7xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${isRTL ? 'lg:col-start-2' : ''}`}>
              <h2 className={`text-4xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('tawazun.about.title')}
              </h2>
              <p className={`text-gray-700 mb-6 text-lg leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('tawazun.about.description1')}
              </p>
              <p className={`text-gray-700 mb-8 text-lg leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('tawazun.about.description2')}
              </p>
             
            </div>
            <div className={`relative w-full h-96 lg:h-[450px] ${isRTL ? 'lg:col-start-1' : ''}`}>
              <Image
                src="/images/20.jpeg"
                alt="Construction project"
                fill
                className="object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.expertise.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('tawazun.expertise.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/18.jpeg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/17.jpeg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
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

    

      <Footer />
    </div>
  );
}
