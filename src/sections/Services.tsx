import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb, Cpu, Users, Workflow, Sparkles, Compass } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'Navigate the complex landscape of emerging technologies with clarity.',
    details: ['Technology Assessment', 'AI Strategy', 'Digital Transformation Roadmapping'],
    color: '#C9A84C',
  },
  {
    icon: Cpu,
    title: 'Experience Design',
    description: 'Create intuitive, human-centered digital experiences.',
    details: ['UX Research', 'Interface & Web Design', 'Design Systems'],
    color: '#8AAF90',
  },
  {
    icon: Users,
    title: 'Workshops & Training',
    description: 'Empower your team with knowledge to thrive in an AI-enabled world.',
    details: ['AI Literacy Training', 'Design Thinking', 'Change Management'],
    color: '#B8C4C4',
  },
  {
    icon: Workflow,
    title: 'Implementation Support',
    description: 'Turn strategy into reality with hands-on support.',
    details: ['Process Optimization', 'Tool Selection', 'Team Integration'],
    color: '#6B8C72',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your existing workflows.',
    details: ['LLM Implementation', 'Automation', 'Voice Agents'],
    color: '#E2C97A',
  },
  {
    icon: Compass,
    title: 'Future Planning',
    description: 'Map your technology roadmap for the next 2-3 years.',
    details: ['Trend Analysis', 'Scenario Planning', 'Innovation Labs'],
    color: '#9EACAC',
  },
];

// Hexagon path calculation
const hexPath = (cx: number, cy: number, r: number) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M ${points.join(' L ')} Z`;
};

export default function Services() {
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
      id="services" 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#EEE7D8] overflow-hidden"
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
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What We Offer
          </span>
          
          <h2 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            SERVICES DESIGNED FOR
            <br />
            <span className="text-gradient-gold font-bold">HUMAN-CENTERED TRANSFORMATION</span>
          </h2>
          
          <div 
            className={`w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p 
            className={`text-base text-[#1A1C18] font-light max-w-xl mx-auto leading-relaxed italic transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Not a tech agency. Not a design studio. Something else entirely.
          </p>
        </div>

        {/* Honeycomb Grid */}
        <div className="relative">
          {/* Hexagon Grid Layout */}
          <div className="flex flex-col items-center gap-4 md:gap-2">
            {/* Row 1: 3 hexagons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {services.slice(0, 3).map((service, index) => (
                <HoneycombCard
                  key={service.title}
                  service={service}
                  index={index}
                  isVisible={isVisible}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
            
            {/* Row 2: 3 hexagons (offset) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:mt-[-30px]">
              {services.slice(3, 6).map((service, index) => (
                <HoneycombCard
                  key={service.title}
                  service={service}
                  index={index + 3}
                  isVisible={isVisible}
                  isHovered={hoveredIndex === index + 3}
                  onHover={() => setHoveredIndex(index + 3)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>

          {/* Connecting lines - mycelium style */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
                <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Organic connecting paths */}
            <path 
              d="M 200 120 Q 300 180 400 120" 
              stroke="url(#lineGrad)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <path 
              d="M 400 120 Q 500 180 600 120" 
              stroke="url(#lineGrad)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '1s' }}
            />
            <path 
              d="M 300 280 Q 400 220 500 280" 
              stroke="url(#lineGrad)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '2s' }}
            />
          </svg>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-[#7A7860]/70 mb-6 italic">
            Not sure which service fits your needs? Let&apos;s explore together.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A5E4F] text-[#F7F3EC] text-[10px] tracking-[3px] uppercase font-medium rounded-sm hover:bg-[#3A4E3F] transition-all duration-300 hover:-translate-y-1"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Honeycomb Card Component
interface HoneycombCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    details: string[];
    color: string;
  };
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function HoneycombCard({ service, index, isVisible, isHovered, onHover, onLeave }: HoneycombCardProps) {
  const Icon = service.icon;
  
  return (
    <div
      className={`relative w-[280px] h-[320px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${400 + index * 100}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Hexagon SVG Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 320">
        {/* Outer hexagon */}
        <path
          d={hexPath(140, 160, 130)}
          fill={isHovered ? 'rgba(247,243,236,0.95)' : 'rgba(247,243,236,0.85)'}
          stroke={service.color}
          strokeWidth={isHovered ? 2 : 1}
          strokeOpacity={isHovered ? 0.6 : 0.3}
          className="transition-all duration-500"
        />
        {/* Inner glow */}
        <path
          d={hexPath(140, 160, 110)}
          fill={`${service.color}10`}
          className="transition-all duration-500"
          style={{ opacity: isHovered ? 0.3 : 0.1 }}
        />
        {/* Top accent line */}
        <line 
          x1="70" y1="80" x2="210" y2="80" 
          stroke={service.color} 
          strokeWidth="2"
          strokeOpacity={isHovered ? 0.8 : 0.4}
          className="transition-all duration-500"
        />
      </svg>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        {/* Icon */}
        <div 
          className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-500"
          style={{ 
            background: `${service.color}15`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}
        >
          <span style={{ color: service.color }}>
            <Icon className="w-5 h-5 transition-all duration-500" />
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xs tracking-[2px] uppercase text-[#1A1C18] font-medium mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#7A7860] leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Details - show on hover */}
        <div 
          className={`space-y-1 transition-all duration-500 ${
            isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          {service.details.map((detail, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] text-[#7A7860]/70">
              <span 
                className="w-1 h-1 rounded-full"
                style={{ background: service.color }}
              />
              {detail}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`mt-4 inline-flex items-center gap-2 text-[9px] tracking-[2px] uppercase transition-all duration-500 ${
            isHovered ? 'text-[#C9A84C] opacity-100' : 'text-[#7A7860] opacity-0'
          }`}
        >
          Learn More
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
