import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AuditLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="audit-landing" className="relative w-full bg-[#F7F3EC]">

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center container-padding mx-auto py-24 md:py-32">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-5 py-2.5 rounded-full mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="font-bungee text-[14px] tracking-[0.2em] font-bold uppercase text-gold">
            Complimentary · No Obligation
          </span>
        </div>

        <h2
          className={`font-bungee text-[clamp(42px,4vw,50px)] font-bold tracking-[-0.1em] [word-spacing:0.3em] leading-[0.8] text-[#1A1C18] max-w-3xl mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Your   business   is   leaving
          <br />
          <em className="text-[#C9A84C] text-[clamp(46px,4vw,72px)] [word-spacing:0.1em] tracking-tighter font-black italic">efficiency on the table,</em>
          <br />
          Let's   find  it.
        </h2>

        <p
          className={`text-[clamp(15px,1.5vw,18px)] [word-spacing:0.3em] font-light text-[#1A1C18]/65 leading-[1.85] max-w-xl mb-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          In 30 minutes, I'll identify where AI can eliminate your biggest operational drag — and
          show you exactly what's possible. No jargon. No pitch. Just clarity.
        </p>

        <p
          className={`text-sm text-[#1A1C18]/40 italic mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Takes one email to get started. I'll handle the rest.
        </p>

<button
  type="button"
  onClick={() => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-cream uppercase tracking-[0.25em] font-medium text-[10px] hover:bg-sage-light transition-all cursor-pointer"
  style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
>
  Request Your Complimentary AI Audit
  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
</button>
      </section>

      {/* ── VALUE CARDS ── */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-padding max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span
              className={`text-[13px] tracking-[5px] uppercase text-gold font-medium mb-6 block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              What You Walk Away With
            </span>
            <h2 
              className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#1A1C18] font-bold leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              NOT A SALES CALL,
              <br />
              <span className="text-gradient-gold font-bold">A STRATEGIC CONVERSATION.</span>
            </h2>
            <div
              className={`mt-8 flex justify-center transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '/assets/rapid-diagnosis.png',
                alt: 'Rapid Diagnosis',
                title: 'Rapid Diagnosis',
                body: 'I identify where your team is losing time and money to tasks AI could handle — based on your actual operations, not a template.',
              },
              {
                icon: '/assets/quick-wins.png',
                alt: 'Quick Wins First',
                title: 'Quick Wins First',
                body: "Every audit surfaces at least one thing you could implement this week. You'll leave with something actionable, not a 6-month roadmap.",
              },
              {
                icon: '/assets/stack-compatibility.png',
                alt: 'Stack Compatibility',
                title: 'Stack Compatibility',
                body: 'I assess what tools you already use and what AI fits seamlessly alongside them — no rip-and-replace, no disruption to what works.',
              },
              {
                icon: '/assets/clear-direction.png',
                alt: 'A Clear Picture',
                title: 'A Clear Picture',
                body: "You'll understand exactly what AI can and can't do for your specific business. Honest assessment. No hype. No fear-mongering either.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`group relative p-8 lg:p-10 bg-linen/40 border border-gold/10 hover:border-gold/25 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${700 + i * 100}ms`,
                  borderRadius: i % 2 === 0 ? '55% 45% 50% 50% / 45% 55% 45% 55%' : '45% 55% 60% 40% / 55% 45% 55% 45%',
                }}
              >
                <div className="mb-5 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="w-16 h-16 object-contain border border-gold/30 rounded-xl p-2 group-hover:border-gold/60 transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bungee text-[18px] tracking-[0.25em] font-bold uppercase text-gold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-charcoal/60 font-light leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* CTA to contact */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
<button
  type="button"
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-cream uppercase tracking-[0.25em] font-medium text-[10px] hover:bg-sage-light transition-all cursor-pointer"
  style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
>
  Get in Touch
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>          </div>
        </div>
      </section>

      {/* ── PROCESS TEASER ── */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-[#EEE7D8] overflow-hidden">
        <div className="container-padding max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span
              className={`text-[9px] tracking-[5px] uppercase text-gold font-medium mb-6 block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              How It Works
            </span>
<h2
  className={`font-bungee font-bold text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`}
>
  FROM AUDIT TO
  <br />
  <span className="text-gold font-bold">IMPLEMENTATION</span>
</h2>
            <p
              className={`text-charcoal/50 italic mt-4 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Without the chaos.
            </p>
            <div
              className={`flex justify-center transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>

<div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
  {/* Connecting Line (desktop) */}
  <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

  {[
    { num: '1', label: 'Free AI Audit\n30-min call' },
    { num: '2', label: 'Deep Dive\nRapid Audit' },
    { num: '3', label: 'Strategy Brief\nDelivered to You' },
    { num: '4', label: 'First Solution\nImplemented' },
    { num: '5', label: 'Forward Roadmap\n& Handoff' },
  ].map((step, i) => (
    <div
      key={step.num}
      className={`flex flex-col items-center gap-3 sm:flex-1 sm:max-w-[180px] sm:px-4 relative z-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${800 + i * 100}ms` }}
    >
      <div
        className="w-14 h-14 bg-cream border border-gold flex items-center justify-center"
        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
      >
<span className="font-cormorant text-2xl font-bold italic text-gold">{step.num}</span>
</div>
<span className="font-bungee text-[13px] sm:text-[14px] font-bold tracking-[0.15em] text-charcoal text-center leading-relaxed whitespace-pre-line">
  {step.label}
</span>
    </div>
  ))}
</div>

          {/* CTA to case studies */}
          <div
            className={`text-center mt-16 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
<button
  type="button"
  onClick={() => {
    window.location.hash = '/portfolio/case-studies';
  }}
  className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal uppercase tracking-[0.25em] font-medium text-[10px] hover:bg-gold-light transition-all cursor-pointer"
  style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
>
  View Case Studies
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>
          </div>
        </div>
      </section>
    </div>
  );
}