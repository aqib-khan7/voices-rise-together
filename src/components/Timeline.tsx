
import React from 'react';
import { Calendar, Award } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: "1848",
      title: "Seneca Falls Convention",
      description: "The first women's rights convention in the United States, marking the beginning of the organized women's suffrage movement."
    },
    {
      year: "1893",
      title: "New Zealand Leads",
      description: "New Zealand becomes the first self-governing country to grant women the right to vote."
    },
    {
      year: "1920",
      title: "19th Amendment",
      description: "The United States Constitution is amended to guarantee women's right to vote."
    },
    {
      year: "1960s",
      title: "Second Wave Feminism",
      description: "The movement expands beyond voting rights to address workplace equality, reproductive rights, and social liberation."
    },
    {
      year: "1995",
      title: "Beijing Declaration",
      description: "The Fourth World Conference on Women establishes a global agenda for women's rights and empowerment."
    },
    {
      year: "Today",
      title: "Continuing the Fight",
      description: "Modern movements continue to address pay gaps, leadership representation, and intersectional feminism."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-purple mb-6">
            A Legacy of Progress
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From the first brave voices to today's leaders, the journey of women's empowerment 
            continues to shape our world for the better.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-royal-purple opacity-30"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-royal-purple">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={20} className="text-royal-purple" />
                    <span className="font-bold text-royal-purple text-lg">{milestone.year}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-800">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 bg-royal-purple rounded-full flex items-center justify-center shadow-lg">
                  <Award size={24} className="text-white" />
                </div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
