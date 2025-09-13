'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertiesPage() {
  const { t, isRTL } = useLanguage();

  const propertyTypes = [
    {
      titleKey: 'properties.commercial.title',
      descriptionKey: 'properties.commercial.description',
      image: '/images/4.jpg',
      link: '/properties/commercial'
    },
    {
      titleKey: 'properties.residential.title',
      descriptionKey: 'properties.residential.description',
      image: '/images/workspace-image.jpg',
      link: '/properties/residential'
    },
    {
      titleKey: 'properties.industrial.title',
      descriptionKey: 'properties.industrial.description',
      image: '/images/4.jpg',
      link: '/properties/industrial'
    },
    {
      titleKey: 'properties.specialProjects.title',
      descriptionKey: 'properties.specialProjects.description',
      image: '/images/4.jpg',
      link: '/properties/special-projects'
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-25 lg:pt-40 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('properties.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('properties.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {propertyTypes.map((property, index) => (
                <Link key={index} href={property.link} className="block">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="h-64 relative overflow-hidden">
                      <Image
                        src={property.image}
                        alt={t(property.titleKey)}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold text-[#661244] mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t(property.titleKey)}
                      </h3>
                      <p className={`text-gray-600 mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t(property.descriptionKey)}
                      </p>
                      <div className={`inline-flex items-center text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('properties.learnMore')}
                        <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-red-500`}>{isRTL ? '←' : '→'}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
