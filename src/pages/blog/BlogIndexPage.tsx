import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, type BlogPost } from './blogData';

const categories = ['All', 'AI Strategy', 'Experience Design', 'Thought Leadership', 'Sustainability', 'AI'];

export default function BlogIndexPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Generate JSON-LD for blog listing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Infinite Spaces Insights',
    description: 'Thought leadership on technology, humanity, and the spaces where they intersect.',
    url: 'https://infinitespaces.ca/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Infinite Spaces',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infinitespaces.ca/assets/hero-logo.gif',
      },
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://infinitespaces.ca/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 md:py-32 bg-[#F7F3EC] overflow-hidden"
    >
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Organic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`
          }}
        />
        <div 
          className="absolute top-[15%] left-[8%] w-[350px] h-[300px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(74,94,79,0.06) 0%, transparent 65%)',
            filter: 'blur(45px)'
          }}
        />
      </div>

      <div className="container-padding max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-[#7A7860] hover:text-[#4A5E4F] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className={`text-[9px] tracking-[5px] uppercase text-[#C9A84C] font-medium mb-6 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Thought Leadership
          </span>
          
          <h1 
            className={`font-bungee text-3xl md:text-4xl lg:text-5xl text-[#1A1C18] leading-relaxed mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            INSIGHTS ON
            <br />
            <span className="text-gradient-gold font-bold">TECH & HUMANITY</span>
          </h1>
          
          <div 
            className={`w-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <p 
            className={`text-base text-[#1A1C18] font-light max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ideas that spread like mycelium — connecting, nourishing, and creating new pathways of understanding.
          </p>
        </div>

        {/* Search & Filter */}
        <div 
          className={`flex flex-col md:flex-row gap-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md mx-auto md:mx-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7860]" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#EEE7D8] border border-transparent focus:border-[#4A5E4F]/20 text-sm text-[#1A1C18] placeholder:text-[#7A7860]/50 outline-none transition-all"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-[10px] tracking-[2px] uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#4A5E4F] text-[#F7F3EC]'
                    : 'bg-[#EEE7D8] text-[#7A7860] hover:bg-[#4A5E4F]/10 hover:text-[#4A5E4F]'
                }`}
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p 
          className={`text-[10px] text-[#7A7860] mb-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </p>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <ArticleCard
              key={post.id}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#7A7860] mb-4">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-[10px] tracking-[2px] uppercase text-[#C9A84C] hover:text-[#4A5E4F] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Article Card Component
interface ArticleCardProps {
  post: BlogPost;
  index: number;
  isVisible: boolean;
}

function ArticleCard({ post, index, isVisible }: ArticleCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
    >
      <div 
        className="relative h-full p-6 bg-[#EEE7D8]/50 hover:bg-[#F7F3EC] border border-transparent hover:border-[#4A5E4F]/10 transition-all duration-500"
        style={{ 
          borderRadius: '24px 4px 24px 4px',
          boxShadow: '0 2px 8px rgba(26,28,24,0.04)',
        }}
      >
        {/* Category & Meta */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-2 py-1 text-[8px] tracking-[2px] uppercase text-[#C9A84C] bg-[#C9A84C]/10"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-[9px] text-[#7A7860]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base font-medium text-[#1A1C18] group-hover:text-[#4A5E4F] transition-colors mb-3 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-[#7A7860] leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-[9px] text-[#7A7860]/70"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#7A7860] group-hover:text-[#C9A84C] transition-colors">
          Read Article
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Hover glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)',
            borderRadius: '24px 4px 24px 4px'
          }}
        />
      </div>
    </Link>
  );
}
