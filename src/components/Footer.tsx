import { Heart } from 'lucide-react';

const footerLinks = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative w-full bg-charcoal overflow-hidden">
      {/* Top organic gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-padding py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block mb-6"
              >
                <span className="font-bungee text-cream text-lg tracking-[0.15em]">
                  INFINITE SPACES
                </span>
              </a>
              
              <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
                Navigating emerging technologies in service of humanity. Where tech and humanity evolve together.
              </p>
              
              <p className="text-cream/30 text-xs tracking-wide">
                Established 2022 in Windsor, Ontario
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-1">
              <h3 className="brand-caption text-cream/40 mb-6">Navigation</h3>
              <nav className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-cream/50 hover:text-gold-light transition-colors duration-500"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-1">
              <h3 className="brand-caption text-cream/40 mb-6">Get in Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@infinitespaces.ca"
                  className="block text-sm text-cream/50 hover:text-gold-light transition-colors duration-500"
                >
                  hello@infinitespaces.ca
                </a>
                <p className="text-sm text-cream/50">
                  Windsor, Ontario, Canada
                </p>
                <p className="text-sm text-cream/40">
                  Detroit, Michigan, USA
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream/5 flex items-center justify-center text-cream/50 hover:bg-gold/20 hover:text-gold-light transition-all duration-500"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream/5 flex items-center justify-center text-cream/50 hover:bg-gold/20 hover:text-gold-light transition-all duration-500"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-cream/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-cream/30 text-xs tracking-wide">
                © {currentYear} Infinite Spaces. All rights reserved.
              </p>
              
              <p className="text-cream/30 text-xs flex items-center gap-1 tracking-wide">
                Made with <Heart className="w-3 h-3 text-gold/60" /> in Windsor, Ontario
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
