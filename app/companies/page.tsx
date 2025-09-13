'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function CompaniesPage() {
  const { t, isRTL } = useLanguage();

  const companies = [
    {
      name: t('companies.tawazun.name'),
      nameKey: 'companies.tawazun.name',
      description: t('companies.tawazun.description'),
      descriptionKey: 'companies.tawazun.description',
      image: '/images/19.jfif',
      link: '/companies/tawazun-construction'
    },
    {
      name: t('companies.alAbir.name'),
      nameKey: 'companies.alAbir.name',
      description: t('companies.alAbir.description'),
      descriptionKey: 'companies.alAbir.description',
      image: '/images/22.jfif',
      link: '/companies/al-abir'
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}> 
      <Navigation />
      
      {/* Hero Section */}
      <section className="lg:pt-40 pt-25 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('companies.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('companies.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {companies.map((company, index) => (
                <Link key={index} href={company.link} className="block">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-80 relative overflow-hidden flex-shrink-0">
                      <Image
                        src={company.image}
                        alt={t(company.nameKey)}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className={`text-2xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {company.name}
                      </h3>
                      <p className={`text-gray-600 mb-6 text-lg leading-relaxed flex-grow ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {company.description}
                      </p>
                      <div className={`inline-flex items-center text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('companies.learnMore')}
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
