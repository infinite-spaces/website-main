import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, FileText, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'Agentic Voice UX | Interactive Strategy Framework',
    client: 'Service Sector — Hair Salon',
    industry: 'Conversational AI',
    challenge: 'Users were confused by AI voice agents, elderly clients were lost, and providers lacked context for appointments.',
    solution: 'Redesigned conversational flows with transparency, accessibility, and human-centered principles.',
    results: [
      { metric: '100%', label: 'AI Transparency' },
      { metric: 'Elderly', label: 'Accessibility Win' },
      { metric: 'Context', label: 'Provider Ready' },
    ],
    duration: '3 months',
    team: '2 consultants',
    featured: true,
    link: '/case-studies/voice-ux.html',
  },
  {
    id: 2,
    title: 'Cent Capital: Asset vs. Liability Logic',
    client: 'Product Strategy & UX Audit',
    industry: 'Fintech',
    challenge: 'Transitioning from simple budgeting to semantic wealth management requires data integrity as the foundation of AI effectiveness.',
    solution: 'Architectural framework for an AI financial co-pilot with asset vs. liability logic at its core.',
    results: [
      { metric: 'UX', label: 'Strategy' },
      { metric: 'AI', label: 'Logic' },
      { metric: 'Fintech', label: 'Focus' },
    ],
    duration: '4 months',
    team: '3 consultants',
    featured: true,
    link: '/case-studies/cent-capital.html',
  },
];

export default function CaseStudiesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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

  const featuredStudies = caseStudies.filter(c => c.featured);
  const otherStudies = caseStudies.filter(c => !c.featured);

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
        <div 
          className="absolute top-[20%] left-[5%] w-[300px] h-[260px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(74,94,79,0.08) 0%, transparent 65%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Breadcrumb & Back */}
        <div 
          className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-[#7A7860] hover:text-[#4A5E4F] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Portfolio
          </Link>
          <span className="text-[#7A7860]/40">/</span>
          <span className="text-[10px] tracking-[3px] uppercase text-[#4A5E4F]">UX Analysis</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div 
              className="w-14 h-14 bg-[#4A5E4F]/10 flex items-center justify-center mb-6"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              <FileText className="w-6 h-6 text-[#4A5E4F]" />
            </div>
            <h1 
              className={`font-bungee text-3xl md:text-4xl lg:text-5xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              UX ANALYSIS
            </h1>
            <p 
              className={`text-base text-[#1A1C18] font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Deep dives into transformation projects—the challenges, solutions, and measurable outcomes that define our work.
            </p>
          </div>
          <div 
            className={`text-right transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-4xl font-light text-[#4A5E4F]">{caseStudies.length}</span>
            <p className="text-[10px] tracking-[3px] uppercase text-[#7A7860] mt-1">Studies</p>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#4A5E4F] font-medium mb-6 block transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Featured Studies
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                isLarge
                isHovered={hoveredItem === study.id}
                onHover={() => setHoveredItem(study.id)}
                onLeave={() => setHoveredItem(null)}
                delay={400 + index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Other Case Studies */}
        <div>
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#7A7860] font-medium mb-6 block transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            More Case Studies
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            {otherStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                isHovered={hoveredItem === study.id}
                onHover={() => setHoveredItem(study.id)}
                onLeave={() => setHoveredItem(null)}
                delay={600 + index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Study Card Component
interface CaseStudyCardProps {
  study: {
    id: number;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: { metric: string; label: string }[];
    duration: string;
    team: string;
    link?: string;
  };
  isLarge?: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay?: number;
  isVisible?: boolean;
}

function CaseStudyCard({ study, isLarge, isHovered, onHover, onLeave, delay = 0, isVisible = true }: CaseStudyCardProps) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Biomimicry shape container */}
      <div 
        className={`
          relative bg-[#EEE7D8] p-6 md:p-8 h-full transition-all duration-500
          ${isHovered ? 'bg-[#F7F3EC]' : ''}
        `}
        style={{ 
          borderRadius: '24px 4px 24px 4px',
          boxShadow: isHovered 
            ? '0 12px 40px rgba(74,94,79,0.12), 0 4px 12px rgba(26,28,24,0.06)' 
            : '0 2px 8px rgba(26,28,24,0.04)',
          border: `1px solid ${isHovered ? 'rgba(74,94,79,0.2)' : 'rgba(74,94,79,0.08)'}`
        }}
      >
        {/* Industry badge */}
        <div className="flex items-center justify-between mb-6">
          <span 
            className="px-3 py-1 text-[9px] tracking-[2px] uppercase text-[#4A5E4F] bg-[#4A5E4F]/10"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            {study.industry}
          </span>
          <div className="flex items-center gap-4 text-[10px] text-[#7A7860]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {study.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {study.team}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-medium text-[#1A1C18] mb-2 ${isLarge ? 'text-xl' : 'text-lg'}`}>
          {study.title}
        </h3>
        <p className="text-sm text-[#7A7860] mb-6">{study.client}</p>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-[9px] tracking-[2px] uppercase text-[#7A7860] mb-1">Challenge</p>
            <p className="text-sm text-[#1A1C18]/80 leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-[2px] uppercase text-[#4A5E4F] mb-1">Solution</p>
            <p className="text-sm text-[#1A1C18]/80 leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div 
          className={`
            grid grid-cols-3 gap-4 pt-6 border-t border-[#4A5E4F]/10
            transition-all duration-500
            ${isHovered ? 'bg-[#4A5E4F]/5 -mx-6 -mb-6 px-6 py-6 md:-mx-8 md:-mb-8 md:px-8 md:py-6' : ''}
          `}
          style={isHovered ? { borderRadius: '0 0 20px 2px' } : {}}
        >
          {study.results.map((result, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-[#4A5E4F]" />
                <span className="text-lg md:text-xl font-medium text-[#4A5E4F]">{result.metric}</span>
              </div>
              <p className="text-[9px] text-[#7A7860]">{result.label}</p>
            </div>
          ))}
        </div>

        {/* CTA - appears on hover */}
        <div 
          className={`
            mt-6 pt-4 border-t border-[#4A5E4F]/10
            transition-all duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {study.link ? (
            <a 
              href={study.link}
              className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#4A5E4F] hover:text-[#6B8C72] transition-colors"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <button className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#4A5E4F] hover:text-[#6B8C72] transition-colors">
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
