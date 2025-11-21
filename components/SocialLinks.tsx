import React from 'react';

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] overflow-hidden"
    aria-label={label}
  >
    {/* Shine Effect */}
    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
    
    <div className="relative z-10 text-gray-300 group-hover:text-gold transition-colors duration-300">
      {icon}
    </div>
  </a>
);

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-8 md:gap-12 items-center justify-center">
      <SocialButton
        label="YouTube"
        href="https://youtube.com/@bandacatmusic"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        }
      />
      <SocialButton
        label="Instagram"
        href="https://instagram.com/bandacatmusic"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        }
      />
      <SocialButton
        label="Spotify"
        href="https://open.spotify.com/intl-pt/artist/5yEMDoYiYpqNanUSgJ8KL4?go=1&sp_cid=e5775686f886fcb8da20d984aeb2620a&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=a726cd2cc073472e"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 11.5c4-1.5 8-.5 10 .5" />
            <path d="M7.5 15c4.5-1.5 9.5-.5 11 1" />
            <path d="M9 8c3.5-1 7.5 0 10 1.5" />
          </svg>
        }
      />
    </div>
  );
};