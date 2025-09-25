import React, { useState } from 'react';
import './App.css';

// Import images
import heroBg from './assets/hero-bg.jpg';
import constructionTeam from './assets/construction-team.jpg';
import modernFacade from './assets/modern-facade.jpg';
import roofingProject from './assets/roofing-project.jpg';
import roofCrossSection from './assets/roof_cross_section.png';
import roofDrainage from './assets/roof_drainage.jpg';
import drainageScTr from './assets/drainage_sc_tr.png';
import sidingSchemeTp from './assets/siding_scheme_tp.png';
import roofScheme from './assets/roof_scheme.png';
import chimneyBg from './assets/chimney_bg.png';
import chimneyScheme from './assets/chimney_scheme.png';
import extraServicesTr from './assets/extra_services_tr.png';

// Import components
import LanguageSwitcher from './components/LanguageSwitcher';
import ServiceSection from './components/ServiceSection';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

// Import translations
import { useTranslation } from './translations';

function App() {
  const [language, setLanguage] = useState('pl');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(language);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Service icons
  const roofingIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );

  const drainageIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
    </svg>
  );

  const sidingIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  );

  const chimneyIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
  );

  const additionalIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">TWÓJ DEKARZ</div>
                <div className="text-xs text-gray-300">Dominik Gołębiowski</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.reviews')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.contact')}
              </button>
              
              {/* Language Switcher */}
              <LanguageSwitcher 
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher 
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.portfolio')}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.about')}
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.reviews')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{minHeight: 'calc(100vh + 2rem)'}}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
        </div>   
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-hero-card">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
              {t('hero.title')}
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-8">
              {t('hero.subtitle')}
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="text-2xl font-bold text-orange-400 mb-8">
              {t('hero.phone')}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="glass-button-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('hero.cta1')} →
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="glass-button-secondary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('hero.cta2')}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="absolute bottom-2 sm:bottom-6 left-4 right-4 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="glass-stats-card text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Zrealizowanych Projektów</div>
              </div>
              <div className="glass-stats-card text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15</div>
                <div className="text-xs sm:text-sm text-gray-300">Lat Doświadczenia</div>
              </div>
              <div className="glass-stats-card text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-300">Zadowolonych Klientów</div>
              </div>
              <div className="glass-stats-card text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Wsparcie Techniczne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div id="services">
        <ServiceSection
          title={t('services.roofing.title')}
          description={t('services.roofing.description')}
          items={t('services.roofing.items')}
          backgroundColor="#64748B"
          icon={roofingIcon}
          reverse={false}
          imageSrc={roofScheme}
          customHeight="h-[500px] lg:h-[800px]"
        />

        <ServiceSection
          title={t('services.drainage.title')}
          description={t('services.drainage.description')}
          items={t('services.drainage.items')}
          backgroundImage={roofDrainage}
          icon={drainageIcon}
          reverse={true}
          imageSrc={drainageScTr}
        />

        <ServiceSection
          title={t('services.siding.title')}
          description={t('services.siding.description')}
          items={t('services.siding.items')}
          backgroundColor="#64748B"
          icon={sidingIcon}
          reverse={false}
          imageSrc={sidingSchemeTp}
          customHeight="h-[500px] lg:h-[700px]"
        />

        <ServiceSection
          title={t('services.chimney.title')}
          description={t('services.chimney.description')}
          items={t('services.chimney.items')}
          backgroundImage={chimneyBg}
          icon={chimneyIcon}
          reverse={true}
          imageSrc={chimneyScheme}
          customHeight="h-[500px] lg:h-[700px]"
        />

        <ServiceSection
          title={t('services.additional.title')}
          description={t('services.additional.description')}
          items={t('services.additional.items')}
          backgroundColor="#64748B"
          icon={additionalIcon}
          reverse={false}
          imageSrc={extraServicesTr}
          customHeight="h-[500px] lg:h-[700px]"
        />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <Portfolio t={t} />
      </div>

      {/* About Section */}
      <div id="about">
        <About t={t} />
      </div>

      {/* Reviews Section */}
      <div id="reviews">
        <Reviews t={t} />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm t={t} />
      </div>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}

export default App;
