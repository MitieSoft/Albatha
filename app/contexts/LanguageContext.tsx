'use client';

import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

export type Language = 'en' | 'ar';

type TranslationValue = string | string[] | Array<{question: string, answer: string}>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tFAQ: (key: string) => Array<{question: string, answer: string}>;
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
    
    // Navigation Dropdowns
    'nav.dropdown.ceoMessage': 'CEO\'s Message',
    'nav.dropdown.albathaRealEstate': 'Albatha Real Estate',
    'nav.dropdown.commercial': 'Commercial',
    'nav.dropdown.residential': 'Residential',
    'nav.dropdown.industrial': 'Industrial',
    'nav.dropdown.specialProjects': 'Special Projects',
    'nav.dropdown.joudTower': 'Joud Tower',
    'nav.dropdown.liwanRenders': 'Liwan Renders',
    'nav.dropdown.tawazunConstruction': 'Tawazun Construction',
    'nav.dropdown.alAbir': 'Al Abir',
    'nav.dropdown.whatLookingToBuy': 'What are you looking to buy?',
    'nav.dropdown.whatLookingToRent': 'What are you looking to rent?',
    'nav.dropdown.property': 'Property',
    'nav.dropdown.buildingPlots': 'Building Plots',
    
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
    'launches.joudTowerDescription': 'Joud Tower by Albatha Real Estate is more than just a residence — it\'s a place where families can truly thrive.Designed with your loved ones in mind, it brings together everything you need to create lasting memories a prime ocation at the heart of a vibrant community, thoughtfully crafted family-friendly spaces, and world-class amenities that enrich daily life.',
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
    'footer.companyDescription': 'Albatha Real Estate, is one of the oldest real estate companies established over 50 years ago.',
    'footer.stayUpdated': 'Stay Updated',
    'footer.newsletterDescription': 'Subscribe to our newsletter for the latest news, project updates, and investment opportunities.',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2025 Albatha . All rights reserved.',
    'footer.headings.company': 'Company',
    'footer.headings.developments': 'Developments',
    'footer.headings.ourCompanies': 'Our Companies',
    'footer.headings.resources': 'Resources',
    'footer.contact.address': 'P.O. Box 1145- Sharjah,Floor 23, Albatha tower, Corniche Street, Sharjah, UAE',
    'footer.contact.phone': '+971 4 371 1300',
    'footer.contact.email': 'info@batha.ae',
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
    
    // Contact Page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.getInTouch.title': 'Get in Touch',
    'contact.getInTouch.subtitle': 'We\'re here to help and answer any question you might have.',
    'contact.phone.title': 'Phone',
    'contact.phone.number1': '+971 4 371 1300',
    'contact.phone.number2': '+971 4 325 3687',
    'contact.email.title': 'Email',
    'contact.email.address1': 'info@albatha.ae',
    'contact.email.address2': 'support@albatha.ae',
    'contact.address.title': 'Address',
    'contact.address.text': 'P.O. Box 7400, Level 22, Boulevard Plaza 1,<br>Downtown Burj Khalifa, Dubai, UAE',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.firstNamePlaceholder': 'Enter your first name',
    'contact.form.lastName': 'Last Name',
    'contact.form.lastNamePlaceholder': 'Enter your last name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Enter your email address',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Enter your phone number',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Select a subject',
    'contact.form.subjectOptions': ['General Inquiry', 'Property Information', 'Investment Opportunities', 'Customer Support', 'Partnership', 'Other'],
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Enter your message here',
    'contact.form.submit': 'Send Message',
    'contact.location.title': 'Our Location',
    'contact.hours.monday': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Saturday: 9:00 AM - 2:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Find answers to common questions about our services and properties.',
    'contact.faq.questions': [
      {
        question: 'What types of properties does Albatha Real Estate offer?',
        answer: 'We offer a diverse portfolio including residential apartments, villas, commercial offices, retail spaces, industrial units, and hospitality properties across the UAE.'
      },
      {
        question: 'How can I schedule a property viewing?',
        answer: 'You can schedule a property viewing by calling us at +971 4 371 1300, emailing us at info@albatha.ae, or filling out our contact form above.'
      },
      {
        question: 'What are your office hours?',
        answer: 'Our office hours are Monday to Friday from 9:00 AM to 6:00 PM, Saturday from 9:00 AM to 2:00 PM, and we are closed on Sundays.'
      },
      {
        question: 'Do you offer property management services?',
        answer: 'Yes, we provide comprehensive property management services including maintenance, tenant relations, rent collection, and property administration.'
      },
      {
        question: 'What investment opportunities are available?',
        answer: 'We offer various investment opportunities including direct property investment, REITs, and development partnerships. Contact our investment team for more details.'
      }
    ],
    
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
    'footer.developments.specialProjects': 'Special Projects',
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
    'missionValues.about.description1': 'Albatha Real Estate, is one of the oldest real estate companies established over 50 years ago. IT own, develop, lease, and manage a diverse array of commercial, residential, retail, and industrial properties as part of our commitment to meeting a broad spectrum of property requirements in the UAE.',
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
    
    // Properties Section
    'properties.hero.title': 'Our Properties',
    'properties.hero.subtitle': 'Discover our diverse portfolio of residential, commercial, industrial, and special project properties across the UAE.',
    'properties.commercial.title': 'Commercial Properties',
    'properties.commercial.description': 'Modern office spaces, retail centers, and business districts designed for success.',
    'properties.residential.title': 'Residential Properties',
    'properties.residential.description': 'Luxury homes and apartments in prime locations with world-class amenities.',
    'properties.industrial.title': 'Industrial Properties',
    'properties.industrial.description': 'State-of-the-art warehouses, manufacturing facilities, and logistics centers.',
    'properties.specialProjects.title': 'Special Projects',
    'properties.specialProjects.description': 'Unique developments that showcase innovation and architectural excellence.',
    'properties.learnMore': 'Learn More',
    
    // Residential Properties
    'residential.hero.title': 'Residential Properties',
    'residential.hero.subtitle': 'Find your perfect home in our carefully curated selection of residential properties.',
    'residential.search.location': 'Enter location',
    'residential.search.bedroom': 'Number of bedrooms',
    'residential.search.size': 'Property size (sq ft)',
    'residential.search.button': 'Search Properties',
    'residential.property.startingFrom': 'Starting from',
    
    // Residential Property Listings
    'residential.properties.alArooba.title': 'Al Arooba Villa',
    'residential.properties.alArooba.bedrooms': '4 Bedrooms',
    'residential.properties.alArooba.location': 'Sharjah',
    'residential.properties.alArooba.price': 'AED 1,200,000',
    
    'residential.properties.albathaAlKhan.title': 'Albatha Al Khan',
    'residential.properties.albathaAlKhan.bedrooms': '3 Bedrooms',
    'residential.properties.albathaAlKhan.location': 'Sharjah',
    'residential.properties.albathaAlKhan.price': 'AED 850,000',
    
    'residential.properties.albathaResidence.title': 'Albatha Residence',
    'residential.properties.albathaResidence.bedrooms': '2 Bedrooms',
    'residential.properties.albathaResidence.location': 'Dubai',
    'residential.properties.albathaResidence.price': 'AED 1,500,000',
    
    'residential.properties.alWaha.title': 'Al Waha Villa',
    'residential.properties.alWaha.bedrooms': '5 Bedrooms',
    'residential.properties.alWaha.location': 'Abu Dhabi',
    'residential.properties.alWaha.price': 'AED 2,200,000',
    
    'residential.properties.fourVillas.title': 'Four Villas Complex',
    'residential.properties.fourVillas.bedrooms': '4 Bedrooms',
    'residential.properties.fourVillas.location': 'Sharjah',
    'residential.properties.fourVillas.price': 'AED 1,800,000',
    
    'residential.properties.sheikhaFatma.title': 'Sheikha Fatma Building',
    'residential.properties.sheikhaFatma.bedrooms': '1 Bedroom',
    'residential.properties.sheikhaFatma.location': 'Sharjah',
    'residential.properties.sheikhaFatma.price': 'AED 450,000',
    
    'residential.properties.rollaBuilding.title': 'Rolla Building',
    'residential.properties.rollaBuilding.bedrooms': '2 Bedrooms',
    'residential.properties.rollaBuilding.location': 'Sharjah',
    'residential.properties.rollaBuilding.price': 'AED 650,000',
    
    'residential.properties.villa274.title': 'Villa 274',
    'residential.properties.villa274.bedrooms': '3 Bedrooms',
    'residential.properties.villa274.location': 'Sharjah',
    'residential.properties.villa274.price': 'AED 950,000',
    
    'residential.properties.threeShargan.title': 'Three Shargan Villas',
    'residential.properties.threeShargan.bedrooms': '4 Bedrooms',
    'residential.properties.threeShargan.location': 'Sharjah',
    'residential.properties.threeShargan.price': 'AED 1,100,000',
    
    'residential.properties.villa276.title': 'Villa 276',
    'residential.properties.villa276.bedrooms': '3 Bedrooms',
    'residential.properties.villa276.location': 'Sharjah',
    'residential.properties.villa276.price': 'AED 900,000',
    
    // Commercial Properties
    'commercial.hero.title': 'Commercial Properties',
    'commercial.hero.subtitle': 'Explore our premium commercial spaces designed for business success.',
    'commercial.search.location': 'Enter location',
    'commercial.search.propertyType': 'Property type',
    'commercial.search.size': 'Property size (sq ft)',
    'commercial.search.button': 'Search Properties',
    'commercial.property.startingFrom': 'Starting from',
    
    // Commercial Property Listings
    'commercial.properties.albathaAgmc.title': 'Albatha AGMC',
    'commercial.properties.albathaAgmc.type': 'Office Building',
    'commercial.properties.albathaAgmc.location': 'Sharjah',
    'commercial.properties.albathaAgmc.price': 'AED 2,500,000',
    
    'commercial.properties.albathaAkai.title': 'Albatha AKAI',
    'commercial.properties.albathaAkai.type': 'Retail Space',
    'commercial.properties.albathaAkai.location': 'Sharjah',
    'commercial.properties.albathaAkai.price': 'AED 1,800,000',
    
    'commercial.properties.albathaTower.title': 'Albatha Tower',
    'commercial.properties.albathaTower.type': 'Office Tower',
    'commercial.properties.albathaTower.location': 'Dubai',
    'commercial.properties.albathaTower.price': 'AED 5,000,000',
    
    'commercial.properties.abreIbo.title': 'ABRE IBO',
    'commercial.properties.abreIbo.type': 'Office Space',
    'commercial.properties.abreIbo.location': 'Sharjah',
    'commercial.properties.abreIbo.price': 'AED 1,200,000',
    
    'commercial.properties.abreMpcAirport.title': 'ABRE MPC Airport',
    'commercial.properties.abreMpcAirport.type': 'Office Complex',
    'commercial.properties.abreMpcAirport.location': 'Sharjah',
    'commercial.properties.abreMpcAirport.price': 'AED 3,500,000',
    
    'commercial.properties.abreMpcHealthcare.title': 'ABRE MPC Healthcare',
    'commercial.properties.abreMpcHealthcare.type': 'Medical Center',
    'commercial.properties.abreMpcHealthcare.location': 'Sharjah',
    'commercial.properties.abreMpcHealthcare.price': 'AED 2,800,000',
    
    // Joud Tower Page
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
    'joudTower.welcomeTo': 'Welcome To',
    'joudTower.luxuryRedefined': 'Luxury Redefined',
    
    // Liwan Renders Page
    'liwanRenders.hero.title': 'Liwan Renders',
    'liwanRenders.hero.subtitle': 'LUXURY REDEFINED',
    'liwanRenders.hero.description': 'Experience the epitome of luxury living with Liwan Renders, where every detail is crafted to perfection and every moment is designed for your comfort and satisfaction.',
    'liwanRenders.lavish.title': 'LAVISH.<br />DELUXE.<br />OPULENT.',
    'liwanRenders.lavish.description': 'Liwan Renders represents the pinnacle of luxury living in the heart of the city. This stunning residential tower offers unparalleled comfort, modern amenities, and breathtaking views of the skyline. Designed with meticulous attention to detail, Liwan Renders combines contemporary architecture with premium finishes to create an exceptional living experience for discerning residents.',
    'liwanRenders.specification.title': 'Liwan Renders Specification',
    'liwanRenders.specification.storeys': 'No. of storeys: 55',
    'liwanRenders.specification.basement': '1 Basement + Ground Floor + 5 Podium Levels for parking and services',
    'liwanRenders.specification.residential': '48 floors residential at its highest point',
    'liwanRenders.specification.apartmentTypes': 'Apartment Types:',
    'liwanRenders.specification.apartments.2bed': '2-bedroom',
    'liwanRenders.specification.apartments.3bed': '3-bedroom',
    'liwanRenders.specification.apartments.3bedGarden': '3-bedroom + private garden at the podium level.',
    'liwanRenders.specification.apartments.4bed': '4-bedroom',
    'liwanRenders.specification.apartments.4bedGarden': '4-bedroom + private garden at the podium level.',
    'liwanRenders.specification.apartments.4bedDuplex': '4-bedroom duplex on the floor from 45 upwards(skyvilla).',
    'liwanRenders.specification.apartments.penthouse': 'Penthouse: 5 bedrooms, bespoke with private pool.',
    'liwanRenders.amenities.title': 'Amenities',
    'liwanRenders.amenities.gym': 'Functional Gym',
    'liwanRenders.amenities.sauna': 'Sauna',
    'liwanRenders.amenities.pool': 'Swimming Pool',
    'liwanRenders.amenities.padel': 'Padel Court',
    'liwanRenders.amenities.running': 'Running Track',
    'liwanRenders.amenities.bbq': 'BBQ Area',
    'liwanRenders.amenities.kids': 'Kids Play Area',
    'liwanRenders.amenities.hall': 'Multipurpose Hall',
    'liwanRenders.amenities.cafe': 'Cafe',
    'liwanRenders.amenities.prayer': 'Prayer Room',
    'liwanRenders.amenities.kindergarten': 'Kindergarten',
    'liwanRenders.amenities.retail': 'Retail Shop',
    'liwanRenders.features.title': 'Other Features',
    'liwanRenders.features.delivery': '24/7 Concierge Service',
    'liwanRenders.features.concierge': 'Package Delivery & Management',
    'liwanRenders.features.access': 'Smart Access Control',
    'liwanRenders.features.booking': 'Facility Booking System',
    'liwanRenders.features.maintenance': 'Maintenance Services',
    'liwanRenders.features.description': 'Liwan Renders offers a comprehensive range of services and features designed to enhance your living experience. From round-the-clock concierge services to smart home technology, every aspect of your daily life is carefully considered and catered to.',
    'liwanRenders.views.title': 'Enjoy<br />Unparalleled<br />Views',
    'liwanRenders.views.description': 'Wake up to breathtaking panoramic views of the city skyline and beyond. Each apartment is strategically positioned to maximize natural light and provide stunning vistas that change with the time of day and seasons.',
    'liwanRenders.sanctuary.title': 'Your Sanctuary',
    'liwanRenders.sanctuary.description': 'Step into your private sanctuary where luxury meets comfort. Every space is thoughtfully designed to provide the perfect balance of relaxation and functionality, creating an environment where you can truly unwind and recharge.',
    'liwanRenders.feast.title': 'A Feast<br />For The<br />Senses',
    'liwanRenders.feast.description': 'Indulge in culinary excellence with state-of-the-art kitchen facilities and premium appliances. Whether you\'re hosting intimate dinners or preparing family meals, your kitchen becomes the heart of your home.',
    'liwanRenders.perspective.title': 'Priceless<br />Perspective',
    'liwanRenders.perspective.description': 'Experience the world from a new perspective with floor-to-ceiling windows and private balconies that offer unobstructed views of the city below. Every moment spent in your home becomes a celebration of the extraordinary.',
    'liwanRenders.aesthetic.title': 'AESTHETIC.<br />EXQUISITE.<br />IDYLLIC.',
    'liwanRenders.aesthetic.description': 'Discover the perfect harmony of form and function in every corner of your home. From the elegant living spaces to the serene private terraces, each area is designed to inspire and delight.',
    'liwanRenders.elegance.title': 'ELEGANCE.<br />STYLE.<br />REFINEMENT.',
    'liwanRenders.elegance.description': 'Every detail has been carefully considered to create spaces that are both beautiful and functional. From the elegant marble finishes to the sophisticated lighting design, each element contributes to an atmosphere of refined luxury that makes every day feel special.',
    
    // Our Company Page
    'about.hero.title': 'About Albatha Real Estate',
    'about.hero.subtitle': 'Building Dreams, Creating Communities',
    
    'about.story.title': 'Our Story',
    'about.story.description1': 'Albatha Real Estate has been at the forefront of the UAE real estate market for over two decades, delivering exceptional residential and commercial properties that redefine modern living. Our journey began with a simple yet powerful vision: to create spaces that inspire, communities that thrive, and homes that become the foundation of cherished memories.',
    'about.story.description2': 'From our humble beginnings to becoming one of the most trusted names in real estate, we have consistently focused on quality, innovation, and customer satisfaction. Every project we undertake reflects our commitment to excellence and our deep understanding of what makes a place truly special.',
    
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the leading real estate developer in the UAE, known for creating sustainable, innovative, and community-focused developments that enhance the quality of life for our residents and contribute positively to the urban landscape.',
    
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We are committed to delivering exceptional real estate solutions that exceed expectations, foster community connections, and create lasting value for our clients, partners, and the communities we serve. Through innovative design, sustainable practices, and unwavering dedication to quality, we build more than just properties – we build futures.',
    
    // Al-Abir Page
    'alAbir.hero.title': 'Al Abir Engineering Consulting',
    'alAbir.hero.description': 'Al Abir Consulting and Engineering was established in 1983 as a comprehensive service design and engineering firm, providing civil, architectural, and mechanical solutions to meet the diverse needs of Albatha Holding and delivering a wide range of world-class projects.',
    'alAbir.business.title': 'Our Business',
    'alAbir.business.description': 'Over the years, Al Abir has grown into a full-fledged civil, architectural, and MEPF design and engineering consultancy firm capable of delivering excellent projects. With years of experience in local by-laws and authority regulations, Al Abir follows international construction standards and best engineering practices, ensuring delivery of projects on time within budget.',
    'alAbir.services.title': 'Our Services',
    'alAbir.services.list': [
      'Preliminary designs and drawings coordination.',
  'Economical, green and energy-saving designs.',
  'Final drawings submission and authority approvals.',
  'Tender packages preparation with specifications.',
  'Cost analysis of submitted tenders.',
  'Project management and contract agreements.',
  'Testing and commissioning supervision.',
  'As-fitted drawings and maintenance manuals.',
  'Local authority NOCs and completion certificates.',
  'Project handover.',
  'Ongoing technical assistance.'
],
    
    // Tawazun Construction Page
    'tawazun.hero.title': 'Tawazan Construction',
    'tawazun.hero.description': 'Tawazan Construction was established in 2008, with a primary focus on Civil Construction. Its team comprises highly qualified civil engineers with a full-fledged back-office support',
    'tawazun.about.title': 'Our Business',
    'tawazun.about.description1': 'Driven by excellence and dynamism, Tawazun aims to be the preferred choice for quality projects, timely delivery and value-added services. We focus on innovation and using state-of-the-art methods and materials to enhance productivity and cost effectiveness. This is complemented by the continual development of staff competencies and the pursuit of the industry\'s leading safety record.',
    'tawazun.about.description2': 'Tawazun is also committed to its environmental responsibilities and to mitigating the impacts arising from its activities. This includes the use of the latest eco-friendly concrete technology and compliance with environmental standards.',
    'tawazun.expertise.title': 'Tawazan Expertise',
    'tawazun.expertise.description': 'Tawazan is executing major projects, including villas, mosques, and car showrooms at various locations in the Emirates',
    

    'tawazun.business.title': 'Our Business',
'tawazun.business.description1': 'Driven by excellence and dynamism, Tawazun aims to be the preferred choice for quality projects, timely delivery and value-added services. We focus on innovation and using state-of-the-art methods and materials to enhance productivity and cost effectiveness. This is complemented by the continual development of staff competencies and the pursuit of the industry\'s leading safety record.',
'tawazun.business.description2': 'Tawazun is also committed to its environmental responsibilities and to mitigating the impacts arising from its activities. This includes the use of the latest eco-friendly concrete technology and compliance with environmental standards.',

// Tawazun Services - Shortened Content
'tawazun.services.title': 'Our Services',
'tawazun.services.item1': 'Preliminary designs and drawings coordination.',
'tawazun.services.item2': 'Economical, green and energy-saving designs.',
'tawazun.services.item3': 'Final drawings submission and authority approvals.',
'tawazun.services.item4': 'Tender packages preparation with specifications.',
'tawazun.services.item5': 'Cost analysis of submitted tenders.',
'tawazun.services.item6': 'Project management and contract agreements.',
'tawazun.services.item7': 'Testing and commissioning supervision.',
'tawazun.services.item8': 'As-fitted drawings and maintenance manuals.',
'tawazun.services.item9': 'Local authority NOCs and completion certificates.',
'tawazun.services.item10': 'Project handover.',
'tawazun.services.item11': 'Ongoing technical assistance.',

// Tawazun Contact - New Keys
'tawazun.contact.title': 'Contact us',
'tawazun.contact.description': 'For questions, please speak to our customer service team.',
'tawazun.contact.button': 'Contact us',
'tawazun.contact.emailLabel': 'E-mail',
'tawazun.contact.email': 'info@batha.ae',
'tawazun.contact.phoneLabel': 'Phone',
'tawazun.contact.phone': '0800 1 8888',


    // Industrial Properties
    'industrial.hero.title': 'Industrial Properties',
    'industrial.hero.subtitle': 'Discover our extensive range of advanced industrial properties designed for modern business needs.',
    'industrial.search.location': 'Enter location',
    'industrial.search.propertyType': 'Property type',
    'industrial.search.size': 'Size (sq ft)',
    'industrial.search.button': 'Search Properties',
    'industrial.property.startingFrom': 'Starting from',
    
    // Industrial Property Listings
    'industrial.properties.abreCaterpillar.title': 'ABRE Caterpillar Warehouse',
    'industrial.properties.abreCaterpillar.type': 'Warehouse',
    'industrial.properties.abreCaterpillar.location': 'Sharjah',
    'industrial.properties.abreCaterpillar.price': 'AED 2,500,000',
    
    'industrial.properties.abreIbfi.title': 'ABRE IBFI Warehouse',
    'industrial.properties.abreIbfi.type': 'Warehouse',
    'industrial.properties.abreIbfi.location': 'Dubai',
    'industrial.properties.abreIbfi.price': 'AED 3,200,000',
    
    'industrial.properties.abreGeco.title': 'ABRE GECO Warehouse',
    'industrial.properties.abreGeco.type': 'Warehouse',
    'industrial.properties.abreGeco.location': 'Abu Dhabi',
    'industrial.properties.abreGeco.price': 'AED 2,800,000',
    
    'industrial.properties.abreShowrooms.title': 'ABRE Showrooms',
    'industrial.properties.abreShowrooms.type': 'Showroom',
    'industrial.properties.abreShowrooms.location': 'Sharjah',
    'industrial.properties.abreShowrooms.price': 'AED 1,900,000',
    
    'industrial.properties.abreKizad.title': 'ABRE KIZAD Warehouse',
    'industrial.properties.abreKizad.type': 'Warehouse',
    'industrial.properties.abreKizad.location': 'Abu Dhabi',
    'industrial.properties.abreKizad.price': 'AED 4,500,000',
    
    'industrial.properties.abreSajaa.title': 'ABRE Sajaa Warehouse',
    'industrial.properties.abreSajaa.type': 'Warehouse',
    'industrial.properties.abreSajaa.location': 'Sharjah',
    'industrial.properties.abreSajaa.price': 'AED 2,100,000',
    
    // Special Projects
    'specialProjects.hero.title': 'Special Projects',
    'specialProjects.hero.subtitle': 'Discover our unique and innovative projects that reflect our vision for the future.',
    'specialProjects.search.location': 'Location',
    'specialProjects.search.selectLocation': 'Select Location',
    'specialProjects.search.projectType': 'Project Type',
    'specialProjects.search.selectType': 'Select Type',
    'specialProjects.search.sizeRange': 'Size Range',
    'specialProjects.search.selectSize': 'Select Size',
    'specialProjects.search.button': 'Search Projects',
    'specialProjects.section.title': 'Our Featured Projects',
    'specialProjects.property.startingFrom': 'Starting from',
    
    // Special Project Listings
    'specialProjects.projects.smartCity.title': 'Smart City',
    'specialProjects.projects.smartCity.location': 'Dubai',
    'specialProjects.projects.smartCity.type': 'Mixed Use',
    'specialProjects.projects.smartCity.size': '5 Million sq ft',
    'specialProjects.projects.smartCity.price': 'AED 15,000,000',
    
    'specialProjects.projects.heritage.title': 'Heritage Project',
    'specialProjects.projects.heritage.location': 'Sharjah',
    'specialProjects.projects.heritage.type': 'Cultural',
    'specialProjects.projects.heritage.size': '2 Million sq ft',
    'specialProjects.projects.heritage.price': 'AED 8,500,000',
    
    'specialProjects.projects.greenEnergy.title': 'Green Energy Project',
    'specialProjects.projects.greenEnergy.location': 'Abu Dhabi',
    'specialProjects.projects.greenEnergy.type': 'Innovation',
    'specialProjects.projects.greenEnergy.size': '3 Million sq ft',
    'specialProjects.projects.greenEnergy.price': 'AED 12,000,000',
    
    'specialProjects.projects.floatingResort.title': 'Floating Resort',
    'specialProjects.projects.floatingResort.location': 'Dubai',
    'specialProjects.projects.floatingResort.type': 'Luxury',
    'specialProjects.projects.floatingResort.size': '1.5 Million sq ft',
    'specialProjects.projects.floatingResort.price': 'AED 25,000,000',
    
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
    
    // Navigation Dropdowns
    'nav.dropdown.ceoMessage': 'رسالة الرئيس التنفيذي',
    'nav.dropdown.albathaRealEstate': 'المهمة والقيم',
    'nav.dropdown.commercial': 'تجاري',
    'nav.dropdown.residential': 'سكني',
    'nav.dropdown.industrial': 'صناعي',
    'nav.dropdown.specialProjects': 'مشاريع خاصة',
    'nav.dropdown.joudTower': 'برج جود',
    'nav.dropdown.liwanRenders': 'ليوان ريندرز',
    'nav.dropdown.tawazunConstruction': 'تاوازن للإنشاءات',
    'nav.dropdown.alAbir': 'الأبر للاستشارات الهندسية',
    'nav.dropdown.whatLookingToBuy': 'ماذا تبحث عن للشراء؟',
    'nav.dropdown.whatLookingToRent': 'ماذا تبحث عن للإيجار؟',
    'nav.dropdown.property': 'العقارات',
    'nav.dropdown.buildingPlots': 'قطع الأراضي',
    
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
    
    // Contact Page
    'contact.hero.title': 'تواصل معنا',
    'contact.hero.subtitle': 'نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.',
    'contact.getInTouch.title': 'تواصل معنا',
    'contact.getInTouch.subtitle': 'نحن هنا للمساعدة والإجابة على أي سؤال قد يكون لديك.',
    'contact.phone.title': 'الهاتف',
    'contact.phone.number1': '+971 4 371 1300',
    'contact.phone.number2': '+971 4 325 3687',
    'contact.email.title': 'البريد الإلكتروني',
    'contact.email.address1': 'info@albatha.ae',
    'contact.email.address2': 'support@albatha.ae',
    'contact.address.title': 'العنوان',
    'contact.address.text': 'صندوق البريد 7400، الطابق 22، بلازا بوليفارد 1،<br>وسط مدينة برج خليفة، دبي، الإمارات',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.firstNamePlaceholder': 'أدخل اسمك الأول',
    'contact.form.lastName': 'اسم العائلة',
    'contact.form.lastNamePlaceholder': 'أدخل اسم عائلتك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.phonePlaceholder': 'أدخل رقم هاتفك',
    'contact.form.subject': 'الموضوع',
    'contact.form.subjectPlaceholder': 'اختر موضوعاً',
    'contact.form.subjectOptions': ['استفسار عام', 'معلومات العقار', 'فرص الاستثمار', 'دعم العملاء', 'شراكة', 'أخرى'],
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'أدخل رسالتك هنا',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.location.title': 'موقعنا',
    'contact.hours.monday': 'الاثنين - الجمعة: 9:00 ص - 6:00 م',
    'contact.hours.saturday': 'السبت: 9:00 ص - 2:00 م',
    'contact.hours.sunday': 'الأحد: مغلق',
    'contact.faq.title': 'الأسئلة الشائعة',
    'contact.faq.subtitle': 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وعقاراتنا.',
    'contact.faq.questions': [
      {
        question: 'ما أنواع العقارات التي تقدمها البطحاء العقارية؟',
        answer: 'نقدم محفظة متنوعة تشمل الشقق السكنية والفيلات والمكاتب التجارية والمساحات التجارية والوحدات الصناعية والعقارات السياحية في جميع أنحاء الإمارات.'
      },
      {
        question: 'كيف يمكنني تحديد موعد لمعاينة عقار؟',
        answer: 'يمكنك تحديد موعد لمعاينة عقار بالاتصال بنا على +971 4 371 1300، أو إرسال بريد إلكتروني إلى info@albatha.ae، أو ملء نموذج الاتصال أعلاه.'
      },
      {
        question: 'ما هي ساعات العمل لديكم؟',
        answer: 'ساعات العمل لدينا من الاثنين إلى الجمعة من 9:00 ص إلى 6:00 م، والسبت من 9:00 ص إلى 2:00 م، ونحن مغلقون أيام الأحد.'
      },
      {
        question: 'هل تقدمون خدمات إدارة العقارات؟',
        answer: 'نعم، نقدم خدمات شاملة لإدارة العقارات تشمل الصيانة وعلاقات المستأجرين وجمع الإيجار وإدارة العقارات.'
      },
      {
        question: 'ما فرص الاستثمار المتاحة؟',
        answer: 'نقدم فرص استثمارية متنوعة تشمل الاستثمار المباشر في العقارات وصناديق الاستثمار العقاري وشراكات التطوير. اتصل بفريق الاستثمار لدينا لمزيد من التفاصيل.'
      }
    ],
    
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
    'footer.developments.specialProjects': 'مشاريع خاصة',
    
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
    
    // Properties Section
    'properties.hero.title': 'عقاراتنا',
    'properties.hero.subtitle': 'اكتشف محفظتنا المتنوعة من العقارات السكنية والتجارية والصناعية والمشاريع الخاصة في جميع أنحاء الإمارات.',
    'properties.commercial.title': 'العقارات التجارية',
    'properties.commercial.description': 'مساحات مكتبية حديثة ومراكز تجارية ومناطق أعمال مصممة للنجاح.',
    'properties.residential.title': 'العقارات السكنية',
    'properties.residential.description': 'منازل وشقق فاخرة في مواقع متميزة مع مرافق عالمية المستوى.',
    'properties.industrial.title': 'العقارات الصناعية',
    'properties.industrial.description': 'مستودعات ومرافق تصنيع ومراكز لوجستية متطورة.',
    'properties.specialProjects.title': 'المشاريع الخاصة',
    'properties.specialProjects.description': 'تطويرات فريدة تعرض الابتكار والتميز المعماري.',
    'properties.learnMore': 'اعرف المزيد',
    
    // Residential Properties
    'residential.hero.title': 'العقارات السكنية',
    'residential.hero.subtitle': 'اعثر على منزلك المثالي في مجموعتنا المختارة بعناية من العقارات السكنية.',
    'residential.search.location': 'أدخل الموقع',
    'residential.search.bedroom': 'عدد غرف النوم',
    'residential.search.size': 'مساحة العقار (قدم مربع)',
    'residential.search.button': 'البحث في العقارات',
    'residential.property.startingFrom': 'تبدأ من',
    
    // Residential Property Listings
    'residential.properties.alArooba.title': 'فيلا الأروبة',
    'residential.properties.alArooba.bedrooms': '4 غرف نوم',
    'residential.properties.alArooba.location': 'الشارقة',
    'residential.properties.alArooba.price': '1,200,000 درهم',
    
    'residential.properties.albathaAlKhan.title': 'البطحاء الخان',
    'residential.properties.albathaAlKhan.bedrooms': '3 غرف نوم',
    'residential.properties.albathaAlKhan.location': 'الشارقة',
    'residential.properties.albathaAlKhan.price': '850,000 درهم',
    
    'residential.properties.albathaResidence.title': 'سكن البطحاء',
    'residential.properties.albathaResidence.bedrooms': '2 غرف نوم',
    'residential.properties.albathaResidence.location': 'دبي',
    'residential.properties.albathaResidence.price': '1,500,000 درهم',
    
    'residential.properties.alWaha.title': 'فيلا الواحة',
    
    // Industrial Properties
    'industrial.hero.title': 'العقارات الصناعية',
    'industrial.hero.subtitle': 'اكتشف مجموعة واسعة من العقارات الصناعية المتطورة والمصممة لاحتياجات الأعمال الحديثة.',
    'industrial.search.location': 'أدخل الموقع',
    'industrial.search.propertyType': 'نوع العقار',
    'industrial.search.size': 'المساحة (قدم مربع)',
    'industrial.search.button': 'البحث في العقارات',
    'industrial.property.startingFrom': 'تبدأ من',
    
    // Industrial Property Listings
    'industrial.properties.abreCaterpillar.title': 'مستودع كاتربيلر',
    'industrial.properties.abreCaterpillar.type': 'مستودع',
    'industrial.properties.abreCaterpillar.location': 'الشارقة',
    'industrial.properties.abreCaterpillar.price': '2,500,000 درهم',
    
    'industrial.properties.abreIbfi.title': 'مستودع IBFI',
    'industrial.properties.abreIbfi.type': 'مستودع',
    'industrial.properties.abreIbfi.location': 'دبي',
    'industrial.properties.abreIbfi.price': '3,200,000 درهم',
    
    'industrial.properties.abreGeco.title': 'مستودع جيكو',
    'industrial.properties.abreGeco.type': 'مستودع',
    'industrial.properties.abreGeco.location': 'أبوظبي',
    'industrial.properties.abreGeco.price': '2,800,000 درهم',
    
    'industrial.properties.abreShowrooms.title': 'صالات عرض البطحاء',
    'industrial.properties.abreShowrooms.type': 'صالة عرض',
    'industrial.properties.abreShowrooms.location': 'الشارقة',
    'industrial.properties.abreShowrooms.price': '1,900,000 درهم',
    
    'industrial.properties.abreKizad.title': 'مستودع كيزاد',
    'industrial.properties.abreKizad.type': 'مستودع',
    'industrial.properties.abreKizad.location': 'أبوظبي',
    'industrial.properties.abreKizad.price': '4,500,000 درهم',
    
    'industrial.properties.abreSajaa.title': 'مستودع سجى',
    'industrial.properties.abreSajaa.type': 'مستودع',
    'industrial.properties.abreSajaa.location': 'الشارقة',
    'industrial.properties.abreSajaa.price': '2,100,000 درهم',
    
    // Special Projects
    'specialProjects.hero.title': 'المشاريع الخاصة',
    'specialProjects.hero.subtitle': 'اكتشف مشاريعنا الفريدة والمبتكرة التي تعكس رؤيتنا للمستقبل.',
    'specialProjects.search.location': 'الموقع',
    'specialProjects.search.selectLocation': 'اختر الموقع',
    'specialProjects.search.projectType': 'نوع المشروع',
    'specialProjects.search.selectType': 'اختر النوع',
    'specialProjects.search.sizeRange': 'نطاق المساحة',
    'specialProjects.search.selectSize': 'اختر المساحة',
    'specialProjects.search.button': 'البحث في المشاريع',
    'specialProjects.section.title': 'مشاريعنا المميزة',
    'specialProjects.property.startingFrom': 'تبدأ من',
    
    // Special Project Listings
    'specialProjects.projects.smartCity.title': 'المدينة الذكية',
    'specialProjects.projects.smartCity.location': 'دبي',
    'specialProjects.projects.smartCity.type': 'مختلط الاستخدام',
    'specialProjects.projects.smartCity.size': '5 مليون قدم مربع',
    'specialProjects.projects.smartCity.price': '15,000,000 درهم',
    
    'specialProjects.projects.heritage.title': 'مشروع التراث',
    'specialProjects.projects.heritage.location': 'الشارقة',
    'specialProjects.projects.heritage.type': 'ثقافي',
    'specialProjects.projects.heritage.size': '2 مليون قدم مربع',
    'specialProjects.projects.heritage.price': '8,500,000 درهم',
    
    'specialProjects.projects.greenEnergy.title': 'مشروع الطاقة الخضراء',
    'specialProjects.projects.greenEnergy.location': 'أبوظبي',
    'specialProjects.projects.greenEnergy.type': 'ابتكار',
    'specialProjects.projects.greenEnergy.size': '3 مليون قدم مربع',
    'specialProjects.projects.greenEnergy.price': '12,000,000 درهم',
    
    'specialProjects.projects.floatingResort.title': 'منتجع عائم',
    'specialProjects.projects.floatingResort.location': 'دبي',
    'specialProjects.projects.floatingResort.type': 'فاخر',
    'specialProjects.projects.floatingResort.size': '1.5 مليون قدم مربع',
    'specialProjects.projects.floatingResort.price': '25,000,000 درهم',
    'residential.properties.alWaha.bedrooms': '5 غرف نوم',
    'residential.properties.alWaha.location': 'أبو ظبي',
    'residential.properties.alWaha.price': '2,200,000 درهم',
    
    'residential.properties.fourVillas.title': 'مجمع الفيلات الأربع',
    'residential.properties.fourVillas.bedrooms': '4 غرف نوم',
    'residential.properties.fourVillas.location': 'الشارقة',
    'residential.properties.fourVillas.price': '1,800,000 درهم',
    
    'residential.properties.sheikhaFatma.title': 'مبنى الشيخة فاطمة',
    'residential.properties.sheikhaFatma.bedrooms': '1 غرفة نوم',
    'residential.properties.sheikhaFatma.location': 'الشارقة',
    'residential.properties.sheikhaFatma.price': '450,000 درهم',
    
    'residential.properties.rollaBuilding.title': 'مبنى الرولة',
    'residential.properties.rollaBuilding.bedrooms': '2 غرف نوم',
    'residential.properties.rollaBuilding.location': 'الشارقة',
    'residential.properties.rollaBuilding.price': '650,000 درهم',
    
    'residential.properties.villa274.title': 'فيلا 274',
    'residential.properties.villa274.bedrooms': '3 غرف نوم',
    'residential.properties.villa274.location': 'الشارقة',
    'residential.properties.villa274.price': '950,000 درهم',
    
    'residential.properties.threeShargan.title': 'فيلات الشرقان الثلاث',
    'residential.properties.threeShargan.bedrooms': '4 غرف نوم',
    'residential.properties.threeShargan.location': 'الشارقة',
    'residential.properties.threeShargan.price': '1,100,000 درهم',
    
    'residential.properties.villa276.title': 'فيلا 276',
    'residential.properties.villa276.bedrooms': '3 غرف نوم',
    'residential.properties.villa276.location': 'الشارقة',
    'residential.properties.villa276.price': '900,000 درهم',
    
    // Commercial Properties
    'commercial.hero.title': 'العقارات التجارية',
    'commercial.hero.subtitle': 'استكشف مساحاتنا التجارية المميزة المصممة لنجاح الأعمال.',
    'commercial.search.location': 'أدخل الموقع',
    'commercial.search.propertyType': 'نوع العقار',
    'commercial.search.size': 'مساحة العقار (قدم مربع)',
    'commercial.search.button': 'البحث في العقارات',
    'commercial.property.startingFrom': 'تبدأ من',
    
    // Commercial Property Listings
    'commercial.properties.albathaAgmc.title': 'البطحاء AGMC',
    'commercial.properties.albathaAgmc.type': 'مبنى مكتبي',
    'commercial.properties.albathaAgmc.location': 'الشارقة',
    'commercial.properties.albathaAgmc.price': '2,500,000 درهم',
    
    'commercial.properties.albathaAkai.title': 'البطحاء AKAI',
    'commercial.properties.albathaAkai.type': 'مساحة تجارية',
    'commercial.properties.albathaAkai.location': 'الشارقة',
    'commercial.properties.albathaAkai.price': '1,800,000 درهم',
    
    'commercial.properties.albathaTower.title': 'برج البطحاء',
    'commercial.properties.albathaTower.type': 'برج مكتبي',
    'commercial.properties.albathaTower.location': 'دبي',
    'commercial.properties.albathaTower.price': '5,000,000 درهم',
    
    'commercial.properties.abreIbo.title': 'ABRE IBO',
    'commercial.properties.abreIbo.type': 'مساحة مكتبية',
    'commercial.properties.abreIbo.location': 'الشارقة',
    'commercial.properties.abreIbo.price': '1,200,000 درهم',
    
    'commercial.properties.abreMpcAirport.title': 'ABRE MPC المطار',
    'commercial.properties.abreMpcAirport.type': 'مجمع مكتبي',
    'commercial.properties.abreMpcAirport.location': 'الشارقة',
    'commercial.properties.abreMpcAirport.price': '3,500,000 درهم',
    
    'commercial.properties.abreMpcHealthcare.title': 'ABRE MPC الرعاية الصحية',
    'commercial.properties.abreMpcHealthcare.type': 'مركز طبي',
    'commercial.properties.abreMpcHealthcare.location': 'الشارقة',
    'commercial.properties.abreMpcHealthcare.price': '2,800,000 درهم',
    
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
    'joudTower.welcomeTo': 'مرحباً بك في',
    'joudTower.luxuryRedefined': 'الفخامة المُعاد تعريفها',
    
    // Liwan Renders Page
    'liwanRenders.hero.title': 'ليوان ريندرز',
    'liwanRenders.hero.subtitle': 'الفخامة المعاد تعريفها',
    'liwanRenders.hero.description': 'اختبر قمة العيش الفاخر مع ليوان ريندرز، حيث يتم صياغة كل تفصيل إلى الكمال وكل لحظة مصممة لراحتك ورضاك.',
    'liwanRenders.lavish.title': 'فاخر.<br />مبهر.<br />رائع.',
    'liwanRenders.lavish.description': 'يمثل ليوان ريندرز قمة العيش الفاخر في قلب المدينة. يقدم هذا البرج السكني المذهل راحة لا مثيل لها ومرافق حديثة وإطلالات خلابة على الأفق. مصمم بعناية فائقة، يجمع ليوان ريندرز بين العمارة المعاصرة واللمسات المميزة لخلق تجربة معيشة استثنائية للسكان المميزين.',
    'liwanRenders.specification.title': 'مواصفات ليوان ريندرز',
    'liwanRenders.specification.storeys': 'عدد الطوابق: 55',
    'liwanRenders.specification.basement': '1 قبو + الطابق الأرضي + 5 مستويات منصة للوقوف والخدمات',
    'liwanRenders.specification.residential': '48 طابق سكني في أعلى نقطة',
    'liwanRenders.specification.apartmentTypes': 'أنواع الشقق:',
    'liwanRenders.specification.apartments.2bed': 'غرفتين نوم',
    'liwanRenders.specification.apartments.3bed': '3 غرف نوم',
    'liwanRenders.specification.apartments.3bedGarden': '3 غرف نوم + حديقة خاصة في مستوى المنصة.',
    'liwanRenders.specification.apartments.4bed': '4 غرف نوم',
    'liwanRenders.specification.apartments.4bedGarden': '4 غرف نوم + حديقة خاصة في مستوى المنصة.',
    'liwanRenders.specification.apartments.4bedDuplex': '4 غرف نوم دوبلكس من الطابق 45 فما فوق (سكاي فيلا).',
    'liwanRenders.specification.apartments.penthouse': 'بنتهاوس: 5 غرف نوم، مخصص مع مسبح خاص.',
    'liwanRenders.amenities.title': 'المرافق',
    'liwanRenders.amenities.gym': 'صالة رياضية وظيفية',
    'liwanRenders.amenities.sauna': 'ساونا',
    'liwanRenders.amenities.pool': 'مسبح',
    'liwanRenders.amenities.padel': 'ملعب بادل',
    'liwanRenders.amenities.running': 'مسار للجري',
    'liwanRenders.amenities.bbq': 'منطقة شواء',
    'liwanRenders.amenities.kids': 'منطقة لعب للأطفال',
    'liwanRenders.amenities.hall': 'قاعة متعددة الأغراض',
    'liwanRenders.amenities.cafe': 'مقهى',
    'liwanRenders.amenities.prayer': 'غرفة صلاة',
    'liwanRenders.amenities.kindergarten': 'روضة أطفال',
    'liwanRenders.amenities.retail': 'متجر تجاري',
    'liwanRenders.features.title': 'ميزات أخرى',
    'liwanRenders.features.delivery': 'خدمة كونسيرج على مدار الساعة',
    'liwanRenders.features.concierge': 'تسليم وإدارة الطرود',
    'liwanRenders.features.access': 'تحكم ذكي في الوصول',
    'liwanRenders.features.booking': 'نظام حجز المرافق',
    'liwanRenders.features.maintenance': 'خدمات الصيانة',
    'liwanRenders.features.description': 'يقدم ليوان ريندرز مجموعة شاملة من الخدمات والميزات المصممة لتعزيز تجربة معيشتك. من خدمات الكونسيرج على مدار الساعة إلى تقنية المنزل الذكي، كل جانب من جوانب حياتك اليومية يتم النظر فيه بعناية والاهتمام به.',
    'liwanRenders.views.title': 'استمتع بإطلالات<br />لا مثيل لها',
    'liwanRenders.views.description': 'استيقظ على إطلالات بانورامية خلابة لأفق المدينة وما وراءها. كل شقة موضوعة استراتيجياً لتعظيم الضوء الطبيعي وتوفير مناظر خلابة تتغير مع الوقت والفصول.',
    'liwanRenders.sanctuary.title': 'ملاذك للسلام والراحة',
    'liwanRenders.sanctuary.description': 'ادخل إلى ملاذك الخاص حيث تلتقي الفخامة بالراحة. كل مساحة مصممة بعناية لتوفير التوازن المثالي بين الاسترخاء والوظائف، مما يخلق بيئة يمكنك فيها الاسترخاء حقاً وإعادة الشحن.',
    'liwanRenders.feast.title': 'وليمة لل<br />الحواس',
    'liwanRenders.feast.description': 'استمتع بالتميز الطهوي مع مرافق مطبخ متطورة وأجهزة مميزة. سواء كنت تستضيف عشاءات حميمة أو تحضر وجبات عائلية، مطبخك يصبح قلب منزلك.',
    'liwanRenders.perspective.title': 'منظور<br />ثمين',
    'liwanRenders.perspective.description': 'اختبر العالم من منظور جديد مع نوافذ من الأرض إلى السقف وشرفات خاصة توفر إطلالات غير مقطوعة على المدينة أدناه. كل لحظة تقضيها في منزلك تصبح احتفالاً بالاستثنائي.',
    'liwanRenders.aesthetic.title': 'جمالي.<br />رائع.<br />مثالي.',
    'liwanRenders.aesthetic.description': 'اكتشف الانسجام المثالي بين الشكل والوظيفة في كل ركن من منزلك. من المساحات المعيشية الأنيقة إلى الشرفات الخاصة الهادئة، كل منطقة مصممة للإلهام والإعجاب.',
    'liwanRenders.elegance.title': 'أناقة.<br />أسلوب.<br />رقة.',
    'liwanRenders.elegance.description': 'كل تفصيل تم النظر فيه بعناية لخلق مساحات جميلة وعملية. من اللمسات الرخامية الأنيقة إلى تصميم الإضاءة المتطور، كل عنصر يساهم في جو من الفخامة المكررة التي تجعل كل يوم مميزاً.',
    
    // Our Company Page
    'about.hero.title': 'حول عقارات البطحاء',
    'about.hero.subtitle': 'نبني الأحلام، نخلق المجتمعات',
    
    'about.story.title': 'قصتنا',
    'about.story.description1': 'تتمتع عقارات البطحاء بموقع ريادي في سوق العقارات الإماراتي لأكثر من عقدين من الزمان، حيث نقدم عقارات سكنية وتجارية استثنائية تعيد تعريف العيش العصري. بدأت رحلتنا برؤية بسيطة لكنها قوية: خلق مساحات تلهم، ومجتمعات تزدهر، ومنازل تصبح أساس الذكريات العزيزة.',
    'about.story.description2': 'من بداياتنا المتواضعة إلى أن أصبحنا أحد أكثر الأسماء الموثوقة في مجال العقارات، ركزنا باستمرار على الجودة والابتكار ورضا العملاء. كل مشروع نقوم به يعكس التزامنا بالتميز وفهمنا العميق لما يجعل المكان مميزاً حقاً.',
    
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'أن نكون المطور العقاري الرائد في دولة الإمارات العربية المتحدة، معروفين بإنشاء مشاريع مستدامة ومبتكرة ومركزة على المجتمع تعزز جودة الحياة لسكاننا وتساهم إيجابياً في المشهد الحضري.',
    
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نحن ملتزمون بتقديم حلول عقارية استثنائية تتجاوز التوقعات، وتعزز الروابط المجتمعية، وتخلق قيمة دائمة لعملائنا وشركائنا والمجتمعات التي نخدمها. من خلال التصميم المبتكر والممارسات المستدامة والتفاني الثابت في الجودة، نبني أكثر من مجرد عقارات – نبني المستقبل.',
    
    // Al-Abir Page
    'alAbir.hero.title': 'الأبر للاستشارات الهندسية',
    'alAbir.hero.description': 'تأسست الأبر للاستشارات والهندسة في عام 1983 كشركة تصميم وهندسة شاملة الخدمات، تقدم حلول مدنية ومعمارية وميكانيكية لتلبية الاحتياجات المتنوعة لمجموعة البطحاء وتنفيذ مجموعة واسعة من المشاريع عالمية المستوى.',
    
    'alAbir.business.title': 'أعمالنا',
    'alAbir.business.description': 'على مر السنين، نمت الأبر لتصبح شركة استشارات تصميم وهندسة مدنية ومعمارية وMEPF كاملة القدرات قادرة على تسليم مشاريع ممتازة. مع سنوات من الخبرة في القوانين المحلية ولوائح السلطات، تتبع الأبر معايير البناء الدولية وأفضل الممارسات الهندسية، مما يضمن تسليم المشاريع في الوقت المحدد ضمن الميزانية.',
    
    'alAbir.services.title': 'خدماتنا',
    'alAbir.services.list': [
      'إعداد التصاميم والرسومات الأولية بالتنسيق مع المستخدمين النهائيين والشركات المصنعة والموردين.',
      'ضمان أن التصاميم اقتصادية وصديقة للبيئة وتوفر الطاقة ومواكبة أحدث التقنيات.',
      'تقديم الرسومات النهائية للسلطات المحلية والتنسيق التفاعلي للحصول على الموافقات.',
      'إعداد حزم المناقصات التي تشمل مواصفات المشروع وفقاً للقوانين المحلية والمعايير الدولية وقائمة الكميات.',
      'إعداد تحليل التكلفة للمناقصات المقدمة.',
      'إدارة المشاريع وفقاً لاتفاقيات FIDIC والعقود.',
      'الإشراف على اختبار وتشغيل المعدات المثبتة.',
      'ضمان إعداد الرسومات كما تم تركيبها وأدلة التشغيل والصيانة.',
      'ضمان الحصول على شهادات عدم ممانعة السلطات المحلية وشهادات إتمام البناء.',
      'تسليم المشروع المكتمل.',
      'تقديم المساعدة التقنية المستمرة عند الحاجة بعد تسليم المشاريع.'
    ],
    
    // Tawazun Construction Page
    'tawazun.hero.title': 'توازن للإنشاءات',
    'tawazun.hero.description': 'تأسست توازن للإنشاءات في عام 2008، مع التركيز الأساسي على الإنشاءات المدنية. فريقها يتكون من مهندسين مدنيين مؤهلين تأهيلاً عالياً مع دعم مكتب خلفي كامل القدرات',
    
    'tawazun.about.title': 'أعمالنا',
    'tawazun.about.description1': 'مدفوعة بالتميز والديناميكية، تهدف توازن إلى أن تكون الخيار المفضل للمشاريع عالية الجودة والتسليم في الوقت المحدد والخدمات المضافة. نركز على الابتكار واستخدام أحدث الطرق والمواد لتعزيز الإنتاجية والفعالية من حيث التكلفة. هذا مكمل بالتطوير المستمر لكفاءات الموظفين والسعي لتحقيق سجل سلامة رائد في الصناعة.',
    'tawazun.about.description2': 'توازن ملتزمة أيضاً بمسؤولياتها البيئية والتخفيف من الآثار الناشئة عن أنشطتها. يشمل هذا استخدام أحدث تقنيات الخرسانة الصديقة للبيئة والامتثال للمعايير البيئية.',
    
    'tawazun.expertise.title': 'خبرة توازن',
    'tawazun.expertise.description': 'توازن تنفذ مشاريع رئيسية، بما في ذلك الفلل والمساجد ومعارض السيارات في مواقع مختلفة في الإمارات',
  
  },
};




export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    // @ts-expect-error - Complex type inference issue with dynamic key access
    const translation = translations[language][key];
    return (typeof translation === 'string' ? translation : key);
  };

  const tArray = (key: string): string[] => {
    // @ts-expect-error - Complex type inference issue with dynamic key access
    const translation = translations[language][key];
    return Array.isArray(translation) ? translation : [];
  };

  const tFAQ = (key: string): Array<{question: string, answer: string}> => {
    // @ts-expect-error - Complex type inference issue with dynamic key access
    const translation = translations[language][key];
    return Array.isArray(translation) && translation.length > 0 && typeof translation[0] === 'object' && 'question' in translation[0] 
      ? translation as Array<{question: string, answer: string}> 
      : [];
  };

  const isRTL = language === 'ar';
  const fontFamily = isRTL ? 'GE SS Two' : 'Univers';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, tFAQ, isRTL, fontFamily }}>
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