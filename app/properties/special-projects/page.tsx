'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';
import useScrollAnimation from '../../hooks/use-scroll-animation';

export default function SpecialProjectsPage() {
  const { t, isRTL } = useLanguage();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const specialProjects = [
    {
      id: 1,
      titleKey: "specialProjects.projects.smartCity.title",
      locationKey: "specialProjects.projects.smartCity.location",
      typeKey: "specialProjects.projects.smartCity.type",
      sizeKey: "specialProjects.projects.smartCity.size",
      priceKey: "specialProjects.projects.smartCity.price",
      image: "/images/4.jpg"
    },
    {
      id: 2,
      titleKey: "specialProjects.projects.heritage.title",
      locationKey: "specialProjects.projects.heritage.location",
      typeKey: "specialProjects.projects.heritage.type",
      sizeKey: "specialProjects.projects.heritage.size",
      priceKey: "specialProjects.projects.heritage.price",
      image: "/images/4.jpg"
    },
    {
      id: 3,
      titleKey: "specialProjects.projects.greenEnergy.title",
      locationKey: "specialProjects.projects.greenEnergy.location",
      typeKey: "specialProjects.projects.greenEnergy.type",
      sizeKey: "specialProjects.projects.greenEnergy.size",
      priceKey: "specialProjects.projects.greenEnergy.price",
      image: "/images/4.jpg"
    },
    {
      id: 4,
      titleKey: "specialProjects.projects.floatingResort.title",
      locationKey: "specialProjects.projects.floatingResort.location",
      typeKey: "specialProjects.projects.floatingResort.type",
      sizeKey: "specialProjects.projects.floatingResort.size",
      priceKey: "specialProjects.projects.floatingResort.price",
      image: "/images/4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4.jpg"
            alt="Special Projects Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('specialProjects.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('specialProjects.hero.subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto animate-scale-in animation-delay-400">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('specialProjects.search.location')}</label>
                  <select className={`w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    <option>{t('specialProjects.search.selectLocation')}</option>
                    <option>مارينا دبي</option>
                    <option>الفهيدي</option>
                    <option>مدينة مصدر</option>
                    <option>نخلة جميرا</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('specialProjects.search.projectType')}</label>
                  <select className={`w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    <option>{t('specialProjects.search.selectType')}</option>
                    <option>مختلط الاستخدام</option>
                    <option>ثقافي</option>
                    <option>ابتكار</option>
                    <option>فاخر</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('specialProjects.search.sizeRange')}</label>
                  <select className={`w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    <option>{t('specialProjects.search.selectSize')}</option>
                    <option>أقل من 500 ألف قدم مربع</option>
                    <option>500 ألف - 1 مليون قدم مربع</option>
                    <option>1-2 مليون قدم مربع</option>
                    <option>أكثر من 2 مليون قدم مربع</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className={`w-full bg-[#661244] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#551133] transition-colors duration-200 hover-scale ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    {t('specialProjects.search.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-[#661244] mb-12 text-center ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('specialProjects.section.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialProjects.map((project, index) => (
                <div key={project.id} className={`space-y-2 stagger-item hover-lift`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Image */}
                  <div className="h-80 w-full overflow-hidden border border-gray-300 rounded-3xl hover-scale">
                    <Image
                      src={project.image}
                      alt={t(project.titleKey)}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover smooth-transition"
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="p-2 bg-white">
                    <h3 className={`text-2xl text-center font-semibold text-[#661244] ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t(project.titleKey)}
                    </h3>
                  </div>
                  
                  {/* Details */}
                  <div className="bg-[#661244] text-white p-3 border border-[#661244] rounded-3xl hover-glow">
                    <div className={`flex justify-between items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>الموقع: {t(project.locationKey)}</p>
                        <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>النوع: {t(project.typeKey)}</p>
                        <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>المساحة: {t(project.sizeKey)}</p>
                      </div>
                      <div className={`${isRTL ? 'text-right ml-4' : 'text-right ml-4'}`}>
                        <p className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t('specialProjects.property.startingFrom')}</p>
                        <p className={`text-lg font-bold ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>{t(project.priceKey)}</p>
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
