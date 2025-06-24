
import React from 'react';
import { User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-empowerment-gold rounded-full flex items-center justify-center">
                <User size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Voices Rise Together</h3>
                <p className="text-gray-400">Empowering women, changing the world</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We believe that when women are empowered, entire communities thrive. 
              Join us in creating a world where every woman has the opportunity to reach her full potential.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Get Involved</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-empowerment-gold transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Voices Rise Together. All rights reserved. Standing for equality, justice, and human dignity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
