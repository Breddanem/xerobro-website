import { BrainCircuit, Users, MessageSquare, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    icon: BrainCircuit,
    title: 'AI Lead Capture',
    description: 'Intelligent lead capture systems that convert visitors into customers using advanced AI algorithms.'
  },
  {
    icon: Users,
    title: 'CRM Integration',
    description: 'Seamless integration with your existing CRM, enhanced with AI-powered insights and automation.'
  },
  {
    icon: MessageSquare,
    title: 'Support Automation',
    description: 'Smart ticket management and automated responses for efficient customer support.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered appointment scheduling that optimizes your team\'s availability.'
  }
];