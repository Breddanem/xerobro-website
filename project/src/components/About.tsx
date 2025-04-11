import React from 'react';
import { BrainCircuit, Gauge, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [feature1Ref, feature1Visible] = useIntersectionObserver<HTMLDivElement>();
  const [feature2Ref, feature2Visible] = useIntersectionObserver<HTMLDivElement>();
  const [feature3Ref, feature3Visible] = useIntersectionObserver<HTMLDivElement>();

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI-expertis',
      description: 'AI (Artificiell Intelligens) är en banbrytande teknologi som kan analysera data, identifiera mönster och utföra uppgifter med en hastighet och precision som överträffar mänsklig kapacitet. I princip kan AI göra nästan vad som helst – det är informationen och instruktionerna vi ger den som avgör dess kapacitet.'
    },
    {
      icon: Gauge,
      title: 'Effektivitetsfokus',
      description: 'Xerobro utnyttjar AI för att skapa effektiva lösningar som automatiserar monotona processer och minskar administrativt arbete för att sparar värdefull tid. Våra AI-drivna system kan hantera leadgenerering, kundsupport, orderflöde, sociala medier och mycket mer – allt för att hjälpa företag att arbeta smartare och fokusera på rätt saker.'
    },
    {
      icon: TrendingUp,
      title: 'Tillväxtdriven',
      description: 'Positionera ditt företag för framgång med AI-drivna lösningar och effektivisera era processer. Våra innovationer hjälper dig att automatisera monotona uppgifter, minska kostnader och fatta bättre beslut baserade på data. I en konkurrensutsatt marknad är smart automation nyckeln till ökad produktivitet och långsiktig framgång.'
    }
  ];

  const featureRefs = [feature1Ref, feature2Ref, feature3Ref];
  const featureVisibility = [feature1Visible, feature2Visible, feature3Visible];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with animated underline */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-white/70 inline-block mb-2"># OM_OSS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
            AI-automatisering_
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-white via-white/80 to-transparent mx-auto relative">
            <div className="absolute top-0 left-0 h-full w-full bg-white/50 animate-pulse"></div>
          </div>
        </div>

        {/* Main content with alternating layout */}
        <div className="flex flex-col space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                ref={featureRefs[index]}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 transform transition-all duration-1000 ${
                  featureVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icon container with animated glow */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-700"></div>
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content container with animated border */}
                <div className="w-full md:w-2/3">
                  <div className="p-8 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 relative overflow-hidden group">
                    {/* Animated corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 left-0 w-24 h-1 bg-white/50 origin-left transform -rotate-45 translate-y-6 group-hover:bg-white/80 transition-colors duration-300"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 font-mono">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    
                    {/* Animated hover line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/80 to-transparent group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;