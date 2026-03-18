import React from 'react';
import { Layout } from './components/layout/Layout';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { ProblemStatement } from './components/sections/ProblemStatement';
import { TargetAudience } from './components/sections/TargetAudience';
import { NotForYou } from './components/sections/NotForYou';
import { ConsultationProcess } from './components/sections/ConsultationProcess';
import { AboutCoach } from './components/sections/AboutCoach';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <ProblemStatement />
      <TargetAudience />
      <NotForYou />
      <ConsultationProcess />
      <AboutCoach />
      <FAQ />
      <FinalCTA />
      <Footer />
    </Layout>
  );
};

export default App;
