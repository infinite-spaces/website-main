import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: 'scripting-ai-agents-human-touch',
    title: 'Scripting AI Agents that don\'t Upset the Human',
    excerpt: 'How organizations can embrace artificial intelligence without losing the human touch that makes their work meaningful.',
    category: 'AI Strategy',
    readTime: '5 min',
    date: 'Feb 2025',
    x: 15,
    y: 20,
    size: 'large',
  },
  {
    id: 2,
    slug: 'designing-trust-digital-systems',
    title: 'Designing for Trust in Digital Systems',
    excerpt: 'Trust is the foundation of every successful technology implementation.',
    category: 'Experience Design',
    readTime: '4 min',
    date: 'Jan 2025',
    x: 55,
    y: 35,
    size: 'medium',
  },
  {
    id: 3,
    slug: 'finding-clarity-technological-change',
    title: 'Finding Clarity in Technological Change',
    excerpt: 'When everything feels like it\'s moving too fast, here\'s how to find your footing.',
    category: 'Thought Leadership',
    readTime: '6 min',
    date: 'Dec 2024',
    x: 25,
    y: 60,
    size: 'medium',
  },
  {
    id: 4,
    slug: 'ai-and-the-planet',
    title: 'AI & The Planet',
    excerpt: 'The change does not depict the outcome. How we navigate it does. The same intelligence that costs the planet can also save it.',
    category: 'Sustainability',
    readTime: '3 min',
    date: 'Nov 2024',
    x: 70,
    y: 65,
    size: 'small',
  },
  {
    id: 5,
    slug: 'building-ai-feels-human',
    title: 'Building AI That Feels Human',
    excerpt: 'The principles behind conversational interfaces that connect.',
    category: 'AI',
    readTime: '7 min',
    date: 'Oct 2024',
    x: 80,
    y: 25,
    size: 'small',
  },
];

// Mycelium connection paths
const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 4 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 1, to: 3 },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [activeConnections, setActiveConnections] = useState<number[]>([]);

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

  // Update active connections when hovering
  useEffect(() => {
    if (hoveredPost === null) {
      setActiveConnections([]);
      return;
    }
    const connected = connections
      .filter(c => c.from === hoveredPost || c.to === hoveredPost)
      .map(c => c.from === hoveredPost ? c.to : c.from);
    setActiveConnections(connected);
  }, [hoveredPost]);

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#1A1C18] overflow-hidden"
    >
      {/* Mycelium network background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle glow orbs */}
        <div 
          className="absolute top-[20%] left-[10%] w-[400px] h-[350px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(74,94,79,0.12) 0%, transparent 60%)',
            filter: 'blur(50px)'
          }}
        />
        <div 
          className="absolute bottom-[20%] right-[15%] w-[350px] h-[300px] animate-breathe"
          style={{ 
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 55%)',
            filter: 'blur(45px)',
            animationDelay: '2s'
          }}
        />
        
        {/* Organic mesh */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle 1px at 1px 1px, rgba(201,168,76,0.06) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Webbed background - mycelium/neuron/vein pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <pattern id="webPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Mycelium-like branching lines */}
              <path d="M0 100 Q 50 80, 100 100 T 200 100" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" fill="none"/>
              <path d="M100 0 Q 80 50, 100 100 T 100 200" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" fill="none"/>
              <path d="M0 0 Q 100 50, 200 0" stroke="rgba(74,94,79,0.1)" strokeWidth="0.5" fill="none"/>
              <path d="M0 200 Q 100 150, 200 200" stroke="rgba(74,94,79,0.1)" strokeWidth="0.5" fill="none"/>
              {/* Node points */}
              <circle cx="100" cy="100" r="2" fill="rgba(201,168,76,0.2)"/>
              <circle cx="50" cy="50" r="1.5" fill="rgba(74,94,79,0.15)"/>
              <circle cx="150" cy="150" r="1.5" fill="rgba(74,94,79,0.15)"/>
              <circle cx="50" cy="150" r="1" fill="rgba(201,168,76,0.1)"/>
              <circle cx="150" cy="50" r="1" fill="rgba(201,168,76,0.1)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#webPattern)"/>
        </svg>
        
        {/* Organic flowing vein-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
          <path 
            d="M-100 200 C 100 150, 300 250, 500 200 S 900 150, 1100 200 S 1500 250, 1700 200" 
            stroke="rgba(201,168,76,0.2)" 
            strokeWidth="1" 
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M-100 400 C 150 350, 350 450, 600 400 S 950 350, 1200 400 S 1550 450, 1800 400" 
            stroke="rgba(74,94,79,0.15)" 
            strokeWidth="0.8" 
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M-100 600 C 200 550, 400 650, 700 600 S 1000 550, 1300 600 S 1600 650, 1900 600" 
            stroke="rgba(201,168,76,0.12)" 
            strokeWidth="0.6" 
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Thought Leadership
          </span>
          
          <h2 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#F7F3EC] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            INSIGHTS ON
            <br />
            <span className="text-gradient-chrome">TECH & HUMANITY</span>
          </h2>
          
          <div 
            className={`w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p 
            className={`text-sm text-[#E4D9C4]/50 max-w-xl mx-auto leading-relaxed italic transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ideas that spread like mycelium — connecting, nourishing, 
            and creating new pathways of understanding.
          </p>
        </div>

        {/* Mycelium Network */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="myceliumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A5E4F" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4A5E4F" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection lines */}
            {connections.map((conn, i) => {
              const from = blogPosts[conn.from];
              const to = blogPosts[conn.to];
              const isActive = hoveredPost === conn.from || hoveredPost === conn.to;
              const isConnected = activeConnections.includes(conn.from) || activeConnections.includes(conn.to);
              
              return (
                <path
                  key={i}
                  d={`M ${from.x}% ${from.y}% Q ${(from.x + to.x) / 2}% ${(from.y + to.y) / 2 + 10}% ${to.x}% ${to.y}%`}
                  stroke={isActive ? '#C9A84C' : 'url(#myceliumGrad)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.8 : isConnected ? 0.5 : 0.2}
                  fill="none"
                  className="transition-all duration-500"
                  filter={isActive ? 'url(#glow)' : undefined}
                />
              );
            })}
            
            {/* Spore particles along paths */}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`spore-${i}`}
                r="2"
                fill="#C9A84C"
                opacity="0.4"
              >
                <animateMotion
                  dur={`${8 + i * 2}s`}
                  repeatCount="indefinite"
                  path={connections[i % connections.length] ? 
                    `M ${blogPosts[connections[i % connections.length].from].x}% ${blogPosts[connections[i % connections.length].from].y}% 
                     Q ${(blogPosts[connections[i % connections.length].from].x + blogPosts[connections[i % connections.length].to].x) / 2}% 
                       ${(blogPosts[connections[i % connections.length].from].y + blogPosts[connections[i % connections.length].to].y) / 2 + 10}% 
                       ${blogPosts[connections[i % connections.length].to].x}% ${blogPosts[connections[i % connections.length].to].y}%` : ''}
                />
              </circle>
            ))}
          </svg>

          {/* Blog Post Nodes */}
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                left: `${post.x}%`, 
                top: `${post.y}%`,
                transform: 'translate(-50%, -50%)',
                transitionDelay: `${400 + index * 120}ms`
              }}
              onMouseEnter={() => setHoveredPost(index)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <BlogNode 
                post={post} 
                isHovered={hoveredPost === index}
                isConnected={activeConnections.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Founder Quote */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div 
            className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-6"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            <span className="text-[#C9A84C]/40 text-2xl font-light">&ldquo;</span>
          </div>
          <blockquote className="font-cormorant text-xl md:text-2xl italic text-[#F7F3EC]/70 leading-relaxed max-w-2xl mx-auto mb-4">
            &ldquo;The future is not something that happens to us. 
            It is something we create, thoughtfully and together.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C9A84C]/30" />
            <cite className="text-xs text-[#E4D9C4]/50 not-italic tracking-wide">
              Jazmine Hansen, Founder
            </cite>
            <div className="w-8 h-px bg-[#C9A84C]/30" />
          </div>
          
          {/* View All Insights Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-[3px] uppercase hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            View All Insights
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Node Component
interface BlogNodeProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    size: string;
  };
  isHovered: boolean;
  isConnected: boolean;
}

function BlogNode({ post, isHovered, isConnected }: BlogNodeProps) {
  const sizeClasses = {
    large: 'w-72',
    medium: 'w-56',
    small: 'w-48',
  };

  return (
    <div 
      className={`
        ${sizeClasses[post.size as keyof typeof sizeClasses]}
        transition-all duration-500 cursor-pointer
      `}
    >
      {/* Node glow */}
      <div 
        className={`
          absolute inset-0 transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
          transform: 'scale(1.5)',
          filter: 'blur(20px)'
        }}
      />
      
      {/* Node content */}
      <div 
        className={`
          relative p-5 rounded-sm transition-all duration-500
          ${isHovered 
            ? 'bg-[#F7F3EC]/10 border border-[#C9A84C]/40' 
            : isConnected
              ? 'bg-[#F7F3EC]/5 border border-[#4A5E4F]/40'
              : 'bg-[#F7F3EC]/3 border border-[#4A5E4F]/20'
          }
        `}
      >
        {/* Category pill */}
        <span 
          className={`
            inline-block px-2 py-1 text-[8px] tracking-[2px] uppercase mb-3
            transition-all duration-300
            ${isHovered ? 'text-[#C9A84C] bg-[#C9A84C]/15' : 'text-[#7A7860] bg-[#4A5E4F]/20'}
          `}
          style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
        >
          {post.category}
        </span>
        
        {/* Title */}
        <h3 
          className={`
            text-sm font-medium leading-snug mb-2 transition-colors duration-300
            ${isHovered ? 'text-[#F7F3EC]' : 'text-[#E4D9C4]/80'}
          `}
        >
          {post.title}
        </h3>
        
        {/* Excerpt - show on hover */}
        <p 
          className={`
            text-xs text-[#E4D9C4]/50 leading-relaxed mb-3 transition-all duration-300
            ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}
          `}
        >
          {post.excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex items-center gap-3 text-[10px] text-[#7A7860]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        
        {/* Read more - show on hover */}
        <Link
          to={`/blog/${post.slug}`}
          className={`
            mt-3 inline-flex items-center gap-2 text-[9px] tracking-[2px] uppercase
            transition-all duration-300
            ${isHovered ? 'text-[#C9A84C] opacity-100' : 'text-[#7A7860] opacity-0'}
          `}
        >
          Read Article
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      {/* Connection point */}
      <div 
        className={`
          absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full
          transition-all duration-300
          ${isHovered ? 'bg-[#C9A84C] scale-150' : isConnected ? 'bg-[#4A5E4F]' : 'bg-[#4A5E4F]/50'}
        `}
      />
    </div>
  );
}
