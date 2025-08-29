import React from 'react';
import { CheckCircle, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar size={32} className="text-blue-600" />, value: "15+", label: "Years Experience" },
    { icon: <Users size={32} className="text-green-600" />, value: "2000+", label: "Happy Customers" },
    { icon: <Award size={32} className="text-purple-600" />, value: "A+", label: "BBB Rating" },
    { icon: <CheckCircle size={32} className="text-orange-600" />, value: "100%", label: "Satisfaction Rate" }
  ];

  const certifications = [
    "Licensed & Insured",
    "EPA Certified",
    "Better Business Bureau A+",
    "Sherwin-Williams Pro",
    "Benjamin Moore Authorized"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Alex Painters?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Alex Painters has been Las Vegas's trusted partner for premium painting services. 
              We combine traditional craftsmanship with modern techniques to deliver results that stand the test of time.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Expert color consultation and design guidance",
                "Premium quality paints and materials from top brands",
                "Meticulous surface preparation for lasting results",
                "Clean, professional work environment",
                "Comprehensive warranty on all work",
                "Local Las Vegas team with deep community knowledge"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={24} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-blue-50 text-blue-900 px-4 py-2 rounded-lg text-center text-sm font-medium">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
              <p className="text-blue-100 leading-relaxed">
                "We don't just paint walls – we transform spaces and exceed expectations. Every project receives our 
                full attention to detail, from initial consultation to final walk-through. Your satisfaction is our guarantee."
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                  alt="Alex Castañeda" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Alex Castañeda</div>
                  <div className="text-blue-200">Founder & Master Painter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;