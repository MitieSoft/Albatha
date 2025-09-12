'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LaunchesPage() {
  const { t } = useLanguage();

  const launches = [
    {
      title: 'Joud Tower',
      description: 'Luxurious residential tower with modern amenities and stunning views',
      image: '/assets/3.jpg',
      link: '/launches/joud-tower',
      status: 'Available'
    },
    {
      title: 'Liwan',
      description: 'Contemporary residential community designed for modern living',
      image: '/assets/2.jpg',
      link: '/launches/liwan',
      status: 'Coming Soon'
    },
    {
      title: 'Others',
      description: 'Additional exciting projects in our pipeline',
      image: '/assets/1.jpg',
      link: '/launches/others',
      status: 'In Development'
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
              New Launches
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover our latest residential and commercial developments
            </p>
          </div>
        </div>
      </section>

      {/* Launches Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {launches.map((launch, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-500 text-lg">Project Image</span>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        launch.status === 'Available' ? 'bg-green-100 text-green-800' :
                        launch.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {launch.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#661244] mb-3">{launch.title}</h3>
                    <p className="text-gray-600 mb-4">{launch.description}</p>
                    <a 
                      href={launch.link}
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
