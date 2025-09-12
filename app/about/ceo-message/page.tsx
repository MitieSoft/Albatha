'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import CeoAbout from "../../components/CeoAbout";
import ContactUsSection from "../../components/ContactUsSection";
import Image from 'next/image';

export default function CeoMessagePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <CeoAbout />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
