import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Solution } from '../data/solutions';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const navigate = useNavigate();
  const { icon: Icon, title, description, stats, features } = solution;
  
  const getDetailPath = () => {
    switch (title) {
      case 'Leadgenerering':
        return '/lead-capture-details';
      case 'CRM-integration':
        return '/crm-integration-details';
      case 'Smart-bokningar':
        return '/smart-scheduling-details';
      case 'Kundsupport-AI':
        return '/customer-support-ai-details';
      case 'AI-e-postutskick':
        return '/email-outreach-details';
      case 'Sociala Medier-automation':
        return '/social-media-automation-details';
      case 'Offert & Orderflöde':
        return '/order-flow-details';
      case 'AI-callcenter':
        return '/ai-call-center-details';
      case 'Chatbot-assistenter':
        return '/chatbot-details';
      default:
        return '/';
    }
  };
  
  return (
    <div className="relative h-full group">
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      {/* Main card content */}
      <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500">
        <div className="flex flex-col h-full">
          {/* Icon with animated background - Fixed height */}
          <div className="relative mb-6 h-16">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg blur-sm transform group-hover:scale-110 transition-transform duration-500" />
            <div className="relative h-16 w-16 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-3 border border-white/20">
              <Icon className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          {/* Title with gradient text - Fixed height */}
          <h3 className="text-2xl font-bold mb-3 min-h-[2.5rem] bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {title}
          </h3>

          {/* Description - Fixed height */}
          <p className="text-gray-400 mb-6 min-h-[4.5rem]">
            {description}
          </p>

          {/* Stats with animated highlight - Fixed height */}
          <div className="space-y-2 mb-6 min-h-[6rem]">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="font-mono text-sm bg-gradient-to-r from-white/5 to-transparent p-2 rounded group-hover:from-white/10 transition-colors duration-500"
              >
                {stat}
              </div>
            ))}
          </div>

          {/* Features list with animated dots - Fixed height */}
          <ul className="space-y-2 mb-6 min-h-[6rem]">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="text-gray-400 flex items-center group/item"
              >
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2 transform group-hover/item:scale-150 transition-transform duration-300" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Button with animated arrow - Fixed at bottom */}
          <button 
            onClick={() => navigate(getDetailPath())}
            className="mt-auto group/btn relative overflow-hidden rounded-lg bg-gradient-to-r from-white/10 to-transparent hover:from-white/20 transition-colors duration-500"
          >
            <div className="relative p-4 flex items-center justify-center space-x-2">
              <span className="font-mono">Läs mer</span>
              <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-[-100%] group-hover/btn:translate-x-100 transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard;