import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const navItems = [
  { label: 'Home', path: '/', hash: undefined },
  { label: 'Services', path: '/services', hash: 'services' },
  { label: 'Industries', path: '/industries', hash: 'industries' },
  { label: 'Portfolio', path: '/portfolio', hash: 'portfolio' },
  { label: 'Pricing', path: '/pricing', hash: 'pricing' },
  { label: 'About Us', path: '/about', hash: undefined },
  { label: 'Contact', path: '/contact', hash: undefined },
];

const sectionIds = ['services', 'industries', 'portfolio', 'pricing'];

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileOpen(false);
    if (item.hash && isHome) {
      const el = document.getElementById(item.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (item: typeof navItems[0]) => {
    if (location.pathname !== '/' && item.path !== '/') {
      return location.pathname === item.path;
    }
    if (location.pathname === '/' && item.hash) {
      return activeSection === item.hash;
    }
    return location.pathname === item.path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border shadow-sm'
          : 'bg-background'
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-poppins text-base md:text-xl font-bold tracking-tight">
            <span className="text-[#111111] dark:text-white">Stone</span>
            <span className="text-[#14A800]"> Paper</span>
            <span className="text-[#555555] dark:text-[#CFCFCF]"> Services</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive(item)
                  ? 'text-foreground bg-muted'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button
            onClick={() => navigate('/contact')}
            className="rounded-full text-primary-foreground hover:bg-primary/90 font-medium bg-[#14a800] bg-none"
          >
            Let's talk
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="shrink-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col h-full">
                <div className="mb-8 pr-8">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span className="font-poppins text-base md:text-lg font-bold">Stone Paper Services</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 md:gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={`text-left px-3 md:px-4 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-medium transition-colors ${
                        isActive(item)
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto pt-6">
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      navigate('/contact');
                    }}
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Let's talk
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
