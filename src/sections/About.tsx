import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full section-padding bg-cream-deep/30 overflow-hidden"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic blob */}
        <div 
          className="absolute top-[5%] right-[5%] w-[380px] h-[320px] bg-sage-mist/20 animate-breathe-slow"
          style={{ borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%', filter: 'blur(70px)' }}
        />
        
        {/* Medium blob */}
        <div 
          className="absolute bottom-[10%] left-[8%] w-[280px] h-[240px] bg-gold/10 animate-breathe"
          style={{ borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%', filter: 'blur(55px)', animationDelay: '3s' }}
        />
        
        {/* Floating elements */}
        <div 
          className="absolute top-[40%] left-[12%] w-2 h-2 bg-sage/30 animate-breathe-float"
          style={{ borderRadius: '70% 30% 65% 35% / 35% 65% 35% 65%' }}
        />
        <div 
          className="absolute bottom-[25%] right-[15%] w-1.5 h-1.5 bg-gold/40 animate-breathe-float"
          style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', animationDelay: '4s' }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span 
            className={`brand-caption text-gold inline-block mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            About the Designer
          </span>
          
          {/* Bungee Hairline heading */}
          <h2 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#1A1C18] font-bold leading-relaxed transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            MEET <span className="text-gradient-gold font-bold">JAZMINE HANSEN</span>
          </h2>
          
          {/* Logo */}
          <div 
            className={`mt-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img 
              src="/assets/logo-no-bg.png" 
              alt="Infinite Spaces Logo" 
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div 
            className={`relative transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="relative">
              {/* Main Image with organic shape */}
              <div 
                className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden"
                style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%' }}
              >
                <img 
                  src="/assets/headshot.jpg"
                  alt="Jazmine Hansen - Designer and Strategist"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent" />
              </div>

              {/* Decorative organic frame */}
              <div 
                className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 -z-10"
                style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%' }}
              />
              
              {/* Info badge */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-[#F7F3EC] px-6 py-3"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', boxShadow: '0 2px 12px rgba(26, 28, 24, 0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-[#1A1C18]">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>Windsor, Ontario<br/>Detroit, Michigan</span>
                  </div>
                  <div className="w-px h-8 bg-[#C9A84C]/30" />
                  <div className="flex items-center gap-1.5 text-[#1A1C18]">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>Est. 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            {/* Quote */}
            <div className="relative mb-8">
              <div 
                className="absolute -top-4 -left-2 w-10 h-10 bg-gold/10 flex items-center justify-center"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                <span className="text-gold/40 text-2xl font-light">&ldquo;</span>
              </div>
              <blockquote className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed pl-8 italic">
                I&apos;ve always seen the space between things, because that&apos;s exactly where the answer lives.
              </blockquote>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-charcoal/60 leading-relaxed">
              <p>
                Jazmine Hansen is a designer and strategist guiding people and organizations through the adoption of future-facing systems with intention, clarity, and care.
              </p>
              <p>
                With a background spanning experience design, technology strategy, organizational change, and the beauty industry, Jazmine brings a unique perspective to the intersection of human needs and technological possibility.
              </p>
              <p>
                Founded in 2023 in Windsor, Ontario, Infinite Spaces represents a commitment to making technology feel more human — creating systems that breathe, adapt, and serve the people who use them.
              </p>
            </div>

            {/* Divider */}
            <div className="my-8">
              <div className="divider-gold" />
            </div>

            {/* Approach */}
            <div>
              <h3 className="brand-caption text-sage mb-4">Approach</h3>
              <ul className="space-y-3">
                {[
                  'Human-centered design thinking',
                  'Emerging technology fluency',
                  'Strategic clarity and vision',
                  'Compassionate implementation',
                ].map((item) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 text-sm text-charcoal/60"
                  >
                    <div 
                      className="w-2 h-2 bg-gold/60"
                      style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a 
                href="#contact"
                className="btn-sage inline-flex items-center gap-2"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
