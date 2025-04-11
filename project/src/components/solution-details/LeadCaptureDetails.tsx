import React from 'react';
import { BrainCircuit, Target, BarChart3, Users, ArrowRight } from 'lucide-react';
import DetailLayout from '../DetailLayout';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="feature-car d p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group">
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

const LeadCaptureDetails = () => {
  return (
    <DetailLayout
      title="Avancerat Leadgenereringssystem"
      subtitle="Att hitta nya kunder tar tid, men vårt AI-drivna system gör det enkelt. Genom smarta formulär, chattbotar och landningssidor kan du automatiskt samla in och kvalificera leads. Sluta jaga kunder – låt AI sköta det åt dig!"
      icon={BrainCircuit}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Intelligent Målsättning"
            description="AI-algoritmer analyserar användarbeteende för att optimera leadformulär och meddelanden i realtid."
          />
          <FeatureCard
            icon={BarChart3}
            title="Avancerad Analys"
            description="Omfattande analysdashboard med realtidsinsikter och konverteringsspårning."
          />
          <FeatureCard
            icon={Users}
            title="Lead-poängsättning"
            description="Automatiserat poängsättningssystem som prioriterar högvärdiga prospekt."
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
          <MetricCard value="45%" label="Ökad konverteringsgrad" />
          <MetricCard value="3X" label="Förbättrad leadkvalitet" />
          <MetricCard value="24/7" label="Automatiserad drift" />
          <MetricCard value="99.9%" label="Systemtillgänglighet" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># SPECIFIKATIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Tekniska detaljer</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Integrationsmöjligheter</h3>
            <ul className="space-y-4">
              {[
                'REST API-endpoints med omfattande dokumentation',
                'Webhook-stöd för realtidshändelsehantering',
                'Anpassad fältmappning för flexibel datastruktur',
                'Realtidssynkronisering av data mellan plattformar'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Säkerhetsfunktioner</h3>
            <ul className="space-y-4">
              {[
                'End-to-end-kryptering för alla dataöverföringar',
                'GDPR- och CCPA-efterlevnad inbyggd',
                'Automatisk datasäkerhetskopiering och återställning',
                'Rollbaserat åtkomstkontrollsystem'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default LeadCaptureDetails;