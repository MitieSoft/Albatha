'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RentPage() {
  const { t } = useLanguage();

  const propertyTypes = [
    {
      title: 'Residential',
      description: 'Comfortable residential properties for rent',
      image: '/assets/2.jpg',
      link: '/rent/residential'
    },
    {
      title: 'Commercial',
      description: 'Prime commercial spaces for your business',
      image: '/assets/1.jpg',
      link: '/rent/commercial'
    },
    {
      title: 'Logistics Centre',
      description: 'Modern logistics and warehousing facilities',
      image: '/assets/3.jpg',
      link: '/rent/logistics-centre'
    },
    {
      title: 'Retail',
      description: 'Prime retail spaces in strategic locations',
      image: '/assets/4.jpg',
      link: '/rent/retail'
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
              Rent Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Find the perfect rental property for your residential or commercial needs
            </p>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {propertyTypes.map((property, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Property Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#661244] mb-3">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    <a 
                      href={property.link}
                      className="inline-flex items-center text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200"
                    >
                      Browse Rentals
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
            <h2 className="text-3xl font-bold mb-6">Looking for Rental Properties?</h2>
            <p className="text-lg mb-8">Our team can help you find the perfect rental property</p>
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
