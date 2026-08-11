import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/button';
import { industries } from '@/lib/constants';

const IndustriesPage: React.FC = () => {
  return (
    <Layout title="Industries | Stone Paper Services" description="Industry-specific publishing solutions for academic, medical, corporate, and government sectors.">
      <SectionWrapper variant="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-3">Industries</p>
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Publishing Solutions by Industry
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground text-pretty">
            We adapt our workflows, terminology, and quality controls to match the standards of your sector.
          </p>
          <p className="mt-4 text-sm font-medium text-primary text-balance">
            <MessageCircle className="inline h-4 w-4 mr-1.5 align-text-bottom shrink-0" />
            <Link to="/contact" className="hover:underline">
              Have a project in mind? Tell us your goals and get a tailored quote.
            </Link>
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="group relative flex flex-row items-start gap-3 rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:shadow-hover md:flex-col md:items-stretch md:gap-0 md:p-6">
                <div className="shrink-0 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:mb-4">
                  <Icon className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-poppins text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">{industry.title}</h2>
                  <p className="text-xs md:text-sm text-muted-foreground text-pretty mb-3 md:mb-6">{industry.description}</p>
                  <div className="space-y-2 mb-4 md:mb-6">
                    {industry.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-full h-8 md:h-10 text-xs md:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 md:bg-background md:text-foreground md:border md:border-border md:hover:bg-muted">
                    <Link to="/contact" data-href="/contact">{industry.cta} <ArrowRight className="ml-1.5 md:ml-2 h-3 w-3 md:h-4 md:w-4" data-href="/contact" /></Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default IndustriesPage;
