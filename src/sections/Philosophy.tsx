import { useEffect, useRef, useState } from 'react';

// Design Spiral steps data
const SPIRAL_STEPS = [
  { key: 'define',    label: 'DEFINE',    num: '01', tagline: 'The human challenge first',       angle: -90,  color: '#C9A84C' },
  { key: 'biologize', label: 'BIOLOGIZE', num: '02', tagline: 'Ask how nature solves it',        angle: -30,  color: '#E2C97A' },
  { key: 'discover',  label: 'DISCOVER',  num: '03', tagline: 'Find the natural model',          angle: 30,   color: '#B8C4C4' },
  { key: 'abstract',  label: 'ABSTRACT',  num: '04', tagline: 'Extract the principle',           angle: 90,   color: '#8AAF90' },
  { key: 'emulate',   label: 'EMULATE',   num: '05', tagline: 'Build the technology',            angle: 150,  color: '#6B8C72' },
  { key: 'evaluate',  label: 'EVALUATE',  num: '06', tagline: 'Measure against life',            angle: 210,  color: '#C9A84C' },
];

const STEP_DETAILS: Record<string, { title: string; nature: string; desc: string }> = {
  define: {
    title: 'Define',
    nature: 'The Human Challenge',
    desc: 'Before any technology enters the conversation, we sit with the human problem. What does your audience actually need? What friction exists? What does success feel like — not measure, feel?'
  },
  biologize: {
    title: 'Biologize',
    nature: 'Ask: How does nature solve this?',
    desc: 'We translate the problem into biological terms. A client wanting better customer communication isn\'t a tech problem — it\'s a trust-signal problem. How do organisms signal safety? How does warmth travel?'
  },
  discover: {
    title: 'Discover',
    nature: 'Find the Natural Model',
    desc: 'Research the natural strategies that solve the biologized problem. Mycelium networks informing AI architecture. Bird murmuration informing crowd navigation UX. Nature has solved everything already.'
  },
  abstract: {
    title: 'Abstract',
    nature: 'Extract the Core Principle',
    desc: 'Distill the natural strategy to its transferable principle — stripped of biology, ready for design. Not "how a bee builds a hive" but "distributed intelligence with no central authority."'
  },
  emulate: {
    title: 'Emulate',
    nature: 'Build the Technology',
    desc: 'Design and build using the abstracted principle as guiding logic. AI conversation flows, UX architecture, spatial systems — all designed to mimic the natural strategy at a functional level.'
  },
  evaluate: {
    title: 'Evaluate',
    nature: 'Measure Against Life',
    desc: 'Does it feel natural? Does it reduce friction? Does it trust the human? We evaluate against the standard of the natural model — and we spiral again, deeper, until the answer is yes.'
  }
};

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

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

  // SVG spiral calculations
  const CX = 250;
  const CY = 250;
  const R_CENTER = 45;
  const R_INNER = 95;
  const R_MID = 160;
  const R_OUTER = 220;
  const R_NODE = 220;

  const deg = (d: number) => d * Math.PI / 180;
  const pt = (cx: number, cy: number, r: number, angleDeg: number) => ({
    x: cx + r * Math.cos(deg(angleDeg)),
    y: cy + r * Math.sin(deg(angleDeg)),
  });

  // Build golden spiral path
  const buildSpiralPath = () => {
    const turns = 1.75;
    const numPts = 200;
    const totalAngle = turns * 2 * Math.PI;
    const pts = [];
    for (let i = 0; i <= numPts; i++) {
      const t = i / numPts;
      const theta = totalAngle * t;
      const r = R_MID * t;
      const a = theta - Math.PI / 2;
      pts.push({ x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) });
    }
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}`;
    }
    return d;
  };

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#1A1C18] overflow-hidden"
    >
      {/* Bioluminescent background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 15% 60%, rgba(74,94,79,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 85% 25%, rgba(201,168,76,0.09) 0%, transparent 50%),
              radial-gradient(ellipse 50% 35% at 55% 92%, rgba(107,140,114,0.08) 0%, transparent 50%)
            `
          }}
        />
        {/* Fine organic mesh */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle 1px at 1px 1px, rgba(201,168,76,0.09) 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            The Infinite Spaces Method
          </span>
          
          <h2 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#F7F3EC] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            WHERE TECHNOLOGY AND HUMANITY
            <br />
            <span className="text-gradient-chrome">EVOLVE TOGETHER</span>
          </h2>
          
          <div 
            className={`w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p 
            className={`text-sm text-[#E4D9C4]/50 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Infinite Spaces specializes in Experience Design & Tech Strategy Consulting. We harness the wisdom of nature and use it to help us solve your biggest problems. Nature has 3.8 billion years of design R&D. Every enduring technology — neural networks, distributed systems, adaptive interfaces — was modelled on a natural pattern. We call this approach the Design Spiral.
          </p>
        </div>

        {/* Design Spiral */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Spiral SVG */}
          <div 
            className={`relative transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              {/* Glow effect */}
              <div 
                className="absolute inset-[-20px] rounded-full animate-breathe-slow"
                style={{
                  background: 'radial-gradient(circle, rgba(74,94,79,0.1) 0%, transparent 65%)'
                }}
              />
              
              <svg viewBox="0 0 500 500" className="w-full h-full" style={{ overflow: 'visible' }}>
                <defs>
                  {/* Gradients */}
                  <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F0DFA0" />
                    <stop offset="40%" stopColor="#E2C97A" />
                    <stop offset="100%" stopColor="#A8863A" />
                  </linearGradient>
                  <radialGradient id="gCenter" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(247,243,236,0.10)" />
                    <stop offset="70%" stopColor="rgba(247,243,236,0.04)" />
                    <stop offset="100%" stopColor="rgba(247,243,236,0.0)" />
                  </radialGradient>
                  <filter id="fGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer fill */}
                <circle cx={CX} cy={CY} r={R_OUTER + 6} fill="url(#gCenter)" opacity="0.5" />
                
                {/* Outer ring */}
                <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="rgba(201,168,76,0.22)" strokeWidth="1.5" />
                
                {/* Middle ring */}
                <circle cx={CX} cy={CY} r={R_MID} fill="none" stroke="rgba(107,140,114,0.25)" strokeWidth="1" />
                
                {/* Inner dashed ring */}
                <circle cx={CX} cy={CY} r={R_INNER} fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeDasharray="5 4" />

                {/* Segment wedges */}
                {SPIRAL_STEPS.map((step) => {
                  const a1 = step.angle;
                  const a2 = step.angle + 60;
                  const o1 = pt(CX, CY, R_OUTER, a1);
                  const o2 = pt(CX, CY, R_OUTER, a2);
                  const i1 = pt(CX, CY, R_INNER, a1);
                  const i2 = pt(CX, CY, R_INNER, a2);
                  const isActive = activeStep === step.key || hoveredStep === step.key;
                  
                  return (
                    <path
                      key={step.key}
                      d={`M ${i1.x.toFixed(2)} ${i1.y.toFixed(2)} L ${o1.x.toFixed(2)} ${o1.y.toFixed(2)} A ${R_OUTER} ${R_OUTER} 0 0 1 ${o2.x.toFixed(2)} ${o2.y.toFixed(2)} L ${i2.x.toFixed(2)} ${i2.y.toFixed(2)} A ${R_INNER} ${R_INNER} 0 0 0 ${i1.x.toFixed(2)} ${i1.y.toFixed(2)} Z`}
                      fill={isActive ? `rgba(201,168,76,0.12)` : `rgba(201,168,76,0.04)`}
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredStep(step.key)}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => setActiveStep(step.key)}
                    />
                  );
                })}

                {/* Spoke lines */}
                {SPIRAL_STEPS.map(step => {
                  const inner = pt(CX, CY, R_CENTER + 2, step.angle);
                  const outer = pt(CX, CY, R_OUTER, step.angle);
                  return (
                    <line
                      key={`spoke-${step.key}`}
                      x1={inner.x.toFixed(2)} y1={inner.y.toFixed(2)}
                      x2={outer.x.toFixed(2)} y2={outer.y.toFixed(2)}
                      stroke="rgba(247,243,236,0.15)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Golden spiral */}
                <path d={buildSpiralPath()} stroke="url(#gGold)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
                
                {/* Inner echo spiral */}
                <path 
                  d={buildSpiralPath().replace(/L\s+[\d.]+\s+[\d.]+/g, (m, i) => i < 100 ? m : '')} 
                  stroke="rgba(201,168,76,0.15)" 
                  strokeWidth="1" 
                  fill="none" 
                  strokeLinecap="round" 
                />

                {/* Center disc */}
                <circle cx={CX} cy={CY} r={R_CENTER} fill="url(#gCenter)" stroke="rgba(201,168,76,0.45)" strokeWidth="1.5" />
                
                {/* Center text */}
                <text x={CX} y={CY - 8} textAnchor="middle" fontSize="8" letterSpacing="3" fill="rgba(247,243,236,0.65)" fontFamily="'Tenor Sans', serif">
                  INFINITE
                </text>
                <text x={CX} y={CY + 6} textAnchor="middle" fontSize="8" letterSpacing="3" fill="rgba(247,243,236,0.65)" fontFamily="'Tenor Sans', serif">
                  SPACES
                </text>
                <text x={CX} y={CY + 20} textAnchor="middle" fontSize="6" letterSpacing="2" fill="rgba(201,168,76,0.5)" fontFamily="'DM Sans', sans-serif">
                  Design Spiral
                </text>

                {/* Step labels */}
                {SPIRAL_STEPS.map(step => {
                  const midAngle = step.angle + 30;
                  const lp = pt(CX, CY, 190, midAngle);
                  let rotation = midAngle + 90;
                  if (midAngle > 90 && midAngle < 270) rotation += 180;
                  if (midAngle >= 120 && midAngle <= 240) rotation = midAngle - 90;
                  
                  return (
                    <g key={`label-${step.key}`} transform={`translate(${lp.x.toFixed(2)}, ${lp.y.toFixed(2)}) rotate(${rotation.toFixed(1)})`}>
                      <text x={0} y={-6} textAnchor="middle" fontSize="6" letterSpacing="2" fill={step.color} opacity="0.65" fontFamily="'DM Sans', sans-serif">
                        {step.num}
                      </text>
                      <text x={0} y={6} textAnchor="middle" fontSize="9" letterSpacing="2" fill={step.color} opacity="0.9" fontFamily="'Tenor Sans', serif">
                        {step.label}
                      </text>
                    </g>
                  );
                })}

                {/* Nodes */}
                {SPIRAL_STEPS.map((step, i) => {
                  const np = pt(CX, CY, R_NODE, step.angle);
                  const isActive = activeStep === step.key || hoveredStep === step.key;
                  const delay = i * 0.4;
                  
                  return (
                    <g 
                      key={`node-${step.key}`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredStep(step.key)}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => setActiveStep(step.key)}
                    >
                      {/* Glow ring */}
                      <circle 
                        cx={np.x.toFixed(2)} cy={np.y.toFixed(2)} r="26" 
                        fill={`rgba(201,168,76,${isActive ? 0.15 : 0})`}
                        stroke={step.color}
                        strokeWidth={isActive ? 1 : 0}
                        opacity={isActive ? 1 : 0}
                        className="transition-all duration-300"
                      />
                      {/* Main node */}
                      <circle 
                        cx={np.x.toFixed(2)} cy={np.y.toFixed(2)} r="16" 
                        fill="rgba(26,28,24,0.95)"
                        stroke={step.color}
                        strokeWidth={isActive ? 2.5 : 1.5}
                        opacity={isActive ? 1 : 0.7}
                        className="transition-all duration-300"
                      />
                      {/* Inner dot with animation */}
                      <circle cx={np.x.toFixed(2)} cy={np.y.toFixed(2)} r="4" fill={step.color} opacity="0.8">
                        <animate attributeName="r" values="4;5.5;4" dur={`${3 + i * 0.3}s`} begin={`${delay}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;1;0.6" dur={`${3 + i * 0.3}s`} begin={`${delay}s`} repeatCount="indefinite" />
                      </circle>
                      {/* Step number */}
                      <text 
                        x={np.x.toFixed(2)} y={(np.y + 3).toFixed(2)} 
                        textAnchor="middle" 
                        fontSize="8" 
                        letterSpacing="0.5" 
                        fill={step.color} 
                        opacity="0.8"
                        pointerEvents="none"
                      >
                        {step.num}
                      </text>
                      {/* Hit area */}
                      <circle cx={np.x.toFixed(2)} cy={np.y.toFixed(2)} r="28" fill="transparent" />
                    </g>
                  );
                })}
              </svg>

              {/* Center tooltip */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mt-16">
                <div className="text-[9px] tracking-[4px] uppercase text-[#C9A84C] mb-1 font-medium">
                  {hoveredStep ? SPIRAL_STEPS.find(s => s.key === hoveredStep)?.num : activeStep ? SPIRAL_STEPS.find(s => s.key === activeStep)?.num : 'Explore'}
                </div>
                <div className="font-cormorant text-lg italic text-[#F7F3EC] mb-1">
                  {hoveredStep ? SPIRAL_STEPS.find(s => s.key === hoveredStep)?.label : activeStep ? SPIRAL_STEPS.find(s => s.key === activeStep)?.label : 'the Spiral'}
                </div>
                <div className="text-[10px] text-[#E4D9C4]/40">
                  {hoveredStep ? SPIRAL_STEPS.find(s => s.key === hoveredStep)?.tagline : activeStep ? SPIRAL_STEPS.find(s => s.key === activeStep)?.tagline : 'hover any node'}
                </div>
              </div>
            </div>
          </div>

          {/* Step Details Panel */}
          <div 
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-3">
              {SPIRAL_STEPS.map((step, index) => {
                const detail = STEP_DETAILS[step.key];
                const isActive = activeStep === step.key;
                const isHovered = hoveredStep === step.key;
                
                return (
                  <div
                    key={step.key}
                    onClick={() => setActiveStep(step.key)}
                    onMouseEnter={() => setHoveredStep(step.key)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`
                      p-5 cursor-pointer transition-all duration-300 border-l-[3px]
                      ${isActive ? 'bg-[#1A1C18] border-l-[#C9A84C]' : 'bg-transparent border-l-transparent hover:border-l-[#C9A84C]/50'}
                    `}
                    style={{ 
                      borderLeftColor: isActive ? step.color : isHovered ? `${step.color}50` : 'transparent',
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span 
                        className="font-cormorant text-3xl italic font-light leading-none transition-colors duration-300"
                        style={{ color: isActive ? step.color : `${step.color}40` }}
                      >
                        {step.num}
                      </span>
                      <div className="flex-1">
                        <h3 
                          className={`text-xs tracking-[3px] uppercase mb-1 transition-colors duration-300 ${
                            isActive ? 'text-[#F7F3EC]' : 'text-[#F7F3EC]/70'
                          }`}
                        >
                          {detail.title}
                        </h3>
                        <p className="text-[10px] text-[#C9A84C]/60 mb-2 flex items-center gap-2">
                          <span className="w-4 h-px bg-current opacity-50" />
                          {detail.nature}
                        </p>
                        <p 
                          className={`text-xs leading-relaxed transition-all duration-300 ${
                            isActive ? 'text-[#E4D9C4]/70 max-h-24 opacity-100' : 'text-[#E4D9C4]/40 max-h-0 opacity-0 overflow-hidden'
                          }`}
                        >
                          {detail.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div 
          className={`mt-20 text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
            <span className="text-[#C9A84C]/40 text-xl">&ldquo;</span>
          </div>
          <blockquote className="font-cormorant text-xl md:text-2xl italic text-[#F7F3EC]/80 leading-relaxed max-w-2xl mx-auto mb-4">
            &ldquo;The most profound technologies are those that <em className="text-[#8AAF90] not-italic">disappear</em> —<br />
            they weave themselves into the fabric of daily life<br />
            until they are indistinguishable from it.&rdquo;
          </blockquote>
          <p className="text-[9px] tracking-[4px] uppercase text-[#C9A84C] font-medium">
            Mark Weiser · The Computer for the 21st Century · 1991
          </p>
        </div>
      </div>
    </section>
  );
}
