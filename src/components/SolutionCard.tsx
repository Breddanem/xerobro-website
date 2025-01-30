import React from 'react';
import type { Solution } from '../data/solutions';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const { icon: Icon, title, description } = solution;
  
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors group cursor-pointer">
      <Icon className="h-12 w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default SolutionCard;