'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function JoudTowerPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/5.png"
            alt="Cityscape background"
            fill
            className="object-cover opacity-70"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-12 md:px-16 xl:px-24 relative z-10">
          <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
            <div className={`text-white ${isRTL ? 'text-right' : 'text-right'} max-w-4xl`}>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.hero.title')}
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl lg:text-5xl text-white mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.hero.subtitle')}
              </p>
              <p className={`text-lg text-white ${isRTL ? 'text-right' : 'text-end'} leading-relaxed ${isRTL ? 'pr-8' : 'pl-8'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAVISH.DELUXE.OPULENT Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${isRTL ? 'lg:col-start-2' : ''}`}>
              <h2 className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.lavish.title') }}>
              </h2>
            </div>
            <div className={`flex justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <div className="relative w-full max-w-3xl h-98">
                <Image
                  src="/images/6.png"
                  alt="Luxury pool area"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('joudTower.lavish.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Joud Tower Specification Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('joudTower.specification.title')}
            </h2>
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className={`space-y-8 text-lg text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                <div>
                  <h3 className={`text-4xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.specification.storeys')}</h3>

                  <p>{t('joudTower.specification.basement')}</p>
                  <p><strong>{t('joudTower.specification.residential')}</strong></p>
                </div>

              <div>
                  <h3 className={`text-3xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.specification.apartmentTypes')}</h3>
                  <div className="space-y-3">
                    <p>• {t('joudTower.specification.apartments.2bed')}</p>
                    <p>• {t('joudTower.specification.apartments.3bed')}</p>
                    <p>• {t('joudTower.specification.apartments.3bedGarden')}</p>
                    <p>• {t('joudTower.specification.apartments.4bed')}</p>
                    <p>• {t('joudTower.specification.apartments.4bedGarden')}</p>
                    <p>• {t('joudTower.specification.apartments.4bedDuplex')}</p>

                    <p>• {t('joudTower.specification.apartments.penthouse')}</p>
                  </div>
                </div>
                  </div>
                  </div>
            <div className={`flex justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <div className="relative w-full max-w-6xl h-[600px]">
                <div className="absolute inset-4">
                  <Image
                    src="/images/23.png"
                    alt="Joud Tower exterior"
                    fill
                    className="object-cover object-center shadow-xl"
                  />
                  </div>
                </div>
              </div>
              </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('joudTower.amenities.title')}
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:px-[15%]">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/24.png"
                    alt="gym"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.gym')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/25.png"
                    alt="sauna"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.sauna')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/26.png"
                    alt="pool"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.pool')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/27.png"
                    alt="padel"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.padel')}</p>
            </div>

            {/* Row 2 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/28.png"
                    alt="running track"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.running')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/29.png"
                    alt="bbq"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.bbq')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/30.png"
                    alt="Kids play area"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.kids')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/31.png"
                    alt="multipurpose hall"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.hall')}</p>
            </div>

            {/* Row 3 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/32.png"
                    alt="Cafe"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.cafe')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/33.png"
                    alt="prayer room"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.prayer')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/34.png"
                    alt="kindergarten"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.kindergarten')}</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/35.png"
                    alt="retail shop"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className={`text-sm text-gray-700 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.amenities.retail')}</p>
            </div>
              </div>
            </div>
      </section>

      {/* Other Features Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
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
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.features.title')}
              </h2>
                  </div>

            <div className="space-y-8 mb-12">
              {/* Top row - 3 boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  t('joudTower.features.delivery'),
                  t('joudTower.features.concierge'),
                  t('joudTower.features.access'),
                ].map((operation, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        {index + 1}
                  </div>
                      <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{operation}</p>
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
                      <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.features.booking')}</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        5
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('joudTower.features.maintenance')}</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="text-center">
              <p className={`text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.features.description')}
              </p>
                </div>
              </div>
            </div>
      </section>

      {/* Enjoy Unparalleled Views Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then images */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.views.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('joudTower.views.description')}
                </p>
              </div>
              <div className="space-y-6">
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/8.png"
                    alt="Living space with balcony and pool"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/9.png"
                    alt="Bedroom with city view"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Images first */}
            <div className="hidden lg:block space-y-6">
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/8.png"
                  alt="Living space with balcony and pool"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/9.png"
                  alt="Bedroom with city view"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.views.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.views.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Sanctuary Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold text-[#661244] mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('joudTower.sanctuary.title')}
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('joudTower.sanctuary.description')}
            </p>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/11.png"
              alt="Luxury bedroom"
              fill
              className="object-cover shadow-xl"
            />
          </div>
                  </div>
      </section>

      {/* A Feast For The Senses Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.feast.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('joudTower.feast.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/12.png"
                    alt="Modern kitchen"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.feast.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.feast.description')}
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/12.png"
                  alt="Modern kitchen"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priceless Perspective Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.perspective.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('joudTower.perspective.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/13.png"
                    alt="Modern lobby"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/13.png"
                  alt="Modern lobby"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.perspective.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.perspective.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AESTHETIC.EXCUISITE.IDYLLIC Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.aesthetic.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('joudTower.aesthetic.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/14.png"
                    alt="Private terrace"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.aesthetic.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.aesthetic.description')}
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/14.png"
                  alt="Private terrace"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELEGANCE.STYLE.REFINEMENT Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className={`text-4xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.elegance.title') }}>
                </h2>
                <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('joudTower.elegance.description')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/15.png"
                    alt="Luxury bathroom"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/15.png"
                  alt="Luxury bathroom"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className={`text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }} dangerouslySetInnerHTML={{ __html: t('joudTower.elegance.title') }}>
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-end'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('joudTower.elegance.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
