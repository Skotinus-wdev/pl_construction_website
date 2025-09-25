import React, { useState } from 'react';
import roofCrossSection from '../assets/roof_cross_section.png';
import modernFacade from '../assets/modern-facade.jpg';
import heroBg from '../assets/hero-bg.jpg';
import restoration from '../assets/restoration.png';
import industrialRoof from '../assets/industrial_roof.png';
import shoppingCFacade from '../assets/shopping_c_facade.jpg';

const Portfolio = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Villa Roofing",
      category: "roofing",
      description: "Complete roofing solution with premium metal tiles and advanced insulation system for a luxury residential property.",
      location: "Warsaw, Poland",
      year: "2024",
      area: "450",
      duration: "3 weeks",
      featured: true,
      image: roofCrossSection
    },
    {
      id: 2,
      title: "Office Building Facade",
      category: "facade", 
      description: "Contemporary facade renovation with energy-efficient cladding and modern architectural elements.",
      location: "Krakow, Poland",
      year: "2023",
      area: "1200",
      duration: "6 weeks",
      featured: true,
      image: modernFacade
    },
    {
      id: 3,
      title: "Residential Complex",
      category: "construction",
      description: "Complete construction of a multi-family residential building with sustainable materials and modern design.",
      location: "Gdansk, Poland", 
      year: "2023",
      area: "2800",
      duration: "8 months",
      featured: false,
      image: heroBg
    },
    {
      id: 4,
      title: "Historic Building Restoration",
      category: "restoration",
      description: "Careful restoration of a historic building's facade while preserving its architectural heritage.",
      location: "Poznan, Poland",
      year: "2024", 
      area: "800",
      duration: "4 months",
      featured: false,
      image: restoration
    },
    {
      id: 5,
      title: "Industrial Roof Repair",
      category: "roofing",
      description: "Large-scale industrial roofing project with waterproofing and structural reinforcement.",
      location: "Wroclaw, Poland",
      year: "2023",
      area: "3500",
      duration: "5 weeks",
      featured: false,
      image: industrialRoof
    },
    {
      id: 6,
      title: "Shopping Center Facade",
      category: "facade",
      description: "Modern commercial facade with integrated lighting and weather-resistant materials.",
      location: "Lodz, Poland",
      year: "2024",
      area: "1800",
      duration: "7 weeks",
      featured: false,
      image: shoppingCFacade
    }
  ];

  const filters = [
    { key: 'all', label: t('portfolio.filters.all') },
    { key: 'roofing', label: t('portfolio.filters.roofing') },
    { key: 'facade', label: t('portfolio.filters.facade') },
    { key: 'construction', label: t('portfolio.filters.construction') },
    { key: 'restoration', label: t('portfolio.filters.restoration') }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                {item.image && typeof item.image === 'string' && item.image.startsWith('/api/placeholder') ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-300 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-medium">Project Image</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-semibold rounded-full capitalize">
                    {item.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                {/* Project Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {item.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {item.year}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{item.area}</div>
                    <div className="text-xs text-gray-500">Area (m²)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{item.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
