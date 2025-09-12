'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function OthersPropertiesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6">
              Other Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Diverse range of specialized real estate solutions for unique requirements
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-[#661244] mb-6">Specialized Real Estate Solutions</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our diverse portfolio includes unique property types that cater to specific 
                  industry needs and specialized requirements. From educational facilities 
                  to healthcare properties, we provide tailored solutions.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Each property is carefully selected and developed to meet the highest 
                  standards and specific functional requirements of our clients.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Specialized Property Image</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Flexibility</h3>
                <p className="text-gray-600">Adaptable spaces that can be customized for various uses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Specialization</h3>
                <p className="text-gray-600">Properties designed for specific industry requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Value</h3>
                <p className="text-gray-600">Strategic investments with strong long-term potential</p>
              </div>
            </div>

            {/* Property Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#661244] mb-8 text-center">Our Specialized Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Healthcare Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Healthcare Facilities</h3>
                  <p className="text-gray-600 mb-4">Medical centers, clinics, and healthcare-related properties</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Education Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Educational Properties</h3>
                  <p className="text-gray-600 mb-4">Schools, training centers, and educational facilities</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Hospitality Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Hospitality Properties</h3>
                  <p className="text-gray-600 mb-4">Hotels, resorts, and hospitality-related developments</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Recreation Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Recreational Facilities</h3>
                  <p className="text-gray-600 mb-4">Sports complexes, entertainment venues, and recreational spaces</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Religious Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Religious Properties</h3>
                  <p className="text-gray-600 mb-4">Places of worship and religious community centers</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Government Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Government Facilities</h3>
                  <p className="text-gray-600 mb-4">Administrative buildings and public service facilities</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Investment Opportunities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#661244] mb-8 text-center">Investment Opportunities</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#661244] mb-4">Diversified Portfolio</h3>
                    <p className="text-gray-700 mb-4">
                      Our specialized properties offer unique investment opportunities with 
                      different risk profiles and return potentials, allowing for portfolio diversification.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#661244] mb-4">Long-term Value</h3>
                    <p className="text-gray-700 mb-4">
                      These properties often provide stable, long-term returns due to their 
                      specialized nature and limited supply in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#661244] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in Our Specialized Properties?</h2>
              <p className="text-lg mb-6">Contact us to learn more about our diverse property portfolio</p>
              <a 
                href="/contact"
                className="inline-flex items-center bg-white text-[#661244] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
