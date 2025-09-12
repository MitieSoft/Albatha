'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function LogisticsPropertiesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-6">
              Logistics Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              State-of-the-art logistics and warehousing facilities for efficient supply chain management
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
                <h2 className="text-3xl font-bold text-[#661244] mb-6">Advanced Logistics Solutions</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our logistics properties are strategically designed to optimize supply chain 
                  operations with modern facilities, advanced technology, and excellent connectivity 
                  to major transportation networks.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  From distribution centers to cold storage facilities, we provide solutions 
                  that enhance operational efficiency and reduce logistics costs.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Logistics Facility Image</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Connectivity</h3>
                <p className="text-gray-600">Direct access to ports, airports, and major highways</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Technology</h3>
                <p className="text-gray-600">Advanced warehouse management and tracking systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-bold text-[#661244] mb-3">Efficiency</h3>
                <p className="text-gray-600">Optimized layouts for maximum operational efficiency</p>
              </div>
            </div>

            {/* Property Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#661244] mb-8 text-center">Our Logistics Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Distribution Center Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Distribution Centers</h3>
                  <p className="text-gray-600 mb-4">Large-scale facilities for efficient product distribution</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Cold Storage Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Cold Storage</h3>
                  <p className="text-gray-600 mb-4">Temperature-controlled facilities for perishable goods</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Cross-Dock Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#661244] mb-3">Cross-Dock Facilities</h3>
                  <p className="text-gray-600 mb-4">Efficient transfer points for rapid goods movement</p>
                  <a href="#" className="text-[#661244] font-semibold hover:text-red-500 transition-colors duration-200">
                    View Details →
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#661244] mb-8 text-center">Logistics Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#661244] mb-4">Warehouse Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inventory tracking and management</li>
                    <li>• Automated storage and retrieval systems</li>
                    <li>• Real-time monitoring and reporting</li>
                    <li>• Quality control and inspection services</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#661244] mb-4">Transportation Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Last-mile delivery solutions</li>
                    <li>• Cross-border logistics support</li>
                    <li>• Fleet management and optimization</li>
                    <li>• Customs clearance assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#661244] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in Our Logistics Properties?</h2>
              <p className="text-lg mb-6">Contact us to learn more about our logistics solutions</p>
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
