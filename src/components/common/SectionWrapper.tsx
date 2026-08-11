import React from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'muted' | 'gradient';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-background',
  };

  return (
    <section
      id={id}
      className={`w-full py-12 md:py-28 ${variantClasses[variant]} ${className}`}
    >
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
};
