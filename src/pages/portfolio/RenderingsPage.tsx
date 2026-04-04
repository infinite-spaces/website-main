import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Box, ExternalLink, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const renderings = [
  {
    id: 1,
    title: 'Elevated Skyline Lounge & Rooftop Patio',
    client: 'Commercial Hospitality',
    description: 'A stunning rooftop hospitality visualization featuring panoramic city views, elegant lounge seating, ambient lighting design, and seamless indoor-outdoor flow. The space captures the essence of elevated urban entertainment with sophisticated material palettes and atmospheric dusk lighting.',
    tags: ['Hospitality', 'Exterior', 'Lighting'],
    featured: true,
    images: [
      '/assets/portfolio/project-a-01.png',
      '/assets/portfolio/project-a-02.png',
      '/assets/portfolio/project-a-03.png',
      '/assets/portfolio/project-a-04.png',
    ],
  },
  {
    id: 2,
    title: 'Modern Charcoal Open-Concept Suite',
    client: 'Residential Interior',
    description: 'A contemporary residential visualization showcasing a sophisticated open-concept living space with charcoal and neutral tones. Features seamless kitchen-living integration, premium finishes, and natural light optimization for modern urban living.',
    tags: ['Residential', 'Interior', 'Modern'],
    featured: false,
    images: [
      '/assets/portfolio/project-b-01.jpg',
      '/assets/portfolio/project-b-02.jpg',
    ],
  },
  {
    id: 3,
    title: 'Contemporary Lakeside Villa',
    client: 'Residential Architecture',
    description: 'High-fidelity residential visualizations for a multi-story contemporary villa featuring expansive glass facades and open-air living spaces designed to maximize natural light and views of the surrounding environment.',
    tags: ['Residential', 'Architecture', 'Exterior'],
    featured: false,
    images: [
      '/assets/portfolio/project-c-01.jpg',
      '/assets/portfolio/project-c-02.jpg',
      '/assets/portfolio/project-c-03.jpg',
      '/assets/portfolio/project-c-04.jpg',
      '/assets/portfolio/project-c-05.jpg',
      '/assets/portfolio/project-c-06.jpg',
    ],
  },
  {
    id: 4,
    title: 'The Azure Development',
    client: 'Real Estate Developer Project',
    description: 'A comprehensive visualization suite for a 50 unit luxury condominium, showcasing both the striking modern exterior and high-fidelity interior suite designs optimized for market-leading real estate campaigns. The design prioritizes urban living, featuring a sophisticated glass-forward facade and expansive private balconies that offer panoramic views of the surrounding cityscape.',
    tags: ['Architecture', 'Multi-Residential', 'Interior'],
    featured: false,
    images: [
      '/assets/portfolio/project-d-01.png',
      '/assets/portfolio/project-d-02.png',
      '/assets/portfolio/project-d-03.png',
    ],
  },
];

export default function RenderingsPage() {
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

  const featuredProject = renderings.find(r => r.featured);
  const otherProjects = renderings.filter(r => !r.featured);

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
          className="absolute top-[15%] right-[10%] w-[350px] h-[300px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)',
            filter: 'blur(45px)'
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
          <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C]">3D Renderings</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div 
              className="w-14 h-14 bg-[#C9A84C]/10 flex items-center justify-center mb-6"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              <Box className="w-6 h-6 text-[#C9A84C]" />
            </div>
            <h1 
              className={`font-bungee text-3xl md:text-4xl lg:text-5xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              3D RENDERINGS
            </h1>
            <p 
              className={`text-base text-[#1A1C18] font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Photorealistic visualizations that bring concepts to life—architecture, products, and spaces before they exist.
            </p>
          </div>
          <div 
            className={`text-right transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-4xl font-light text-[#C9A84C]">{renderings.length}</span>
            <p className="text-[10px] tracking-[3px] uppercase text-[#7A7860] mt-1">Projects</p>
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div 
            className={`mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-4 block">
              Featured Project
            </span>
            <ProjectCard 
              project={featuredProject} 
              isLarge 
              isHovered={hoveredItem === featuredProject.id}
              onHover={() => setHoveredItem(featuredProject.id)}
              onLeave={() => setHoveredItem(null)}
            />
          </div>
        )}

        {/* Project Grid */}
        <div>
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#7A7860] font-medium mb-6 block transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            More Renderings
          </span>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredItem === project.id}
                onHover={() => setHoveredItem(project.id)}
                onLeave={() => setHoveredItem(null)}
                delay={500 + index * 100}
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
    images: string[];
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

  // Auto-rotate images when hovered and multiple images exist
  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isHovered, hasMultipleImages, project.images.length]);

  // Reset image index when hover ends
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % project.images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, project.images.length]);

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
          ${isLarge ? 'h-[400px] md:h-[500px]' : 'h-[280px]'}
        `}
        style={{ 
          borderRadius: '24px 4px 24px 4px',
          boxShadow: isHovered 
            ? '0 12px 40px rgba(201,168,76,0.15), 0 4px 12px rgba(26,28,24,0.08)' 
            : '0 2px 8px rgba(26,28,24,0.04)',
        }}
      >
        {/* Image or Placeholder */}
        {hasImages ? (
          <div className="absolute inset-0">
            {project.images.map((img, idx) => (
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C18]/30 via-transparent to-transparent" />
          </div>
        ) : (
          /* Placeholder for 3D rendering - organic gradient */
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, #E4D9C4 0%, #EEE7D8 50%, #C9A84C10 100%)`
            }}
          >
            <div 
              className="text-center p-8"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              <svg 
                className={`mx-auto text-[#C9A84C]/30 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
                width={isLarge ? 80 : 48}
                height={isLarge ? 80 : 48}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <p className="text-[10px] tracking-[3px] uppercase text-[#7A7860]/50 mt-4">3D Rendering</p>
            </div>
          </div>
        )}

        {/* Image indicators for multiple images */}
        {hasMultipleImages && (
          <div 
            className={`
              absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5
              transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'bg-[#C9A84C] w-4' 
                    : 'bg-[#F7F3EC]/60 hover:bg-[#F7F3EC]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay on hover */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-t from-[#1A1C18]/95 via-[#1A1C18]/70 to-[#1A1C18]/20
            transition-opacity duration-500 flex flex-col justify-end p-6
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-[8px] tracking-[2px] uppercase text-[#C9A84C] bg-[#C9A84C]/20"
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
            {hasImages && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                  setLightboxIndex(0);
                }}
                className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#C9A84C] hover:text-[#E2C97A] transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Project
              </button>
            )}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Scroll to description or show details modal
                alert(project.description);
              }}
              className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#7A7860] hover:text-[#F7F3EC] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Details
            </button>
          </div>
        </div>

      </div>

      {/* Title below card (visible when not hovered) */}
      <div className={`mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-sm font-medium text-[#1A1C18]">{project.title}</h3>
        <p className="text-xs text-[#7A7860]">{project.client}</p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && hasImages && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A0A0F]/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-[#F7F3EC] hover:text-[#C9A84C] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Image counter */}
          <div className="absolute top-6 left-6 text-[#F7F3EC] text-sm tracking-wider">
            {lightboxIndex + 1} / {project.images.length}
          </div>
          
          {/* Main image */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} - view ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
          
          {/* Navigation arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#F7F3EC] hover:text-[#C9A84C] transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % project.images.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#F7F3EC] hover:text-[#C9A84C] transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          
          {/* Thumbnail navigation */}
          {hasMultipleImages && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === lightboxIndex 
                      ? 'bg-[#C9A84C] w-6' 
                      : 'bg-[#F7F3EC]/40 hover:bg-[#F7F3EC]/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
