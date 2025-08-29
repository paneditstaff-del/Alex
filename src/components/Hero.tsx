import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Painting Services in 
              <span className="text-orange-400 block">Las Vegas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your space with expert craftsmanship, quality materials, and exceptional service that exceeds expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="mx-auto mb-2 text-yellow-400" size={24} />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-green-400" size={24} />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-200">Satisfaction Guaranteed</div>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-2 text-blue-400" size={24} />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Customer Support</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote Today</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Service Type</option>
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Cabinet Refinishing</option>
                </select>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;