import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { workflowSteps } from '@/lib/constants';

export const Workflow: React.FC = () => {
  return (
    <SectionWrapper
      id="workflow"
      className="opacity-0 intersect:opacity-100 transition-opacity duration-700"
      data-href="/portfolio"
      data-target="_blank">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Our Process</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Simple, Streamlined Workflow
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          A proven six-step process designed to deliver flawless publications on time.
        </p>
      </div>

      <div className="md:hidden grid grid-cols-2 gap-3">
        {workflowSteps.map((item) => (
          <div
            key={item.step}
            className="flex flex-col rounded-2xl bg-background border border-border p-3"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-poppins font-bold text-sm">
              {item.step}
            </div>
            <h3 className="font-poppins text-sm font-semibold text-foreground mb-2 leading-tight">{item.title}</h3>
            <p className="text-xs text-muted-foreground text-pretty">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {workflowSteps.map((item, index) => (
            <div
              key={item.step}
              className={`relative grid grid-cols-2 gap-12 ${index > 0 ? 'mt-12' : ''}`}
              data-href="">
              <div
                className={`flex ${
                  index % 2 === 0 ? 'justify-end' : 'col-start-2 justify-start'
                }`}>
                <div className={`max-w-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-poppins font-bold text-sm border-4 border-background">
                  {item.step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
