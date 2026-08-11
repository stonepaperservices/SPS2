import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { PortfolioGallery } from '@/components/common/PortfolioGallery';
import { portfolioCategories, portfolioGallery } from '@/lib/constants';

const PortfolioPage: React.FC = () => {
  return (
    <Layout title="Portfolio | Stone Paper Services" description="View sample pages from our portfolio of beautifully typeset books, journals, reports, and corporate documents.">
      <SectionWrapper variant="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-3">Portfolio</p>
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Recent Work
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground text-pretty">
            Browse sample pages that showcase our expertise in typography, layout, and digital publishing.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <PortfolioGallery
          categories={portfolioCategories}
          gallery={portfolioGallery}
          defaultCategory={portfolioCategories[0]}
        />
      </SectionWrapper>
    </Layout>
  );
};

export default PortfolioPage;
