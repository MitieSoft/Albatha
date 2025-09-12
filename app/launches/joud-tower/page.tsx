'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function JoudTowerPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/5.png"
            alt="Cityscape background"
            fill
            className="object-cover opacity-70"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-12 md:px-16 xl:px-24 relative z-10">
          <div className="flex justify-end">
            <div className="text-white text-right max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                JOUD TOWER
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-white mb-8">
                A Dream Designed For You
              </p>
              <p className='text-lg text-white text-end leading-relaxed pl-8'>Joud Tower by Albatha Real Estate offers luxurious homes where everything you desire for you and your family comes together - a stunning location in the heart of vibrant communities, equipped with top-class amenities, characterised by family-friendly features and attention to detail. Experience a life filled with joy, happiness, comfort and convenience in exclusive spaces designed for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAVISH.DELUXE.OPULENT Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#661244] leading-tight">
                LAVISH.<br />
                DELUXE.<br />
                OPULENT.
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-3xl h-98">
                <Image
                  src="/images/6.png"
                  alt="Luxury pool area"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Joud Tower represents the pinnacle of luxury living in the heart of the city.
              This stunning residential tower offers unparalleled comfort, modern amenities,
              and breathtaking views of the skyline. Designed with meticulous attention to
              detail, Joud Tower combines contemporary architecture with premium finishes
              to create an exceptional living experience for discerning residents.
            </p>
          </div>
        </div>
      </section>

      {/* Joud Tower Specification Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-8">
              Joud Tower Specification
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8 text-lg text-gray-700">
                <div>
                  <h3 className="text-4xl font-bold text-[#661244] mb-4">No. of storeys: 55</h3>

                  <p>1 Basement + Ground Floor + 5 Podium Levels for parking and services</p>
                  <p><strong>48 floors residential</strong> at its highest point</p>
                </div>

              <div>
                  <h3 className="text-3xl font-bold text-[#661244] mb-4">Apartment Types:</h3>
                  <div className="space-y-3">
                    <p>• 2-bedroom</p>
                    <p>• 3-bedroom </p>
                    <p>• 3-bedroom + private garden at the podium level.</p>
                    <p>• 4-bedroom</p>
                    <p>• 4-bedroom + private garden at the podium level.</p>
                    <p>• 4-bedroom duplex on the floor from 45 upwards(skyvilla).</p>

                    <p>• Penthouse: 5 bedrooms, bespoke with private pool.</p>
                  </div>
                </div>
                  </div>
                  </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-6xl h-[600px]">
                <div className="absolute inset-4">
                  <Image
                    src="/images/23.png"
                    alt="Joud Tower exterior"
                    fill
                    className="object-cover object-center shadow-xl"
                  />
                  </div>
                </div>
              </div>
              </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#661244] mb-8">
              Amenities
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:px-[15%]">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/24.png"
                    alt="gym"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Functional Gym</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/25.png"
                    alt="sauna"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Sauna</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/26.png"
                    alt="pool"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Swimming Pool</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/27.png"
                    alt="padel"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Padel Court</p>
            </div>

            {/* Row 2 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/28.png"
                    alt="running track"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Running Track</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/29.png"
                    alt="bbq"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">BBQ Area</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/30.png"
                    alt="Kids play area"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Kids Play Area</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/31.png"
                    alt="multipurpose hall"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Multipurpose Hall</p>
            </div>

            {/* Row 3 */}
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/32.png"
                    alt="Cafe"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Cafe</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/33.png"
                    alt="prayer room"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Prayer Room</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/34.png"
                    alt="kindergarten"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Kindergarten</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-25 bg-white rounded-full flex items-center justify-center mx-auto">
              <div className="relative w-25 h-25">
              <div className="absolute inset-4">
                  <Image
                    src="/images/35.png"
                    alt="retail shop"
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                  </div>
              </div>
              <p className="text-sm text-gray-700">Retail Shop</p>
            </div>
              </div>
            </div>
      </section>

      {/* Other Features Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/2.jpg"
            alt="Office background"
            fill
            className="object-cover opacity-50 blur-xs"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
                Other Features
              </h2>
                  </div>

            <div className="space-y-8 mb-12">
              {/* Top row - 3 boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  "Controlled Delivery Circulation separate from the tenant's circulation.",
                  "24/7 Concierge Service.",
                  "Restricted Smart Access Entry and exit for tenants.",
                ].map((operation, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        {index + 1}
                  </div>
                      <p className="text-xs sm:text-sm leading-relaxed flex-1">{operation}</p>
                </div>
                  </div>
                ))}
                  </div>

              {/* Bottom row - 2 boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto lg:max-w-3xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        4
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed flex-1">Smart Amenities Booking.</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-white border border-white/20 h-24 sm:h-28 flex items-center">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#661244] rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-lg">
                        5
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed flex-1">Full Maintenance team onsite.</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4">
                Joud Tower, with its unrivalled location, ultra-premium interiors, and luxurious amenities and facilities, is a lasting asset that will provide you with the steady capital growth. Enjoy the best of both worlds: a beautiful, luxurious home that&apos;s also a longlife investment.
              </p>
                </div>
              </div>
            </div>
      </section>

      {/* Enjoy Unparalleled Views Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then images */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#661244] mb-8 leading-tight">
                  Enjoy Unparalleled<br />
                  Views 24/7
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wake up to breathtaking panoramic views of the city skyline and coastline.
                  Every apartment in Joud Tower is designed to maximize natural light and
                  provide stunning vistas that change throughout the day. From sunrise to
                  sunset, experience the beauty of the city from your own private sanctuary.
                </p>
              </div>
              <div className="space-y-6">
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/8.png"
                    alt="Living space with balcony and pool"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
                <div className="relative w-full max-w-lg h-80 mx-auto">
                  <Image
                    src="/images/9.png"
                    alt="Bedroom with city view"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Images first */}
            <div className="hidden lg:block space-y-6">
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/8.png"
                  alt="Living space with balcony and pool"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
              <div className="relative w-full max-w-lg h-80">
                <Image
                  src="/images/9.png"
                  alt="Bedroom with city view"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight text-end">
                Enjoy Unparalleled<br />
                Views 24/7
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-end">
                Wake up to breathtaking panoramic views of the city skyline and coastline.
                Every apartment in Joud Tower is designed to maximize natural light and
                provide stunning vistas that change throughout the day. From sunrise to
                sunset, experience the beauty of the city from your own private sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Sanctuary Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#661244] mb-8">
              Your Sanctuary of Peace & Comfort
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Step into a world of refined luxury where every detail has been carefully
              crafted to provide the ultimate in comfort and relaxation. Our spacious
              bedrooms feature premium finishes, floor-to-ceiling windows, and elegant
              built-in wardrobes that create a serene retreat from the bustling city below.
            </p>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/11.png"
              alt="Luxury bedroom"
              fill
              className="object-cover shadow-xl"
            />
          </div>
                  </div>
      </section>

      {/* A Feast For The Senses Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#661244] mb-8 leading-tight">
                  A Feast For<br />
                  The Senses
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The heart of every home deserves the finest attention. Our state-of-the-art
                  kitchens feature premium appliances, elegant countertops, and intelligent
                  design that makes cooking a pleasure. Whether you&apos;re preparing a simple
                  breakfast or hosting a dinner party, every culinary experience is elevated
                  to perfection.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/12.png"
                    alt="Modern kitchen"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight">
                A Feast For<br />
                The Senses
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The heart of every home deserves the finest attention. Our state-of-the-art
                kitchens feature premium appliances, elegant countertops, and intelligent
                design that makes cooking a pleasure. Whether you&apos;re preparing a simple
                breakfast or hosting a dinner party, every culinary experience is elevated
                to perfection.
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/12.png"
                  alt="Modern kitchen"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priceless Perspective Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#661244] mb-8 leading-tight">
                  Priceless<br />
                  Perspective
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience the world from a new vantage point. Our thoughtfully designed
                  living spaces offer more than just accommodation - they provide a unique
                  perspective on life. With expansive windows, open layouts, and seamless
                  indoor-outdoor flow, every moment becomes a celebration of sophisticated living.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/13.png"
                    alt="Modern lobby"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/13.png"
                  alt="Modern lobby"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight text-end">
                Priceless<br />
                Perspective
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-end">
                Experience the world from a new vantage point. Our thoughtfully designed
                living spaces offer more than just accommodation - they provide a unique
                perspective on life. With expansive windows, open layouts, and seamless
                indoor-outdoor flow, every moment becomes a celebration of sophisticated living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AESTHETIC.EXCUISITE.IDYLLIC Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#661244] mb-8 leading-tight">
                  AESTHETIC.<br />
                  EXCUISITE.<br />
                  IDYLLIC.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Step outside to your private terrace and discover a world of tranquility
                  and beauty. These carefully designed outdoor spaces offer the perfect
                  blend of privacy and openness, where you can entertain guests, enjoy
                  quiet moments, or simply bask in the natural beauty that surrounds you.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/14.png"
                    alt="Private terrace"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Text first */}
            <div className="hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight">
                AESTHETIC.<br />
                EXCUISITE.<br />
                IDYLLIC.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Step outside to your private terrace and discover a world of tranquility
                and beauty. These carefully designed outdoor spaces offer the perfect
                blend of privacy and openness, where you can entertain guests, enjoy
                quiet moments, or simply bask in the natural beauty that surrounds you.
              </p>
            </div>
            
            {/* Desktop: Image second */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-2xl h-96 ml-8">
                <Image
                  src="/images/14.png"
                  alt="Private terrace"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELEGANCE.STYLE.REFINEMENT Section */}
      <section className="py-8 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Heading first, then text, then image */}
            <div className="lg:hidden space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#661244] mb-8 leading-tight">
                  ELEGANCE.<br />
                  STYLE.<br />
                  REFINEMENT.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every detail reflects our commitment to excellence. From the carefully
                  selected materials to the precision of the craftsmanship, each apartment
                  is a masterpiece of design. Experience the perfect harmony of form and
                  function, where luxury meets practicality in every corner of your new home.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-96">
                  <Image
                    src="/images/15.png"
                    alt="Luxury bathroom"
                    fill
                    className="object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop: Image first */}
            <div className="hidden lg:flex justify-start">
              <div className="relative w-full max-w-2xl h-96 mr-8">
                <Image
                  src="/images/15.png"
                  alt="Luxury bathroom"
                  fill
                  className="object-cover shadow-xl"
                />
              </div>
            </div>
            
            {/* Desktop: Text second */}
            <div className="hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#661244] mb-8 leading-tight text-end">
                ELEGANCE.<br />
                STYLE.<br />
                REFINEMENT.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-end">
                Every detail reflects our commitment to excellence. From the carefully
                selected materials to the precision of the craftsmanship, each apartment
                is a masterpiece of design. Experience the perfect harmony of form and
                function, where luxury meets practicality in every corner of your new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
