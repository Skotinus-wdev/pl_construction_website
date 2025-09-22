import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Home, 
  Building, 
  Wrench, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import './App.css'
import ContactForm from './components/ContactForm'
import AnimatedCounter from './components/AnimatedCounter'

// Import images
import roofingWorkers from './assets/roofing-workers.jpg'
import roofingProject from './assets/roofing-project.jpg'
import modernFacade from './assets/modern-facade.jpg'
import constructionTeam from './assets/construction-team.jpg'
import metalTexture from './assets/metal-roof-texture.jpg'
import concreteTexture from './assets/concrete-texture.jpg'
import brickTexture from './assets/brick-texture.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Pokrycia Dachowe",
      description: "Kompleksowe wykonanie dachów z różnych materiałów: dachówka ceramiczna, blachodachówka, blachy trapezowe.",
      features: ["Montaż nowych dachów", "Remonty i naprawy", "Okna dachowe", "Systemy rynnowe"],
      texture: metalTexture
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Elewacje i Docieplenia",
      description: "Profesjonalne wykonanie elewacji wentylowanych, dociepleń budynków oraz systemów fasadowych.",
      features: ["Elewacje wentylowane", "Docieplenia budynków", "Systemy ETICS", "Tynki dekoracyjne"],
      texture: brickTexture
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Usługi Specjalistyczne",
      description: "Dodatkowe usługi budowlane: konstrukcje stalowe, izolacje, konserwacje i przeglądy techniczne.",
      features: ["Konstrukcje stalowe", "Izolacje", "Konserwacje", "Przeglądy techniczne"],
      texture: concreteTexture
    }
  ]

  const portfolio = [
    {
      title: "Nowoczesny Kompleks Biurowy",
      category: "Elewacje",
      image: modernFacade,
      description: "Realizacja elewacji wentylowanej z paneli HPL"
    },
    {
      title: "Dom Jednorodzinny",
      category: "Dachy",
      image: roofingProject,
      description: "Pokrycie dachowe z blachodachówki premium"
    },
    {
      title: "Centrum Handlowe",
      category: "Kompleksowo",
      image: roofingWorkers,
      description: "Pełna realizacja dachu i elewacji"
    }
  ]

  const stats = [
    { number: "500+", label: "Zrealizowanych Projektów" },
    { number: "15", label: "Lat Doświadczenia" },
    { number: "50+", label: "Zadowolonych Klientów" },
    { number: "24/7", label: "Wsparcie Techniczne" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">PolBud</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section === 'home' && 'Strona Główna'}
                  {section === 'services' && 'Usługi'}
                  {section === 'portfolio' && 'Realizacje'}
                  {section === 'about' && 'O Nas'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="glass-button"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="mobile-nav-link"
                >
                  {section === 'home' && 'Strona Główna'}
                  {section === 'services' && 'Usługi'}
                  {section === 'portfolio' && 'Realizacje'}
                  {section === 'about' && 'O Nas'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${roofingProject})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-hero-card">
            <Badge className="mb-6 glass-badge">
              Profesjonalne Usługi Budowlane
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Dachy i Elewacje
              <span className="block text-orange-400">Najwyższej Jakości</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Specjalizujemy się w kompleksowym wykonawstwie pokryć dachowych i elewacji. 
              15 lat doświadczenia, nowoczesne technologie i materiały najwyższej jakości.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="glass-button-primary"
                onClick={() => scrollToSection('contact')}
              >
                Bezpłatna Wycena
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-button-secondary"
                onClick={() => scrollToSection('portfolio')}
              >
                Zobacz Realizacje
              </Button>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass-stat-card hover-lift">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter end={stat.number} duration={2000} />
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-badge">Nasze Usługi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Kompleksowe Rozwiązania Budowlane
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług związanych z pokryciami dachowymi i elewacjami. 
              Każdy projekt realizujemy z najwyższą starannością i dbałością o detale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`glass-service-card group hover-lift ${index === 0 ? 'metal-texture' : index === 1 ? 'brick-texture' : 'concrete-texture'} texture-overlay`}>
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white service-icon"
                    style={{ 
                      backgroundImage: `url(${service.texture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="bg-gradient-to-br from-blue-600/90 to-orange-500/90 w-full h-full rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-badge">Nasze Realizacje</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Projekty, Którymi Się Szczycimy
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Każdy projekt to dla nas wyzwanie i możliwość pokazania naszych umiejętności. 
              Zobacz wybrane realizacje z naszego portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="glass-portfolio-card group overflow-hidden hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 glass-badge">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 glass-badge">O Nas</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                15 Lat Doświadczenia w Budownictwie
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Jesteśmy dynamicznie rozwijającą się firmą budowlaną działającą na terenie 
                całej Polski. Specjalizujemy się w usługach remontowo-budowlanych dla 
                spółdzielni mieszkaniowych oraz klientów indywidualnych.
              </p>
              <p className="text-slate-600 mb-8">
                Nasze doświadczenie w tej branży sięga początków pracy zawodowej właściciela firmy, 
                który od prawie 20 lat dzieli się swoją pasją i wiedzą poprzez doradztwo przy 
                budowie domów i wykonywaniu pokryć dachowych.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-feature-card">
                  <Star className="w-8 h-8 text-orange-500 mb-2" />
                  <h4 className="font-semibold text-slate-800">Jakość</h4>
                  <p className="text-sm text-slate-600">Materiały najwyższej jakości</p>
                </div>
                <div className="glass-feature-card">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                  <h4 className="font-semibold text-slate-800">Gwarancja</h4>
                  <p className="text-sm text-slate-600">Do 50 lat gwarancji</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="glass-button-primary"
                onClick={() => scrollToSection('contact')}
              >
                Skontaktuj się z nami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="glass-image-card">
                <img 
                  src={constructionTeam} 
                  alt="Nasz zespół" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-badge-dark">Kontakt</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami już dziś. 
              Odpowiemy na wszystkie Twoje pytania i przygotujemy bezpłatną wycenę.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass-contact-card">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Telefon</h3>
                <p className="text-slate-300 mb-4">Zadzwoń do nas</p>
                <a href="tel:+48123456789" className="text-blue-400 hover:text-blue-300 font-semibold">
                  +48 123 456 789
                </a>
              </CardContent>
            </Card>

            <Card className="glass-contact-card">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-slate-300 mb-4">Napisz do nas</p>
                <a href="mailto:kontakt@polbud.pl" className="text-orange-400 hover:text-orange-300 font-semibold">
                  kontakt@polbud.pl
                </a>
              </CardContent>
            </Card>

            <Card className="glass-contact-card">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Adres</h3>
                <p className="text-slate-300 mb-4">Odwiedź nas</p>
                <p className="text-green-400 font-semibold">
                  ul. Budowlana 123<br />
                  00-001 Warszawa
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">PolBud</span>
              </div>
              <p className="text-slate-400">
                Profesjonalne usługi budowlane. Dachy i elewacje najwyższej jakości.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Usługi</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Pokrycia Dachowe</li>
                <li>Elewacje</li>
                <li>Docieplenia</li>
                <li>Konstrukcje Stalowe</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Firma</h4>
              <ul className="space-y-2 text-slate-400">
                <li>O Nas</li>
                <li>Realizacje</li>
                <li>Kontakt</li>
                <li>Kariera</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+48 123 456 789</li>
                <li>kontakt@polbud.pl</li>
                <li>ul. Budowlana 123</li>
                <li>00-001 Warszawa</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 PolBud. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
