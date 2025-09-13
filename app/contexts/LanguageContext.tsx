'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
  fontFamily: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    'nav.aboutUs': 'About Us',
    'nav.ourProperties': 'Our Properties',
    'nav.newLaunches': 'New Launches',
    'nav.ourCompanies': 'Our Companies',
    // 'nav.careers': 'CAREERS',
    'nav.buy': 'Buy',
    'nav.rent': 'Rent',
    'nav.callButton': 'Call 800Albatha ',
    
    // Hero Section
    'hero.title': 'In Focus',
    'hero.subtitle': 'Albatha  explores the scale, strategic thinking, and collaboration behind Albatha \'s purpose-led infrastructure and government housing partnerships.',
    'hero.watchButton': 'Watch Episode 6',
    'hero.promotions': 'Promotions',
    'hero.slide.title': 'We Build Properties You Want To Call Home',
    'hero.slide.subtitle': 'Our Legacy, Your Trust.',
    'hero.slide.description': "In everything we do, we reflect ‘trust’ and ’care'.",
    'hero.slide.description1': "These two values serve as the cornerstone of our company's existence.",
    'hero.slide.ctaText': 'Learn More',
    'hero.number': '800 1 8888',
    // Workspace Section
    'workspace.title': 'Workspace Solutions',
    'workspace.subtitle': 'Modern office spaces designed for productivity and collaboration.',
    'workspace.learnMore': 'Learn More',
    'workspace.premiumDevelopments': 'Premium Developments',
    'workspace.sqFtDeveloped': 'Sq Ft Developed',
    'workspace.yearsExperience': 'Years Experience',
    
    // Live Life Section
    'liveLife.title': 'Your Dream Home Awaits at Albatha ',
    'liveLife.description1': 'Experience premium living with Albatha \'s properties in Dubai\'s prime locations, offering world-class amenities and elegant, luxurious designs.',  
'liveLife.description2': 'From stylish apartments to exclusive villas, every detail reflects Albatha \'s commitment to excellence—where your dream lifestyle begins.',  
    'liveLife.premiumLiving': 'Premium Living',
    'liveLife.premiumLivingDesc': 'Discover residences that combine architectural excellence with modern amenities, creating the perfect environment for your lifestyle.',
    'liveLife.communityFirst': 'Community First',
    'liveLife.communityFirstDesc': 'Build lasting relationships in vibrant communities designed to foster connections and create meaningful experiences.',
    'liveLife.familyFocused': 'Family Focused',
    'liveLife.familyFocusedDesc': 'Create lasting memories in spaces designed for families, with amenities and layouts that support every stage of life.',
    'liveLife.exploreButton': 'Explore Our Communities',
    
    // Live Life Reports Section
    'liveLife.reports.title': 'Our Latest Reports',
    'liveLife.reports.pressRelease.title': 'H1 2025 Results - Press Release',
    'liveLife.reports.presentation.title': 'H1 2025 Results - Presentation',
    'liveLife.reports.financialStatements.title': 'H1 2025 Results - Financial Statements',
    'liveLife.reports.earningsCallTranscript.title': 'H1 2025 - Earnings Call Transcript',
    'liveLife.reports.pressRelease.action': 'View Report',
    'liveLife.reports.presentation.action': 'View Report',
    'liveLife.reports.financialStatements.action': 'View Report',
    'liveLife.reports.earningsCallTranscript.action': 'View Report',
    
    // Live Life Sustainability Section
    'liveLife.sustainability.title': 'Our Sustainability',
    'liveLife.sustainability.subtitle': 'Report for 2025',
    'liveLife.sustainability.description': 'Building sustainable communities for future generations, where families thrive in harmony with nature. Our commitment to environmental stewardship ensures a greener, healthier world for your children and grandchildren. Discover how Albatha  is creating lasting value for families and the planet!',
    'liveLife.sustainability.button': 'Download Report',
    
    // Reports Section
    'reports.title': 'Reports & Publications',
    'reports.subtitle': 'Stay informed with our latest reports and insights.',
    'reports.viewAll': 'View All Reports',
    
    // Latest Launches Section
    'launches.title': 'Our Latest Launches',
    'launches.subtitle': 'Discover our newest developments that combine innovative design, sustainable practices, and exceptional quality to create extraordinary living and working spaces.',
    'launches.preLaunch': 'Pre-Launch',
    'launches.comingSoon': 'Coming Soon',
    'launches.planningPhase': 'Planning Phase',
    'launches.learnMore': 'Learn More',
    'launches.viewAll': 'View All Launches',
    'launches.residential': 'RESIDENTIAL',
    'launches.commercial': 'COMMERCIAL',
    'launches.Albatha RealEstate': 'Albatha  Real Estate',
    'launches.joudTower': 'Joud Tower',
    'launches.joudTowerDescription': 'Where nature meets luxury. Experience the perfect blend of organic architecture and modern comfort in this groundbreaking residential development, where every detail is perfectly crafted.',
    'launches.launchQ2': 'Launch Q2 2025',
    'launches.joudTowerAlt': 'Joud Tower - Natural landscape with organic buildings',
    'launches.residentialProject': 'RESIDENTIAL PROJECT',
    'launches.joudTowerApartment': 'Joud Tower ',
    'launches.joudTowerApartmentDescription': 'Unparalleled luxury meets iconic hospitality. Live in the heart of one of the world\'s most prestigious addresses with world-class amenities, where every detail is crafted to perfection.',
    'launches.launchQ3': 'Launch Q3 2025',
    'launches.joudTowerApartmentAlt': 'Joud Tower Apartment - Luxury waterfront development',
    'launches.hero.title': 'New Launches',
    'launches.hero.subtitle': 'Discover our latest residential and commercial developments',
    'launches.joudTower.title': 'Joud Tower',
    'launches.joudTower.description': 'Luxurious residential tower with modern amenities and stunning views',
    'launches.liwan.title': 'Liwan',
    'launches.liwan.description': 'Contemporary residential community designed for modern living',
    'launches.others.title': 'Others',
    'launches.others.description': 'Additional exciting projects in our pipeline',
    'launches.status.available': 'Available',
    'launches.status.comingSoon': 'Coming Soon',
    'launches.status.inDevelopment': 'In Development',
    
    // Joud Tower Page
    'joudTower.hero.title': 'JOUD TOWER',
    'joudTower.hero.subtitle': 'A Dream Designed For You',
    'joudTower.hero.description': 'Joud Tower by Albatha Real Estate offers luxurious homes where everything you desire for you and your family comes together - a stunning location in the heart of vibrant communities, equipped with top-class amenities, characterised by family-friendly features and attention to detail. Experience a life filled with joy, happiness, comfort and convenience in exclusive spaces designed for you.',
    'joudTower.lavish.title': 'LAVISH.<br />DELUXE.<br />OPULENT.',
    'joudTower.lavish.description': 'Joud Tower represents the pinnacle of luxury living in the heart of the city. This stunning residential tower offers unparalleled comfort, modern amenities, and breathtaking views of the skyline. Designed with meticulous attention to detail, Joud Tower combines contemporary architecture with premium finishes to create an exceptional living experience for discerning residents.',
    'joudTower.specification.title': 'Joud Tower Specification',
    'joudTower.specification.storeys': 'No. of storeys: 55',
    'joudTower.specification.basement': '1 Basement + Ground Floor + 5 Podium Levels for parking and services',
    'joudTower.specification.residential': '48 floors residential at its highest point',
    'joudTower.specification.apartmentTypes': 'Apartment Types:',
    'joudTower.specification.apartments.2bed': '2-bedroom',
    'joudTower.specification.apartments.3bed': '3-bedroom',
    'joudTower.specification.apartments.3bedGarden': '3-bedroom + private garden at the podium level.',
    'joudTower.specification.apartments.4bed': '4-bedroom',
    'joudTower.specification.apartments.4bedGarden': '4-bedroom + private garden at the podium level.',
    'joudTower.specification.apartments.4bedDuplex': '4-bedroom duplex on the floor from 45 upwards(skyvilla).',
    'joudTower.specification.apartments.penthouse': 'Penthouse: 5 bedrooms, bespoke with private pool.',
    'joudTower.amenities.title': 'Amenities',
    'joudTower.amenities.gym': 'Functional Gym',
    'joudTower.amenities.sauna': 'Sauna',
    'joudTower.amenities.pool': 'Swimming Pool',
    'joudTower.amenities.padel': 'Padel Court',
    'joudTower.amenities.running': 'Running Track',
    'joudTower.amenities.bbq': 'BBQ Area',
    'joudTower.amenities.kids': 'Kids Play Area',
    'joudTower.amenities.hall': 'Multipurpose Hall',
    'joudTower.amenities.cafe': 'Cafe',
    'joudTower.amenities.prayer': 'Prayer Room',
    'joudTower.amenities.kindergarten': 'Kindergarten',
    'joudTower.amenities.retail': 'Retail Shop',
    'joudTower.features.title': 'Other Features',
    'joudTower.features.delivery': 'Controlled Delivery Circulation separate from the tenant\'s circulation.',
    'joudTower.features.concierge': '24/7 Concierge Service.',
    'joudTower.features.access': 'Restricted Smart Access Entry and exit for tenants.',
    'joudTower.features.booking': 'Smart Amenities Booking.',
    'joudTower.features.maintenance': 'Full Maintenance team onsite.',
    'joudTower.features.description': 'Joud Tower, with its unrivalled location, ultra-premium interiors, and luxurious amenities and facilities, is a lasting asset that will provide you with the steady capital growth. Enjoy the best of both worlds: a beautiful, luxurious home that\'s also a longlife investment.',
    'joudTower.views.title': 'Enjoy Unparalleled<br />Views 24/7',
    'joudTower.views.description': 'Wake up to breathtaking panoramic views of the city skyline and coastline. Every apartment in Joud Tower is designed to maximize natural light and provide stunning vistas that change throughout the day. From sunrise to sunset, experience the beauty of the city from your own private sanctuary.',
    'joudTower.sanctuary.title': 'Your Sanctuary of Peace & Comfort',
    'joudTower.sanctuary.description': 'Step into a world of refined luxury where every detail has been carefully crafted to provide the ultimate in comfort and relaxation. Our spacious bedrooms feature premium finishes, floor-to-ceiling windows, and elegant built-in wardrobes that create a serene retreat from the bustling city below.',
    'joudTower.feast.title': 'A Feast For<br />The Senses',
    'joudTower.feast.description': 'The heart of every home deserves the finest attention. Our state-of-the-art kitchens feature premium appliances, elegant countertops, and intelligent design that makes cooking a pleasure. Whether you\'re preparing a simple breakfast or hosting a dinner party, every culinary experience is elevated to perfection.',
    'joudTower.perspective.title': 'Priceless<br />Perspective',
    'joudTower.perspective.description': 'Experience the world from a new vantage point. Our thoughtfully designed living spaces offer more than just accommodation - they provide a unique perspective on life. With expansive windows, open layouts, and seamless indoor-outdoor flow, every moment becomes a celebration of sophisticated living.',
    'joudTower.aesthetic.title': 'AESTHETIC.<br />EXCUISITE.<br />IDYLLIC.',
    'joudTower.aesthetic.description': 'Step outside to your private terrace and discover a world of tranquility and beauty. These carefully designed outdoor spaces offer the perfect blend of privacy and openness, where you can entertain guests, enjoy quiet moments, or simply bask in the natural beauty that surrounds you.',
    'joudTower.elegance.title': 'ELEGANCE.<br />STYLE.<br />REFINEMENT.',
    'joudTower.elegance.description': 'Every detail reflects our commitment to excellence. From the carefully selected materials to the precision of the craftsmanship, each apartment is a masterpiece of design. Experience the perfect harmony of form and function, where luxury meets practicality in every corner of your new home.',
    
    // Companies Page
    'companies.hero.title': 'Our Companies',
    'companies.hero.subtitle': 'Discover our portfolio of specialized companies and their expertise',
    'companies.learnMore': 'Learn More',
    'companies.tawazun.name': 'Tawazun Construction',
    'companies.tawazun.description': 'Leading construction company specializing in infrastructure and building projects',
    'companies.alAbir.name': 'Al Abir',
    'companies.alAbir.description': 'Innovative real estate development company focused on sustainable communities',
    
    // Tawazun Construction Page
    'tawazun.hero.title': 'Tawazan Construction',
    'tawazun.hero.description': 'Tawazan Construction was established in 2008, with a primary focus on Civil Construction. Its team comprises highly qualified civil engineers with a full-fledged back-office support',
    'tawazun.about.title': 'Our Business',
    'tawazun.about.description1': 'Driven by excellence and dynamism, Tawazun aims to be the preferred choice for quality projects, timely delivery and value-added services. We focus on innovation and using state-of-the-art methods and materials to enhance productivity and cost effectiveness. This is complemented by the continual development of staff competencies and the pursuit of the industry\'s leading safety record.',
    'tawazun.about.description2': 'Tawazun is also committed to its environmental responsibilities and to mitigating the impacts arising from its activities. This includes the use of the latest eco-friendly concrete technology and compliance with environmental standards.',
    'tawazun.expertise.title': 'Tawazan Expertise',
    'tawazun.expertise.description': 'Tawazan is executing major projects, including villas, mosques, and car showrooms at various locations in the Emirates',
    
    // Al Abir Page
    'alAbir.hero.title': 'Al Abir Engineering Consulting',
    'alAbir.hero.description': 'Al Abir Consulting and Engineering was established in 1983 as a comprehensive service design and engineering firm, providing civil, architectural, and mechanical solutions to meet the diverse needs of Albatha Holding and delivering a wide range of world-class projects.',
    'alAbir.business.title': 'Our Business',
    'alAbir.business.description': 'Over the years, Al Abir has grown into a full-fledged civil, architectural, and MEPF design and engineering consultancy firm capable of delivering excellent projects. With years of experience in local by-laws and authority regulations, Al Abir follows international construction standards and best engineering practices, ensuring delivery of projects on time within budget.',
    'alAbir.services.title': 'Our Services',
    'alAbir.services.list': [
      'Preparation of preliminary designs and drawings in coordination with end-users, manufacturers and suppliers.',
      'Ensuring that the designs are economical, green and energy saving and keeping in line with the latest technologies.',
      'Submission of final drawings to local authorities and interactive liaison for approvals.',
      'Preparation of Tenders Packages which includes project specifications in accordance with local bye-laws, international standards and BOQ.',
      'Preparation of Cost Analysis of the submitted tenders.',
      'Project Management in line with FIDIC and contract agreements.',
      'Supervising the Testing and Commissioning of the equipment installed.',
      'Ensuring that the as-fitted drawings, operation and maintenance manuals are prepared.',
      'Ensuring the local authority NOCS and building completion certificates are received.',
      'Handover of the completed project.',
      'Ongoing technical assistance will be provided wherever required once the projects are handed over.'
    ],
    
    // Contact Page
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Get in touch with our team for any inquiries about our properties and services',
    'contact.getInTouch.title': 'Get In Touch',
    'contact.getInTouch.subtitle': 'We\'re here to help you find your perfect property. Reach out to us through any of the following channels.',
    'contact.phone.title': 'Phone',
    'contact.phone.number1': '+971 4 123 4567',
    'contact.phone.number2': '+971 4 123 4568',
    'contact.email.title': 'Email',
    'contact.email.address1': 'info@Albatha.ae',
    'contact.email.address2': 'sales@Albatha.ae',
    'contact.address.title': 'Address',
    'contact.address.text': 'Al Batha Tower<br />283 Corniche St - Al Majaz 1<br />Al Majaz - Sharjah<br />United Arab Emirates',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.firstNamePlaceholder': 'Enter your first name',
    'contact.form.lastName': 'Last Name',
    'contact.form.lastNamePlaceholder': 'Enter your last name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Enter your email',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Enter your phone number',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Select a subject',
    'contact.form.subjectOptions': [
      'Property Inquiry',
      'Sales Information',
      'General Question',
      'Partnership',
      'Other'
    ],
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Enter your message',
    'contact.form.submit': 'Send Message',
    'contact.location.title': 'Our Location',
    'contact.location.mapText': 'Interactive Map',
    'contact.location.address': 'Al Majaz, Sharjah',
    'contact.hours.monday': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Saturday: 10:00 AM - 4:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Find answers to common questions about our properties and services',
    'contact.faq.questions': [
      {
        question: 'What types of properties do you offer?',
        answer: 'We offer a wide range of residential, commercial, industrial, and special project properties across Dubai and the UAE.'
      },
      {
        question: 'How can I schedule a property viewing?',
        answer: 'You can schedule a viewing by calling us at +971 4 123 4567 or filling out the contact form above. We\'ll arrange a convenient time for you.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, we work with leading banks and financial institutions to provide competitive financing options for our properties.'
      },
      {
        question: 'What are your office hours?',
        answer: 'Our office is open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We\'re closed on Sundays.'
      }
    ],
    
    // More Than You Know Section
    'moreThanYouKnow.title': 'We are more than what you know',
    'moreThanYouKnow.subtitle': 'Discover our full scope',
    'moreThanYouKnow.description': 'We are more than just a real estate developer - we are community builders, innovators, and sustainability leaders',
    'moreThanYouKnow.learnMore': 'Learn more',
    'moreThanYouKnow.projects.project1.title': 'Joud Tower',
    'moreThanYouKnow.projects.project1.description': 'Educational excellence in a nurturing environment',
    'moreThanYouKnow.projects.project2.title': 'Joud Tower Apartment',
    'moreThanYouKnow.projects.project2.description': 'Luxury hospitality redefined',
    'moreThanYouKnow.projects.project3.title': 'Joud Tower Sea View',
    'moreThanYouKnow.projects.project3.description': 'Premier shopping destination',
    'moreThanYouKnow.projects.project4.title': 'Joud Tower Apartment',
    'moreThanYouKnow.projects.project4.description': 'Connecting communities through design',
    'moreThanYouKnow.slider.currentPage': '01',
    'moreThanYouKnow.slider.totalPages': '02',
    'moreThanYouKnow.commercialDevelopment': 'Commercial Development',
    'moreThanYouKnow.commercialDevelopmentDesc': 'World-class office towers, retail centers, and business districts that drive economic growth.',
    'moreThanYouKnow.commercialDevelopmentStats': '15M+ sq ft developed',
    'moreThanYouKnow.residentialCommunities': 'Residential Communities',
    'moreThanYouKnow.residentialCommunitiesDesc': 'Luxury homes and apartments designed for modern families and individuals.',
    'moreThanYouKnow.residentialCommunitiesStats': '10,000+ homes delivered',
    'moreThanYouKnow.hospitalityTourism': 'Hospitality & Tourism',
    'moreThanYouKnow.hospitalityTourismDesc': 'Premium hotels, resorts, and entertainment destinations that welcome visitors worldwide.',
    'moreThanYouKnow.hospitalityTourismStats': '5,000+ hotel rooms',
    'moreThanYouKnow.infrastructureProjects': 'Infrastructure Projects',
    'moreThanYouKnow.infrastructureProjectsDesc': 'Critical infrastructure development supporting sustainable urban growth and connectivity.',
    'moreThanYouKnow.infrastructureProjectsStats': '50+ major projects',
    'moreThanYouKnow.investmentManagement': 'Investment Management',
    'moreThanYouKnow.investmentManagementDesc': 'Strategic investment solutions and asset management for long-term value creation.',
    'moreThanYouKnow.investmentManagementStats': '$50B+ assets managed',
    'moreThanYouKnow.communityDevelopment': 'Community Development',
    'moreThanYouKnow.communityDevelopmentDesc': 'Creating vibrant, sustainable communities that enhance quality of life for all residents.',
    'moreThanYouKnow.communityDevelopmentStats': '25+ communities built',
    'moreThanYouKnow.discoverButton': 'Discover Our Full Portfolio',
    
    // Investment Section
    'investment.title': 'Invest for Long Term',
    'investment.subtitle': 'Value',
    'investment.description': 'Build wealth through strategic real estate investments that combine capital appreciation, stable income streams, and portfolio diversification. Our proven track record and market expertise ensure your investments grow sustainably over time.',
    'investment.consistentGrowth': 'Consistent Growth',
    'investment.consistentGrowthDesc': 'Proven track record of delivering sustainable returns across market cycles.',
    'investment.consistentGrowthMetric': '15.2%',
    'investment.riskManagement': 'Risk Management',
    'investment.riskManagementDesc': 'Diversified portfolio and strategic asset allocation to minimize risk exposure.',
    'investment.riskManagementMetric': 'Low Risk',
    'investment.strategicFocus': 'Strategic Focus',
    'investment.strategicFocusDesc': 'Long-term investment horizon aligned with sustainable development goals.',
    'investment.strategicFocusMetric': '25+ Years',
    'investment.marketLeadership': 'Market Leadership',
    'investment.marketLeadershipDesc': 'Dominant position in premium real estate markets with high barriers to entry.',
    'investment.marketLeadershipMetric': 'Market Leader',
    'investment.directProperty': 'Direct Property Investment',
    'investment.directPropertyDesc': 'Invest directly in premium properties across our portfolio.',
    'investment.directPropertyMin': '$500K',
    'investment.directPropertyReturn': '8-12%',
    'investment.directPropertyTimeframe': '5-10 years',
    'investment.reits': 'Real Estate Investment Trusts',
    'investment.reitsDesc': 'Access to diversified real estate assets with liquidity benefits.',
    'investment.reitsMin': '$10K',
    'investment.reitsReturn': '6-9%',
    'investment.reitsTimeframe': '3-5 years',
    'investment.developmentPartnerships': 'Development Partnerships',
    'investment.developmentPartnershipsDesc': 'Partner with us on large-scale development projects.',
    'investment.developmentPartnershipsMin': '$2M',
    'investment.developmentPartnershipsReturn': '12-18%',
    'investment.developmentPartnershipsTimeframe': '7-12 years',
    'investment.ctaTitle': 'Ready to Start Your Investment Journey?',
    'investment.ctaDescription': 'Our investment team is ready to help you build a portfolio that aligns with your financial goals and risk tolerance. Schedule a consultation today.',
    'investment.scheduleButton': 'Schedule Consultation',
    'investment.downloadButton': 'Download Investment Guide',
    
    // Sustainability Section
    'sustainability.title': 'Sustainability is at the heart of',
    'sustainability.subtitle': 'everything we do',
    'sustainability.description': 'We believe that responsible development is the only path forward. Our commitment to sustainability drives every decision, from design and construction to operation and community engagement. Together, we\'re building a greener, more resilient future.',
    'sustainability.reduction': '85%',
    'sustainability.reductionLabel': 'Reduction in carbon emissions',
    'sustainability.energyEfficiency': '60%',
    'sustainability.energyEfficiencyLabel': 'Energy efficiency improvement',
    'sustainability.wasteDiverted': '90%',
    'sustainability.wasteDivertedLabel': 'Waste diverted from landfill',
    'sustainability.leedCertified': '100%',
    'sustainability.leedCertifiedLabel': 'LEED certified projects',
    
    // Sustainability Report Section
    'sustainabilityReport.title': 'Our Sustainability Report for 2025',
    'sustainabilityReport.subtitle': 'Discover how Albatha  is building sustainable communities and creating lasting value for future generations.',
    'sustainabilityReport.banner.title': 'Our Sustainability',
    'sustainabilityReport.banner.subtitle': 'Report for 2025',
    'sustainabilityReport.banner.description': 'Building sustainable communities for future generations, where families thrive in harmony with nature. Our commitment to environmental stewardship ensures a greener, healthier world for your children and grandchildren. Discover how Albatha  is creating lasting value for families and the planet!',
    'sustainabilityReport.banner.button': 'Download Report',
    
    // What's New Section
    'whatsNew.title': 'What\'s New at Albatha ',
    'whatsNew.news.category': 'Albatha  Real Estate',
    'whatsNew.news.type': 'PRESS RELEASE',
    'whatsNew.news.date1': 'August 12, 2025',
    'whatsNew.news.title1': 'Albatha  Real Estate: 35+ Years of Excellence in UAE Real Estate',
    'whatsNew.news.description1': '• Established in 1986, Albatha  Real Estate continues to lead the UAE real estate industry with innovative developments and strategic property management across commercial, residential, and retail sectors.',
    'whatsNew.news.date2': 'July 28, 2025',
    'whatsNew.news.title2': 'Comprehensive Property Portfolio Expansion',
    'whatsNew.news.description2': '• Strategic expansion across offices, warehouses, industrial units, showrooms and villas, maintaining a strong portfolio of reliable properties across the United Arab Emirates.',
    'whatsNew.news.readMore': 'Read more',
    'whatsNew.news.download': 'Download',
    
    // Latest Updates Section
    'latestUpdates.title': 'Latest Updates',
    'latestUpdates.viewAllNews': 'View All News',
    'latestUpdates.news.type': 'PRESS RELEASE',
    'latestUpdates.news.title1': 'Albatha  Real Estate Celebrates 35+ Years of Success in UAE Market',
    'latestUpdates.news.description1': '• Since 1986, Albatha  Real Estate has evolved with the flourishing UAE real estate industry, meeting multifaceted property needs from warehouses to luxury residential developments.',
    'latestUpdates.news.date1': 'August 12, 2025',
    'latestUpdates.news.title2': 'Strategic Property Portfolio Management Excellence',
    'latestUpdates.news.description2': '• Through clear business objectives and careful management, Albatha  Real Estate maintains a strong portfolio of reliable properties across the United Arab Emirates.',
    'latestUpdates.news.date2': 'August 08, 2025',
    'latestUpdates.news.title3': 'Commercial Real Estate Leadership in Dubai and UAE',
    'latestUpdates.news.description3': '• Albatha  Real Estate continues to promote the Holding\'s success by managing diverse property portfolios including offices, warehouses, industrial units, showrooms and villas.',
    'latestUpdates.news.date3': 'July 29, 2025',
    'latestUpdates.news.title4': 'Innovation in Property Development and Management',
    'latestUpdates.news.description4': '• From building warehouses and showrooms to managing commercial, residential and retail spaces, Albatha  Real Estate sets industry standards.',
    'latestUpdates.news.date4': 'July 24, 2025',
    'whatsNew.subtitle': 'Albatha ',
    'whatsNew.description': 'Stay updated with the latest news, achievements, and developments from Albatha . From award wins to new partnerships, discover what\'s driving our continued success.',
    'whatsNew.readFullArticle': 'Read Full Article',
    'whatsNew.readMore': 'Read More',
    'whatsNew.upcomingEvents': 'Upcoming Events',
    'whatsNew.eventsDescription': 'Join us at our upcoming events to connect with our team, learn about new opportunities, and be part of our growing community.',
    'whatsNew.registerNow': 'Register Now',
    'whatsNew.viewAllNews': 'View All News & Events',
    
    // Footer
    'footer.companyDescription': 'Established in 1986, Albatha  Real Estate manages diverse properties across the UAE, supporting Albatha ’s growth.',
    'footer.stayUpdated': 'Stay Updated',
    'footer.newsletterDescription': 'Subscribe to our newsletter for the latest news, project updates, and investment opportunities.',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2025 Albatha . All rights reserved.',
    'footer.headings.company': 'Company',
    'footer.headings.developments': 'Developments',
    'footer.headings.ourCompanies': 'Our Companies',
    'footer.headings.resources': 'Resources',
    'footer.contact.address': 'P.O. Box 7400, Level 22, Boulevard Plaza 1, Downtown Burj Khalifa, Dubai, UAE',
    'footer.contact.phone': '+971 4 371 1300',
    'footer.contact.email': 'info@albatha.ae',
    'footer.contact.fax': '+971 4 325 3687',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    
    // Contact Us Section
    'contactUs.title': 'Contact Us',
    'contactUs.description': 'For questions, please speak to our customer service team.',
    'contactUs.email': 'Email',
    'contactUs.phone': 'Phone',
    'contactUs.phoneNumber': '800-Albatha  / 800-2522842',
    'contactUs.contactButton': 'Contact us',
    
    // Footer Section
    'footer.company.about': 'About Us',
    'footer.company.leadership': 'Our Leadership',
    'footer.company.properties': 'Our Properties',
    'footer.company.launches': 'New Launches',
    'footer.company.careers': 'Careers',
    'footer.company.pressMedia': 'Press & Media',
    'footer.company.contactUs': 'Contact Us',
    'footer.developments.residential': 'Residential',
    'footer.developments.commercial': 'Commercial',
    'footer.developments.hospitality': 'Hospitality',
    'footer.developments.infrastructure': 'Infrastructure',
    'footer.developments.investment': 'Investment',
    'footer.developments.industrial': 'Industrial',
    'footer.ourCompanies.tawazunConstruction': 'Tawazun Construction',
    'footer.ourCompanies.alAbir': 'Al Abir',
    'footer.resources.reportsPublications': 'Reports & Publications',
    'footer.resources.investorRelations': 'Investor Relations',
    'footer.resources.sustainability': 'Sustainability',
    'footer.resources.newsEvents': 'News & Events',
    'footer.resources.customerPortal': 'Customer Portal',
    'footer.legal.privacyPolicy': 'Privacy Policy',
    'footer.legal.termsOfService': 'Terms of Service',
    'footer.legal.cookiePolicy': 'Cookie Policy',
    'footer.legal.accessibility': 'Accessibility',
    'footer.legal.legalNotice': 'Legal Notice',
    'footer.social.facebook': 'Facebook',
    'footer.social.twitter': 'Twitter',
    'footer.social.instagram': 'Instagram',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.youtube': 'YouTube',
    
    // Navigation Section
    'nav.about': 'About',
    'nav.ourLeadership': 'Our Leadership',
    'nav.corporateGovernance': 'Corporate Governance',
    'nav.sustainability': 'Sustainability',
    'nav.Albatha Brand': 'Albatha  Brand',
    'nav.liveAlbatha ': 'Live Albatha ',
    'nav.artAndInnovation': 'Art and Innovation',
    'nav.media': 'Media',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.investorRelations': 'INVESTOR RELATIONS',

    'nav.reportsPresentations': 'Reports & Presentations',
    
    // Sustainability Section
    'sustainability.nav.strategy': 'Sustainability Strategy',
    'sustainability.nav.reporting': 'Reporting & Performance',
    'sustainability.nav.governance': 'Governance & Policies',
    'sustainability.nav.csr': 'CSR',
    'sustainability.commitment': 'Our commitment to sustainability shapes communities that people love to live in.',
    'sustainability.framework': 'Our sustainability framework is built on four pillars of economy, community, people and environment. This framework aligns with national strategies and international sustainable development goals, addressing the issues our stakeholders care about.',
    'sustainability.accountability': 'To promote clear accountability, we established a Sustainability Council to oversee our framework, alongside our Chief Financial and Sustainability Officer.',
    'sustainability.readMore': 'Read More About Our Sustainability Strategy',
    
    
    // Investment Cards
    'investment.cards.annualReport.title': 'Annual Report 2024',
    'investment.cards.annualReport.description': 'View Annual Report →',
    'investment.cards.development.title': 'Development',
    'investment.cards.development.description': 'Albatha  is Abu Dhabi\'s leading regional developer. To date, we\'ve created more than 26,000 homes that people love to live in across the emirate.',
    'investment.cards.development.action': 'View details →',
    'investment.cards.investment.title': 'Investment',
    'investment.cards.investment.description': 'Albatha  owns and manages a diverse portfolio of assets in Abu Dhabi, with a value of AED 20 billion.',
    'investment.cards.investment.action': 'View details →',
    'investment.sharePrice.label': 'SHARE PRICE',
    'investment.sharePrice.company': 'Albatha  Properties',
    'investment.sharePrice.dateTime': '22 / 08 / 2025 | 12:55',
    'investment.sharePrice.currency': 'AED',
    'investment.sharePrice.change': '+0.15 / +1.52 %',
    
    // CEO Message
    'ceo.title': 'CEO\'s Message',
    'ceo.message1': 'Albatha Real Estate believes that its greatest asset is being a company that genuinely respects people\'s desires and needs. The growth and viability of a country\'s property infrastructure are directly related to the aspirations and happiness of people, and successfully meeting those criteria and even exceeding their expectations has been Albatha Real Estate\'s abiding mission.',
    'ceo.message2': 'We will continue to uphold our reputation for fairness, honesty, unmatched quality and excellence as we design and shape the living experiences for people and expand the country\'s property development. There is no greater satisfaction than enabling people to live in a home that brings their dreams to life.',
    
    // Joud Tower Section
    'joudTower.title': 'Dynamic Joud Tower',
    'joudTower.subtitle': 'Welcome To Luxury Redefined',
    'joudTower.description': 'Joud Tower by Albatha Real Estate offers luxurious homes where everything you desire for you and your family comes together - a stunning location in the heart of vibrant communities, equipped with top-class amenities, characterised by family-friendly features and attention to detail. Experience a life filled with joy, happiness, comfort and convenience in exclusive spaces designed for you.',
    'joudTower.discover': 'Discover',
    
    // Mission Values Page
    'missionValues.hero.title': 'Albatha Real Estate',
    'missionValues.hero.subtitle': 'Our guiding principles and commitment to excellence in Dubai\'s dynamic real estate landscape',
    'missionValues.about.title': 'About us',
    'missionValues.about.description1': 'Albatha Real Estate, established in 1986, is a division of the xxx-year-old Albatha Holdings. We own, develop, lease, and manage a diverse array of commercial, residential, retail, and industrial properties as part of our commitment to meeting a broad spectrum of property requirements in the UAE.',
    'missionValues.about.description2': 'From apartment blocks and villa developments to warehouses, showrooms, mosques, and industrial facilities, Albatha Real Estate has a wide and influential presence across the UAE, actively supporting the property sector and contributing to the economy.',
    'missionValues.about.description3': 'We prioritize meeting customer requirements by identifying their needs and addressing them with our future-ready, market-driven approach.',
    'missionValues.about.description4': 'We lease to a wide range of tenants from both private and corporate sectors, with particular emphasis on production, warehousing, and showrooms properties.',
    'missionValues.operations.title': 'Our Key Operations',
    'missionValues.operations.item1': 'Managing and maintaining a portfolio of rented properties.',
    'missionValues.operations.item2': 'Developing new properties for rent and for Albatha\'s specific use.',
    'missionValues.operations.item3': 'Engaging with consultants and contractors for the implementation and delivery of projects.',
    'missionValues.operations.item4': 'Developing properties for sale.',
    'missionValues.operations.item5': 'Creating concepts, conducting feasibility studies, obtaining planning consent.',
    'missionValues.operations.item6': 'and collaborating with consultants and contractors on marketing initiatives.',
    'missionValues.operations.description': 'We also provide a comprehensive service that encompasses consultancy, construction, sales and rentals, building management, liaising with MEP and fire and safety contractors, as well as insurers, backed by thorough and in-depth regional expertise.',
    'missionValues.mission.title': 'Mission & Values',
    'missionValues.mission.description1': 'Albatha Real Estate\'s mission is to serve the full spectrum of consumers in the property market, from luxury, premium, and high-quality residential properties to commercial, industrial, and public service structures. From first-time investors to repeat buyers, we are committed to playing a vital role in fulfilling their aspirations and requirements by building and managing properties through our trusted services, exceptional quality, and long-term market viability.',
    'missionValues.mission.description2': 'Albatha Real Estate\'s mission is founded on integrity and transparency, a steadfast focus on expertise and quality, and a commitment to sustainability. These core values, along with respect for people and sensitivity to their concerns, have earned us a reputation for excellence, fairness and trust across the industry.',
    
    // About Page
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn more about Albatha Real Estate and our commitment to excellence in the real estate industry.',
    'about.story.title': 'Our Story',
    'about.story.description1': 'Albatha Real Estate has been a leading force in the UAE real estate market, delivering exceptional properties and services that exceed expectations.',
    'about.story.description2': 'With years of experience and a deep understanding of the local market, we continue to shape the future of real estate in the region.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the most trusted and innovative real estate company in the UAE, creating sustainable communities and exceptional living experiences.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We are committed to delivering high-quality real estate solutions that meet the diverse needs of our clients while contributing to the sustainable development of our communities.',
    
    // Navigation Dropdowns
    'nav.dropdown.ceoMessage': 'CEO\'s Message',
    'nav.dropdown.albathaRealEstate': 'Albatha Real Estate',
    'nav.dropdown.commercial': 'Commercial',
    'nav.dropdown.residential': 'Residential',
    'nav.dropdown.industrial': 'Industrial',
    'nav.dropdown.specialProjects': 'Special Projects',
    'nav.dropdown.joudTower': 'Joud Tower',
    'nav.dropdown.tawazunConstruction': 'Tawazun Construction',
    'nav.dropdown.alAbir': 'Al Abir',
    'nav.dropdown.whatLookingToBuy': 'What are you looking to Buy?',
    'nav.dropdown.whatLookingToRent': 'What are you looking to Rent?',
    'nav.dropdown.property': 'Property',
    'nav.dropdown.buildingPlots': 'Building Plots',
    
    // Commercial Properties Page
    'commercial.hero.title': 'Commercial Properties',
    'commercial.hero.subtitle': 'Prime commercial real estate solutions for businesses of all sizes.',
    'commercial.search.location': 'Location',
    'commercial.search.propertyType': 'Property Type',
    'commercial.search.size': 'Size (Sq. Ft.)',
    'commercial.search.button': 'Search',
    'commercial.property.startingFrom': 'Starting From',
    
    // Commercial Property Data
    'commercial.properties.albathaAkai.title': 'Albatha AKAI BUILDING, ABU DHABI',
    'commercial.properties.albathaAkai.type': 'Retail Complex',
    'commercial.properties.albathaAkai.location': 'Sheikh Rashid bin Saeed Road, Al Manhal, Abu Dhabi.',
    'commercial.properties.albathaAkai.price': 'AED 18.5M',
    
    'commercial.properties.albathaAgmc.title': 'Albatha AGMC MOTOR CITY SHOWROOM, DUBAI',
    'commercial.properties.albathaAgmc.type': 'Showroom',
    'commercial.properties.albathaAgmc.location': 'Turin Boulevard Road, Motor City, Dubai',
    'commercial.properties.albathaAgmc.price': 'AED 25.8M',
    
    'commercial.properties.albathaTower.title': 'Albatha TOWER, SHARJAH',
    'commercial.properties.albathaTower.type': 'Office Tower',
    'commercial.properties.albathaTower.location': '283, Corniche Street, Al Majaz-1, Sharjah',
    'commercial.properties.albathaTower.price': 'AED 35.2M',
    
    'commercial.properties.abreIbo.title': 'ABRE IBO MEDICAL CENTRE, SHARJAH',
    'commercial.properties.abreIbo.type': 'Retail Space',
    'commercial.properties.abreIbo.location': '7GXR+V6 - Sheikh Salem Al Qassimi Street, Al Qarayen 2 – Al Falah Residential – Sharjah.',
    'commercial.properties.abreIbo.price': 'AED 42.1M',
    
    'commercial.properties.abreMpcAirport.title': 'ABRE MPC AIRPORT, DUBAI',
    'commercial.properties.abreMpcAirport.type': 'Mixed Commercial',
    'commercial.properties.abreMpcAirport.location': '14, Airport Road, Near Cargo Village, Al Garhoud, Deira, Dubai.',
    'commercial.properties.abreMpcAirport.price': 'AED 15.7M',
    
    'commercial.properties.abreMpcHealthcare.title': 'ABRE MPC BUILDING HEALTHCARE CITY, DUBAI',
    'commercial.properties.abreMpcHealthcare.type': 'Office Complex',
    'commercial.properties.abreMpcHealthcare.location': 'Building 71, District 1, Umm Hurair 2, Dubai Healthcare City Free Zone',
    'commercial.properties.abreMpcHealthcare.price': 'AED 12.3M',
    
    // Industrial Properties Page
    'industrial.hero.title': 'Industrial Properties',
    'industrial.hero.subtitle': 'Modern industrial complexes and manufacturing facilities for your business needs.',
    'industrial.search.location': 'Location',
    'industrial.search.propertyType': 'Property Type',
    'industrial.search.size': 'Size (Sq. Ft.)',
    'industrial.search.button': 'Search',
    'industrial.property.startingFrom': 'Starting From',
    
    // Industrial Property Data
    'industrial.properties.abreCaterpillar.title': 'ABRE CATERPILLAR COMPOUND, SHARJAH',
    'industrial.properties.abreCaterpillar.type': 'Manufacturing Facility',
    'industrial.properties.abreCaterpillar.location': 'Industrial area 02, Caterpillar Street – 117, Sharjah to Dubai',
    'industrial.properties.abreCaterpillar.price': 'AED 15.5M',
    
    'industrial.properties.abreIbfi.title': 'ABRE IBFI STAFF ACCOMMODATION, SHARJAH',
    'industrial.properties.abreIbfi.type': 'Warehouse Complex',
    'industrial.properties.abreIbfi.location': 'Industrial Area 02, Caterpillar Street – 117, Sharjah to Dubai.',
    'industrial.properties.abreIbfi.price': 'AED 12.8M',
    
    'industrial.properties.abreGeco.title': 'ABRE GECO COMPLEX OFFICE BUILDING, SHARJAH',
    'industrial.properties.abreGeco.type': 'Production Facility',
    'industrial.properties.abreGeco.location': 'Industrial Area 12, GECO Signal Street Sharjah to Dubai',
    'industrial.properties.abreGeco.price': 'AED 18.2M',
    
    'industrial.properties.abreShowrooms.title': 'ABRE SHOWROOMS & WAREHOUSES COMPLEX, INDUSTRIAL AREA 2, SHARJAH',
    'industrial.properties.abreShowrooms.type': 'Storage Facility',
    'industrial.properties.abreShowrooms.location': 'Industrial Area#2, Old BMW Street Sharjah. Near ADNOC petrol station',
    'industrial.properties.abreShowrooms.price': 'AED 9.5M',
    
    'industrial.properties.abreKizad.title': 'ABRE KIZAD AL TAWEELAH WAREHOUSES, ABU DHABI',
    'industrial.properties.abreKizad.type': 'Mixed Industrial',
    'industrial.properties.abreKizad.location': 'Khalifa Industrial Zone – Abu Dhabi',
    'industrial.properties.abreKizad.price': 'AED 11.3M',
    
    'industrial.properties.abreSajaa.title': 'ABRE AL SAJAA INDUSTRIAL WAREHOUSES, SHARJAH',
    'industrial.properties.abreSajaa.type': 'Logistics Center',
    'industrial.properties.abreSajaa.location': 'Al Sajaa Industrial Area, Sharjah.',
    'industrial.properties.abreSajaa.price': 'AED 16.7M',
    
    // Residential Properties Page
    'residential.hero.title': 'Residential Properties',
    'residential.hero.subtitle': 'Our guiding principles and commitment to excellence in Dubai\'s dynamic real estate landscape.',
    'residential.search.location': 'Location',
    'residential.search.bedroom': 'Bedroom',
    'residential.search.size': 'Size (Sq. Ft.)',
    'residential.search.button': 'Search',
    'residential.property.startingFrom': 'Starting From',
    
    // Residential Property Data
    'residential.properties.alArooba.title': 'Al Arooba Building, Sharjah',
    'residential.properties.alArooba.bedrooms': '2-3 bedrooms',
    'residential.properties.alArooba.location': 'Al Mareija Street, Sharjah. Close to Al Hisn Avenue',
    'residential.properties.alArooba.price': 'AED 2.8M',
    
    'residential.properties.albathaAlKhan.title': 'Albatha Al Khan Beach Villa, Sharjah',
    'residential.properties.albathaAlKhan.bedrooms': '2-3 bedrooms',
    'residential.properties.albathaAlKhan.location': 'Al Khalidiya Villa, Sharjah. Located Directly on Al Khan Beach.',
    'residential.properties.albathaAlKhan.price': 'AED 2.8M',
    
    'residential.properties.albathaResidence.title': 'Albatha Residence Business Bay',
    'residential.properties.albathaResidence.bedrooms': '2-4 bedroom',
    'residential.properties.albathaResidence.location': '216, Sheikh Zayed Road, Business Bay, Dubai',
    'residential.properties.albathaResidence.price': 'AED 2.8M',
    
    'residential.properties.alWaha.title': 'Al Waha Residence, Sharjah',
    'residential.properties.alWaha.bedrooms': '1-4 bedroom',
    'residential.properties.alWaha.location': 'Al Khan Area, Sharjah, 897F+HCQ',
    'residential.properties.alWaha.price': 'AED 2.8M',
    
    'residential.properties.fourVillas.title': '4 Villas Al Muafja, Sharjah',
    'residential.properties.fourVillas.bedrooms': '3bedroom',
    'residential.properties.fourVillas.location': 'Al Muwafja Villas, Al Wasit Suburb Sharjah',
    'residential.properties.fourVillas.price': 'AED 2.8M',
    
    'residential.properties.sheikhaFatma.title': 'Sheikha Fatma Villa 204, Barashi',
    'residential.properties.sheikhaFatma.bedrooms': '6 bedrooms',
    'residential.properties.sheikhaFatma.location': 'Barashi, Al Bedea Suburb Street 82. Close to Emirates Road',
    'residential.properties.sheikhaFatma.price': 'AED 2.8M',
    
    'residential.properties.rollaBuilding.title': 'Rolla Building, Sharjah',
    'residential.properties.rollaBuilding.bedrooms': '1 bedroom',
    'residential.properties.rollaBuilding.location': 'Al Sheyoug Street, Sharjah, Near Al Hisn Square/Sharjah Fort',
    'residential.properties.rollaBuilding.price': 'AED 2.8M',
    
    'residential.properties.villa274.title': 'Villa 274 - Shargan, Sharjah',
    'residential.properties.villa274.bedrooms': '5 bedrooms',
    'residential.properties.villa274.location': 'Al Mirgab Street 105. Close to Sheikh Mohd Bin Sultan Street',
    'residential.properties.villa274.price': 'AED 2.8M',
    
    'residential.properties.threeShargan.title': '03 Shargan Villas, Sharjah',
    'residential.properties.threeShargan.bedrooms': '4 bedrooms',
    'residential.properties.threeShargan.location': 'Shargan Villas Sharjah, Street 90 and access to Mohammed Bin Sultan Al Qasimi street, opposite Al Mirgab Residence, Shargan.',
    'residential.properties.threeShargan.price': 'AED 2.8M',
    
    'residential.properties.villa276.title': 'Villa 276 (GECO) - Shargan, Sharjah',
    'residential.properties.villa276.bedrooms': '5 bedroom',
    'residential.properties.villa276.location': 'Al Mirgab Street 105. Close to Sheikh Mohd Bin Sultan Al Qasimi Street.',
    'residential.properties.villa276.price': 'AED 2.8M',
    
    // Special Projects Page
    'specialProjects.hero.title': 'Special Projects',
    'specialProjects.hero.subtitle': 'Unique and innovative real estate developments that redefine modern living',
    'specialProjects.search.location': 'Location',
    'specialProjects.search.projectType': 'Project Type',
    'specialProjects.search.sizeRange': 'Size Range',
    'specialProjects.search.button': 'Search',
    'specialProjects.search.selectLocation': 'Select Location',
    'specialProjects.search.selectType': 'Select Type',
    'specialProjects.search.selectSize': 'Select Size',
    'specialProjects.section.title': 'Our Special Projects',
    'specialProjects.property.startingFrom': 'Starting From',
    
    // Special Project Data
    'specialProjects.projects.smartCity.title': 'Smart City Complex',
    'specialProjects.projects.smartCity.location': 'Dubai Marina',
    'specialProjects.projects.smartCity.type': 'Mixed-Use',
    'specialProjects.projects.smartCity.size': '2.5M sq ft',
    'specialProjects.projects.smartCity.price': 'AED 1.2B',
    
    'specialProjects.projects.heritage.title': 'Heritage Restoration',
    'specialProjects.projects.heritage.location': 'Al Fahidi',
    'specialProjects.projects.heritage.type': 'Cultural',
    'specialProjects.projects.heritage.size': '500K sq ft',
    'specialProjects.projects.heritage.price': 'AED 800M',
    
    'specialProjects.projects.greenEnergy.title': 'Green Energy Campus',
    'specialProjects.projects.greenEnergy.location': 'Masdar City',
    'specialProjects.projects.greenEnergy.type': 'Innovation',
    'specialProjects.projects.greenEnergy.size': '1.8M sq ft',
    'specialProjects.projects.greenEnergy.price': 'AED 950M',
    
    'specialProjects.projects.floatingResort.title': 'Floating Resort',
    'specialProjects.projects.floatingResort.location': 'Palm Jumeirah',
    'specialProjects.projects.floatingResort.type': 'Luxury',
    'specialProjects.projects.floatingResort.size': '300K sq ft',
    'specialProjects.projects.floatingResort.price': 'AED 2.1B',
    
    // Properties Page
    'properties.hero.title': 'Our Properties',
    'properties.hero.subtitle': 'Discover our diverse portfolio of exceptional real estate developments',
    'properties.learnMore': 'Learn More',
    
    // Property Types
    'properties.commercial.title': 'Commercial',
    'properties.commercial.description': 'Prime commercial properties for businesses of all sizes',
    'properties.residential.title': 'Residential',
    'properties.residential.description': 'Luxurious residential communities and apartments',
    'properties.industrial.title': 'Industrial',
    'properties.industrial.description': 'Modern industrial complexes and manufacturing facilities',
    'properties.specialProjects.title': 'Special Projects',
    'properties.specialProjects.description': 'Unique and innovative real estate developments',
    
    
  },
  ar: {
    // Navigation
    'nav.aboutUs': 'من نحن',
    'nav.ourProperties': 'عقاراتنا',
    'nav.newLaunches': 'الإطلاقات الجديدة',
    'nav.ourCompanies': 'شركاتنا',
    'nav.exploreAbuDhabi': 'استكشف أبو ظبي',
    'nav.exploreAlbatha ': 'استكشف البثنة',
    'nav.media': 'الوسائط',
    'nav.careers': 'الوظائف',
    'nav.buy': 'شراء',
    'nav.rent': 'إيجار',
    'nav.callButton': 'اتصل 800البثنة',
    
    // Hero Section
    'hero.title': 'في المقدمة',
    'hero.subtitle': 'يستكشف الحسن الزعابي النطاق والتفكير الاستراتيجي والتعاون وراء البنية التحتية الموجهة بالغرض من البثنة وشراكات الإسكان الحكومي.',
    'hero.watchButton': 'شاهد الحلقة 6',
    'hero.promotions': 'الترقيات',
    'hero.slide.title': 'مرحباً بكم في البطحاء العقارية',
    'hero.slide.subtitle': 'إرث الثقة',
    'hero.slide.description': 'كل شقة هي شقة ذكية - حيث تلتقي التكنولوجيا المتطورة مع الفخامة غير المسبوقة لخلق تجربة سكنية مثالية',
    'hero.slide.ctaText': 'اعرف المزيد',
    'hero.number': '800 1 8888',
    
    // Workspace Section
    'workspace.title': 'مساحات العمل',
    'workspace.subtitle': 'اكتشف بيئات العمل المبتكرة والمتطورة',
    'workspace.description': 'نقدم مساحات عمل متطورة تجمع بين التصميم العصري والتكنولوجيا المتقدمة لتعزيز الإنتاجية والإبداع.',
    'workspace.learnMore': 'اعرف المزيد',
    'workspace.premiumDevelopments': 'التطويرات المميزة',
    'workspace.sqFtDeveloped': 'قدم مربع مطور',
    'workspace.yearsExperience': 'سنوات الخبرة',
    
    // Live Life Section
    'liveLife.title': 'عش الحياة بملئها',
    'liveLife.subtitle': 'اكتشف التطويرات المميزة التي تعزز نمط حياتك',
    'liveLife.description1': 'اكتشف التميز في الحياة. ارفع مستوى حياتك مع عقارات البطحاء المميزة في أكثر المواقع المرغوبة في دبي، مع المرافق العالمية وتجارب الحياة المتطورة.',
    'liveLife.description2': 'من الشقق المصممة بدقة إلى الفيلات الحصرية، كل تفصيل يعكس التزام البطحاء بالتميز والتصميم الخالد. هنا تبدأ رحلتك نحو الحياة الاستثنائية - حيث تتشكل الطموحات وتصبح الأحلام حقيقة.',
    'liveLife.premiumLiving': 'العيش المميز',
    'liveLife.premiumLivingDesc': 'اكتشف المساكن التي تجمع بين التميز المعماري والمرافق الحديثة، مما يخلق البيئة المثالية لنمط حياتك.',
    'liveLife.communityFirst': 'المجتمع أولاً',
    'liveLife.communityFirstDesc': 'ابن علاقات دائمة في مجتمعات نابضة بالحياة مصممة لتعزيز الروابط وخلق تجارب ذات معنى.',
    'liveLife.familyFocused': 'مركز على العائلة',
    'liveLife.familyFocusedDesc': 'اصنع ذكريات دائمة في مساحات مصممة للعائلات، مع مرافق وتخطيطات تدعم كل مرحلة من الحياة.',
    'liveLife.exploreButton': 'استكشف مجتمعاتنا',
    
    // Live Life Reports Section
    'liveLife.reports.title': 'تقاريرنا الأخيرة',
    'liveLife.reports.pressRelease.title': 'نتائج H1 2025 - تقرير صحفي',
    'liveLife.reports.presentation.title': 'عرض تقديمي للنتائج',
    'liveLife.reports.financialStatements.title': 'نتائج H1 2025 - بيانات مالية',
    'liveLife.reports.earningsCallTranscript.title': 'نسخة مكالمة الأرباح',
    'liveLife.reports.pressRelease.action': 'اقرأ المزيد',
    'liveLife.reports.presentation.action': 'تحميل العرض',
    'liveLife.reports.financialStatements.action': 'عرض التقرير',
    'liveLife.reports.earningsCallTranscript.action': 'استمع الآن',
    
    // Live Life Sustainability Section
    'liveLife.sustainability.title': 'تقرير الاستدامة',
    'liveLife.sustainability.subtitle': 'اكتشف كيف نبني مجتمعات مستدامة',
    'liveLife.sustainability.description': 'نلتزم ببناء مستقبل مستدام للأجيال القادمة من خلال الممارسات المسؤولة والابتكار البيئي.',
    'liveLife.sustainability.button': 'اقرأ التقرير',
    
    // Sustainability Section
    'sustainability.title': 'الاستدامة في قلب',
    'sustainability.subtitle': 'كل ما نقوم به',
    'sustainability.commitment': 'نؤمن أن التطوير المسؤول هو الطريق الوحيد للأمام. التزامنا بالاستدامة يدفع كل قرار، من التصميم والبناء إلى التشغيل والصيانة.',
    'sustainability.framework': 'إطار عمل الاستدامة لدينا مبني على أربعة ركائز: الاقتصاد والمجتمع والأشخاص والبيئة. يتوافق هذا الإطار مع الاستراتيجيات الوطنية وأهداف التنمية المستدامة الدولية، معالجة القضايا التي يهتم بها أصحاب المصلحة.',
    'sustainability.accountability': 'لتعزيز المساءلة الواضحة، أنشأنا مجلس الاستدامة للإشراف على إطار عملنا، جنباً إلى جنب مع كبير المسؤولين الماليين والاستدامة.',
    'sustainability.readMore': 'اقرأ المزيد عن استراتيجية الاستدامة لدينا',
    
    // Sustainability Navigation
    'sustainability.nav.strategy': 'استراتيجية الاستدامة',
    'sustainability.nav.reporting': 'التقارير والأداء',
    'sustainability.nav.governance': 'الحوكمة والسياسات',
    'sustainability.nav.csr': 'المسؤولية الاجتماعية للشركات',
    
    // Investment Section
    'investment.title': 'استثمر للقيمة طويلة المدى',
    'investment.subtitle': 'القيمة',
    'investment.description': 'ابن الثروة من خلال الاستثمارات العقارية الاستراتيجية التي تجمع بين ارتفاع رأس المال والتدفقات الدخلية المستقرة وتنويع المحفظة. سجلنا المثبت وخبرتنا في السوق تضمن عوائد مستدامة.',
    'investment.consistentGrowth': 'النمو المستمر',
    'investment.consistentGrowthDesc': 'سجل مثبت في تقديم عوائد مستدامة عبر دورات السوق.',
    'investment.consistentGrowthMetric': '15.2%',
    'investment.riskManagement': 'إدارة المخاطر',
    'investment.riskManagementDesc': 'محفظة متنوعة وتوزيع استراتيجي للأصول لتقليل التعرض للمخاطر.',
    'investment.riskManagementMetric': 'مخاطر منخفضة',
    'investment.strategicFocus': 'التركيز الاستراتيجي',
    'investment.strategicFocusDesc': 'أفق استثماري طويل المدى متوافق مع أهداف التنمية المستدامة.',
    'investment.strategicFocusMetric': '25+ سنة',
    'investment.marketLeadership': 'قيادة السوق',
    'investment.marketLeadershipDesc': 'موقف مهيمن في أسواق العقارات المميزة مع حواجز عالية للدخول.',
    'investment.marketLeadershipMetric': 'قائد السوق',
    'investment.directProperty': 'الاستثمار المباشر في العقارات',
    'investment.directPropertyDesc': 'استثمر مباشرة في العقارات المميزة عبر محفظتنا.',
    'investment.directPropertyMin': '500 ألف درهم',
    'investment.directPropertyReturn': '8-12%',
    'investment.directPropertyTimeframe': '5-10 سنوات',
    'investment.reits': 'صناديق الاستثمار العقاري',
    'investment.reitsDesc': 'الوصول إلى أصول عقارية متنوعة مع فوائد السيولة.',
    'investment.reitsMin': '10 آلاف درهم',
    'investment.reitsReturn': '6-9%',
    'investment.reitsTimeframe': '3-5 سنوات',
    'investment.developmentPartnerships': 'شراكات التطوير',
    'investment.developmentPartnershipsDesc': 'شارك معنا في مشاريع التطوير واسعة النطاق.',
    'investment.developmentPartnershipsMin': '2 مليون درهم',
    'investment.developmentPartnershipsReturn': '12-18%',
    'investment.developmentPartnershipsTimeframe': '7-12 سنة',
    'investment.ctaTitle': 'هل أنت مستعد لبدء رحلة الاستثمار؟',
    'investment.ctaDescription': 'فريق الاستثمار لدينا مستعد لمساعدتك في بناء محفظة تتوافق مع أهدافك المالية وتحمل المخاطر. حدد استشارة اليوم.',
    'investment.scheduleButton': 'حدد استشارة',
    'investment.downloadButton': 'تحميل دليل الاستثمار',
    
    // Investment Cards
    'investment.cards.annualReport.title': 'التقرير السنوي 2024',
    'investment.cards.annualReport.description': 'عرض التقرير السنوي →',
    'investment.cards.development.title': 'التطوير',
    'investment.cards.development.description': 'البطحاء هي المطور الإقليمي الرائد في أبو ظبي. حتى الآن، أنشأنا أكثر من 26,000 منزل يحب الناس العيش فيها عبر الإمارة.',
    'investment.cards.development.action': 'عرض التفاصيل →',
    'investment.cards.investment.title': 'الاستثمار',
    'investment.cards.investment.description': 'تمتلك البطحاء وتدير محفظة متنوعة من الأصول في أبو ظبي، بقيمة 20 مليار درهم إماراتي.',
    'investment.cards.investment.action': 'عرض التفاصيل →',
    
    // Investment Share Price
    'investment.sharePrice.label': 'سعر السهم',
    'investment.sharePrice.company': 'عقارات البطحاء',
    'investment.sharePrice.dateTime': '22 / 08 / 2025 | 12:55',
    'investment.sharePrice.currency': 'درهم إماراتي',
    'investment.sharePrice.change': '+0.15 / +1.52 %',
    
    // Sustainability Report Section
    'sustainabilityReport.title': 'تقرير الاستدامة لدينا لعام 2025',
    'sustainabilityReport.subtitle': 'اكتشف كيف تبني البطحاء مجتمعات مستدامة وتخلق قيمة دائمة للأجيال القادمة.',
    'sustainabilityReport.banner.title': 'استدامتنا',
    'sustainabilityReport.banner.subtitle': 'تقرير 2025',
    'sustainabilityReport.banner.description': 'بناء مجتمعات مستدامة للأجيال القادمة، حيث تزدهر العائلات في وئام مع الطبيعة. التزامنا بالوصاية البيئية يضمن عالماً أكثر خضرة وصحة لأطفالك وأحفادك.',
    'sustainabilityReport.banner.button': 'تحميل التقرير',
    
    // More Than You Know Section
    'moreThanYouKnow.title': 'نحن أكثر مما تعرف',
    'moreThanYouKnow.subtitle': 'اكتشف نطاقنا الكامل',
    'moreThanYouKnow.description': 'نحن أكثر من مجرد مطور عقاري - نحن بناة مجتمعات ومبتكرون وقادة في الاستدامة',
    'moreThanYouKnow.learnMore': 'اعرف المزيد',
    'moreThanYouKnow.projects.project1.title': 'برج جود',
    'moreThanYouKnow.projects.project1.description': 'التميز التعليمي في بيئة داعمة',
    'moreThanYouKnow.projects.project2.title': 'شقة برج جود',
    'moreThanYouKnow.projects.project2.description': 'إعادة تعريف الضيافة الفاخرة',
    'moreThanYouKnow.projects.project3.title': 'برج جود إطلالة بحرية',
    'moreThanYouKnow.projects.project3.description': 'وجهة التسوق الأولى',
    'moreThanYouKnow.projects.project4.title': 'شقة برج جود',
    'moreThanYouKnow.projects.project4.description': 'ربط المجتمعات من خلال التصميم',
    'moreThanYouKnow.slider.currentPage': '01',
    'moreThanYouKnow.slider.totalPages': '02',
    'moreThanYouKnow.commercialDevelopment': 'التطوير التجاري',
    'moreThanYouKnow.commercialDevelopmentDesc': 'أبراج مكاتب عالمية ومراكز تجارية ومناطق أعمال تدفع النمو الاقتصادي.',
    'moreThanYouKnow.commercialDevelopmentStats': '15 مليون+ قدم مربع مطور',
    'moreThanYouKnow.residentialCommunities': 'المجتمعات السكنية',
    'moreThanYouKnow.residentialCommunitiesDesc': 'منازل وشقق فاخرة مصممة للعائلات والأفراد المعاصرين.',
    'moreThanYouKnow.residentialCommunitiesStats': '10,000+ منزل تم تسليمها',
    'moreThanYouKnow.hospitalityTourism': 'الضيافة والسياحة',
    'moreThanYouKnow.hospitalityTourismDesc': 'فنادق ومنتجعات ووجهات ترفيهية مميزة ترحب بالزوار من جميع أنحاء العالم.',
    'moreThanYouKnow.hospitalityTourismStats': '5,000+ غرفة فندق',
    'moreThanYouKnow.infrastructureProjects': 'مشاريع البنية التحتية',
    'moreThanYouKnow.infrastructureProjectsDesc': 'تطوير البنية التحتية الحرجة لدعم النمو الحضري المستدام والاتصال.',
    'moreThanYouKnow.infrastructureProjectsStats': '50+ مشروع رئيسي',
    'moreThanYouKnow.investmentManagement': 'إدارة الاستثمار',
    'moreThanYouKnow.investmentManagementDesc': 'حلول استثمارية استراتيجية وإدارة أصول لخلق قيمة طويلة المدى.',
    'moreThanYouKnow.investmentManagementStats': '50 مليار+ دولار أصول مُدارة',
    'moreThanYouKnow.communityDevelopment': 'تطوير المجتمع',
    'moreThanYouKnow.communityDevelopmentDesc': 'إنشاء مجتمعات نابضة بالحياة ومستدامة تعزز جودة الحياة لجميع السكان.',
    'moreThanYouKnow.communityDevelopmentStats': '25+ مجتمع تم بناؤها',
    'moreThanYouKnow.discoverButton': 'اكتشف محفظتنا الكاملة',
    
    // Contact Us Section
    'contactUs.title': 'اتصل بنا',
    'contactUs.description': 'للأسئلة، يرجى التحدث إلى فريق خدمة العملاء لدينا.',
    'contactUs.email': 'البريد الإلكتروني',
    'contactUs.phone': 'الهاتف',
    'contactUs.phoneNumber': '800-البطحاء / 800-2522842',
    'contactUs.contactButton': 'اتصل بنا',
    
    // Additional Navigation Translations
    'nav.about': 'حول',
    'nav.ourLeadership': 'قيادتنا',
    'nav.corporateGovernance': 'الحوكمة المؤسسية',
    'nav.sustainability': 'الاستدامة',
    'nav.Albatha Brand': 'علامة البطحاء',
    'nav.liveAlbatha ': 'عش البطحاء',
    'nav.artAndInnovation': 'الفن والابتكار',
    'nav.news': 'الأخبار',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.investorRelations': 'علاقات المستثمرين',
    'nav.reportsPresentations': 'التقارير والعروض التقديمية',
    
    // Common Translations
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.readMore': 'اقرأ المزيد',
    
    // Reports Section
    'reports.title': 'التقارير والمنشورات',
    'reports.subtitle': 'ابق على اطلاع بأحدث تقاريرنا ورؤيتنا.',
    'reports.viewAll': 'عرض جميع التقارير',
    
    // Launches Section
    'launches.title': 'أحدث إطلاقاتنا',
    'launches.subtitle': 'اكتشف أحدث مشاريعنا العقارية المميزة',
    'launches.residential': 'سكني',
    'launches.commercial': 'تجاري',
    'launches.Albatha RealEstate': 'البطحاء العقارية',
    'launches.joudTower': 'برج جود',
    'launches.joudTowerDescription': 'حيث تلتقي الطبيعة مع الفخامة. اختبر المزيج المثالي من العمارة العضوية والراحة الحديثة في هذا التطوير السكني المبتكر، حيث يتم تشكيل كل تفصيل بشكل مثالي.',
    'launches.launchQ2': 'إطلاق فصل Q2 2025',
    'launches.joudTowerAlt': 'برج جود - الطبيعة الطبيعية مع المباني الحيوية',
    'launches.residentialProject': 'المشروع السكني',
    'launches.joudTowerApartment': 'برج جود',
    'launches.joudTowerApartmentDescription': 'الفخامة المتنافسة يلتقيان مع الهوية الأيقونية. حياة حياة في قلب أحد أهم العناوين العالمية مع المرافق العالمية التي تتميز بالتفصيل المثالي.',
    'launches.launchQ3': 'إطلاق فصل Q3 2025',
    'launches.joudTowerApartmentAlt': 'شقة في برج جود - تطوير مياه علوية فاخر',
    'launches.learnMore': 'اعرف المزيد',
    'launches.hero.title': 'الإطلاقات الجديدة',
    'launches.hero.subtitle': 'اكتشف أحدث مشاريعنا السكنية والتجارية',
    'launches.joudTower.title': 'برج جود',
    'launches.joudTower.description': 'برج سكني فاخر مع مرافق حديثة وإطلالات خلابة',
    'launches.liwan.title': 'ليوان',
    'launches.liwan.description': 'مجتمع سكني معاصر مصمم للحياة العصرية',
    'launches.others.title': 'أخرى',
    'launches.others.description': 'مشاريع إضافية مثيرة في خطتنا المستقبلية',
    'launches.status.available': 'متاح',
    'launches.status.comingSoon': 'قريباً',
    'launches.status.inDevelopment': 'قيد التطوير',
    
    // Joud Tower Page
    'joudTower.hero.title': 'برج جود',
    'joudTower.hero.subtitle': 'حلم مصمم خصيصاً لك',
    'joudTower.hero.description': 'يقدم برج جود من البطحاء العقارية منازل فاخرة حيث تلتقي كل ما تتمناه لك ولعائلتك - موقع مذهل في قلب المجتمعات النابضة بالحياة، مجهز بمرافق من الدرجة الأولى، يتميز بميزات صديقة للعائلة والاهتمام بالتفاصيل. اختبر حياة مليئة بالفرح والسعادة والراحة والراحة في مساحات حصرية مصممة خصيصاً لك.',
    'joudTower.lavish.title': 'فاخر.<br />مبهر.<br />رائع.',
    'joudTower.lavish.description': 'يمثل برج جود قمة العيش الفاخر في قلب المدينة. يقدم هذا البرج السكني المذهل راحة لا مثيل لها ومرافق حديثة وإطلالات خلابة على الأفق. مصمم بعناية فائقة، يجمع برج جود بين العمارة المعاصرة واللمسات المميزة لخلق تجربة معيشة استثنائية للسكان المميزين.',
    'joudTower.specification.title': 'مواصفات برج جود',
    'joudTower.specification.storeys': 'عدد الطوابق: 55',
    'joudTower.specification.basement': '1 قبو + الطابق الأرضي + 5 مستويات منصة للوقوف والخدمات',
    'joudTower.specification.residential': '48 طابق سكني في أعلى نقطة',
    'joudTower.specification.apartmentTypes': 'أنواع الشقق:',
    'joudTower.specification.apartments.2bed': 'غرفتين نوم',
    'joudTower.specification.apartments.3bed': '3 غرف نوم',
    'joudTower.specification.apartments.3bedGarden': '3 غرف نوم + حديقة خاصة في مستوى المنصة.',
    'joudTower.specification.apartments.4bed': '4 غرف نوم',
    'joudTower.specification.apartments.4bedGarden': '4 غرف نوم + حديقة خاصة في مستوى المنصة.',
    'joudTower.specification.apartments.4bedDuplex': '4 غرف نوم دوبلكس من الطابق 45 فما فوق (سكاي فيلا).',
    'joudTower.specification.apartments.penthouse': 'بنتهاوس: 5 غرف نوم، مخصص مع مسبح خاص.',
    'joudTower.amenities.title': 'المرافق',
    'joudTower.amenities.gym': 'صالة رياضية وظيفية',
    'joudTower.amenities.sauna': 'ساونا',
    'joudTower.amenities.pool': 'مسبح',
    'joudTower.amenities.padel': 'ملعب بادل',
    'joudTower.amenities.running': 'مسار للجري',
    'joudTower.amenities.bbq': 'منطقة شواء',
    'joudTower.amenities.kids': 'منطقة لعب للأطفال',
    'joudTower.amenities.hall': 'قاعة متعددة الأغراض',
    'joudTower.amenities.cafe': 'مقهى',
    'joudTower.amenities.prayer': 'غرفة صلاة',
    'joudTower.amenities.kindergarten': 'روضة أطفال',
    'joudTower.amenities.retail': 'متجر تجاري',
    'joudTower.features.title': 'ميزات أخرى',
    'joudTower.features.delivery': 'دوران تسليم محكم منفصل عن دوران المستأجرين.',
    'joudTower.features.concierge': 'خدمة كونسيرج على مدار الساعة.',
    'joudTower.features.access': 'دخول وخروج ذكي مقيد للمستأجرين.',
    'joudTower.features.booking': 'حجز المرافق الذكي.',
    'joudTower.features.maintenance': 'فريق صيانة كامل في الموقع.',
    'joudTower.features.description': 'برج جود، بموقعه المتفرد والديكورات الداخلية الفائقة والمرافق والخدمات الفاخرة، هو أصل دائم سيوفر لك النمو الرأسمالي الثابت. استمتع بأفضل ما في العالمين: منزل جميل وفاخر هو أيضاً استثمار مدى الحياة.',
    'joudTower.views.title': 'استمتع بإطلالات<br />لا مثيل لها 24/7',
    'joudTower.views.description': 'استيقظ على إطلالات بانورامية خلابة لأفق المدينة والساحل. كل شقة في برج جود مصممة لتعظيم الضوء الطبيعي وتوفير مناظر خلابة تتغير طوال اليوم. من شروق الشمس إلى غروبها، اختبر جمال المدينة من ملاذك الخاص.',
    'joudTower.sanctuary.title': 'ملاذك للسلام والراحة',
    'joudTower.sanctuary.description': 'ادخل إلى عالم من الفخامة المكررة حيث تم تشكيل كل تفصيل بعناية فائقة لتوفير أقصى درجات الراحة والاسترخاء. غرف نومنا الواسعة تتميز بلمسات مميزة ونوافذ من الأرض إلى السقف وخزائن مدمجة أنيقة تخلق ملاذاً هادئاً من المدينة الصاخبة أدناه.',
    'joudTower.feast.title': 'وليمة لل<br />الحواس',
    'joudTower.feast.description': 'قلب كل منزل يستحق أقصى درجات الاهتمام. مطابخنا المتطورة تتميز بأجهزة مميزة وطاولات أنيقة وتصميم ذكي يجعل الطبخ متعة. سواء كنت تحضر فطوراً بسيطاً أو تستضيف حفلة عشاء، كل تجربة طهي ترتقي إلى الكمال.',
    'joudTower.perspective.title': 'منظور<br />ثمين',
    'joudTower.perspective.description': 'اختبر العالم من نقطة مراقبة جديدة. مساحاتنا المعيشية المصممة بعناية تقدم أكثر من مجرد إقامة - فهي توفر منظوراً فريداً للحياة. مع النوافذ الواسعة والتخطيطات المفتوحة والتدفق السلس بين الداخل والخارج، تصبح كل لحظة احتفالاً بالعيش المتطور.',
    'joudTower.aesthetic.title': 'جمالي.<br />رائع.<br />مثالي.',
    'joudTower.aesthetic.description': 'اخرج إلى شرفتك الخاصة واكتشف عالماً من الهدوء والجمال. هذه المساحات الخارجية المصممة بعناية تقدم المزيج المثالي من الخصوصية والانفتاح، حيث يمكنك استضافة الضيوف والاستمتاع بلحظات هادئة أو ببساطة الاستمتاع بالجمال الطبيعي الذي يحيط بك.',
    'joudTower.elegance.title': 'أناقة.<br />أسلوب.<br />رقي.',
    'joudTower.elegance.description': 'كل تفصيل يعكس التزامنا بالتميز. من المواد المختارة بعناية إلى دقة الحرفية، كل شقة هي تحفة تصميم. اختبر الانسجام المثالي بين الشكل والوظيفة، حيث تلتقي الفخامة بالعملية في كل ركن من منزلك الجديد.',
    
    // Companies Page
    'companies.hero.title': 'شركاتنا',
    'companies.hero.subtitle': 'اكتشف محفظتنا من الشركات المتخصصة وخبراتها',
    'companies.learnMore': 'اعرف المزيد',
    'companies.tawazun.name': 'تواازن للإنشاءات',
    'companies.tawazun.description': 'شركة إنشاءات رائدة متخصصة في مشاريع البنية التحتية والبناء',
    'companies.alAbir.name': 'الأبر',
    'companies.alAbir.description': 'شركة تطوير عقاري مبتكرة تركز على المجتمعات المستدامة',
    
    // Tawazun Construction Page
    'tawazun.hero.title': 'تواازن للإنشاءات',
    'tawazun.hero.description': 'تأسست شركة تواازن للإنشاءات في عام 2008، مع التركيز الأساسي على الإنشاءات المدنية. يتكون فريقها من مهندسين مدنيين مؤهلين تأهيلاً عالياً مع دعم مكتب خلفي كامل',
    'tawazun.about.title': 'أعمالنا',
    'tawazun.about.description1': 'مدفوعة بالتميز والديناميكية، تهدف تواازن إلى أن تكون الخيار المفضل للمشاريع عالية الجودة والتسليم في الوقت المحدد والخدمات المضافة. نركز على الابتكار واستخدام أحدث الطرق والمواد لتعزيز الإنتاجية والفعالية من حيث التكلفة. هذا مكمل بالتطوير المستمر لكفاءات الموظفين والسعي لتحقيق سجل سلامة رائد في الصناعة.',
    'tawazun.about.description2': 'تواازن ملتزمة أيضاً بمسؤولياتها البيئية والتخفيف من الآثار الناشئة عن أنشطتها. يشمل ذلك استخدام أحدث تقنيات الخرسانة الصديقة للبيئة والامتثال للمعايير البيئية.',
    'tawazun.expertise.title': 'خبرة تواازن',
    'tawazun.expertise.description': 'تواازن تنفذ مشاريع كبرى، بما في ذلك الفلل والمساجد وصالات عرض السيارات في مواقع مختلفة في الإمارات',
    
    // Al Abir Page
    'alAbir.hero.title': 'الأبر للاستشارات الهندسية',
    'alAbir.hero.description': 'تأسست شركة الأبر للاستشارات والهندسة في عام 1983 كشركة تصميم وهندسة شاملة الخدمات، تقدم حلول مدنية ومعمارية وميكانيكية لتلبية الاحتياجات المتنوعة لمجموعة البطحاء وتقديم مجموعة واسعة من المشاريع عالمية المستوى.',
    'alAbir.business.title': 'أعمالنا',
    'alAbir.business.description': 'على مر السنين، نمت الأبر لتصبح شركة استشارات تصميم وهندسة مدنية ومعمارية وميكانيكية وكهربائية وسباكة كاملة قادرة على تقديم مشاريع ممتازة. مع سنوات من الخبرة في القوانين المحلية ولوائح السلطات، تتبع الأبر معايير البناء الدولية وأفضل الممارسات الهندسية، مما يضمن تسليم المشاريع في الوقت المحدد ضمن الميزانية.',
    'alAbir.services.title': 'خدماتنا',
    'alAbir.services.list': [
      'إعداد التصاميم والرسومات الأولية بالتنسيق مع المستخدمين النهائيين والشركات المصنعة والموردين.',
      'ضمان أن التصاميم اقتصادية وخضراء وموفرة للطاقة ومواكبة لأحدث التقنيات.',
      'تقديم الرسومات النهائية للسلطات المحلية والتنسيق التفاعلي للحصول على الموافقات.',
      'إعداد حزم المناقصات التي تشمل مواصفات المشروع وفقاً للقوانين المحلية والمعايير الدولية وقائمة الكميات.',
      'إعداد تحليل التكلفة للمناقصات المقدمة.',
      'إدارة المشاريع وفقاً لاتفاقيات FIDIC والعقود.',
      'الإشراف على اختبار وتشغيل المعدات المثبتة.',
      'ضمان إعداد الرسومات المطابقة ودلائل التشغيل والصيانة.',
      'ضمان الحصول على شهادات عدم ممانعة السلطات المحلية وشهادات إتمام البناء.',
      'تسليم المشروع المكتمل.',
      'سيتم تقديم المساعدة التقنية المستمرة أينما تطلب بعد تسليم المشاريع.'
    ],
    
    // Contact Page
    'contact.hero.title': 'اتصل بنا',
    'contact.hero.subtitle': 'تواصل مع فريقنا لأي استفسارات حول عقاراتنا وخدماتنا',
    'contact.getInTouch.title': 'تواصل معنا',
    'contact.getInTouch.subtitle': 'نحن هنا لمساعدتك في العثور على العقار المثالي. تواصل معنا من خلال أي من القنوات التالية.',
    'contact.phone.title': 'الهاتف',
    'contact.phone.number1': '+971 4 123 4567',
    'contact.phone.number2': '+971 4 123 4568',
    'contact.email.title': 'البريد الإلكتروني',
    'contact.email.address1': 'info@AlBatha.ae',
    'contact.email.address2': 'sales@AlBatha.ae',
    'contact.address.title': 'العنوان',
    'contact.address.text': 'برج البطحاء<br />283 شارع الكورنيش - الماجز 1<br />الماجز - الشارقة<br />دولة الإمارات العربية المتحدة',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.firstNamePlaceholder': 'أدخل اسمك الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.lastNamePlaceholder': 'أدخل اسمك الأخير',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.phonePlaceholder': 'أدخل رقم هاتفك',
    'contact.form.subject': 'الموضوع',
    'contact.form.subjectPlaceholder': 'اختر موضوعاً',
    'contact.form.subjectOptions': [
      'استفسار عن عقار',
      'معلومات المبيعات',
      'سؤال عام',
      'شراكة',
      'أخرى'
    ],
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'أدخل رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.location.title': 'موقعنا',
    'contact.location.mapText': 'خريطة تفاعلية',
    'contact.location.address': 'الماجز، الشارقة',
    'contact.hours.monday': 'الاثنين - الجمعة: 9:00 ص - 6:00 م',
    'contact.hours.saturday': 'السبت: 10:00 ص - 4:00 م',
    'contact.hours.sunday': 'الأحد: مغلق',
    'contact.faq.title': 'الأسئلة الشائعة',
    'contact.faq.subtitle': 'اعثر على إجابات للأسئلة الشائعة حول عقاراتنا وخدماتنا',
    'contact.faq.questions': [
      {
        question: 'ما أنواع العقارات التي تقدمونها؟',
        answer: 'نحن نقدم مجموعة واسعة من العقارات السكنية والتجارية والصناعية ومشاريع خاصة في جميع أنحاء دبي والإمارات العربية المتحدة.'
      },
      {
        question: 'كيف يمكنني تحديد موعد لزيارة عقار؟',
        answer: 'يمكنك تحديد موعد للزيارة بالاتصال بنا على +971 4 123 4567 أو ملء نموذج الاتصال أعلاه. سنقوم بترتيب وقت مناسب لك.'
      },
      {
        question: 'هل تقدمون خيارات تمويل؟',
        answer: 'نعم، نحن نعمل مع البنوك والمؤسسات المالية الرائدة لتقديم خيارات تمويل تنافسية لعقاراتنا.'
      },
      {
        question: 'ما هي ساعات العمل في مكتبكم؟',
        answer: 'مكتبنا مفتوح من الاثنين إلى الجمعة من 9:00 ص إلى 6:00 م، والسبت من 10:00 ص إلى 4:00 م. نحن مغلقون أيام الأحد.'
      }
    ],
    
    // Footer Section
    'footer.companyDescription': 'تأسست شركة البطحاء العقارية عام 1986، وهي تدير مجموعة متنوعة من العقارات في جميع أنحاء دولة الإمارات العربية المتحدة، مما يدعم نمو البطحاء.',
    'footer.contact.address': 'صندوق البريد 7400، الطابق 22، بلازا بوليفارد 1، وسط مدينة برج خليفة، دبي، الإمارات',
    'footer.contact.phone': '+971 4 371 1300',
    'footer.contact.email': 'info@albatha.ae',
    'footer.contact.fax': '+971 4 325 3687',
    'footer.stayUpdated': 'ابق محدثاً',
    'footer.newsletterDescription': 'اشترك في نشرتنا الإخبارية للحصول على أحدث الأخبار وتحديثات المشاريع وفرص الاستثمار.',
    'footer.subscribe': 'اشترك',
    'footer.copyright': '© 2025 البطحاء. جميع الحقوق محفوظة.',
    'footer.headings.company': 'الشركة',
    'footer.headings.developments': 'التطويرات',
    'footer.headings.ourCompanies': 'شركاتنا',
    'footer.headings.resources': 'الموارد',
    
    // Footer Company Links
    'footer.company.about': 'من نحن',
    'footer.company.properties': 'عقاراتنا',
    'footer.company.launches': 'إطلاقات جديدة',
    'footer.company.leadership': 'قيادتنا',
    'footer.company.careers': 'الوظائف',
    'footer.company.pressMedia': 'الصحافة والوسائط',
    'footer.company.contactUs': 'اتصل بنا',
    
    // Footer Developments Links
    'footer.developments.residential': 'سكني',
    'footer.developments.commercial': 'تجاري',
    'footer.developments.industrial': 'صناعي',
    'footer.developments.hospitality': 'ضيافة',
    'footer.developments.infrastructure': 'بنية تحتية',
    'footer.developments.investment': 'استثمار',
    
    // Footer Resources Links
    'footer.resources.reportsPublications': 'التقارير والمنشورات',
    'footer.resources.investorRelations': 'علاقات المستثمرين',
    'footer.resources.sustainability': 'الاستدامة',
    'footer.resources.newsEvents': 'الأخبار والأحداث',
    'footer.resources.customerPortal': 'بوابة العملاء',
    
    // Footer Our Companies Links
    'footer.ourCompanies.tawazunConstruction': 'تاوازن للإنشاءات',
    'footer.ourCompanies.alAbir': 'الأبر للاستشارات الهندسية',
    
    // Footer Legal Links
    'footer.legal.privacyPolicy': 'سياسة الخصوصية',
    'footer.legal.termsOfService': 'شروط الخدمة',
    'footer.legal.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
    'footer.legal.accessibility': 'إمكانية الوصول',
    'footer.legal.legalNotice': 'الإشعار القانوني',
    
    // Footer Social Links
    'footer.social.facebook': 'فيسبوك',
    'footer.social.twitter': 'تويتر',
    'footer.social.instagram': 'إنستغرام',
    'footer.social.linkedin': 'لينكد إن',
    'footer.social.youtube': 'يوتيوب',
    
    // What's New Section
    'whatsNew.title': 'ما الجديد في البطحاء',
    'whatsNew.news.category': 'البطحاء العقارية',
    'whatsNew.news.type': 'بيان صحفي',
    'whatsNew.news.title1': 'البطحاء العقارية: 35+ عاماً من التميز في العقارات الإماراتية',
    'whatsNew.news.description1': '• تأسست في عام 1986، تواصل البطحاء العقارية قيادة صناعة العقارات الإماراتية مع التطويرات المبتكرة والإدارة العقارية الاستراتيجية عبر القطاعات التجارية والسكنية والتجزئة.',
    'whatsNew.news.title2': 'توسع شامل في المحفظة العقارية',
    'whatsNew.news.description2': '• التوسع الاستراتيجي عبر المكاتب والمستودعات والوحدات الصناعية والمعارض والفيلات، مع الحفاظ على محفظة قوية من العقارات الموثوقة في جميع أنحاء الإمارات العربية المتحدة.',
    'whatsNew.news.date1': '12 أغسطس 2025',
    'whatsNew.news.date2': '28 يوليو 2025',
    'whatsNew.news.readMore': 'اقرأ المزيد',
    'whatsNew.news.download': 'تحميل',
    
    // Latest Updates Section
    'latestUpdates.title': 'أحدث التحديثات',
    'latestUpdates.viewAllNews': 'عرض جميع الأخبار',
    'latestUpdates.news.type': 'بيان صحفي',
    'latestUpdates.news.title1': 'البطحاء العقارية تحتفل بـ 35+ عاماً من النجاح في السوق الإماراتي',
    'latestUpdates.news.description1': '• منذ عام 1986، تطورت البطحاء العقارية مع ازدهار صناعة العقارات الإماراتية، وتلبية الاحتياجات العقارية المتعددة من المستودعات إلى التطويرات السكنية الفاخرة.',
    'latestUpdates.news.title2': 'التميز في الإدارة الاستراتيجية للمحفظة العقارية',
    'latestUpdates.news.description2': '• من خلال الأهداف التجارية الواضحة والإدارة الحذرة، تحافظ البطحاء العقارية على محفظة قوية من العقارات الموثوقة في جميع أنحاء الإمارات العربية المتحدة.',
    'latestUpdates.news.title3': 'القيادة في العقارات التجارية في دبي والإمارات',
    'latestUpdates.news.description3': '• تواصل البطحاء العقارية تعزيز نجاح الشركة القابضة من خلال إدارة محافظ عقارية متنوعة تشمل المكاتب والمستودعات والوحدات الصناعية والمعارض والفيلات.',
    'latestUpdates.news.title4': 'الابتكار في التطوير والإدارة العقارية',
    'latestUpdates.news.description4': '• من بناء المستودعات والمعارض إلى إدارة المساحات التجارية والسكنية والتجزئة، تضع البطحاء العقارية معايير الصناعة.',
    
    // Additional Latest Updates Arabic translations
    'latestUpdates.news.date1': '12 أغسطس 2025',
    'latestUpdates.news.date2': '08 أغسطس 2025',
    'latestUpdates.news.date3': '29 يوليو 2025',
    'latestUpdates.news.date4': '24 يوليو 2025',
    'whatsNew.subtitle': 'البطحاء',
    'whatsNew.description': 'ابق على اطلاع بأحدث الأخبار والإنجازات والتطورات من البطحاء. من الفوز بالجوائز إلى الشراكات الجديدة، اكتشف ما يدفع نجاحنا المستمر.',
    'whatsNew.readFullArticle': 'اقرأ المقال كاملاً',
    'whatsNew.readMore': 'اقرأ المزيد',
    'whatsNew.upcomingEvents': 'الأحداث القادمة',
    'whatsNew.eventsDescription': 'انضم إلينا في أحداثنا القادمة للتواصل مع فريقنا والتعرف على الفرص الجديدة وأن تكون جزءاً من مجتمعنا المتنامي.',
    'whatsNew.registerNow': 'سجل الآن',
    'whatsNew.viewAllNews': 'عرض جميع الأخبار والأحداث',
    
    // CEO Message
    'ceo.title': 'رسالة الرئيس التنفيذي',
    'ceo.message1': 'تؤمن عقارات البطحاء أن أعظم أصولها هو كونها شركة تحترم حقاً رغبات واحتياجات الناس. إن نمو وحيوية البنية التحتية العقارية في البلاد مرتبطة مباشرة بطموحات وسعادة الناس، وقد كان الوفاء بنجاح بتلك المعايير وحتى تجاوز توقعاتهم هو مهمة عقارات البطحاء الثابتة.',
    'ceo.message2': 'سنواصل الحفاظ على سمعتنا في العدالة والأمانة والجودة والتميز غير المسبوقين بينما نصمم ونشكل تجارب المعيشة للناس ونوسع التطوير العقاري في البلاد. لا يوجد رضا أكبر من تمكين الناس من العيش في منزل يحقق أحلامهم.',
    
    // Joud Tower Section
    'joudTower.title': 'برج جود الديناميكي',
    'joudTower.subtitle': 'مرحباً بكم في الفخامة المُعاد تعريفها',
    'joudTower.description': 'يقدم برج جود من عقارات البطحاء منازل فاخرة حيث يجتمع كل ما ترغب فيه أنت وعائلتك - موقع مذهل في قلب المجتمعات النابضة بالحياة، مجهز بأفضل المرافق، يتميز بميزات صديقة للعائلة والاهتمام بالتفاصيل. اختبر حياة مليئة بالفرح والسعادة والراحة والراحة في مساحات حصرية مصممة خصيصاً لك.',
    'joudTower.discover': 'اكتشف',
    
    // Mission Values Page
    'missionValues.hero.title': 'البطحاء العقارية',
    'missionValues.hero.subtitle': 'مبادئنا التوجيهية والتزامنا بالتميز في المشهد العقاري الديناميكي في دبي',
    'missionValues.about.title': 'من نحن',
    'missionValues.about.description1': 'البطحاء العقارية، التي تأسست في عام 1986، هي قسم من شركة البطحاء القابضة التي يبلغ عمرها عدة سنوات. نحن نملك ونطور ونؤجر وندير مجموعة متنوعة من العقارات التجارية والسكنية والتجزئة والصناعية كجزء من التزامنا بتلبية مجموعة واسعة من متطلبات العقارات في دولة الإمارات العربية المتحدة.',
    'missionValues.about.description2': 'من أبراج الشقق وتطويرات الفلل إلى المستودعات والمعارض والمساجد والمرافق الصناعية، تتمتع البطحاء العقارية بحضور واسع ومؤثر في جميع أنحاء دولة الإمارات العربية المتحدة، مما يدعم بنشاط قطاع العقارات ويساهم في الاقتصاد.',
    'missionValues.about.description3': 'نحن نعطي الأولوية لتلبية متطلبات العملاء من خلال تحديد احتياجاتهم ومعالجتها من خلال نهجنا الموجه نحو المستقبل والمدفوع بالسوق.',
    'missionValues.about.description4': 'نؤجر لمجموعة واسعة من المستأجرين من القطاعين الخاص والشركات، مع التركيز بشكل خاص على العقارات الإنتاجية والمستودعات والمعارض.',
    'missionValues.operations.title': 'عملياتنا الرئيسية',
    'missionValues.operations.item1': 'إدارة وصيانة محفظة من العقارات المؤجرة.',
    'missionValues.operations.item2': 'تطوير عقارات جديدة للإيجار وللاستخدام المحدد للبطحاء.',
    'missionValues.operations.item3': 'التعامل مع الاستشاريين والمقاولين لتنفيذ وتسليم المشاريع.',
    'missionValues.operations.item4': 'تطوير عقارات للبيع.',
    'missionValues.operations.item5': 'إنشاء المفاهيم وإجراء دراسات الجدوى والحصول على موافقة التخطيط.',
    'missionValues.operations.item6': 'والتعاون مع الاستشاريين والمقاولين في مبادرات التسويق.',
    'missionValues.operations.description': 'نقدم أيضاً خدمة شاملة تشمل الاستشارات والبناء والمبيعات والإيجارات وإدارة المباني والتنسيق مع مقاولي الميكانيكا والكهرباء والسباكة ومقاولي الحرائق والسلامة، وكذلك شركات التأمين، مدعومة بخبرة إقليمية شاملة ومتعمقة.',
    'missionValues.mission.title': 'المهمة والقيم',
    'missionValues.mission.description1': 'مهمة البطحاء العقارية هي خدمة الطيف الكامل للمستهلكين في السوق العقاري، من العقارات السكنية الفاخرة والمميزة عالية الجودة إلى الهياكل التجارية والصناعية وخدمة الجمهور. من المستثمرين لأول مرة إلى المشترين المتكررين، نحن ملتزمون بلعب دور حيوي في تحقيق تطلعاتهم ومتطلباتهم من خلال بناء وإدارة العقارات من خلال خدماتنا الموثوقة وجودتنا الاستثنائية والجدوى السوقية طويلة المدى.',
    'missionValues.mission.description2': 'تستند مهمة البطحاء العقارية على النزاهة والشفافية والتركيز الثابت على الخبرة والجودة والالتزام بالاستدامة. هذه القيم الأساسية، إلى جانب احترام الناس والحساسية لاهتماماتهم، أكسبتنا سمعة التميز والعدالة والثقة في جميع أنحاء الصناعة.',
    
    // About Page
    'about.hero.title': 'من نحن',
    'about.hero.subtitle': 'تعرف على المزيد حول البطحاء العقارية والتزامنا بالتميز في صناعة العقارات.',
    'about.story.title': 'قصتنا',
    'about.story.description1': 'البطحاء العقارية كانت قوة رائدة في السوق العقاري الإماراتي، حيث تقدم عقارات وخدمات استثنائية تتجاوز التوقعات.',
    'about.story.description2': 'مع سنوات من الخبرة وفهم عميق للسوق المحلي، نواصل تشكيل مستقبل العقارات في المنطقة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'أن نكون أكثر شركة عقارية موثوقة ومبتكرة في دولة الإمارات العربية المتحدة، ونخلق مجتمعات مستدامة وتجارب معيشية استثنائية.',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نحن ملتزمون بتقديم حلول عقارية عالية الجودة تلبي الاحتياجات المتنوعة لعملائنا مع المساهمة في التنمية المستدامة لمجتمعاتنا.',
    
    // Navigation Dropdowns
    'nav.dropdown.ceoMessage': 'رسالة الرئيس التنفيذي',
    'nav.dropdown.albathaRealEstate': 'البطحاء العقارية',
    'nav.dropdown.commercial': 'تجاري',
    'nav.dropdown.residential': 'سكني',
    'nav.dropdown.industrial': 'صناعي',
    'nav.dropdown.specialProjects': 'مشاريع خاصة',
    'nav.dropdown.joudTower': 'برج جود',
    'nav.dropdown.tawazunConstruction': 'تاوازن للإنشاءات',
    'nav.dropdown.alAbir': 'الأبر للاستشارات الهندسية',
    'nav.dropdown.whatLookingToBuy': 'ماذا تريد أن تشتري؟',
    'nav.dropdown.whatLookingToRent': 'ماذا تريد أن تستأجر؟',
    'nav.dropdown.property': 'العقارات',
    'nav.dropdown.buildingPlots': 'قطع الأراضي',
    
    // Commercial Properties Page
    'commercial.hero.title': 'العقارات التجارية',
    'commercial.hero.subtitle': 'حلول عقارية تجارية مميزة للشركات من جميع الأحجام.',
    'commercial.search.location': 'الموقع',
    'commercial.search.propertyType': 'نوع العقار',
    'commercial.search.size': 'المساحة (قدم مربع)',
    'commercial.search.button': 'بحث',
    'commercial.property.startingFrom': 'يبدأ من',
    
    // Commercial Property Data
    'commercial.properties.albathaAkai.title': 'مبنى البطحاء أكاي، أبوظبي',
    'commercial.properties.albathaAkai.type': 'مجمع تجاري',
    'commercial.properties.albathaAkai.location': 'شارع الشيخ راشد بن سعيد، المنهل، أبوظبي',
    'commercial.properties.albathaAkai.price': '18.5 مليون درهم',
    
    'commercial.properties.albathaAgmc.title': 'معرض البطحاء أجي أم سي موتور سيتي، دبي',
    'commercial.properties.albathaAgmc.type': 'معرض',
    'commercial.properties.albathaAgmc.location': 'طريق تورين بوليفارد، موتور سيتي، دبي',
    'commercial.properties.albathaAgmc.price': '25.8 مليون درهم',
    
    'commercial.properties.albathaTower.title': 'برج البطحاء، الشارقة',
    'commercial.properties.albathaTower.type': 'برج مكاتب',
    'commercial.properties.albathaTower.location': '283، شارع الكورنيش، الماجز-1، الشارقة',
    'commercial.properties.albathaTower.price': '35.2 مليون درهم',
    
    'commercial.properties.abreIbo.title': 'مركز أبر إيبو الطبي، الشارقة',
    'commercial.properties.abreIbo.type': 'مساحة تجارية',
    'commercial.properties.abreIbo.location': '7GXR+V6 - شارع الشيخ سالم القاسمي، القريين 2 – الفلاح السكني – الشارقة',
    'commercial.properties.abreIbo.price': '42.1 مليون درهم',
    
    'commercial.properties.abreMpcAirport.title': 'أبر إم بي سي المطار، دبي',
    'commercial.properties.abreMpcAirport.type': 'تجاري مختلط',
    'commercial.properties.abreMpcAirport.location': '14، طريق المطار، بالقرب من قرية الشحن، القرهود، ديرة، دبي',
    'commercial.properties.abreMpcAirport.price': '15.7 مليون درهم',
    
    'commercial.properties.abreMpcHealthcare.title': 'مبنى أبر إم بي سي مدينة دبي الطبية، دبي',
    'commercial.properties.abreMpcHealthcare.type': 'مجمع مكاتب',
    'commercial.properties.abreMpcHealthcare.location': 'مبنى 71، المنطقة 1، أم هرير 2، المنطقة الحرة لمدينة دبي الطبية',
    'commercial.properties.abreMpcHealthcare.price': '12.3 مليون درهم',
    
    // Industrial Properties Page
    'industrial.hero.title': 'العقارات الصناعية',
    'industrial.hero.subtitle': 'مجمعات صناعية حديثة ومرافق تصنيع لتلبية احتياجات عملك.',
    'industrial.search.location': 'الموقع',
    'industrial.search.propertyType': 'نوع العقار',
    'industrial.search.size': 'المساحة (قدم مربع)',
    'industrial.search.button': 'بحث',
    'industrial.property.startingFrom': 'يبدأ من',
    
    // Industrial Property Data
    'industrial.properties.abreCaterpillar.title': 'مجمع أبر كاتربيلار، الشارقة',
    'industrial.properties.abreCaterpillar.type': 'مرافق تصنيع',
    'industrial.properties.abreCaterpillar.location': 'المنطقة الصناعية 02، شارع كاتربيلار – 117، الشارقة إلى دبي',
    'industrial.properties.abreCaterpillar.price': '15.5 مليون درهم',
    
    'industrial.properties.abreIbfi.title': 'سكن موظفي أبر إيب إف آي، الشارقة',
    'industrial.properties.abreIbfi.type': 'مجمع مستودعات',
    'industrial.properties.abreIbfi.location': 'المنطقة الصناعية 02، شارع كاتربيلار – 117، الشارقة إلى دبي',
    'industrial.properties.abreIbfi.price': '12.8 مليون درهم',
    
    'industrial.properties.abreGeco.title': 'مبنى مكاتب مجمع أبر جيكو، الشارقة',
    'industrial.properties.abreGeco.type': 'مرافق إنتاج',
    'industrial.properties.abreGeco.location': 'المنطقة الصناعية 12، شارع إشارة جيكو الشارقة إلى دبي',
    'industrial.properties.abreGeco.price': '18.2 مليون درهم',
    
    'industrial.properties.abreShowrooms.title': 'مجمع معارض ومستودعات أبر، المنطقة الصناعية 2، الشارقة',
    'industrial.properties.abreShowrooms.type': 'مرافق تخزين',
    'industrial.properties.abreShowrooms.location': 'المنطقة الصناعية #2، شارع بي إم دبليو القديم الشارقة. بالقرب من محطة وقود أدنوك',
    'industrial.properties.abreShowrooms.price': '9.5 مليون درهم',
    
    'industrial.properties.abreKizad.title': 'مستودعات أبر كيزاد الطويلة، أبوظبي',
    'industrial.properties.abreKizad.type': 'صناعي مختلط',
    'industrial.properties.abreKizad.location': 'منطقة خليفة الصناعية – أبوظبي',
    'industrial.properties.abreKizad.price': '11.3 مليون درهم',
    
    'industrial.properties.abreSajaa.title': 'مستودعات أبر الصناعية السجى، الشارقة',
    'industrial.properties.abreSajaa.type': 'مركز لوجستي',
    'industrial.properties.abreSajaa.location': 'المنطقة الصناعية السجى، الشارقة',
    'industrial.properties.abreSajaa.price': '16.7 مليون درهم',
    
    // Residential Properties Page
    'residential.hero.title': 'العقارات السكنية',
    'residential.hero.subtitle': 'مبادئنا التوجيهية والتزامنا بالتميز في المشهد العقاري الديناميكي في دبي.',
    'residential.search.location': 'الموقع',
    'residential.search.bedroom': 'غرف النوم',
    'residential.search.size': 'المساحة (قدم مربع)',
    'residential.search.button': 'بحث',
    'residential.property.startingFrom': 'يبدأ من',
    
    // Residential Property Data
    'residential.properties.alArooba.title': 'مبنى العروبة، الشارقة',
    'residential.properties.alArooba.bedrooms': '2-3 غرف نوم',
    'residential.properties.alArooba.location': 'شارع المرجة، الشارقة. بالقرب من جادة الحصن',
    'residential.properties.alArooba.price': '2.8 مليون درهم',
    
    'residential.properties.albathaAlKhan.title': 'فيلا البطحاء الخان الشاطئية، الشارقة',
    'residential.properties.albathaAlKhan.bedrooms': '2-3 غرف نوم',
    'residential.properties.albathaAlKhan.location': 'فيلا الخالدية، الشارقة. تقع مباشرة على شاطئ الخان.',
    'residential.properties.albathaAlKhan.price': '2.8 مليون درهم',
    
    'residential.properties.albathaResidence.title': 'سكن البطحاء بيزنس باي',
    'residential.properties.albathaResidence.bedrooms': '2-4 غرف نوم',
    'residential.properties.albathaResidence.location': '216، شارع الشيخ زايد، بيزنس باي، دبي',
    'residential.properties.albathaResidence.price': '2.8 مليون درهم',
    
    'residential.properties.alWaha.title': 'سكن الواحة، الشارقة',
    'residential.properties.alWaha.bedrooms': '1-4 غرف نوم',
    'residential.properties.alWaha.location': 'منطقة الخان، الشارقة، 897F+HCQ',
    'residential.properties.alWaha.price': '2.8 مليون درهم',
    
    'residential.properties.fourVillas.title': '4 فيلات المعافجة، الشارقة',
    'residential.properties.fourVillas.bedrooms': '3 غرف نوم',
    'residential.properties.fourVillas.location': 'فيلات المعافجة، ضاحية الوسيط الشارقة',
    'residential.properties.fourVillas.price': '2.8 مليون درهم',
    
    'residential.properties.sheikhaFatma.title': 'فيلا الشيخة فاطمة 204، براشي',
    'residential.properties.sheikhaFatma.bedrooms': '6 غرف نوم',
    'residential.properties.sheikhaFatma.location': 'براشي، ضاحية البديع شارع 82. بالقرب من طريق الإمارات',
    'residential.properties.sheikhaFatma.price': '2.8 مليون درهم',
    
    'residential.properties.rollaBuilding.title': 'مبنى الرولة، الشارقة',
    'residential.properties.rollaBuilding.bedrooms': '1 غرفة نوم',
    'residential.properties.rollaBuilding.location': 'شارع الشيوخ، الشارقة، بالقرب من ساحة الحصن/قلعة الشارقة',
    'residential.properties.rollaBuilding.price': '2.8 مليون درهم',
    
    'residential.properties.villa274.title': 'فيلا 274 - شرقان، الشارقة',
    'residential.properties.villa274.bedrooms': '5 غرف نوم',
    'residential.properties.villa274.location': 'شارع المرقاب 105. بالقرب من شارع الشيخ محمد بن سلطان',
    'residential.properties.villa274.price': '2.8 مليون درهم',
    
    'residential.properties.threeShargan.title': '03 فيلات شرقان، الشارقة',
    'residential.properties.threeShargan.bedrooms': '4 غرف نوم',
    'residential.properties.threeShargan.location': 'فيلات شرقان الشارقة، شارع 90 والوصول إلى شارع محمد بن سلطان القاسمي، مقابل سكن المرقاب، شرقان.',
    'residential.properties.threeShargan.price': '2.8 مليون درهم',
    
    'residential.properties.villa276.title': 'فيلا 276 (جيكو) - شرقان، الشارقة',
    'residential.properties.villa276.bedrooms': '5 غرف نوم',
    'residential.properties.villa276.location': 'شارع المرقاب 105. بالقرب من شارع الشيخ محمد بن سلطان القاسمي.',
    'residential.properties.villa276.price': '2.8 مليون درهم',
    
    // Special Projects Page
    'specialProjects.hero.title': 'المشاريع الخاصة',
    'specialProjects.hero.subtitle': 'تطويرات عقارية فريدة ومبتكرة تعيد تعريف الحياة العصرية',
    'specialProjects.search.location': 'الموقع',
    'specialProjects.search.projectType': 'نوع المشروع',
    'specialProjects.search.sizeRange': 'نطاق المساحة',
    'specialProjects.search.button': 'بحث',
    'specialProjects.search.selectLocation': 'اختر الموقع',
    'specialProjects.search.selectType': 'اختر النوع',
    'specialProjects.search.selectSize': 'اختر المساحة',
    'specialProjects.section.title': 'مشاريعنا الخاصة',
    'specialProjects.property.startingFrom': 'يبدأ من',
    
    // Special Project Data
    'specialProjects.projects.smartCity.title': 'مجمع المدينة الذكية',
    'specialProjects.projects.smartCity.location': 'مارينا دبي',
    'specialProjects.projects.smartCity.type': 'مختلط الاستخدام',
    'specialProjects.projects.smartCity.size': '2.5 مليون قدم مربع',
    'specialProjects.projects.smartCity.price': '1.2 مليار درهم',
    
    'specialProjects.projects.heritage.title': 'ترميم التراث',
    'specialProjects.projects.heritage.location': 'الفهيدي',
    'specialProjects.projects.heritage.type': 'ثقافي',
    'specialProjects.projects.heritage.size': '500 ألف قدم مربع',
    'specialProjects.projects.heritage.price': '800 مليون درهم',
    
    'specialProjects.projects.greenEnergy.title': 'حرم الطاقة الخضراء',
    'specialProjects.projects.greenEnergy.location': 'مدينة مصدر',
    'specialProjects.projects.greenEnergy.type': 'ابتكار',
    'specialProjects.projects.greenEnergy.size': '1.8 مليون قدم مربع',
    'specialProjects.projects.greenEnergy.price': '950 مليون درهم',
    
    'specialProjects.projects.floatingResort.title': 'منتجع عائم',
    'specialProjects.projects.floatingResort.location': 'نخلة جميرا',
    'specialProjects.projects.floatingResort.type': 'فاخر',
    'specialProjects.projects.floatingResort.size': '300 ألف قدم مربع',
    'specialProjects.projects.floatingResort.price': '2.1 مليار درهم',
    
    // Properties Page
    'properties.hero.title': 'عقاراتنا',
    'properties.hero.subtitle': 'اكتشف محفظتنا المتنوعة من التطويرات العقارية الاستثنائية',
    'properties.learnMore': 'اعرف المزيد',
    
    // Property Types
    'properties.commercial.title': 'تجاري',
    'properties.commercial.description': 'عقارات تجارية مميزة للشركات من جميع الأحجام',
    'properties.residential.title': 'سكني',
    'properties.residential.description': 'مجتمعات سكنية فاخرة وشقق راقية',
    'properties.industrial.title': 'صناعي',
    'properties.industrial.description': 'مجمعات صناعية حديثة ومرافق تصنيع',
    'properties.specialProjects.title': 'مشاريع خاصة',
    'properties.specialProjects.description': 'تطويرات عقارية فريدة ومبتكرة',
    
 
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';
  const fontFamily = isRTL ? 'GE SS Two' : 'Univers';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, fontFamily }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};