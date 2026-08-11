import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface PortfolioSample {
  title: string;
  image: string;
}

interface PortfolioCategory {
  category: string;
  cover: string;
  samples: PortfolioSample[];
}

interface PortfolioGalleryProps {
  categories: string[];
  gallery: PortfolioCategory[];
  defaultCategory?: string;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  categories,
  gallery,
  defaultCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory || categories[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSamples = gallery.find((g) => g.category === activeCategory)?.samples || [];

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? activeSamples.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === activeSamples.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeSamples.length]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {activeSamples.map((sample, index) => (
            <motion.button
              key={sample.title + index}
              onClick={() => openLightbox(index)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden text-left shadow-sm hover:shadow-hover transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={sample.image}
                  alt={sample.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-5 w-5 md:h-8 md:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-2.5 md:p-5">
                <p className="text-[10px] md:text-xs font-semibold text-primary mb-0.5 md:mb-1">{activeCategory}</p>
                <h3 className="font-poppins text-xs md:text-base font-semibold text-foreground">{sample.title}</h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-5xl p-0 bg-black/95 border-none overflow-hidden text-white">
          <DialogTitle className="sr-only">
            {activeSamples[activeIndex]?.title || 'Portfolio preview'}
          </DialogTitle>
          <div className="relative flex items-center justify-center min-h-[60dvh] max-h-[90dvh]">
            {activeSamples.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={activeSamples[activeIndex]?.image}
                alt={activeSamples[activeIndex]?.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="max-h-[80dvh] max-w-full object-contain rounded-lg"
              />
            </AnimatePresence>

            {activeSamples[activeIndex] && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium">
                {activeIndex + 1} / {activeSamples.length} · {activeSamples[activeIndex].title}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
