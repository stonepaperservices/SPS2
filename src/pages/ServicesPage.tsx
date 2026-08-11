import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/constants';

const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location.hash]);

  return (
    <Layout title="Services | Stone Paper Services" description="Explore professional ePublishing and book typesetting services from Stone Paper Services.">
      <SectionWrapper variant="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-3">Our Services</p>
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Publishing Services
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground text-pretty">
            From manuscript preparation to final file delivery, we provide everything your publication needs to succeed in print and digital markets.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} id={slugify(service.title)} className="flex flex-col rounded-2xl border border-border bg-card p-3 md:p-6 transition-all duration-300 hover:shadow-hover">
                <div className="mb-2 md:mb-4 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <h2 className="font-poppins text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">{service.title}</h2>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty flex-1 mb-3 md:mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-full h-8 md:h-10 text-xs md:text-sm">
                  <Link to="/contact" data-href="/contact">{service.cta} <ArrowRight className="ml-1.5 md:ml-2 h-3 w-3 md:h-4 md:w-4" data-href="/contact" /></Link>
                </Button>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
      <SectionWrapper variant="muted">
        <div className="rounded-2xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center">
          <h2 className="font-poppins text-xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty max-w-2xl mx-auto mb-6 md:mb-8">
            Share your project details with our team and we will recommend the right service package and pricing for your goals.
          </p>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default ServicesPage;
