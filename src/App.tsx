import { Phone, Mail, MapPin, Star, Check, Shield, Sparkles, Zap, Users, Award, Clock, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const treatments = [
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Whiter and brighter teeth in just a few sessions"
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with advanced technology"
    },
    {
      icon: Check,
      title: "Orthodontics",
      description: "Teeth alignment correction with modern techniques"
    },
    {
      icon: Zap,
      title: "Dental Emergency",
      description: "Fast care for tooth pain and dental emergencies"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      text: "Excellent professional! My smile became perfect after whitening.",
      rating: 5
    },
    {
      name: "João Silva",
      text: "Implant done with great care. I recommend it to everyone!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Humanized care and incredible results. Very satisfied!",
      rating: 5
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5541999999999"; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = {
    background: isDark ? 'bg-gray-900' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-800',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    sectionBg: isDark ? 'bg-gray-800' : 'bg-gray-50',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    cardBgLight: isDark ? 'bg-gray-700' : 'bg-gray-50',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    heroGradient: isDark 
      ? 'from-gray-900 via-gray-800 to-gray-900' 
      : 'from-blue-50 via-white to-green-50'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${themeClasses.heroGradient} min-h-screen flex items-center`}>
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-5xl lg:text-6xl font-bold ${themeClasses.text} leading-tight`}>
                Get your <span className="text-blue-600">smile</span> back with those who 
                <span className="text-green-600"> understand</span> oral health
              </h1>
              <p className={`text-xl ${themeClasses.textSecondary} leading-relaxed`}>
                Transforming smiles for over 10 years with cutting-edge technology and 
                humanized care in Curitiba.
              </p>
              <button 
                onClick={() => handleWhatsAppClick("Hello! I'd like to schedule my free evaluation.")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Schedule Free Evaluation
              </button>
            </div>
            <div className="relative">
              <div className={`${themeClasses.cardBg} rounded-3xl p-8 shadow-2xl`}>
                <img 
                  src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Beautiful and healthy smile" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                ⭐ Free Evaluation!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>
              Our Treatments
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary}`}>
              Complete solutions for your oral health and dental aesthetics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <div 
                  key={index} 
                  className={`${themeClasses.cardBg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center`}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>
                    {treatment.title}
                  </h3>
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    {treatment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className={`py-20 ${themeClasses.background}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-8 h-8 text-green-500" />
              <span className={`text-2xl font-bold ${themeClasses.text}`}>
                Over 500 smiles transformed in Curitiba
              </span>
            </div>
            <p className={`text-xl ${themeClasses.textSecondary}`}>
              See what our patients say about our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${themeClasses.cardBgLight} p-6 rounded-2xl shadow-lg`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${themeClasses.textSecondary} mb-4 italic`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold ${themeClasses.text}`}>
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className={themeClasses.textSecondary}>Years of Experience</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className={themeClasses.textSecondary}>Patients Treated</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className={themeClasses.textSecondary}>Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Professional Section */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className={`text-4xl font-bold ${themeClasses.text} mb-6`}>
                Meet Dr. João Silva
              </h2>
              <div className={`space-y-4 text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                <p>
                  <strong>CRO 12345-PR</strong>
                </p>
                <p>
                  Over 10 years of experience in aesthetic and functional dentistry, 
                  specialized in dental implants and teeth whitening.
                </p>
                <p>
                  Graduated from the Federal University of Paraná, with specializations in:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Implant Dentistry
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Orthodontics
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Aesthetic Dentistry
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Dental Prostheses
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className={`${themeClasses.cardBg} rounded-3xl p-8 shadow-2xl`}>
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Dr. João Silva - Dentist" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">
                Special Offer for New Patients!
              </h2>
              <p className="text-2xl mb-8">
                <strong>First evaluation appointment FREE</strong>
              </p>
              <p className="text-xl mb-8 opacity-90">
                + Teeth whitening with <span className="font-bold text-yellow-300">20% discount</span> until 12/31/2024
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <Clock className="w-6 h-6" />
                <span className="text-lg">Limited time offer!</span>
              </div>
              <button 
                onClick={() => handleWhatsAppClick("Hello! I'd like to take advantage of the special offer and schedule my free consultation.")}
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Phone className="w-6 h-6" />
                Claim Offer Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Dental Clinic</h3>
              <p className="text-gray-300 leading-relaxed">
                Taking care of your smile with excellence, technology, and care. 
                Your oral health is our priority.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>(41) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>contact@smileclinic.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>123 Flower Street - Downtown, Curitiba/PR</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday to Friday: 8am to 6pm</p>
                <p>Saturday: 8am to 12pm</p>
                <p>Sunday: Closed</p>
                <p className="text-green-400 font-semibold">
                  Emergencies: 24h via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <button 
        onClick={() => handleWhatsAppClick("Hello! I'd like more information about the treatments.")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;