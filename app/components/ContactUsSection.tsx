'use client';
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactUsSection = () => {
    const { t, isRTL } = useLanguage();
    const [isHeadingVisible, setIsHeadingVisible] = useState(true);
    const [isContentVisible, setIsContentVisible] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simplified - just ensure content is visible
        setIsHeadingVisible(true);
        setIsContentVisible(true);
    }, []);

    return (
        <section className="py-10 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                        {/* Left Column - Contact Us Message */}
                        <div className={`${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'} transition-all duration-1500 ease-out transform ${
                            isHeadingVisible 
                                ? 'translate-x-0 opacity-100 scale-100' 
                                : isRTL ? 'translate-x-32 opacity-0 scale-95' : '-translate-x-32 opacity-0 scale-95'
                        }`}>
                            <h2 className={`text-lg sm:text-lg md:text-xl lg:text-lg font-bold text-[#661244] leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                                {t('contactUs.title')}
                            </h2>
                            <p className={`text-lg sm:text-lg md:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                                {t('contactUs.description')}
                            </p>
                            <div className={`${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                <Button 
                                    className="bg-[#661244] hover:bg-[#551133] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                                onClick={() => window.location.href = '/contact'}>
                                    {t('contactUs.contactButton')}
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - Contact Details */}
                        <div className={`transition-all duration-1500 ease-out transform ${
                            isContentVisible 
                                ? 'translate-x-0 opacity-100 scale-100' 
                                : isRTL ? '-translate-x-32 opacity-0 scale-95' : 'translate-x-32 opacity-0 scale-95'
                        }`}>
                            <div className={`space-y-5 max-w-md mx-auto lg:mx-0 ${isRTL ? 'lg:mr-40' : 'lg:ml-40'}`}>
                                {/* Email Information */}
                                <div className={`${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                    <div className={`text-[#661244] font-bold text-lg tracking-wide ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                                        {t('contactUs.email')}
                                    </div>
                                    <a 
                                        href="mailto:customercare@albatha.ae" 
                                        className="text-gray-700 text-2xl hover:text-[#661244] transition-colors duration-300 break-all font-mono"
                                    >
                                        info@albatha.ae
                                    </a>
                                </div>

                                {/* Phone Information */}
                                <div className={`${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                    <div className={`text-[#661244] font-bold text-lg tracking-wide ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                                        {t('contactUs.phone')}
                                    </div>
                                    <div className="text-gray-700 text-2xl font-mono">
                                        800 1 8888
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;