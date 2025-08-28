import React from 'react';
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  title: string;
  description: string;
  showBadge?: boolean;
  showLogo?: boolean;
  badgeText?: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  description, 
  showBadge = false, 
  showLogo = false,
  badgeText = "Con la confianza de más de 100 empresas",
  height = "h-[220px] sm:h-[280px] md:h-[360px]"
}) => {
  return (
    <section className={`relative overflow-hidden ${height}`}>
      <div className="absolute inset-0">
        <picture>
          <source 
            type="image/avif" 
            srcSet="/hero-640.avif 640w, /hero-1280.avif 1280w" 
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
          />
          <source 
            type="image/webp" 
            srcSet="/hero-640.webp 640w, /hero-1280.webp 1280w" 
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
          />
          <img 
            src="/hero-1280.jpg"
            srcSet="/hero-640.jpg 640w, /hero-1280.jpg 1280w"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
            width="1280" 
            height="720"
            alt="Salud laboral para RR.HH."
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="rfelative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl text-white animate-fade-in">
          
          {/* Main layout - with logo for home page, without for other pages */}
          {showLogo ? (
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Logo - positioned to the left */}
              <div className="flex flex-col justify-center h-full flex-shrink-0">
                <img
                  src="/logo_white.png"
                  alt="CMS Laboral Logo"
                  className="logo-conditional opacity-0 animate-fade-in-slide"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="320"
                  style={{ width: '320px', height: '320px' }}
                />
              </div>
              
              {/* Text content - moved slightly left */}
              <div className="text-center flex-1 max-w-4xl ml-4 mr-6 lg:mr-14">
                {/* Badge centered above text content - only for home page */}
                {showBadge && (
                  <div className="text-center mb-4 sm:mb-6">
                    <Badge variant="secondary" className="text-primary text-xs sm:text-sm">
                      {badgeText}
                    </Badge>
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  {title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-l text-white/90 max-w-3xl mx-auto px-2">
                  {description}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                {description}
              </p>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;