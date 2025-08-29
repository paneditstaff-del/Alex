import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Alex <span className="text-orange-500">Painters</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Las Vegas's premier painting contractor, delivering exceptional quality and 
              professional service since 2008. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Interior Painting</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Exterior Painting</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Commercial Painting</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cabinet Refinishing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Color Consultation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pressure Washing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500" />
                <span className="text-gray-300">(702) 555-PAINT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-500" />
                <span className="text-gray-300">info@alexpainters.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <div className="text-gray-300">
                  <div>Serving Las Vegas</div>
                  <div>Henderson & Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Alex Painters. All rights reserved.</p>
              <p className="mt-1">Licensed, Bonded & Insured • License #NV12345</p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                Available for New Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100 mb-2">
            <span className="font-semibold">Emergency Services Available</span> • Call (702) 555-URGENT
          </p>
          <p className="text-blue-200 text-sm">
            Serving: Las Vegas • Henderson • Summerlin • Green Valley • Paradise • Enterprise • Spring Valley
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;