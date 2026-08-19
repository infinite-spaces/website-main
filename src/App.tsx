import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductBanner from './components/ProductBanner';
import Hero from './sections/Hero';
import AuditLanding from './sections/AuditLanding';
import Philosophy from './sections/Philosophy';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import PortfolioIndex from './pages/portfolio/PortfolioIndex';
import RenderingsPage from './pages/portfolio/RenderingsPage';
import CaseStudiesPage from './pages/portfolio/CaseStudiesPage';
import WebDesignPage from './pages/portfolio/WebDesignPage';
import BlogIndexPage from './pages/blog/BlogIndexPage';
import BlogArticlePage from './pages/blog/BlogArticlePage';

// Home page component with all sections
function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* AuditLanding Section */}
      <AuditLanding />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* About Section */}
      <About />

      {/* Blog Section */}
      <Blog />

      {/* Philosophy Section */}
      <Philosophy /> 

      {/* Contact Section */}
      <Contact />
    </main>
  );
}

// Portfolio layout with navigation and footer
function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Organic loading - like something growing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-6">
          {/* Organic pulsing loader */}
          <div 
            className="w-16 h-16 border border-gold/30 flex items-center justify-center animate-organic-pulse"
            style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%' }}
          >
            <div 
              className="w-8 h-8 bg-gold/20 animate-breathe"
              style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
            />
          </div>
          <span className="brand-caption text-sage/60 tracking-[0.3em]">Loading</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Product Banner - Lemon Squeezy Integration */}
      <ProductBanner />
      
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Navigation />
              <HomePage />
              <Footer />
            </>
          } 
        />
        
        {/* Portfolio Routes */}
        <Route 
          path="/portfolio" 
          element={
            <PortfolioLayout>
              <PortfolioIndex />
            </PortfolioLayout>
          } 
        />
        <Route 
          path="/portfolio/renderings" 
          element={
            <PortfolioLayout>
              <RenderingsPage />
            </PortfolioLayout>
          } 
        />
        <Route 
          path="/portfolio/case-studies" 
          element={
            <PortfolioLayout>
              <CaseStudiesPage />
            </PortfolioLayout>
          } 
        />
        <Route 
          path="/portfolio/web-design" 
          element={
            <PortfolioLayout>
              <WebDesignPage />
            </PortfolioLayout>
          } 
        />
        
        {/* Blog Routes */}
        <Route 
          path="/blog" 
          element={
            <PortfolioLayout>
              <BlogIndexPage />
            </PortfolioLayout>
          } 
        />
        <Route 
          path="/blog/:slug" 
          element={
            <PortfolioLayout>
              <BlogArticlePage />
            </PortfolioLayout>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
