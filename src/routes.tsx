import type { ReactNode } from 'react';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFound from './pages/NotFound';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  /** Accessible without login. Routes without this flag require authentication. Has no effect when RouteGuard is not in use. */
  public?: boolean;
}

export const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
    public: true,
  },
  {
    name: 'Services',
    path: '/services',
    element: <ServicesPage />,
    public: true,
  },
  {
    name: 'Industries',
    path: '/industries',
    element: <IndustriesPage />,
    public: true,
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    element: <PortfolioPage />,
    public: true,
  },
  {
    name: 'Pricing',
    path: '/pricing',
    element: <PricingPage />,
    public: true,
  },
  {
    name: 'About Us',
    path: '/about',
    element: <AboutPage />,
    public: true,
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />,
    public: true,
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    element: <PrivacyPage />,
    public: true,
  },
  {
    name: 'Terms & Conditions',
    path: '/terms',
    element: <TermsPage />,
    public: true,
  },
  {
    name: 'Not Found',
    path: '/404',
    element: <NotFound />,
    public: true,
  },
];
