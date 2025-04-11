import { BrainCircuit, Users, Calendar, MessageSquare, Mail, Share2, Phone, FileText, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string[];
  features: string[];
}

export const solutions: Solution[] = [
  {
    icon: BrainCircuit,
    title: 'Leadgenerering',
    description: 'Samla in och organisera leads enkelt genom formulär, chatbots eller landningssidor.',
    stats: [
      '45% ökning i konvertering',
      '3X fler kvalificerade leads'
    ],
    features: [
      'Riktad kontakt med AI-drivna insikter',
      'Effektiv skalning för att nå 100-tals dagligen',
      'Realtidsanalys för ROI-optimering'
    ]
  },
  {
    icon: Users,
    title: 'CRM-integration',
    description: 'Synkronisera insamlade leads sömlöst till ditt CRM-system för bättre hantering och uppföljning.',
    stats: [
      '35% minskad kostnad per lead'
    ],
    features: [
      'Automatiserad leadkategorisering',
      'Anpassade CRM-arbetsflöden',
      'API-baserade integrationer för smidig dataöverföring'
    ]
  },
  {
    icon: FileText,
    title: 'Offert & Orderflöde',
    description: 'Automatisera hela processen från offert till order med ett intelligent system som hanterar hela kundresan.',
    stats: [
      '70% snabbare orderhantering',
      '20% ökad konvertering',
      '30% minskade administrativa kostnader'
    ],
    features: [
      'Automatiserad offertgenerering',
      'Intelligent bokningshantering',
      'Sömlös orderbearbetning'
    ]
  },
  {
    icon: Calendar,
    title: 'Smart-bokningar',
    description: 'Låt dina kunder boka enkelt online med ett intelligent system som optimerar beläggning och maximerar intäkter.',
    stats: [
      '20% minskning av uteblivna bokningar',
      '2X fler bokade kunder'
    ],
    features: [
      'Automatisk kapacitetsoptimering',
      'Integrerat bokningssystem för kunder',
      'Automatiska påminnelser och bekräftelser'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Kundsupport-AI',
    description: 'Hantera kundförfrågningar effektivt med ett AI-drivet ärendehanteringssystem som organiserar, prioriterar och löser problem.',
    stats: [
      '70% snabbare svarstid',
      '92% kundnöjdhet'
    ],
    features: [
      'Omedelbara AI-svar för 85% av frågorna',
      'Smart eskaleringsystem för ärenden',
      'Personanpassade kundinteraktioner'
    ]
  },
  {
    icon: Mail,
    title: 'AI-e-postutskick',
    description: 'Engagera potentiella kunder med AI-skapade, personliga e-postkampanjer som levererar högst relevanta meddelanden i stor skala.',
    stats: [
      '55% öppningsfrekvens',
      '25% svarsfrekvens',
      '2.5X ROI-ökning'
    ],
    features: [
      'Smart personalisering',
      'A/B-testning',
      'Prestationsanalys'
    ]
  },
  {
    icon: Share2,
    title: 'Sociala Medier-automation',
    description: 'Använd AI för att nå din målgrupp på sociala plattformar som Instagram, LinkedIn och Facebook.',
    stats: [
      '85% tidsbesparing',
      '3X engagemangsfrekvens',
      '60% ökad räckvidd'
    ],
    features: [
      'Hantering av flera plattformar',
      'Innehållsschemaläggning',
      'Automatiserat engagemang'
    ]
  },
  {
    icon: Phone,
    title: 'AI-callcenter',
    description: 'Transformera dina callcenter-operationer med AI-drivna röstassistenter som hanterar samtal effektivt och intelligent.',
    stats: [
      '65% kostnadsminskning',
      '24/7 tillgänglighet'
    ],
    features: [
      'Naturlig språkbearbetning',
      'Realtidsröstanalys',
      'Sömlös överlämning till människa'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Chatbot-assistenter',
    description: 'Implementera intelligenta chatbots som hanterar kundförfrågningar, guidar besökare och ökar konverteringar dygnet runt.',
    stats: [
      '75% minskad svarstid',
      '40% ökad konvertering',
      '24/7 tillgänglighet'
    ],
    features: [
      'Naturlig konversation',
      'Flerspråkigt stöd',
      'Smart ärendehantering'
    ]
  }
];