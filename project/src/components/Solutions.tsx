import React from 'react';
import { solutions } from '../data/solutions';
import SolutionCard from './SolutionCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Solutions = () => {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header with animated underline */}
        <div 
          ref={headerRef}
          className={`mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># LÖSNINGAR_MATRIS</span>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono">
                Alt. AI-lösningar_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4 relative">
                <div className="absolute inset-0 bg-white/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Solutions grid with animated background */}
        <div className="relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl blur-xl" />
          
          {/* Solutions grid - Updated to 3x3 on large screens */}
          <div 
            ref={gridRef}
            className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${
              gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`transform hover:translate-y-[-4px] transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <SolutionCard solution={solution} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;