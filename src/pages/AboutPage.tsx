import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/button';

const values = [
  { title: 'Precision', description: 'Every layout is measured, tested, and refined to meet professional standards.', icon: Target },
  { title: 'Clarity', description: 'We design for readers first, ensuring information is easy to navigate and absorb.', icon: Eye },
  { title: 'Partnership', description: 'We treat each project as a collaboration, with open communication at every step.', icon: Heart },
  { title: 'Integrity', description: 'Secure file handling, honest timelines, and transparent pricing.', icon: Shield },
  { title: 'Expertise', description: 'A team of publishing professionals with deep industry experience.', icon: Users },
];

const AboutPage: React.FC = () => {
  return (
    <Layout title="About Us | Stone Paper Services" description="Learn about Stone Paper Services, our mission, values, and the team behind our publishing services.">
      <SectionWrapper variant="gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary mb-3">About Us</p>
            <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Crafting Publications That Make an Impact
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground text-pretty mb-4 md:mb-6">
              Stone Paper Services is a professional ePublishing and book typesetting company serving publishers, universities, businesses, and independent authors worldwide. We transform raw manuscripts into polished print and digital publications.
            </p>
            <p className="text-sm md:text-base text-muted-foreground text-pretty mb-6 md:mb-8">
              Founded by a team of designers, editors, and publishing technologists, we combine traditional craftsmanship with modern workflows to deliver books, journals, reports, and documents that look exceptional on every platform.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 md:px-8 h-9 md:h-10 text-sm md:text-base">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
            <img
              src="/images/about.jpg"
              alt="Stone Paper Services publishing team collaborating in a modern office"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3">Our Values</p>
          <h2 className="font-poppins text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Drives Us
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-3 md:p-6 transition-all duration-300 hover:shadow-hover">
                <div className="mb-2 md:mb-4 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <h3 className="font-poppins text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{value.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty">{value.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default AboutPage;
