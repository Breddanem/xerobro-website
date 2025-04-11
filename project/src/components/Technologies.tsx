import React from 'react';
import { Bot, Cpu, Workflow, Zap, Blocks } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Technologies = () => {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const technologies = [
    {
      icon: Bot,
      name: 'Voiceflow',
      description: 'Konversations-AI-design'
    },
    {
      icon: Cpu,
      name: 'OpenAI',
      description: 'Avancerade språkmodeller'
    },
    {
      icon: Zap,
      name: 'Instantly',
      description: 'Automatiserade utskick'
    },
    {
      icon: Workflow,
      name: 'Make',
      description: 'Arbetsflödesautomatisering'
    },
    {
      icon: Blocks,
      name: 'Bland.ai',
      description: 'Röst-AI-lösningar'
    }
  ];

  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={headerRef}
          className={`mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># TEKNIK_STACK</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Mjukvaror_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 transform transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <div 
                key={index} 
                className="group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover-glow flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-white/90 to-white/70 p-2 mb-4 glow-sm">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono glow-text">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;