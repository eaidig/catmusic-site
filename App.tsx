import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { CatHero } from './components/CatHero';
import { SocialLinks } from './components/SocialLinks';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between selection:bg-gold selection:text-deepPurple overflow-hidden">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-12 pb-32 flex flex-col items-center text-center min-h-screen justify-center">
        
        {/* Hero Section */}
        <div className="mb-8 animate-float">
          <CatHero />
        </div>

        {/* Typography */}
        <div className="space-y-4 mb-12">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            CAT MUSIC
          </h1>
          <p className="font-lato text-lg md:text-2xl text-gray-300 font-light tracking-wider uppercase border-t border-b border-white/10 py-2 inline-block px-6">
            Sons para a mente. Luz para a alma.
          </p>
        </div>

        {/* About Text */}
        <div className="max-w-lg mb-12">
          <p className="font-lato text-gray-400 text-sm md:text-base leading-relaxed">
            Música autoral focada em saúde mental e rock progressivo. <br/>
            <span className="text-gold/80">De Esteio para o mundo.</span>
          </p>
        </div>

        {/* Social Links */}
        <SocialLinks />

      </main>

      {/* Footer Player */}
      <AudioPlayer />

    </div>
  );
};

export default App;