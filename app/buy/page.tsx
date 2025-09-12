'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BuyPage() {
  const { t } = useLanguage();

  const propertyTypes = [
    {
      title: 'Residential',
      description: 'Find your perfect home with our residential properties',
      image: '/assets/2.jpg',
      link: '/buy/residential'
    },
    {
      title: 'Building Plots',
      description: 'Land plots for your custom development projects',
      image: '/assets/1.jpg',
      link: '/buy/building-plots'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6">
              Buy Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Find your perfect property with our comprehensive selection of residential and commercial options
            </p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {propertyTypes.map((property, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Property Image</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#661244] mb-4">{property.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{property.description}</p>
                    <a 
                      href={property.link}
                      className="inline-flex items-center text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200"
                    >
                      Browse Properties
                      <span className="ml-2 text-red-500">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#661244]">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Buy Your Dream Property?</h2>
            <p className="text-lg mb-8">Our expert team is here to help you find the perfect property</p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-[#661244] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Our Team
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
