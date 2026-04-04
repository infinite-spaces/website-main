import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    title: '3D Renderings',
    client: 'Photorealistic Visualizations',
    description: 'Architectural and product visualizations that bring concepts to life before they exist.',
    tags: ['Architecture', 'Interior', 'Exterior'],
    link: '/portfolio/renderings',
    x: 25,
    y: 15,
  },
  {
    title: 'UX Analysis',
    client: 'Case Studies & Strategy',
    description: 'Deep dives into transformation projects—challenges, solutions, and measurable outcomes.',
    tags: ['UX Strategy', 'AI Logic', 'Fintech'],
    link: '/portfolio/case-studies',
    x: 65,
    y: 30,
  },
  {
    title: 'UI & UX Web Design',
    client: 'Digital Experiences',
    description: 'Human-centered digital experiences that balance beauty with function and purpose.',
    tags: ['Web Design', 'UI/UX', 'Brand Systems'],
    link: '/portfolio/web-design',
    x: 40,
    y: 55,
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#F7F3EC] overflow-hidden"
    >
      {/* Landscape Vector Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layered landscape SVG */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8F0F0" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F7F3EC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F7F3EC" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C2D8C6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A5E4F" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9EACAC" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7A8888" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E2C97A" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
            </linearGradient>
            
            {/* Noise filter for organic texture */}
            <filter id="landscapeNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" mode="overlay" />
            </filter>
          </defs>
          
          {/* Sky layer */}
          <rect width="1440" height="800" fill="url(#skyGrad)" />
          
          {/* Distant mountains */}
          <path 
            d="M0 400 Q 180 280 360 380 T 720 320 T 1080 360 T 1440 300 V 800 H 0 Z" 
            fill="url(#mountainGrad2)"
            opacity="0.6"
          />
          
          {/* Mid mountains */}
          <path 
            d="M0 450 Q 240 320 480 420 T 960 380 T 1440 420 V 800 H 0 Z" 
            fill="url(#mountainGrad1)"
            opacity="0.5"
          />
          
          {/* Rolling hills */}
          <path 
            d="M0 500 Q 200 420 400 480 T 800 450 T 1200 490 T 1440 460 V 800 H 0 Z" 
            fill="url(#hillGrad)"
            opacity="0.4"
          />
          
          {/* Foreground hills */}
          <path 
            d="M0 580 Q 300 500 600 560 T 1200 520 T 1440 580 V 800 H 0 Z" 
            fill="rgba(74,94,79,0.08)"
          />
          
          {/* Organic flowing lines - like rivers/wind */}
          <path 
            d="M-50 600 Q 200 580 400 620 T 800 600 T 1200 640 T 1500 600" 
            stroke="rgba(201,168,76,0.15)" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M-50 650 Q 300 620 600 660 T 1100 640 T 1500 670" 
            stroke="rgba(74,94,79,0.12)" 
            strokeWidth="1.5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Floating organic shapes - like clouds/seeds */}
          <ellipse cx="200" cy="180" rx="80" ry="40" fill="rgba(255,255,255,0.4)" filter="url(#landscapeNoise)" opacity="0.3" />
          <ellipse cx="1100" cy="120" rx="120" ry="50" fill="rgba(255,255,255,0.3)" filter="url(#landscapeNoise)" opacity="0.25" />
          <ellipse cx="700" cy="80" rx="60" ry="30" fill="rgba(255,255,255,0.35)" filter="url(#landscapeNoise)" opacity="0.2" />
        </svg>
        
        {/* Organic grain overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span 
              className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Selected Work
            </span>
            
            <h2 
              className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#1A1C18] font-bold leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              DESIGNING SYSTEMS
              <br />
              <span className="text-gradient-gold font-bold">PEOPLE CAN TRUST</span>
            </h2>
          </div>
          
          <div 
            className={`mt-6 md:mt-0 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#4A5E4F]/30 text-[#4A5E4F] font-semibold text-[10px] tracking-[3px] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            >
              View All Projects
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Portfolio Cards - positioned over landscape */}
        <div className="relative min-h-[600px]">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`absolute transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                left: `${item.x}%`, 
                top: `${item.y}%`,
                transform: 'translateX(-50%)',
                transitionDelay: `${300 + index * 120}ms`,
                zIndex: hoveredIndex === index ? 10 : 1
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <PortfolioCard 
                item={item} 
                isHovered={hoveredIndex === index}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <blockquote className="font-cormorant text-lg italic text-[#1A1C18]/60 max-w-xl mx-auto">
            &ldquo;The right technology, in the right hands.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// Portfolio Card Component
interface PortfolioCardProps {
  item: {
    title: string;
    client: string;
    description: string;
    tags: string[];
    link: string;
  };
  isHovered: boolean;
  index: number;
}

function PortfolioCard({ item, isHovered, index }: PortfolioCardProps) {
  const colors = ['#C9A84C', '#8AAF90', '#B8C4C4', '#6B8C72'];
  const accentColor = colors[index % colors.length];
  
  return (
    <div 
      className={`
        relative w-80 transition-all duration-500
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}
    >
      {/* Card glow on hover */}
      <div 
        className={`
          absolute inset-0 transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
          transform: 'scale(1.3)',
          filter: 'blur(30px)'
        }}
      />
      
      {/* Card */}
      <div 
        className={`
          relative bg-[#F7F3EC]/90 backdrop-blur-sm p-6 rounded-sm
          transition-all duration-500
          ${isHovered 
            ? 'shadow-xl border-t-2' 
            : 'shadow-md border-t border-[#4A5E4F]/10'
          }
        `}
        style={{ 
          borderTopColor: isHovered ? accentColor : 'rgba(74,94,79,0.1)',
          borderTopWidth: isHovered ? '3px' : '1px'
        }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-[8px] tracking-[2px] uppercase font-bold text-[#1A1C18] bg-[#C9A84C]/50"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 
          className={`
            text-base font-medium text-[#1A1C18] mb-1 transition-colors duration-300
            ${isHovered ? 'text-[#4A5E4F]' : ''}
          `}
        >
          {item.title}
        </h3>
        
        {/* Client */}
        <p className="text-xs font-semibold text-[#1A1C18] mb-3">
          {item.client}
        </p>

        {/* Description */}
        <p className="text-xs font-medium text-[#1A1C18]/70 leading-relaxed mb-4">
          {item.description}
        </p>
        
        {/* View button - show on hover */}
        <Link
          to={item.link}
          className={`
            inline-flex items-center gap-2 text-[9px] tracking-[2px] uppercase font-semibold
            transition-all duration-300
            ${isHovered ? 'text-[#C9A84C] opacity-100' : 'text-[#7A7860] opacity-0'}
          `}
        >
          View Project
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
      
      {/* Decorative element */}
      <div 
        className={`
          absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 
          bg-[#F7F3EC] border border-[#4A5E4F]/20 rotate-45
          transition-all duration-300
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}
      />
    </div>
  );
}
