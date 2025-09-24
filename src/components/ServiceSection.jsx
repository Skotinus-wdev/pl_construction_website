import React from 'react';

const ServiceSection = ({ 
  title, 
  description, 
  items, 
  backgroundImage, 
  reverse = false,
  icon 
}) => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-3 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content Side */}
          <div className={`lg:col-span-1 ${reverse ? 'lg:col-start-3' : ''}`}>
            <div className="glass-service-card p-8 rounded-3xl">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  {icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {description}
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="glass-button-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Bezpłatna Wycena
                </button>
                <button className="glass-button-secondary px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Skontaktuj się z nami
                </button>
              </div>
            </div>
          </div>

          {/* Image Placeholder Side */}
          <div className={`lg:col-span-2 ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="h-96 lg:h-[600px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Service Image</p>
                <p className="text-sm opacity-75">2/3 page width</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
