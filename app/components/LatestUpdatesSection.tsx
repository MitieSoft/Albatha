'use client';
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LatestUpdatesSection = () => {
    const { t, isRTL } = useLanguage();
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isCardsVisible, setIsCardsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger heading animation when section comes into view
                        setTimeout(() => {
                            setIsHeadingVisible(true);
                        }, 300);

                        // Trigger cards animation after heading
                        setTimeout(() => {
                            setIsCardsVisible(true);
                        }, 800);
                    } else {
                        // Reset animations when section goes out of view
                        setIsHeadingVisible(false);
                        setIsCardsVisible(false);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before section is fully in view
            }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const latestUpdates = [
        {
            id: 1,
            type: t('latestUpdates.news.type'),
            title: t('latestUpdates.news.title1'),
            description: t('latestUpdates.news.description1'),
            date: t('latestUpdates.news.date1')
        },
        {
            id: 2,
            type: t('latestUpdates.news.type'),
            title: t('latestUpdates.news.title2'),
            description: t('latestUpdates.news.description2'),
            date: t('latestUpdates.news.date2')
        },
        {
            id: 3,
            type: t('latestUpdates.news.type'),
            title: t('latestUpdates.news.title3'),
            description: t('latestUpdates.news.description3'),
            date: t('latestUpdates.news.date3')
        },
        {
            id: 4,
            type: t('latestUpdates.news.type'),
            title: t('latestUpdates.news.title4'),
            description: t('latestUpdates.news.description4'),
            date: t('latestUpdates.news.date4')
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-4 sm:gap-0">
                    {/* Left Side - Main Heading */}
                    <div className={`text-center sm:text-left transition-all duration-1500 ease-out transform ${
                        isHeadingVisible 
                            ? 'translate-x-0 opacity-100 scale-100' 
                            : '-translate-x-32 opacity-0 scale-95'
                    }`}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#661244] leading-tight">
                            {t('latestUpdates.title')}
                        </h2>
                    </div>

                    {/* Right Side - View All News Link */}
                    <div className={`transition-all duration-1500 ease-out transform ${
                        isHeadingVisible 
                            ? 'translate-x-0 opacity-100 scale-100' 
                            : 'translate-x-32 opacity-0 scale-95'
                    }`}>
                        <a 
                            className="inline-flex items-center text-[#661244] hover:text-red-500 transition-colors duration-300 font-medium text-base sm:text-lg"
                        >
                            {t('latestUpdates.viewAllNews')}
                            <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-4 w-4 sm:h-5 sm:w-5 text-red-500`} />
                        </a>
                    </div>
                </div>

                {/* News Cards Grid */}
                <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1200 ease-out transform ${
                    isCardsVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-32 opacity-0 scale-95'
                }`}>
                    {latestUpdates.map((update, index) => (
                        <div 
                            key={update.id} 
                            className={`bg-white border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-1000 ease-out hover:scale-[1.02] group transform ${
                                isCardsVisible 
                                    ? 'translate-x-0 opacity-100 scale-100' 
                                    : '-translate-x-32 opacity-0 scale-95'
                            }`}
                            style={{
                                transitionDelay: `${index * 300}ms`
                            }}
                        >
                            {/* Press Release Label */}
                            <div className="mb-3 sm:mb-4">
                                <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wide">
                                    {update.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-bold text-[#661244] mb-3 sm:mb-4 leading-tight group-hover:text-red-500 transition-colors duration-300">
                                {update.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                                {update.description}
                            </p>

                            {/* Date and Read More Link */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                                <span className="text-gray-500 text-xs sm:text-sm">
                                    {update.date}
                                </span>
                                <a 
                                    className="inline-flex items-center text-[#661244] hover:text-red-500 transition-colors duration-300 font-medium text-xs sm:text-sm group-hover:translate-x-1 transform duration-300"
                                >
                                    Read more
                                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestUpdatesSection;