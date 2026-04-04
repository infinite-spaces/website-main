import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, FileText, Monitor, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'renderings',
    title: '3D Renderings',
    description: 'Photorealistic architectural and product visualizations that bring concepts to life before they exist.',
    icon: Box,
    count: 4,
    color: '#C9A84C',
    preview: [
      { title: 'Elevated Skyline Lounge', type: 'Hospitality' },
      { title: 'Modern Charcoal Suite', type: 'Residential' },
      { title: 'Contemporary Lakeside Villa', type: 'Architecture' },
    ],
  },
  {
    id: 'case-studies',
    title: 'UX Analysis',
    description: 'Deep dives into transformation projects—challenges, solutions, and measurable outcomes.',
    icon: FileText,
    count: 2,
    color: '#4A5E4F',
    preview: [
      { title: 'Agentic Voice UX', type: 'Conversational AI' },
      { title: 'Cent Capital', type: 'Fintech' },
    ],
  },
  {
    id: 'web-design',
    title: 'UI & UX Web Design',
    description: 'Human-centered digital experiences that balance beauty with function and purpose.',
    icon: Monitor,
    count: 2,
    color: '#B8C4C4',
    preview: [
      { title: 'Detroit Fleet Pro', type: 'Brand Ecosystem' },
      { title: 'A Universe', type: 'Web Development' },
    ],
  },
];

export default function PortfolioIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 md:py-32 bg-[#F7F3EC] overflow-hidden"
    >
      {/* Organic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`
          }}
        />
        {/* Floating orbs */}
        <div 
          className="absolute top-[10%] left-[5%] w-[300px] h-[260px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(74,94,79,0.08) 0%, transparent 65%)',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute bottom-[15%] right-[8%] w-[250px] h-[220px] animate-breathe"
          style={{ 
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)',
            filter: 'blur(35px)',
            animationDelay: '3s'
          }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-[#7A7860] hover:text-[#4A5E4F] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Explore Our Work
          </span>
          
          <h1 
            className={`font-bungee text-3xl md:text-4xl lg:text-5xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            PORTFOLIO
            <br />
            <span className="text-gradient-gold font-bold">BY CATEGORY</span>
          </h1>
          
          <div 
            className={`w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p 
            className={`text-base text-[#1A1C18] font-light max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Browse our work across disciplines—each project crafted with intention and human-centered principles.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              isVisible={isVisible}
              isHovered={hoveredCategory === category.id}
              onHover={() => setHoveredCategory(category.id)}
              onLeave={() => setHoveredCategory(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-20 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-[#7A7860]/70 mb-6 italic">
            Have a project in mind? Let&apos;s discuss how we can help.
          </p>
          <Link 
            to="/?section=contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A5E4F] text-[#F7F3EC] text-[10px] tracking-[3px] uppercase font-medium hover:bg-[#3A4E3F] transition-all duration-300 hover:-translate-y-1"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    count: number;
    color: string;
    preview: { title: string; type: string }[];
  };
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function CategoryCard({ category, index, isVisible, isHovered, onHover, onLeave }: CategoryCardProps) {
  const Icon = category.icon;
  
  return (
    <Link
      to={`/portfolio/${category.id}`}
      className={`group relative block transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${400 + index * 100}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Biomimicry shape container */}
      <div 
        className={`
          relative p-8 h-full transition-all duration-500
          ${isHovered ? 'bg-[#F7F3EC]' : 'bg-[#F7F3EC]/60'}
        `}
        style={{ 
          borderRadius: '24px 4px 24px 4px',
          boxShadow: isHovered 
            ? `0 8px 32px ${category.color}20, 0 2px 8px rgba(26,28,24,0.08)` 
            : '0 2px 8px rgba(26,28,24,0.04)',
          border: `1px solid ${isHovered ? category.color + '40' : 'rgba(74,94,79,0.1)'}`
        }}
      >
        {/* Icon */}
        <div 
          className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-500"
          style={{ 
            background: `${category.color}15`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}
        >
          <span style={{ color: category.color }}>
            <Icon className="w-6 h-6 transition-transform duration-500" />
          </span>
        </div>

        {/* Title & Count */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-medium text-[#1A1C18]">
            {category.title}
          </h2>
          <span 
            className="px-2 py-0.5 text-[9px] tracking-wider"
            style={{ 
              background: `${category.color}15`,
              color: category.color,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
            }}
          >
            {category.count}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#7A7860] leading-relaxed mb-6">
          {category.description}
        </p>

        {/* Preview Items */}
        <div className="space-y-2 mb-6">
          {category.preview.map((item, i) => (
            <div 
              key={i}
              className="flex items-center justify-between text-xs py-2 border-b border-[#4A5E4F]/10 last:border-0"
            >
              <span className="text-[#1A1C18]/80 truncate">{item.title}</span>
              <span className="text-[#7A7860]/60 text-[10px] flex-shrink-0">{item.type}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`
            inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase font-medium transition-all duration-300
            ${isHovered ? 'text-[#C9A84C]' : 'text-[#7A7860]'}
          `}
        >
          View All
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </div>

        {/* Hover glow */}
        <div 
          className={`
            absolute inset-0 pointer-events-none transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            background: `radial-gradient(circle at 50% 0%, ${category.color}10 0%, transparent 60%)`,
            borderRadius: '24px 4px 24px 4px'
          }}
        />
      </div>
    </Link>
  );
}
