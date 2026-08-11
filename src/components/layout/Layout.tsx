import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from 'next-themes';
import PageMeta from '@/components/common/PageMeta';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Stone Paper Services | Professional ePublishing & Book Typesetting Services',
  description = 'Stone Paper Services helps publishers, authors, universities, and businesses transform manuscripts into beautifully designed print and digital publications.',
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <PageMeta title={title} description={description} />
      <div className="flex min-h-screen flex-col w-full">
        <Header />
        <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
