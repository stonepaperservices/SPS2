import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wifi, FileCheck, Globe, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const featureBadges = [
  { icon: Wifi, label: '100% Online' },
  { icon: FileCheck, label: 'Print-Ready PDF' },
  { icon: Globe, label: 'Worldwide Service' },
  { icon: ClipboardCheck, label: 'Quality Checked' },
];

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-background pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Soft decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#14A800]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[#14A800]/5 blur-3xl" />
      </div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-poppins text-[1.5rem] md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance mb-5 md:mb-6">
              Professional Book Typesetting & Digital Publishing Services
            </h1>

            <p className="text-sm md:text-lg text-muted-foreground text-pretty max-w-xl mb-6 md:mb-8">
              100% Online Book Typesetting and Print-ready PDF Services for Authors and Publishers Worldwide.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#14A800] text-white hover:bg-[#14A800]/90 font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base shadow-md hover:shadow-lg transition-all"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/pricing')}
                className="rounded-full border-border hover:bg-muted font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base"
              >
                View Pricing
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {featureBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 dark:bg-card/60 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm shadow-sm"
                  >
                    <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#14A800]" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Premium publishing workspace with manuscript pages, print-ready book pages, and typography elements"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-background/80 backdrop-blur-md p-4 shadow-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14A800]/10 text-[#14A800]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Print-Ready Output</p>
                <p className="text-xs text-muted-foreground">Delivered on time, every time</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
