import React from 'react';
import { Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Airthodox?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Airthodox.com leverages AI to streamline workflows, capture leads, and enhance customer experiences. We specialize in automating business processes with cutting-edge tools.
            </p>
            <div className="space-y-4">
              {[
                'State-of-the-art AI Technology',
                'Customized Solutions',
                'Seamless Integration',
                '24/7 Support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 absolute inset-0" />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;