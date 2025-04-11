import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import type { LucideIcon } from 'lucide-react';

interface DetailLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader title={title} />
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg" />
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 mb-8 relative group">
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Icon className="h-16 w-16 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Content Container with Max Width for Better Readability */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-20">
              {/* Section Headers */}
              <style>
                {`
                  .section-header {
                    position: relative;
                    margin-bottom: 2.5rem;
                    padding-bottom: 1rem;
                  }
                  .section-header::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 6rem;
                    height: 2px;
                    background: linear-gradient(to right, rgba(255,255,255,0.5), transparent);
                  }
                  .feature-card {
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(8px);
                  }
                  .feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
                  }
                  .feature-card::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
                  }
                  .metric-card {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
                  }
                  .metric-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.5s ease;
                  }
                  .metric-card:hover::before {
                    transform: translateX(100%);
                  }
                  .downside-card {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, rgba(239,68,68,0.1), transparent);
                    border: 1px solid rgba(239,68,68,0.2);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                  }
                  .downside-card:hover {
                    background: linear-gradient(135deg, rgba(239,68,68,0.15), transparent);
                    border-color: rgba(239,68,68,0.3);
                    transform: translateY(-2px);
                  }
                  .downside-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent, rgba(239,68,68,0.05), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.5s ease;
                  }
                  .downside-card:hover::before {
                    transform: translateX(100%);
                  }
                  .manual-process-section {
                    position: relative;
                    padding: 2rem;
                    background: linear-gradient(135deg, rgba(239,68,68,0.05), transparent);
                    border-radius: 1rem;
                    overflow: hidden;
                  }
                  .manual-process-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(239,68,68,0.3), transparent);
                  }
                  .manual-process-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, transparent, rgba(239,68,68,0.2), transparent);
                  }
                `}
              </style>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;