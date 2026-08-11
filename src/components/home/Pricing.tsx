import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, BookOpen, ClipboardCheck, RefreshCcw, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { pricingPlans } from '@/lib/constants';

const specificServices = [
  {
    icon: BookOpen,
    title: 'Typesetting Only',
    description: 'Need only professional book typesetting? We can create a clean, print-ready layout for your manuscript.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Check Only',
    description: 'Already have a typeset file? We’ll review and check it for formatting consistency and print readiness.',
  },
  {
    icon: RefreshCcw,
    title: 'Revision Support',
    description: 'Need changes or updates to an existing project? We can handle revisions professionally.',
  },
  {
    icon: Settings,
    title: 'Custom Requirement',
    description: 'Have a unique publishing or formatting requirement? Contact us for a custom solution.',
  },
];

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="pricing" variant="gradient" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Pricing</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Transparent Pricing Plans
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          Choose a plan that fits your project. All plans include professional typesetting and responsive support.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-4 md:p-8 transition-all duration-300 hover:shadow-hover ${
              plan.popular
                ? 'border-primary bg-card shadow-card lg:-mt-4 lg:mb-4'
                : 'border-border bg-background'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold">
                Most Popular
              </span>
            )}

            <p className="text-xs md:text-sm font-semibold text-primary mb-2">{plan.label}</p>
            <p className="text-xl md:text-3xl font-poppins font-bold text-foreground mb-1">{plan.price}</p>
            <p className="text-sm text-muted-foreground mb-4 md:mb-6 text-pretty">{plan.description}</p>
            <div className="space-y-2 md:space-y-3 mb-5 md:mb-8 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 md:gap-3">
                  <div className="shrink-0 mt-0.5 h-4 w-4 md:h-5 md:w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground text-pretty leading-snug">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 md:space-y-2 mb-5 md:mb-6 text-sm text-muted-foreground">
              <p>Delivery: <span className="text-foreground font-medium">{plan.delivery}</span></p>
              <p>Revisions: <span className="text-foreground font-medium">{plan.revisions}</span></p>
            </div>
            <Button
              onClick={() => navigate('/contact')}
              className={`w-full rounded-full font-semibold text-sm md:text-base h-10 md:h-11 ${
                plan.popular
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              Let's talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-sm font-semibold text-primary mb-3">Specific Services</p>
          <h3 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Need a Specific Service?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Choose the service that matches your current need and reach out for a tailored quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {specificServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-4 md:p-6 transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
              >
                <div className="mb-4 md:mb-5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="font-poppins text-sm md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty flex-1 mb-4 md:mb-5">{service.description}</p>
                <Button
                  onClick={() => navigate('/contact')}
                  className="mt-auto w-full rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-xs md:text-sm h-9 md:h-10 transition-colors"
                >
                  Let’s Talk <ArrowRight className="ml-1.5 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
