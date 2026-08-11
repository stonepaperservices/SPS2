import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { industries } from '@/lib/constants';

export const Industries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="industries" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Industries</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Publishing Solutions by Industry
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          Specialized workflows and expertise tailored to the standards of each field.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div
              key={industry.title}
              className="group relative flex flex-row items-start gap-3 rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:shadow-hover hover:-translate-y-1 md:flex-col md:items-stretch md:gap-0 md:p-6"
            >
              <div className="shrink-0 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:mb-5">
                <Icon className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-poppins text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{industry.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty mb-3 md:mb-5">{industry.description}</p>
                <Button
                  variant="ghost"
                  onClick={() => navigate('/industries')}
                  className="justify-start px-0 h-auto text-primary hover:text-primary hover:bg-transparent font-medium"
                >
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <Button
          size="lg"
          onClick={() => navigate('/industries')}
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base"
        >
          Explore Industries
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
