import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { benefits } from '@/lib/constants';

export const WhyStonePaperServices: React.FC = () => {
  return (
    <SectionWrapper id="why" variant="gradient" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Why Choose Us</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Why Stone Paper Services
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          We combine publishing expertise with modern workflows to deliver exceptional results every time.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="flex flex-col sm:flex-row items-start gap-2 md:gap-4 rounded-2xl bg-background border border-border p-3 md:p-5 transition-all duration-300 hover:shadow-hover"
            >
              <div className="shrink-0 flex h-8 w-8 md:h-11 md:w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5 md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="font-poppins text-xs md:text-base font-semibold text-foreground mb-1 leading-tight">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty">Premium service backed by clear communication and strict quality controls.</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
