import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, Lightbulb } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from './blogData';

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check if bookmarked
  useEffect(() => {
    if (post) {
      const bookmarks = JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(post.id));
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.relatedPosts);

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Infinite Spaces',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infinitespaces.ca/assets/hero-logo.gif',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    url: `https://infinitespaces.ca/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://infinitespaces.ca/blog/${post.slug}`,
    },
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
    if (isBookmarked) {
      const updated = bookmarks.filter((id: number) => id !== post.id);
      localStorage.setItem('blogBookmarks', JSON.stringify(updated));
    } else {
      bookmarks.push(post.id);
      localStorage.setItem('blogBookmarks', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const shareArticle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
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
          className="absolute top-[10%] right-[5%] w-[300px] h-[260px] animate-breathe-slow"
          style={{ 
            borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <article className="container-padding max-w-4xl mx-auto relative z-10">
        {/* Back Link */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link 
            to="/?section=blog"
            className="inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-[#7A7860] hover:text-[#4A5E4F] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category & Meta */}
          <div 
            className={`flex flex-wrap items-center gap-4 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span 
              className="px-3 py-1 text-[9px] tracking-[2px] uppercase text-[#C9A84C] bg-[#C9A84C]/10"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-[10px] text-[#7A7860]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} read
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 
            className={`font-bungee text-2xl md:text-3xl lg:text-4xl text-[#1A1C18] leading-relaxed mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p 
            className={`text-lg text-[#1A1C18]/70 font-light leading-relaxed italic transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {post.excerpt}
          </p>

          {/* Author & Actions */}
          <div 
            className={`flex items-center justify-between mt-8 pt-6 border-t border-[#4A5E4F]/10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 bg-[#4A5E4F]/10 flex items-center justify-center"
                style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
              >
                <span className="text-sm font-medium text-[#4A5E4F]">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1C18]">{post.author.name}</p>
                <p className="text-[10px] text-[#7A7860]">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={shareArticle}
                className="p-2 text-[#7A7860] hover:text-[#4A5E4F] hover:bg-[#4A5E4F]/5 transition-all duration-300"
                style={{ borderRadius: '50%' }}
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleBookmark}
                className={`p-2 transition-all duration-300 ${
                  isBookmarked 
                    ? 'text-[#C9A84C] bg-[#C9A84C]/10' 
                    : 'text-[#7A7860] hover:text-[#4A5E4F] hover:bg-[#4A5E4F]/5'
                }`}
                style={{ borderRadius: '50%' }}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p 
              key={index}
              className={`text-base text-[#1A1C18]/80 leading-relaxed mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Strategic Insights Box */}
        {post.insights.length > 0 && (
          <div 
            className={`my-12 p-8 bg-gradient-to-br from-[#4A5E4F]/5 to-[#C9A84C]/5 border border-[#4A5E4F]/10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ borderRadius: '24px 4px 24px 4px' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-[#C9A84C]" />
              <h2 className="text-sm font-medium text-[#1A1C18] tracking-wide">STRATEGIC INSIGHTS</h2>
            </div>
            <div className="space-y-6">
              {post.insights.map((insight, index) => (
                <div key={index} className="border-l-2 border-[#C9A84C]/30 pl-4">
                  <h3 className="text-xs font-semibold text-[#C9A84C] mb-2 tracking-wide">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[#1A1C18]/70 leading-relaxed">
                    {insight.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div 
          className={`flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-[#4A5E4F]/10 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Tag className="w-4 h-4 text-[#7A7860] mr-2" />
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-[9px] tracking-wider text-[#7A7860] bg-[#EEE7D8] hover:bg-[#4A5E4F]/10 hover:text-[#4A5E4F] cursor-pointer transition-colors"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 
              className={`text-[9px] tracking-[5px] uppercase text-[#7A7860] font-medium mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Related Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className={`group p-6 bg-[#EEE7D8]/50 hover:bg-[#F7F3EC] border border-transparent hover:border-[#4A5E4F]/10 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    borderRadius: '16px 4px 16px 4px',
                    transitionDelay: `${800 + index * 100}ms`
                  }}
                >
                  <span className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-2 block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-sm font-medium text-[#1A1C18] group-hover:text-[#4A5E4F] transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-[#7A7860] line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div 
          className={`mt-16 text-center p-8 bg-[#1A1C18] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ borderRadius: '24px 4px 24px 4px' }}
        >
          <h3 className="font-bungee text-lg text-[#F7F3EC] mb-3">
            WANT TO EXPLORE THESE IDEAS FURTHER?
          </h3>
          <p className="text-sm text-[#E4D9C4]/70 mb-6 max-w-md mx-auto">
            Let&apos;s discuss how these insights might apply to your organization&apos;s unique challenges.
          </p>
          <Link
            to="/?section=contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E2C97A] text-[#1A1C18] text-[10px] tracking-[3px] uppercase font-semibold hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300 hover:-translate-y-1"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          >
            Start a Conversation
          </Link>
        </div>
      </article>
    </section>
  );
}
