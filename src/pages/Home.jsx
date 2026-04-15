import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import WhyChoose from '../components/WhyChoose';
import WhatWeDo from '../components/WhatWeDo';
import AISolutions from '../components/AISolutions';
import Training from '../components/Training';
import Testimonials from '../components/Testimonials';
import SolutionStack from '../components/SolutionStack';
import Results from '../components/Results';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Ecosystem />
      <WhyChoose />
      <WhatWeDo />
      <AISolutions />
      <Training />
      <SolutionStack />
      <Testimonials />
      <Results />
    </main>
  );
}

export default Home;