'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function CommercialPropertiesPage() {
  const { t, isRTL } = useLanguage();

  // Commercial property data
  const properties = [
    {
      id: 1,
      titleKey: "commercial.properties.albathaAgmc.title",
      typeKey: "commercial.properties.albathaAgmc.type",
      locationKey: "commercial.properties.albathaAgmc.location",
      priceKey: "commercial.properties.albathaAgmc.price"
    },
    {
      id: 2,
      titleKey: "commercial.properties.albathaAkai.title",
      typeKey: "commercial.properties.albathaAkai.type",
      locationKey: "commercial.properties.albathaAkai.location",
      priceKey: "commercial.properties.albathaAkai.price"
    },
    {
      id: 3,
      titleKey: "commercial.properties.albathaTower.title",
      typeKey: "commercial.properties.albathaTower.type",
      locationKey: "commercial.properties.albathaTower.location",
      priceKey: "commercial.properties.albathaTower.price"
    },
    {
      id: 4,
      titleKey: "commercial.properties.abreIbo.title",
      typeKey: "commercial.properties.abreIbo.type",
      locationKey: "commercial.properties.abreIbo.location",
      priceKey: "commercial.properties.abreIbo.price"
    },
    {
      id: 5,
      titleKey: "commercial.properties.abreMpcAirport.title",
      typeKey: "commercial.properties.abreMpcAirport.type",
      locationKey: "commercial.properties.abreMpcAirport.location",
      priceKey: "commercial.properties.abreMpcAirport.price"
    },
    {
      id: 6,
      titleKey: "commercial.properties.abreMpcHealthcare.title",
      typeKey: "commercial.properties.abreMpcHealthcare.type",
      locationKey: "commercial.properties.abreMpcHealthcare.location",
      priceKey: "commercial.properties.abreMpcHealthcare.price"
    },
    
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section with Blurred Background */}
      <section className="relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/4.jpg"
            alt="Commercial Properties Background"
            fill
            className="object-cover opacity-30 object-bottom"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              {t('commercial.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl text-white/90 leading-relaxed mb-12 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
              {t('commercial.hero.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 max-w-4xl mx-auto">
              <div className={`flex flex-col sm:flex-row gap-3 items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <input
                  type="text"
                  placeholder={t('commercial.search.location')}
                  className={`flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`}
                  style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}
                />
                <input
                  type="text"
                  placeholder={t('commercial.search.propertyType')}
                  className={`flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`}
                  style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}
                />
                <input
                  type="text"
                  placeholder={t('commercial.search.size')}
                  className={`flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`}
                  style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}
                />
                <button className={`w-full sm:w-auto bg-[#661244] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#551133] transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                  {t('commercial.search.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="flex flex-col">
                  {/* Property Image */}
                  <div className="relative h-80 w-full overflow-hidden border border-gray-300 rounded-3xl">
                    <Image
                      src="/images/4.jpg"
                      alt={t(property.titleKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Property Title */}
                  <div className="p-2 bg-white">
                      <h3 className={`text-2xl text-center font-semibold text-[#661244] mb-2 line-clamp-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>
                      {t(property.titleKey)}
                    </h3>
                  </div>
                  
                  {/* Purple Details Bar */}
                  <div className="bg-[#661244] text-white p-3 border border-[#661244] rounded-3xl">
                    <div className={`flex justify-between items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex flex-col space-y-2 flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {/* Property Type */}
                        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <svg className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{t(property.typeKey)}</span>
                        </div>
                        
                        {/* Location */}
                        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <svg className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{t(property.locationKey)}</span>
                        </div>
                      </div>
                      
                      {/* Starting Price - Right Side */}
                      <div className={`${isRTL ? 'text-right ml-4' : 'text-right ml-4'}`}>
                        <div className={`text-xs text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Univers, Arial, sans-serif' }}>{t('commercial.property.startingFrom')}</div>
                        <div className={`text-lg font-bold ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'Poppins, Arial, sans-serif !important' : 'Univers, Arial, sans-serif' }}>{t(property.priceKey)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
