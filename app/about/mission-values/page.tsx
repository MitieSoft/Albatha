'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function MissionValuesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-[#8b6b7b] overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/4.jpg"
            alt="Office background"
            fill
            className="object-cover opacity-30 object-bottom"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mt-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
              Albatha Real Estate
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto px-4">
              Our guiding principles and commitment to excellence in Dubai&apos;s dynamic real estate landscape
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] mb-6 sm:mb-8">
                  About us
              </h2>
                <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Albatha Real Estate, established in 1986, is a division of the xxx-year-old Albatha Holdings. 
                    We own, develop, lease, and manage a diverse array of commercial, residential, retail, and 
                    industrial properties as part of our commitment to meeting a broad spectrum of property 
                    requirements in the UAE.
                  </p>
                  <p>
                    From apartment blocks and villa developments to warehouses, showrooms, mosques, and industrial 
                    facilities, Albatha Real Estate has a wide and influential presence across the UAE, actively 
                    supporting the property sector and contributing to the economy.
                  </p>
                  <p>
                    We prioritize meeting customer requirements by identifying their needs and addressing them 
                    with our future-ready, market-driven approach.
                  </p>
                  <p>
                    We lease to a wide range of tenants from both private and corporate sectors, with particular 
                    emphasis on production, warehousing, and showrooms properties.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-[420px] lg:h-[550px] ml-4">
                  <Image
                    src="/images/1.jpg"
                    alt="Modern skyscrapers"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Operations Section */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
                Our Key Operations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {[
                "Managing and maintaining a portfolio of rented properties.",
                "Developing new properties for rent and for Albatha's specific use.",
                "Engaging with consultants and contractors for the implementation and delivery of projects.",
                "Developing properties for sale.",
                "Creating concepts, conducting feasibility studies, obtaining planning consent.",
                "and collaborating with consultants and contractors on marketing initiatives."
              ].map((operation, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                  <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                      {index + 1}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed flex-1">{operation}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4">
                We also provide a comprehensive service that encompasses consultancy, construction, sales and rentals, 
                building management, liaising with MEP and fire and safety contractors, as well as insurers, backed 
                by thorough and in-depth regional expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-2xl h-[500px] lg:h-[730px] ml-4">
                  <Image
                    src="/images/3.jpg"
                    alt="Modern buildings"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] mb-6 sm:mb-8 text-center lg:text-end">
                  Mission & Values
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-end">
                  <p>
                    Albatha Real Estate&apos;s mission is to serve the full spectrum of consumers in the property market, 
                    from luxury, premium, and high-quality residential properties to commercial, industrial, and 
                    public service structures. From first-time investors to repeat buyers, we are committed to 
                    playing a vital role in fulfilling their aspirations and requirements by building and managing 
                    properties through our trusted services, exceptional quality, and long-term market viability.
                  </p>
                  <p>
                    Albatha Real Estate&apos;s mission is founded on integrity and transparency, a steadfast focus on 
                    expertise and quality, and a commitment to sustainability.These core values, along with respect
                    for people and sensitivity to their concerns, have earned us a reputation for excellence, fariness and trust 
                    across the industry.
                </p>
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
