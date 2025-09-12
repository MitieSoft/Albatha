'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CompaniesPage() {
  const { t } = useLanguage();

  const companies = [
    {
      name: 'Tawazun Construction',
      description: 'Leading construction company specializing in infrastructure and building projects',
      image: '/assets/7.jpg',
      link: '/companies/tawazun-construction'
    },
    {
      name: 'Al Abir',
      description: 'Innovative real estate development company focused on sustainable communities',
      image: '/assets/8.jpg',
      link: '/companies/al-abir'
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
              Our Companies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover our portfolio of specialized companies and their expertise
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {companies.map((company, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Company Image</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#661244] mb-4">{company.name}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{company.description}</p>
                    <a 
                      href={company.link}
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
