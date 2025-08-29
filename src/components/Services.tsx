import React from 'react';
import { Home, Building, Brush, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={48} className="text-blue-600" />,
      title: "Residential Interior",
      description: "Transform your home's interior with our premium paint services. From single rooms to whole-home makeovers.",
      features: ["Color consultation", "Wall preparation", "Premium paints", "Clean-up included"],
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Building size={48} className="text-green-600" />,
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant, long-lasting paint solutions.",
      features: ["Pressure washing", "Surface prep", "Weather protection", "10-year warranty"],
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Brush size={48} className="text-purple-600" />,
      title: "Commercial Painting",
      description: "Professional commercial painting services that minimize disruption while maximizing quality and efficiency.",
      features: ["Flexible scheduling", "Minimal disruption", "Fast completion", "Professional results"],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Wrench size={48} className="text-orange-600" />,
      title: "Cabinet Refinishing",
      description: "Give your kitchen a fresh new look with our expert cabinet painting and refinishing services.",
      features: ["Custom colors", "Durable finish", "Cost-effective", "Quick turnaround"],
      image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/9VJ02qgwWLQ"
              title="Alex Painters Professional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial properties, we deliver exceptional painting services 
            throughout Las Vegas with unmatched quality and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;