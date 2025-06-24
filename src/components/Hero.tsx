
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empower Her.
          <br />
          <span className="text-empowerment-gold">Empower Humanity.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Together, we rise. Together, we fight for equality, justice, and the fundamental right 
          of every woman to have her voice heard and her potential realized.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-empowerment-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
            Join the Movement
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-royal-purple transition-all duration-300 transform hover:scale-105">
            Learn Our Story
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
