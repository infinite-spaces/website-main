import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '#philosophy', label: 'Philosophy', type: 'hash' },
  { href: '#services', label: 'Services', type: 'hash' },
  { href: '/portfolio', label: 'Portfolio', type: 'route' },
  { href: '#about', label: 'About', type: 'hash' },
  { href: '/blog', label: 'Blog', type: 'route' },
  { href: '#contact', label: 'Contact', type: 'hash' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Only track active section on home page
      if (isHomePage) {
        const sections = navLinks
          .filter(link => link.type === 'hash')
          .map(link => link.href.slice(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleLinkClick = (e: React.MouseEvent, href: string, type: string) => {
    if (type === 'hash') {
      e.preventDefault();
      if (!isHomePage) {
        // Navigate to home page with hash
        navigate(`/${href}`);
      } else {
        // Scroll to section on current page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-cream/90 backdrop-blur-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-padding flex items-center justify-between">
          {/* Logo + Business Name */}
          <a 
            href="/"
            className="flex items-center gap-3"
            onClick={handleLogoClick}
          >
            <img 
              src="/assets/logo-no-bg.png" 
              alt="Infinite Spaces Logo" 
              className={`transition-all duration-500 ${
                isScrolled ? 'w-7 h-7' : 'w-8 h-8'
              }`}
            />
            <span className={`brand-heading text-sage transition-all duration-500 ${
              isScrolled ? 'text-[10px]' : 'text-xs'
            }`}>
              INFINITE SPACES
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.type === 'route') {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-link ${
                      location.pathname.startsWith(link.href) ? 'nav-link-active' : ''
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.type)}
                  className={`nav-link ${
                    isHomePage && activeSection === link.href.slice(1) ? 'nav-link-active' : ''
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-sage"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-cream shadow-xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-8">
            {navLinks.map((link, index) => {
              if (link.type === 'route') {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-4 text-lg font-medium text-charcoal/70 hover:text-sage transition-all duration-500 border-b border-cream-deep/50 ${
                      location.pathname.startsWith(link.href) ? 'text-sage' : ''
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.type)}
                  className={`py-4 text-lg font-medium text-charcoal/70 hover:text-sage transition-all duration-500 border-b border-cream-deep/50 ${
                    isHomePage && activeSection === link.href.slice(1) ? 'text-sage' : ''
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
