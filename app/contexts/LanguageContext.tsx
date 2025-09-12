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
    
    // Contact Us Section
    'contactUs.title': 'Contact Us',
    'contactUs.description': 'Get in touch with us for any inquiries or support.',
    'contactUs.contactButton': 'Contact Us',
    'contactUs.email': 'Email',
    'contactUs.phone': 'Phone',
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
    
    // Contact Us Section
    'contactUs.title': 'اتصل بنا',
    'contactUs.description': 'تواصل معنا لأي استفسارات أو دعم.',
    'contactUs.contactButton': 'اتصل بنا',
    'contactUs.email': 'البريد الإلكتروني',
    'contactUs.phone': 'الهاتف',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
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