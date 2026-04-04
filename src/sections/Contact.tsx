import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Instagram, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('form-name', 'contact');
      formDataEncoded.append('name', formData.name);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('subject', formData.company || 'General Inquiry');
      formDataEncoded.append('message', formData.message);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Strategic Consulting',
    'Experience Design',
    'Workshops & Training',
    'Implementation Support',
    'Not sure yet',
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative w-full section-padding bg-sage overflow-hidden"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic blob */}
        <div 
          className="absolute top-[10%] right-[10%] w-[350px] h-[300px] bg-sage-light/20 animate-breathe-slow"
          style={{ borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%', filter: 'blur(60px)' }}
        />
        
        {/* Medium blob */}
        <div 
          className="absolute bottom-[15%] left-[8%] w-[280px] h-[240px] bg-gold/10 animate-breathe"
          style={{ borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%', filter: 'blur(50px)', animationDelay: '3s' }}
        />
        
        {/* Floating elements */}
        <div 
          className="absolute top-[40%] left-[15%] w-2 h-2 bg-gold-light/30 animate-breathe-float"
          style={{ borderRadius: '70% 30% 65% 35% / 35% 65% 35% 65%' }}
        />
        <div 
          className="absolute bottom-[30%] right-[12%] w-1.5 h-1.5 bg-cream/20 animate-breathe-float"
          style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', animationDelay: '4s' }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span 
            className={`brand-caption text-gold-light inline-block mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Get in Touch
          </span>
          
          {/* Bungee Hairline heading */}
          <h2 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed max-w-3xl mx-auto transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            READY TO CREATE
            <br />
            <span className="text-gold-light">INFINITE SOLUTIONS</span>?
          </h2>
          
          <div 
            className={`mt-8 flex justify-center transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="space-y-8">
              {/* Intro */}
              <div>
                <p className="text-cream/70 leading-relaxed mb-6">
                  Whether you&apos;re exploring AI adoption, redesigning a digital experience, or seeking clarity on your technology strategy — I&apos;d love to hear from you.
                </p>
                <p className="text-cream/50 text-sm italic">
                  Every great partnership starts with a conversation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a 
                  href="mailto:hello@infinitespaces.ca"
                  className="flex items-center gap-4 text-cream/70 hover:text-gold-light transition-colors duration-500 group"
                >
                  <div 
                    className="w-12 h-12 bg-sage-light/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-1">Email</p>
                    <p className="text-sm">hello@infinitespaces.ca</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-cream/70">
                  <div 
                    className="w-12 h-12 bg-sage-light/30 flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-1">Location</p>
                    <p className="text-sm">Windsor, Ontario, Canada</p>
                    <p className="text-sm text-cream/50 mt-1">Detroit, Michigan, USA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-4">Connect</p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/jazmine-hansen-b9a9613b3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sage-light/30 flex items-center justify-center text-cream/60 hover:bg-gold/20 hover:text-gold-light transition-all duration-500"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/infinite___spaces/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sage-light/30 flex items-center justify-center text-cream/60 hover:bg-gold/20 hover:text-gold-light transition-all duration-500"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6 border-t border-sage-light/30">
                <blockquote className="text-cream/50 text-sm italic">
                  &ldquo;Real problems. Human solutions.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <div 
              className="bg-cream/5 backdrop-blur-sm p-8 lg:p-10"
              style={{ borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%', border: '1px solid rgba(201, 168, 76, 0.1)' }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div 
                    className="w-16 h-16 bg-gold/20 flex items-center justify-center mx-auto mb-6"
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                  >
                    <CheckCircle className="w-8 h-8 text-gold-light" />
                  </div>
                  <h3 className="text-xl font-medium text-cream mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-cream/60 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Netlify form requirements */}
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream/10 border border-sage-light/30 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-500"
                        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream/10 border border-sage-light/30 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-500"
                        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream/10 border border-sage-light/30 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-500"
                        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                        placeholder="Your organization"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label htmlFor="service" className="block text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-sage border border-sage-light/30 text-cream focus:outline-none focus:border-gold/50 transition-all duration-500 appearance-none cursor-pointer"
                        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                      >
                        <option value="" className="bg-sage">Select a service</option>
                        {serviceOptions.map(option => (
                          <option key={option} value={option} className="bg-sage">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.2em] text-cream/40 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream/10 border border-sage-light/30 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-500 resize-none"
                      style={{ borderRadius: '20px' }}
                      placeholder="Tell me about your project, challenges, or goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
