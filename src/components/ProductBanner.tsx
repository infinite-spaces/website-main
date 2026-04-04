import { useState, useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';


export default function ProductBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed banner previously
    const dismissed = localStorage.getItem('productBannerDismissed');
    if (!dismissed) {
      // Show banner after a short delay for organic feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('productBannerDismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Biomimicry-shaped banner */}
      <div 
        className="relative bg-gradient-to-r from-[#1A1C18] via-[#2A2C28] to-[#1A1C18] border-t border-[#C9A84C]/20"
        style={{
          borderRadius: '24px 24px 0 0 / 16px 16px 0 0'
        }}
      >
        <div className="container-padding max-w-7xl mx-auto py-3 px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Icon + Message */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div 
                className="flex-shrink-0 w-8 h-8 bg-[#C9A84C]/10 flex items-center justify-center"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                <ShoppingBag className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 min-w-0">
                <span className="text-[11px] md:text-xs text-[#F7F3EC] font-medium tracking-wide truncate">
                  Master the Machine:
                </span>
                <span className="hidden md:inline text-[#7A7860]">|</span>
                <span className="text-[10px] text-[#E4D9C4]/60 hidden md:block">
                  To start building your custom AI strategy
                </span>
              </div>
            </div>

            {/* Right: CTA + Dismiss */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <a
                href="https://infinitespaces.ca/welcome.html"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A84C] to-[#E2C97A] text-[#1A1C18] text-[10px] tracking-[2px] uppercase font-semibold hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                Click Here
              </a>
              <button
                onClick={handleDismiss}
                className="p-2 text-[#7A7860] hover:text-[#F7F3EC] hover:bg-[#F7F3EC]/5 transition-all duration-300"
                style={{ borderRadius: '50%' }}
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent"
        />
      </div>
    </div>
  );
}
