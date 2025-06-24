
import React from 'react';
import { Users, Crown, Megaphone } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: <Users size={48} />,
      title: "Political Representation",
      description: "Women now hold 26% of parliamentary seats worldwide, up from just 11% in 1995.",
      stat: "26%"
    },
    {
      icon: <Crown size={48} />,
      title: "Leadership Roles",
      description: "Female CEOs in Fortune 500 companies have increased, though we still fight for equality.",
      stat: "8.2%"
    },
    {
      icon: <Megaphone size={48} />,
      title: "Educational Achievement",
      description: "Women now earn 60% of college degrees and are leading in many professional fields.",
      stat: "60%"
    }
  ];

  return (
    <section className="py-20 bg-royal-purple text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            The Power of Progress
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Every right won, every barrier broken, every voice raised creates ripples 
            of change that transform societies and inspire future generations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="text-center bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-empowerment-gold mb-6 flex justify-center">
                {impact.icon}
              </div>
              <div className="text-5xl font-bold mb-4 text-empowerment-gold">
                {impact.stat}
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                {impact.title}
              </h3>
              <p className="opacity-90 leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-empowerment-gold to-yellow-400 text-black p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              "The story of women's struggle for equality belongs to no single feminist nor to any one organization but to the collective efforts of all who care about human rights."
            </h3>
            <p className="text-lg font-semibold">— Gloria Steinem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
