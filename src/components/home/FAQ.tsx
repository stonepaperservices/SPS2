import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { faqs } from '@/lib/constants';

export const FAQ: React.FC = () => {
  return (
    <SectionWrapper id="faq" variant="muted" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold text-primary mb-3">FAQ</p>
          <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Answers to common questions about our process, formats, pricing, and delivery.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-poppins font-semibold text-foreground text-base py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};
