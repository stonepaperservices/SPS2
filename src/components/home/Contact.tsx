import React from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'stonepaperservices@gmail.com',
    href: 'mailto:stonepaperservices@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Number',
    value: '+91 8148477490',
    href: 'https://wa.me/918148477490',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: '24/7 Online Support',
  },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-white dark:bg-card py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#14A800] mb-3">Get in Touch</p>
          <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contact Information
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Reach out directly. We typically respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-3 mb-10">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 md:gap-4 rounded-2xl bg-white dark:bg-card border border-border p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#14A800]/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-[#14A800]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-muted-foreground mb-0.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-poppins text-sm md:text-base font-semibold text-foreground hover:text-[#14A800] transition-colors break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-poppins text-sm md:text-base font-semibold text-foreground break-words">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#14A800] text-white hover:bg-[#14A800] font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base"
          >
            <a href="mailto:stonepaperservices@gmail.com" className="text-[#ffffff]">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#14A800] text-white hover:bg-[#14A800] font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base"
          >
            <a
              href="https://wa.me/918148477490"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff]">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-background dark:bg-card p-5 md:p-6 text-center w-full max-w-4xl mx-auto shadow-sm">
          <p className="text-sm md:text-base font-medium text-foreground">
            Based in India <span className="mx-2 text-muted-foreground">|</span> Serving Clients Worldwide <span className="mx-2 text-muted-foreground">|</span> 100% Online Services
          </p>
        </div>
      </div>
    </section>
  );
};
