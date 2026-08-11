import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { clientTypes } from '@/lib/constants';

export const WhoWeWorkWith: React.FC = () => {
  return (
    <SectionWrapper id="clients" variant="muted" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Our Clients</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Who We Work With
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          Trusted by organizations of every size, from independent authors to global institutions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {clientTypes.map((client) => {
          const Icon = client.icon;
          return (
            <div
              key={client.title}
              className="flex flex-col items-center text-center rounded-2xl bg-background border border-border p-3 md:p-6 transition-all duration-300 hover:shadow-hover"
            >
              <div className="mb-2 md:mb-4 flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-muted text-primary">
                <Icon className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h3 className="font-poppins text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{client.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-pretty">{client.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
