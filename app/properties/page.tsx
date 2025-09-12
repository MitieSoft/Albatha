'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PropertiesPage() {
  const { t } = useLanguage();

  const propertyTypes = [
    {
      title: 'Commercial',
      description: 'Prime commercial properties for businesses of all sizes',
      image: '/assets/1.jpg',
      link: '/properties/commercial'
    },
    {
      title: 'Residential',
      description: 'Luxurious residential communities and apartments',
      image: '/assets/2.jpg',
      link: '/properties/residential'
    },
    {
      title: 'Logistics',
      description: 'State-of-the-art logistics and warehousing facilities',
      image: '/assets/3.jpg',
      link: '/properties/logistics'
    },
    {
      title: 'Industrial',
      description: 'Modern industrial complexes and manufacturing facilities',
      image: '/assets/4.jpg',
      link: '/properties/industrial'
    },
    {
      title: 'Special Projects',
      description: 'Unique and innovative real estate developments',
      image: '/assets/5.jpg',
      link: '/properties/special-projects'
    },
    {
      title: 'Others',
      description: 'Diverse range of specialized real estate solutions',
      image: '/assets/6.jpg',
      link: '/properties/others'
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
              Our Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover our diverse portfolio of exceptional real estate developments
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      Learn More
                      <span className="ml-2 text-red-500">→</span>
                    </a>
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
