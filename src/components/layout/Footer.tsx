import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Book Typesetting', href: '/services#book-typesetting' },
    { label: 'Journal Typesetting', href: '/services#journal-typesetting' },
    { label: 'Magazine Layout', href: '/services#magazine-layout' },
    { label: 'Academic Publishing', href: '/services#academic-publishing' },
    { label: 'XML Workflow', href: '/services#xml-workflow' },
    { label: 'Redraw, Edits & Updates', href: '/services#redraw-edits-updates' },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/stone-paper-services-229991426' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/stonepaperservices?igsh=MW53d250b2Zyd2Y3aw==' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/40">
      <div className="container py-10 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 text-foreground mb-4 md:mb-5">
              <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="font-poppins text-base md:text-xl font-bold tracking-tight">Stone Paper Services</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-pretty mb-6">
              Professional ePublishing and book typesetting services for publishers, authors, universities, and businesses worldwide.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>stonepaperservices@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-poppins text-sm md:text-base font-semibold text-foreground mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-sm md:text-base font-semibold text-foreground mb-3 md:mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.label}>
                  <Link to={service.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Stone Paper Services. All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
