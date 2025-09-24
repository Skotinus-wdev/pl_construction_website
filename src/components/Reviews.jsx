import React from 'react';

const Reviews = ({ t }) => {
  const reviews = [
    {
      id: 1,
      name: "Anna Kowalska",
      location: "Warszawa",
      rating: 5,
      text: "Dominik i jego zespół wykonali fantastyczną pracę przy wymianie dachu naszego domu. Profesjonalne podejście, terminowość i najwyższa jakość materiałów. Polecam z całego serca!",
      service: "Wymiana dachu",
      date: "2024-02-15",
      hasPhoto: true,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Marek Nowak",
      location: "Kraków", 
      rating: 5,
      text: "Kompleksowe wykonanie elewacji i ocieplenia budynku. Wszystko zgodnie z ustaleniami, w terminie i w doskonałej jakości. Bardzo profesjonalna obsługa.",
      service: "Elewacja i ocieplenie",
      date: "2024-01-20",
      hasPhoto: false,
      avatar: null
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      location: "Gdańsk",
      rating: 5,
      text: "Remont dachu po burzy - szybka reakcja, profesjonalne doradztwo i perfekcyjne wykonanie. Dziękuję za pomoc w trudnej sytuacji!",
      service: "Naprawa dachu",
      date: "2023-12-10",
      hasPhoto: true,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Piotr Zieliński",
      location: "Wrocław",
      rating: 5,
      text: "Montaż rynien i systemu odwadniającego. Solidna robota, uczciwe ceny i terminowość. Polecam każdemu, kto szuka rzetelnego dekarza.",
      service: "System rynnowy",
      date: "2023-11-25",
      hasPhoto: false,
      avatar: null
    },
    {
      id: 5,
      name: "Magdalena Lewandowska",
      location: "Poznań",
      rating: 5,
      text: "Ocieplenie komina i drobne naprawy dachowe. Bardzo dokładne wykonanie, porządek po pracy i konkurencyjne ceny. Będę polecać znajomym.",
      service: "Ocieplenie komina",
      date: "2023-10-30",
      hasPhoto: true,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 6,
      name: "Tomasz Kaczmarek",
      location: "Łódź",
      rating: 5,
      text: "Profesjonalny montaż okien dachowych. Wszystko perfekcyjnie dopasowane, szczelne i estetyczne. Bardzo zadowolony z efektu końcowego.",
      service: "Okna dachowe",
      date: "2023-09-15",
      hasPhoto: false,
      avatar: null
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('reviews.description')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.hasPhoto ? (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    review.name.charAt(0)
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">({review.rating}/5)</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>

              {/* Service & Date */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{review.service}</span>
                  <span>{new Date(review.date).toLocaleDateString('pl-PL')}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Podziel się swoją opinią
            </h3>
            <p className="text-gray-600 mb-6">
              Czy korzystałeś z naszych usług? Zostaw opinię i pomóż innym w podjęciu decyzji.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              {t('reviews.cta')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
