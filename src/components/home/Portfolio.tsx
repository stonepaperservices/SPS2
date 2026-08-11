import React from 'react';
import {
  BookMarked,
  BookOpen,
  BookText,
  FileCheck,
  FileCode,
  FileText,
  GraduationCap,
  LayoutGrid,
  ListOrdered,
  Sigma,
  Tablet,
  Building2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

const portfolioCards = [
  { title: 'Book Typesetting', icon: BookOpen, description: 'Professionally formatted interiors for print and digital books.' },
  { title: 'Journal Typesetting', icon: BookText, description: 'Clean, structured article layouts for academic journals.' },
  { title: 'Magazine Layout', icon: LayoutGrid, description: 'Editorial spreads and feature layouts that engage readers.' },
  { title: 'School Book Composition', icon: GraduationCap, description: 'Pedagogical page design for textbooks and workbooks.' },
  { title: 'Academic Publishing', icon: Building2, description: 'Scholarly layouts that meet publisher and university standards.' },
  { title: 'Novel Typesetting', icon: BookMarked, description: 'Elegant, reader-friendly interiors for fiction and non-fiction.' },
  { title: 'Kindle KDP Formatting', icon: Tablet, description: 'Optimized eBook formatting for Amazon Kindle devices.' },
  { title: 'Print-ready PDF Creation', icon: FileCheck, description: 'High-resolution PDFs prepared for professional printing.' },
  { title: 'XML Workflow', icon: FileCode, description: 'Structured markup for scalable publishing workflows.' },
  { title: 'PDF Accessibility', icon: FileText, description: 'Tagged PDFs with proper structure and document-reading order.' },
  { title: 'Tables, Charts & Math Equations', icon: Sigma, description: 'Accurate formatting of complex STEM and data content.' },
  { title: 'Index & Table of Contents Formatting', icon: ListOrdered, description: 'Clear navigation and reference pages for every publication.' },
];

export const Portfolio: React.FC = () => {
  return (
    <SectionWrapper id="portfolio" variant="muted" className="opacity-0 intersect:opacity-100 transition-opacity duration-700">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <p className="text-sm font-semibold text-primary mb-3">Portfolio</p>
        <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Publishing & Typesetting Excellence
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-pretty">
          We specialize in transforming manuscripts into polished, print-ready and digital publications across a wide range of formats and industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {portfolioCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
            >
              <div className="group h-full flex flex-col items-center text-center p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors duration-300">
                <div className="mb-4 p-3 rounded-full border border-border bg-background group-hover:border-primary/20 transition-colors">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-poppins text-sm md:text-base font-semibold text-foreground text-balance mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
