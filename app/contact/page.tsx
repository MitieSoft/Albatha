'use client';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { contactFormSchema, sanitizeInput, generateCSRFToken } from '../lib/security';

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [csrfToken, setCsrfToken] = useState<string>('');
  
  // Helper functions to get data safely
  const getSubjectOptions = (): string[] => {
    const options = t('contact.form.subjectOptions');
    return Array.isArray(options) ? options : [];
  };
  
  const getFAQQuestions = (): Array<{question: string, answer: string}> => {
    const questions = t('contact.faq.questions') as unknown;
    return Array.isArray(questions) ? (questions as Array<{question: string, answer: string}>) : [];
  };

  // Generate CSRF token on component mount
  useEffect(() => {
    setCsrfToken(generateCSRFToken());
  }, []);

  // Handle input change with sanitization
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      // Validate form data
      const validation = contactFormSchema.safeParse(formData);
      if (!validation.success) {
        const newErrors: Record<string, string> = {};
        validation.error.errors.forEach(error => {
          const field = error.path[0] as string;
          newErrors[field] = error.message;
        });
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          csrfToken: csrfToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        if (result.details) {
          const newErrors: Record<string, string> = {};
          result.details.forEach((detail: { field: string; message: string }) => {
            newErrors[detail.field] = detail.message;
          });
          setErrors(newErrors);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
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
        
        <div className="relative z-10 container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('contact.hero.title')}
            </h1>
            <p className={`text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('contact.getInTouch.title')}
              </h2>
              <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('contact.getInTouch.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phone Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.phone.title')}
                </h3>
                <p className={`text-gray-600 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.phone.number1')}
                </p>
                <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.phone.number2')}
                </p>
              </div>

              {/* Email Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.email.title')}
                </h3>
                <p className={`text-gray-600 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.email.address1')}
                </p>
                <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.email.address2')}
                </p>
              </div>

              {/* Address Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-[#661244] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.address.title')}
                </h3>
                <p className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.address.text')}
                </p>
              </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className={`text-2xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.form.title')}
                </h3>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className={`${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      Thank you for your message! We will get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className={`${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      There was an error submitting your message. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* CSRF Token */}
                  <input type="hidden" name="csrfToken" value={csrfToken} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('contact.form.firstName')}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition ${isRTL ? 'text-right' : 'text-left'} placeholder:text-gray-700`}
                        placeholder={t('contact.form.firstNamePlaceholder')}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        required
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                        {t('contact.form.lastName')}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition ${isRTL ? 'text-right' : 'text-left'} placeholder:text-gray-700`}
                        placeholder={t('contact.form.lastNamePlaceholder')}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        required
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition ${isRTL ? 'text-right' : 'text-left'} placeholder:text-gray-700`}
                      placeholder={t('contact.form.emailPlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition ${isRTL ? 'text-right' : 'text-left'} placeholder:text-gray-700`}
                      placeholder={t('contact.form.phonePlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.form.subject')}
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition ${isRTL ? 'text-right' : 'text-left'} text-gray-700`} 
                      dir={isRTL ? 'rtl' : 'ltr'}
                      required
                    >
                      <option value="" className="text-gray-700">{t('contact.form.subjectPlaceholder')}</option>
                      {getSubjectOptions().map((option, index) => (
                        <option key={index} value={option} className="text-gray-700">{option}</option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#661244] smooth-transition resize-none ${isRTL ? 'text-right' : 'text-left'} placeholder:text-gray-700`}
                      placeholder={t('contact.form.messagePlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#661244] hover:bg-[#551133]'} text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover-scale text-lg ${isRTL ? 'font-arabic' : 'font-english'}`}
                    style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}
                  >
                    {isSubmitting ? 'Submitting...' : t('contact.form.submit')}
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className={`text-2xl font-bold text-[#661244] mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                  {t('contact.location.title')}
                </h3>
                <div className="h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890!2d55.3844!3d25.3573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sAl%20Batha%20Tower%2C%20283%20Corniche%20St%20-%20Al%20Majaz%201%20-%20Al%20Majaz%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Al Batha Tower Location"
                  ></iframe>
                </div>
                
                <div className={`mt-6 space-y-4 ${isRTL ? 'space-y-reverse' : ''}`}>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className={`w-5 h-5 text-[#661244] ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.hours.monday')}
                    </span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className={`w-5 h-5 text-[#661244] ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.hours.saturday')}
                    </span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className={`w-5 h-5 text-[#661244] ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                      {t('contact.hours.sunday')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold text-[#661244] mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('contact.faq.title')}
              </h2>
              <p className={`text-lg text-gray-600 ${isRTL ? 'font-arabic' : 'font-english'}`} style={{ fontFamily: isRTL ? 'GESSTwo, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                {t('contact.faq.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
            {getFAQQuestions().map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3
                  className={`text-lg font-semibold text-[#661244] mb-2 ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}
                  style={{
                    fontFamily: isRTL
                      ? 'GESSTwo, Arial, sans-serif'
                      : 'Poppins, Arial, sans-serif'
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  className={`text-gray-600 ${
                    isRTL ? 'font-arabic' : 'font-english'
                  }`}
                  style={{
                    fontFamily: isRTL
                      ? 'GESSTwo, Arial, sans-serif'
                      : 'Poppins, Arial, sans-serif'
                  }}
                >
                  {faq.answer}
                </p>
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
