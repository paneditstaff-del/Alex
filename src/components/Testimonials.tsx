import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Summerlin, Las Vegas",
      rating: 5,
      text: "Alex Painters transformed our entire home interior. The attention to detail and professionalism was outstanding. They completed the project on time and within budget. Highly recommend!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      location: "Henderson, NV",
      rating: 5,
      text: "We needed our office building painted quickly without disrupting business. Alex Painters worked around our schedule and delivered exceptional results. True professionals.",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      location: "Green Valley, Las Vegas",
      rating: 5,
      text: "The exterior paint job on our house looks incredible. They handled all the prep work perfectly and the paint has held up beautifully through multiple Vegas summers. Worth every penny.",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Las Vegas homeowners and business owners 
            have to say about their experience with Alex Painters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote size={32} className="text-blue-200 mb-4" />
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-blue-100 leading-relaxed">
              We stand behind every project with our comprehensive satisfaction guarantee. 
              If you're not completely happy with our work, we'll make it right – no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;