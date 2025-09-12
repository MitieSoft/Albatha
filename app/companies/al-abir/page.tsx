'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function AlAbirPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Al Abir Engineering Consuling
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
              Al Abir Consulting and Engineering was established in 1983 as a comprehensive service design and engineering firm, providing civil, architectural, and mechanical solutions to meet the diverse needs of Albatha Holding and delivering a wide range of world-class projects.
            </p>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#661244] mb-8">Our Business</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Over the years, Al Abir has grown into a full-fledged civil, architectural, and MEPF design and engineering consultancy firm capable of delivering excellent projects. With years of experience in local by-laws and authority regulations, Al Abir follows international construction standards and best engineering practices, ensuring delivery of projects on time within budget.
              </p>
            </div>
            <div className="relative w-full h-96 lg:h-[400px]">
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
            <h2 className="text-4xl font-bold text-[#661244] mb-12 text-center">Our Services</h2>
            
            <div className="space-y-8">
              {/* First 9 services in 3x3 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Preparation of preliminary designs and drawings in coordination with end-users, manufacturers and suppliers.",
                  "Ensuring that the designs are economical, green and energy saving and keeping in line with the latest technologies.",
                  "Submission of final drawings to local authorities and interactive liaison for approvals.",
                  "Preparation of Tenders Packages which includes project specifications in accordance with local bye-laws, international standards and BOQ.",
                  "Preparation of Cost Analysis of the submitted tenders.",
                  "Project Management in line with FIDIC and contract agreements.",
                  "Supervising the Testing and Commissioning of the equipment installed.",
                  "Ensuring that the as-fitted drawings, operation and maintenance manuals are prepared.",
                  "Ensuring the local authority NOCS and building completion certificates are received."
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border-2 border-[#661244] rounded-2xl h-25">
                    <div className="w-8 h-8 bg-[#661244] text-white rounded flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
              
              {/* Last 2 services centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  {[
                    "Handover of the completed project.",
                    "Ongoing technical assistance will be provided wherever required once the projects are handed over."
                  ].map((service, index) => (
                    <div key={index + 9} className="flex items-center space-x-4 p-4 border-2 border-[#661244] rounded-2xl h-25">
                      <div className="w-8 h-8 bg-[#661244] text-white rounded flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 10}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
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
