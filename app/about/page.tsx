'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Learn more about Albatha  Real Estate and our commitment to excellence in the real estate industry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#661244] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Albatha  Real Estate has been a leading force in the UAE real estate market, 
                delivering exceptional properties and services that exceed expectations.
              </p>
              <p className="text-gray-700 mb-6">
                With years of experience and a deep understanding of the local market, 
                we continue to shape the future of real estate in the region.
              </p>
              
              <h2 className="text-3xl font-bold text-[#661244] mb-6 mt-12">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                To be the most trusted and innovative real estate company in the UAE, 
                creating sustainable communities and exceptional living experiences.
              </p>
              
              <h2 className="text-3xl font-bold text-[#661244] mb-6 mt-12">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We are committed to delivering high-quality real estate solutions that 
                meet the diverse needs of our clients while contributing to the 
                sustainable development of our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
