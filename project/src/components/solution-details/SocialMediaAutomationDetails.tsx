import React from 'react';
import { Share2, Calendar, BarChart3, Zap, ArrowRight } from 'lucide-react';
import DetailLayout from '../DetailLayout';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="feature-card p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group">
    <div className="inline-block p-3 rounded-lg bg-white/10 mb-6 group-hover:bg-white/20 transition-all">
      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
    </div>
    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const MetricCard = ({ value, label }: { value: string, label: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group">
    <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const SocialMediaAutomationDetails = () => {
  return (
    <DetailLayout
      title="Sociala Medier-automation"
      subtitle="AI hanterar dina sociala medier genom att schemalägga inlägg, svara på kommentarer och analysera statistik – allt helt automatiskt. Håll dig aktiv utan att lägga timmar på det!"
      icon={Share2}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Calendar}
            title="Smart schemaläggning"
            description="AI-optimerade publiceringsscheman över flera plattformar för att maximera räckvidd och engagemang."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analysdashboard"
            description="Omfattande prestandaspårning och publikinsikter över alla sociala kanaler."
          />
          <FeatureCard
            icon={Zap}
            title="Engagemangsautomatisering"
            description="Intelligent interaktionshantering med automatiserade svar och engagemangsspårning."
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># MÄTVÄRDEN</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Prestandapåverkan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard value="85%" label="Tidsbesparing" />
          <MetricCard value="3X" label="Engagemangsfrekvens" />
          <MetricCard value="60%" label="Ökad räckvidd" />
          <MetricCard value="24/7" label="Aktiv hantering" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># SPECIFIKATIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Tekniska detaljer</h2>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Plattformsfunktioner</h3>
          <ul className="space-y-4">
            {[
              'Innehållsschemaläggning för flera plattformar',
              'AI-driven hashtagoptimering',
              'Automatiserade engagemangssvar',
              'Plattformsövergripande analys',
              'Innehållsprestandaspårning',
              'Publikväxtövervakning'
            ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </DetailLayout>
  );
};

export default SocialMediaAutomationDetails;