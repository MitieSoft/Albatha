'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function TawazunConstructionPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/19.jfif"
            alt="Office background"
            fill
            className="object-cover opacity-30 object-top"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Tawazan Construction
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-7xl mx-auto">
Tawazan Construction was established in 2008, with a primary focus on Civil Construction. Its team comprises highly qualified civil engineers with a full-fledged back-office support            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#661244] mb-8">Our Business</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Driven by excellence and dynamism, Tawazun aims to be the preferred choice for quality projects, timely delivery and value-added services. We focus on innovation and using state-of-the-art methods and materials to enhance productivity and cost eefectiveness. This is complemented by the continual development of staff competencies and the pursuit of the industry&apos;s leading safety record.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Tawazun is also committed to its environmental responsibilities and to mitigating the impacts arising from its activities. This includes the use of the latest eco-friendly concrete technology and compliance with environmental standards.
              </p>
             
            </div>
            <div className="relative w-full h-96 lg:h-[450px]">
              <Image
                src="/images/20.jfif"
                alt="Construction project"
                fill
                className="object-cover  shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#661244] mb-6">Tawazan Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
Tawazan is executing major projects, including villas, mosques, and car showrooms at various locations in the Emirates            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/18.jfif"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/17.jfif"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/images/16.jfif"
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
