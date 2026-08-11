import React from 'react';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'stonepaperservices@gmail.com',
    href: 'mailto:stonepaperservices@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+91 8148477490',
    href: 'tel:+918148477490',
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

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact | Stone Paper Services" description="Contact Stone Paper Services via email, phone, or WhatsApp.">
      <section className="w-full bg-white dark:bg-card py-16 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#14A800] mb-3">Contact</p>
            <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground text-pretty">
              Have a project in mind? Reach out directly and our team will respond within one business day.
            </p>
          </div>

          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white dark:bg-card border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#14A800]/10 flex items-center justify-center mb-3 md:mb-4">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-[#14A800]" />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-poppins text-sm md:text-base font-semibold text-foreground hover:text-[#14A800] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-poppins text-sm md:text-base font-semibold text-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#14A800] text-white hover:bg-[#14A800] font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base w-full sm:w-auto"
            >
              <a
                href="mailto:stonepaperservices@gmail.com"
                className="bg-[#14a800e6] bg-none text-[#ffffff]">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#14A800] text-white hover:bg-[#14A800] font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base w-full sm:w-auto"
            >
              <a
                href="https://wa.me/918148477490"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14a800e6] bg-none text-[#ffffff]">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-background dark:bg-card p-5 md:p-6 text-center w-full max-w-4xl mx-auto shadow-sm mb-10 md:mb-12">
            <p className="text-sm md:text-base font-medium text-foreground">
              Based in India <span className="mx-2 text-muted-foreground">|</span> Serving Clients Worldwide <span className="mx-2 text-muted-foreground">|</span> 100% Online Services
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
