import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A1C18]">
      {/* Full viewport hero GIF background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img 
          src="/assets/hero-logo.gif" 
          alt="Infinite Spaces" 
          className="w-full h-full max-w-[90vw] md:max-w-none object-cover md:object-cover object-[center_20%] scale-125 md:scale-100"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1C18]/30 via-transparent to-[#1A1C18]/50 pointer-events-none" />
      </div>
      
      {/* Organic floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic blob - breathing */}
        <div 
          className="absolute top-[15%] left-[8%] w-[280px] h-[240px] bg-[#4A5E4F]/10 animate-breathe-slow"
          style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', filter: 'blur(60px)' }}
        />
        
        {/* Medium organic blob */}
        <div 
          className="absolute bottom-[20%] right-[10%] w-[220px] h-[180px] bg-[#C9A84C]/8 animate-breathe"
          style={{ borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%', filter: 'blur(50px)', animationDelay: '2s' }}
        />
        
        {/* Small seed shapes - floating */}
        <div 
          className="absolute top-[35%] right-[20%] w-3 h-3 bg-[#C9A84C]/30 animate-breathe-float"
          style={{ borderRadius: '70% 30% 65% 35% / 35% 65% 35% 65%' }}
        />
        <div 
          className="absolute bottom-[30%] left-[18%] w-2 h-2 bg-[#4A5E4F]/40 animate-breathe-float"
          style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', animationDelay: '3s' }}
        />
      </div>
      
      {/* Content Container - Logo at top */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full py-12 px-6 w-full">
        


        {/* Tagline - centered */}
        <div 
          className={`text-center transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-bungee text-[#F7F3EC]/90 text-xs md:text-sm tracking-[0.35em] drop-shadow-lg">
            NAVIGATING EMERGING TECHNOLOGIES IN SERVICE OF HUMANITY
          </p>
        </div>

        {/* Three Buttons at bottom */}
        <div 
          className={`flex flex-wrap justify-center gap-4 md:gap-6 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Read Insights - Blog */}
          <a 
            href="#blog"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9EACAC] to-[#B8C4C4] text-[#1A1C18] text-[10px] tracking-[3px] uppercase font-medium rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            Read Insights
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Start a Conversation - Contact */}
          <a 
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#E2C97A] text-[#1A1C18] text-[10px] tracking-[3px] uppercase font-medium rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            Start a Conversation
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Explore Work - Portfolio */}
          <a 
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] tracking-[3px] uppercase font-medium rounded-sm hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-500"
          >
            Explore Work
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
