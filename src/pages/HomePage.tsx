import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { WhoWeWorkWith } from '@/components/home/WhoWeWorkWith';
import { Workflow } from '@/components/home/Workflow';
import { WhyStonePaperServices } from '@/components/home/WhyStonePaperServices';
import { Portfolio } from '@/components/home/Portfolio';
import { Industries } from '@/components/home/Industries';
import { Pricing } from '@/components/home/Pricing';
import { FAQ } from '@/components/home/FAQ';
import { Contact } from '@/components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhoWeWorkWith />
      <Workflow />
      <WhyStonePaperServices />
      <Portfolio />
      <Industries />
      <Pricing />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default HomePage;
