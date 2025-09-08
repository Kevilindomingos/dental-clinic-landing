import React from 'react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5599999999999', '_blank');
  };

  const services = [
    {
      title: "Clareamento Dental",
      description: "Dentes mais brancos e brilhantes com tecnologia avançada e segura."
    },
    {
      title: "Implantes Dentários",
      description: "Solução definitiva para substituir dentes perdidos com naturalidade."
    },
    {
      title: "Aparelhos Ortodônticos",
      description: "Correção do alinhamento dental para um sorriso perfeito."
    },
    {
      title: "Emergências",
      description: "Atendimento rápido para dores e urgências odontológicas."
    }
  ];

  const testimonials = [
    {
      name: "Maria",
      text: "Excelente profissional! Meu clareamento ficou perfeito e o atendimento foi muito cuidadoso."
    },
    {
      name: "Carlos",
      text: "Fiz meu implante com o Dr. João e o resultado superou minhas expectativas. Recomendo!"
    },
    {
      name: "Ana",
      text: "Tratamento ortodôntico impecável. Hoje tenho o sorriso que sempre sonhei ter."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sorria sem medo novamente
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Tratamentos odontológicos com tecnologia e cuidado humano
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Agendar avaliação gratuita
          </button>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Dentista Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Foto do Dentista</span>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Dr. João Silva
            </h2>
            <p className="text-blue-600 font-semibold mb-4">
              CRO: 12345
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com mais de 10 anos de experiência, já transformamos mais de 500 sorrisos em Curitiba.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            O que nossos pacientes dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Agende sua consulta agora mesmo!
          </h2>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;