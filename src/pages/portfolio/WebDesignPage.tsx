import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Monitor, ExternalLink, Eye, Layers, Palette, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const webProjects = [
  {
    id: 1,
    title: 'Detroit Fleet Pro | Digital Brand Ecosystem',
    client: 'Detroit Fleet Pro',
    description: 'A comprehensive digital transformation for a premier commercial fleet service provider. Features high-impact hero UI with bold typography, industrial brand identity with safety yellow/orange palette, responsive service architecture for fleet managers, and integrated social marketing templates.',
    tags: ['Web Design', 'UI/UX', 'Brand Strategy'],
    services: ['Brand Strategy', 'Web Design', 'UI/UX', 'Digital Marketing'],
    featured: true,
    images: [
      '/assets/portfolio/dfp-web-01.png',
      '/assets/portfolio/dfp-web-02.png',
      '/assets/portfolio/dfp-web-03.png',
      '/assets/portfolio/dfp-web-04.png',
      '/assets/portfolio/dfp-web-05.png',
      '/assets/portfolio/dfp-web-06.png',
      '/assets/portfolio/dfp-web-07.png',
      '/assets/portfolio/dfp-web-08.png',
      '/assets/portfolio/dfp-01.png',
      '/assets/portfolio/dfp-02.png',
      '/assets/portfolio/dfp-03.png',
      '/assets/portfolio/dfp-04.png',
      '/assets/portfolio/dfp-05.png',
    ],
    previewLink: '/case-studies/detroit-fleet-pro.html',
    visitLink: 'https://detroitfleetpro.com',
  },
  {
    id: 2,
    title: 'A Universe: Web Development & Internal Brand Deployment',
    client: 'Jazmine Mackenzie',
    description: '"Self-contained, still expanding, containing everything." A custom-engineered digital environment built to host a multi-disciplinary career. From generative background algorithms to high-performance Netlify deployment, this project is a living testament to the intersection of code, strategy, and design.',
    tags: ['UX Engineering', 'Front-end Dev', 'Brand Systems'],
    services: ['UX Engineering', 'Front-end Dev', 'Brand Systems'],
    featured: true,
    previewLink: '/case-studies/a-universe.html',
    visitLink: 'https://jazminemackenzie.com',
  },
];

const capabilities = [
  { icon: Layers, title: 'Design Systems', description: 'Scalable component libraries' },
  { icon: Palette, title: 'Brand Identity', description: 'Cohesive visual language' },
  { icon: Smartphone, title: 'Responsive Design', description: 'All devices, one experience' },
  { icon: Eye, title: 'Accessibility', description: 'WCAG-compliant interfaces' },
];

export default function WebDesignPage() {
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

  const featuredProjects = webProjects.filter(p => p.featured);
  const otherProjects = webProjects.filter(p => !p.featured);

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
          className="absolute bottom-[15%] left-[8%] w-[280px] h-[240px] animate-breathe"
          style={{ 
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            background: 'radial-gradient(circle, rgba(184,196,196,0.1) 0%, transparent 60%)',
            filter: 'blur(35px)',
            animationDelay: '2s'
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
          <span className="text-[10px] tracking-[3px] uppercase text-[#B8C4C4]">UI & UX Web Design</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div 
              className="w-14 h-14 bg-[#B8C4C4]/20 flex items-center justify-center mb-6"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              <Monitor className="w-6 h-6 text-[#7A8888]" />
            </div>
            <h1 
              className={`font-bungee text-3xl md:text-4xl lg:text-5xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              UI & UX WEB DESIGN
            </h1>
            <p 
              className={`text-base text-[#1A1C18] font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Human-centered digital experiences that balance beauty with function—designed to connect, convert, and inspire.
            </p>
          </div>
          <div 
            className={`text-right transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-4xl font-light text-[#7A8888]">{webProjects.length}</span>
            <p className="text-[10px] tracking-[3px] uppercase text-[#7A7860] mt-1">Projects</p>
          </div>
        </div>

        {/* Capabilities */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {capabilities.map((cap) => (
            <div 
              key={cap.title}
              className="p-4 bg-[#EEE7D8]/50 text-center"
              style={{ borderRadius: '16px 4px 16px 4px' }}
            >
              <cap.icon className="w-5 h-5 text-[#7A8888] mx-auto mb-2" />
              <p className="text-xs font-medium text-[#1A1C18]">{cap.title}</p>
              <p className="text-[10px] text-[#7A7860]">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#7A8888] font-medium mb-6 block transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Featured Projects
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isLarge
                isHovered={hoveredItem === project.id}
                onHover={() => setHoveredItem(project.id)}
                onLeave={() => setHoveredItem(null)}
                delay={500 + index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#7A7860] font-medium mb-6 block transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            More Web Projects
          </span>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredItem === project.id}
                onHover={() => setHoveredItem(project.id)}
                onLeave={() => setHoveredItem(null)}
                delay={600 + idx * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    client: string;
    description: string;
    tags: string[];
    services: string[];
    images?: string[];
    previewLink?: string;
    visitLink?: string;
  };
  isLarge?: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay?: number;
  isVisible?: boolean;
}

function ProjectCard({ project, isLarge, isHovered, onHover, onLeave, delay = 0, isVisible = true }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

  // Auto-rotate images when hovered and multiple images exist
  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isHovered, hasMultipleImages, project.images?.length]);

  // Reset image index when hover ends
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

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
          relative bg-[#EEE7D8] overflow-hidden transition-all duration-500
          ${isLarge ? 'h-[350px] md:h-[400px]' : 'h-[280px]'}
        `}
        style={{ 
          borderRadius: '24px 4px 24px 4px',
          boxShadow: isHovered 
            ? '0 12px 40px rgba(184,196,196,0.2), 0 4px 12px rgba(26,28,24,0.06)' 
            : '0 2px 8px rgba(26,28,24,0.04)',
        }}
      >
        {/* Browser chrome mockup with image or placeholder */}
        <div className="absolute inset-4 md:inset-6 bg-[#1A1C18] overflow-hidden" style={{ borderRadius: '8px 8px 4px 4px' }}>
          {/* Browser header */}
          <div className="h-6 md:h-8 bg-[#2A2C28] flex items-center px-3 gap-1.5 z-10 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#4A5E4F]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#7A7860]/40" />
            <div className="flex-1 mx-4">
              <div className="h-4 bg-[#3A3C38] rounded-full max-w-[200px] mx-auto" />
            </div>
          </div>
          {/* Content area - image or organic gradient */}
          <div 
            className="relative flex-1 h-[calc(100%-24px)] md:h-[calc(100%-32px)] overflow-hidden"
            style={{
              background: hasImages ? 'transparent' : `linear-gradient(135deg, #E4D9C4 0%, #EEE7D8 50%, #B8C4C410 100%)`
            }}
          >
            {hasImages ? (
              <>
                {project.images!.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} - view ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C18]/20 via-transparent to-transparent pointer-events-none" />
              </>
            ) : (
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <Monitor 
                    className={`mx-auto text-[#7A8888]/30 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
                    size={isLarge ? 64 : 40}
                  />
                  <p className="text-[9px] tracking-[3px] uppercase text-[#7A7860]/50 mt-3">Web Design</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image indicators for multiple images */}
        {hasMultipleImages && (
          <div 
            className={`
              absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20
              transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {project.images!.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'bg-[#B8C4C4] w-4' 
                    : 'bg-[#F7F3EC]/60 hover:bg-[#F7F3EC]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay on hover */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-t from-[#1A1C18]/95 via-[#1A1C18]/70 to-transparent
            transition-opacity duration-500 flex flex-col justify-end p-6
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-[8px] tracking-[2px] uppercase text-[#B8C4C4] bg-[#B8C4C4]/20"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className={`font-medium text-[#F7F3EC] mb-2 ${isLarge ? 'text-xl' : 'text-base'}`}>
            {project.title}
          </h3>
          <p className="text-xs text-[#E4D9C4]/70 mb-3">{project.client}</p>
          <p className={`text-sm text-[#E4D9C4]/60 leading-relaxed mb-4 ${isLarge ? 'max-w-md' : ''}`}>
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            {project.previewLink ? (
              <a 
                href={project.previewLink}
                className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#B8C4C4] hover:text-[#F7F3EC] transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </a>
            ) : (
              <button 
                className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#B8C4C4] hover:text-[#F7F3EC] transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            )}
            {project.visitLink ? (
              <a 
                href={project.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#7A7860] hover:text-[#F7F3EC] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Site
              </a>
            ) : (
              <button 
                className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#7A7860] hover:text-[#F7F3EC] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Site
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Services below card */}
      <div className={`mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-sm font-medium text-[#1A1C18]">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.services.map((service) => (
            <span key={service} className="text-[9px] text-[#7A7860]">{service}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
