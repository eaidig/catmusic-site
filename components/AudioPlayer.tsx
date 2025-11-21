import React from 'react';

export const AudioPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center">
      <div className="w-full max-w-2xl transform transition-all hover:scale-[1.01] duration-500">
        <div className="relative rounded-[12px] bg-[#0a0510] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] overflow-hidden">
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/artist/5yEMDoYiYpqNanUSgJ8KL4?utm_source=generator&theme=0" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Cat Music Spotify Player"
            className="block bg-[#181818]" // Fallback background color matches Spotify Dark theme
          />
        </div>
      </div>
    </div>
  );
};