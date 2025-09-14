'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function LaunchesPage() {
  const { t, isRTL } = useLanguage();

  const launches = [
    {
      title: t('launches.joudTower.title'),
      titleKey: 'launches.joudTower.title',
      description: t('launches.joudTower.description'),
      descriptionKey: 'launches.joudTower.description',
      image: '/images/23.png',
      link: '/launches/joud-tower',
      status: t('launches.status.available'),
      statusKey: 'launches.status.available',
      hasLink: true
    },
    {
      title: t('launches.liwan.title'),
      titleKey: 'launches.liwan.title',
      description: t('launches.liwan.description'),
      descriptionKey: 'launches.liwan.description',
      image: '/images/workspace-image.jpg',
      link: '/launches/liwan-renders',
      status: t('launches.status.available'),
      statusKey: 'launches.status.available',
      hasLink: true
    },
    {
      title: t('launches.others.title'),
      titleKey: 'launches.others.title',
      description: t('launches.others.description'),
      descriptionKey: 'launches.others.description',
      image: '/images/4.jpg',
      link: null,
      status: t('launches.status.inDevelopment'),
      statusKey: 'launches.status.inDevelopment',
      hasLink: false
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="lg:pt-40 pt-25 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('launches.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('launches.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Launches Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {launches.map((launch, index) => {
                const cardContent = (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-64 relative overflow-hidden flex-shrink-0">
                      <Image
                        src={launch.image}
                        alt={t(launch.titleKey)}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute ${isRTL ? 'top-4 left-4' : 'top-4 right-4'}`}>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          launch.statusKey === 'launches.status.available' ? 'bg-green-100 text-green-800' :
                          launch.statusKey === 'launches.status.comingSoon' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {launch.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className={`text-xl font-bold text-[#661244] mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {launch.title}
                      </h3>
                      <p className={`text-gray-600 mb-4 flex-grow ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {launch.description}
                      </p>
                      {launch.hasLink && (
                        <div className={`inline-flex items-center text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                          {t('launches.learnMore')}
                          <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-red-500`}>{isRTL ? '←' : '→'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );

                return launch.hasLink && launch.link ? (
                  <Link key={index} href={launch.link} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={index} className="h-full">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
