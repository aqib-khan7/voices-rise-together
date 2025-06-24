
import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Impact from '../components/Impact';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
