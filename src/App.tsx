import { Phone, Mail, MapPin, Star, Check, Shield, Sparkles, Zap, Users, Award, Clock } from 'lucide-react';

function App() {
  const treatments = [
    {
      icon: Sparkles,
      title: "Clareamento Dental",
      description: "Dentes mais brancos e brilhantes em poucas sessões"
    },
    {
      icon: Shield,
      title: "Implantes Dentários",
      description: "Solução definitiva para dentes perdidos com tecnologia avançada"
    },
    {
      icon: Check,
      title: "Ortodontia (Aparelho)",
      description: "Correção do alinhamento dental com técnicas modernas"
    },
    {
      icon: Zap,
      title: "Emergência Odontológica",
      description: "Atendimento rápido para dores e urgências dentárias"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      text: "Excelente profissional! Meu sorriso ficou perfeito após o clareamento.",
      rating: 5
    },
    {
      name: "João Silva",
      text: "Implante realizado com muito cuidado. Recomendo para todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Atendimento humanizado e resultados incríveis. Muito satisfeita!",
      rating: 5
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5541999999999"; // Substitua pelo número real
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Recupere seu <span className="text-blue-600">sorriso</span> com quem 
                <span className="text-green-600"> entende</span> de saúde bucal
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transformamos sorrisos há mais de 10 anos com tecnologia de ponta e 
                atendimento humanizado em Curitiba.
              </p>
              <button 
                onClick={() => handleWhatsAppClick("Olá! Gostaria de agendar minha avaliação gratuita.")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Agendar Avaliação Gratuita
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sorriso bonito e saudável" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                ⭐ Avaliação Grátis!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Tratamentos
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para sua saúde bucal e estética dental
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-gray-800">
                Mais de 500 sorrisos transformados em Curitiba
              </span>
            </div>
            <p className="text-xl text-gray-600">
              Veja o que nossos pacientes dizem sobre nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Anos de Experiência</div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700">Pacientes Atendidos</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-700">Satisfação dos Pacientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Profissional Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Conheça o Dr. João Silva
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>CRO 12345-PR</strong>
                </p>
                <p>
                  Mais de 10 anos de experiência em odontologia estética e funcional, 
                  especializado em implantes dentários e clareamento dental.
                </p>
                <p>
                  Formado pela Universidade Federal do Paraná, com especializações em:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Implantodontia
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Ortodontia
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Odontologia Estética
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    Próteses Dentárias
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Dr. João Silva - Dentista" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">
                Oferta Especial para Novos Pacientes!
              </h2>
              <p className="text-2xl mb-8">
                <strong>Primeira consulta de avaliação GRÁTIS</strong>
              </p>
              <p className="text-xl mb-8 opacity-90">
                + Clareamento dental com <span className="font-bold text-yellow-300">20% de desconto</span> até 31/12/2024
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <Clock className="w-6 h-6" />
                <span className="text-lg">Oferta por tempo limitado!</span>
              </div>
              <button 
                onClick={() => handleWhatsAppClick("Olá! Gostaria de aproveitar a oferta especial e agendar minha consulta gratuita.")}
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Phone className="w-6 h-6" />
                Aproveitar Oferta Agora!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Clínica Odontológica</h3>
              <p className="text-gray-300 leading-relaxed">
                Cuidando do seu sorriso com excelência, tecnologia e carinho. 
                Sua saúde bucal é nossa prioridade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>(41) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>contato@clinicasorriso.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Rua das Flores, 123 - Centro, Curitiba/PR</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Horários</h3>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
                <p className="text-green-400 font-semibold">
                  Emergências: 24h via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <button 
        onClick={() => handleWhatsAppClick("Olá! Gostaria de mais informações sobre os tratamentos.")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;