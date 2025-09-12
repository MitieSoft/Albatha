'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';
import useScrollAnimation from '../../hooks/use-scroll-animation';

export default function SpecialProjectsPage() {
  const { t } = useLanguage();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const specialProjects = [
    {
      id: 1,
      title: "Smart City Complex",
      location: "Dubai Marina",
      type: "Mixed-Use",
      size: "2.5M sq ft",
      bedrooms: "N/A",
      price: "AED 1.2B",
      image: "/images/4.jpg"
    },
    {
      id: 2,
      title: "Heritage Restoration",
      location: "Al Fahidi",
      type: "Cultural",
      size: "500K sq ft",
      bedrooms: "N/A",
      price: "AED 800M",
      image: "/images/4.jpg"
    },
    {
      id: 3,
      title: "Green Energy Campus",
      location: "Masdar City",
      type: "Innovation",
      size: "1.8M sq ft",
      bedrooms: "N/A",
      price: "AED 950M",
      image: "/images/4.jpg"
    },
    {
      id: 4,
      title: "Floating Resort",
      location: "Palm Jumeirah",
      type: "Luxury",
      size: "300K sq ft",
      bedrooms: "N/A",
      price: "AED 2.1B",
      image: "/images/4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4.jpg"
            alt="Special Projects Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Special Projects
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Unique and innovative real estate developments that redefine modern living
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto animate-scale-in animation-delay-400">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition">
                    <option>Select Location</option>
                    <option>Dubai Marina</option>
                    <option>Al Fahidi</option>
                    <option>Masdar City</option>
                    <option>Palm Jumeirah</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition">
                    <option>Select Type</option>
                    <option>Mixed-Use</option>
                    <option>Cultural</option>
                    <option>Innovation</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size Range</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 smooth-transition">
                    <option>Select Size</option>
                    <option>Under 500K sq ft</option>
                    <option>500K - 1M sq ft</option>
                    <option>1M - 2M sq ft</option>
                    <option>Above 2M sq ft</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-[#661244] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#551133] transition-colors duration-200 hover-scale">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#661244] mb-12 text-center">
              Our Special Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialProjects.map((project, index) => (
                <div key={project.id} className={`space-y-2 stagger-item hover-lift`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Image */}
                  <div className="h-80 w-full overflow-hidden border border-gray-300 rounded-3xl hover-scale">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover smooth-transition"
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="p-2 bg-white">
                    <h3 className="text-2xl text-center font-semibold text-[#661244]">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Details */}
                  <div className="bg-[#661244] text-white p-3 border border-[#661244] rounded-3xl hover-glow">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-sm">Location: {project.location}</p>
                        <p className="text-sm">Type: {project.type}</p>
                        <p className="text-sm">Size: {project.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-300">Starting From</p>
                        <p className="text-lg font-bold">{project.price}</p>
                      </div>
                    </div>
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
