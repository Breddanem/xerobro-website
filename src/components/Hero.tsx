import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-animation opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main content */}
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-16 glow-text">
              <div className="relative min-h-[4em] md:min-h-[3em]">
                <TypeAnimation
                  sequence={[
                    'Automating Business Logic',
                    2000,
                    'Optimizing Workflows',
                    2000,
                    'Maximizing Efficiency',
                    2000,
                    'Scaling Operations',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  className="font-mono bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent absolute top-0 left-0 w-full break-words"
                  repeat={Infinity}
                />
              </div>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-mono hover:bg-purple-700 transition-all flex items-center justify-center border border-purple-400/50 glow-md hover-glow">
                ./deploy.sh <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 rounded-lg font-mono transition-all flex items-center justify-center relative hover-glow">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-600/10 rounded-lg" />
                <div className="absolute inset-0 border border-purple-500/50 rounded-lg" />
                <span className="relative text-white">--request-demo</span>
              </button>
            </div>
          </div>

          {/* Right side - Terminal */}
          <div className="w-full max-w-xl lg:ml-auto">
            <div className="w-full bg-gray-900/80 rounded-lg border border-purple-500/20 backdrop-blur-sm overflow-hidden glow-sm">
              {/* Terminal header */}
              <div className="bg-black/50 p-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-gray-400 font-mono">~/airthodox/init.sh</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm h-[200px]">
                <div className="relative h-full">
                  <TypeAnimation
                    sequence={[
                      '> Initializing AI core...\n',
                      1000,
                      '> Initializing AI core...\n> Loading neural networks...\n',
                      1000,
                      '> Initializing AI core...\n> Loading neural networks...\n> Configuring parameters...\n',
                      1000,
                      '> Initializing AI core...\n> Loading neural networks...\n> Configuring parameters...\n> System ready.\n',
                      1000,
                    ]}
                    wrapper="pre"
                    speed={50}
                    className="text-purple-400 whitespace-pre-wrap absolute top-0 left-0"
                    repeat={1}
                  />
                  <div className="text-purple-400 absolute bottom-0 left-0">
                    $ <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;