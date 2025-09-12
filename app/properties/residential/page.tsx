'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ResidentialPropertiesPage() {
  const { t } = useLanguage();

  // Property data matching the image
  const properties = [
    {
      id: 1,
      title: "Al Arooba Building, Sharjah",
      bedrooms: "2-3 bedrooms",
      location: "Al Mareija Street, Sharjah. Close to Al Hisn Avenue",
      price: "AED 2.8M"
    },
    {
      id: 2,
      title: "Albatha Al Khan Beach Villa, Sharjah",
      bedrooms: "2-3 bedrooms",
      location: "Al Khalidiya Villa, Sharjah. Located Directly on Al Khan Beach.",
      price: "AED 2.8M"
    },
    {
      id: 3,
      title: "Albatha Residence Business Bay",
      bedrooms: "2-4 bedroom",
      location: "216, Sheikh Zayed Road, Business Bay, Dubai",
      price: "AED 2.8M"
    },
    {
      id: 4,
      title: "Al Waha Residence, Sharjah",
      bedrooms: "1-4 bedroom",
      location: "Al Khan Area, Sharjah, 897F+HCQ",
      price: "AED 2.8M"
    },
    {
      id: 5,
      title: "4 Villas Al Muafja, Sharjah",
      bedrooms: "3bedroom",
      location: "Al Muwafja Villas, Al Wasit Suburb Sharjah",
      price: "AED 2.8M"
    },
    {
      id: 6,
      title: "Sheikha Fatma Villa 204, Barashi",
      bedrooms: "6 bedrooms",
      location: "Barashi, Al Bedea Suburb Street 82. Close to Emirates Road",
      price: "AED 2.8M"
    },
    {
      id: 7,
      title: "Rolla Building, Sharjah",
      bedrooms: "1 bedroom",
      location: "Al Sheyoug Street, Sharjah, Near Al Hisn Square/Sharjah Fort",
      price: "AED 2.8M"
    },
    {
      id: 8,
      title: "Villa 274 - Shargan, Sharjah",
      bedrooms: "5 bedrooms",
      location: "Al Mirgab Street 105. Close to Sheikh Mohd Bin Sultan Street",
      price: "AED 2.8M"
    },
    {
      id: 9,
      title: "03 Shargan Villas, Sharjah",
      bedrooms: "4 bedrooms",
      location: "Shargan Villas Sharjah, Street 90 and access to Mohammed Bin Sultan Al Qasimi street, opposite Al Mirgab Residence, Shargan.",
      price: "AED 2.8M"
    },
    {
      id: 10,
      title: "Villa 276 (GECO) - Shargan, Sharjah",
      bedrooms: "5 bedroom",
      location: "Al Mirgab Street 105. Close to Sheikh Mohd Bin Sultan Al Qasimi Street.",
      price: "AED 2.8M"
    },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Blurred Background */}
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
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Residential Properties
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 animate-fade-in-up animation-delay-200">
              Our guiding principles and commitment to excellence in Dubai's dynamic real estate landscape.
            </p>
            
            {/* Search Bar */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 max-w-4xl mx-auto animate-scale-in animation-delay-400">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition"
                />
                <input
                  type="text"
                  placeholder="Bedroom"
                  className="flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition"
                />
                <input
                  type="text"
                  placeholder="Size (Sq. Ft.)"
                  className="flex-1 px-4 py-3 bg-white border-0 rounded-lg text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition"
                />
                <button className="w-full sm:w-auto bg-[#661244] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#551133] transition-colors duration-200 hover-scale">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property, index) => (
                <div key={property.id} className={`flex flex-col stagger-item hover-lift`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Property Image */}
                  <div className="relative h-80 w-full overflow-hidden border border-gray-300 rounded-3xl hover-scale">
                    <Image
                      src="/images/workspace-image.jpg"
                      alt={property.title}
                      fill
                      className="object-cover smooth-transition"
                    />
                  </div>
                  
                  {/* Property Title */}
                  <div className="p-2 bg-white">
                    <h3 className="text-2xl text-center font-semibold text-[#661244] mb-2 line-clamp-2">
                      {property.title}
                    </h3>
                  </div>
                  
                  {/* Purple Details Bar */}
                  <div className="bg-[#661244] text-white p-3 border border-[#661244] rounded-3xl hover-glow">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col space-y-2 flex-1">
                        {/* Bedrooms */}
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                          <span className="text-sm">{property.bedrooms}</span>
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{property.location}</span>
                        </div>
                      </div>
                      
                      {/* Starting Price - Right Side */}
                      <div className="text-right ml-4">
                        <div className="text-xs text-white/80">Starting From</div>
                        <div className="text-lg font-bold">{property.price}</div>
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
