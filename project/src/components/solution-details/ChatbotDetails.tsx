import React from 'react';
import { MessageCircle, Bot, Brain, BarChart3, ArrowRight } from 'lucide-react';
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

const ChatbotDetails = () => {
  return (
    <DetailLayout
      title="Chatbot-assistenter"
      subtitle="Implementera intelligenta chatbots som hanterar kundförfrågningar, guidar besökare och ökar konverteringar dygnet runt. Låt AI ta hand om den första kontakten medan ditt team fokuserar på kvalificerade leads."
      icon={MessageCircle}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Bot}
            title="Naturlig konversation"
            description="AI-driven dialoghantering som förstår kontext och levererar relevanta svar i realtid."
          />
          <FeatureCard
            icon={Brain}
            title="Smart inlärning"
            description="Kontinuerlig förbättring genom maskininlärning baserad på faktiska kundinteraktioner."
          />
          <FeatureCard
            icon={BarChart3}
            title="Konverteringsoptimering"
            description="Datadriven optimering av samtalsflöden för att maximera leads och försäljning."
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
          <MetricCard value="75%" label="Minskad svarstid" />
          <MetricCard value="40%" label="Ökad konvertering" />
          <MetricCard value="24/7" label="Tillgänglighet" />
          <MetricCard value="95%" label="Kundnöjdhet" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># SPECIFIKATIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Tekniska detaljer</h2>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">AI-funktioner</h3>
          <ul className="space-y-4">
            {[
              'Avancerad naturlig språkförståelse',
              'Kontextmedveten dialoghantering',
              'Dynamisk personalisering',
              'Flerspråkigt stöd',
              'Automatisk lead-kvalificering',
              'Smart ärendeeskalering',
              'Realtidsanalys och rapportering',
              'A/B-testning av samtalsflöden',
              'Integrationer med CRM och andra system'
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

export default ChatbotDetails;