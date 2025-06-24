
import React from 'react';
import { Hand, Vote, Check } from 'lucide-react';

const GetInvolved = () => {
  const actions = [
    {
      icon: <Vote size={32} />,
      title: "Register to Vote",
      description: "Exercise your fundamental right and make your voice heard in every election.",
      cta: "Register Now"
    },
    {
      icon: <Hand size={32} />,
      title: "Join Campaigns",
      description: "Support candidates and causes that champion women's rights and equality.",
      cta: "Find Campaigns"
    },
    {
      icon: <Check size={32} />,
      title: "Sign Petitions",
      description: "Add your name to petitions fighting for equal pay, reproductive rights, and justice.",
      cta: "View Petitions"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-purple mb-6">
            Your Voice Matters
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The fight for equality isn't over. Every action you take, every voice you raise, 
            every stand you make contributes to a more just and equal world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-crimson hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-crimson mb-6">
                {action.icon}
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">
                {action.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {action.description}
              </p>
              <button className="w-full bg-crimson text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                {action.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-royal-purple text-white p-12 rounded-lg text-center">
          <h3 className="font-playfair text-3xl font-bold mb-6">
            Share Your Story
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Your experiences, challenges, and triumphs inspire others. Share your story 
            and become part of the collective voice for change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-empowerment-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
              Share Your Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-purple transition-all duration-300">
              Read Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
