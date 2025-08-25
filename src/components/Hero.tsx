import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[450px]">
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
          />
        </picture>
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl text-white animate-fade-in">
          
          {/* Badge centered above everything */}
          <div className="text-center mb-4 sm:mb-6">
            <Badge variant="secondary" className="text-primary text-xs sm:text-sm">
              Con la confianza de más de 100 empresas
            </Badge>
          </div>
          
          {/* Main layout with logo separate from text content */}
          <div className="flex items-start justify-center gap-8 lg:gap-12 xl:gap-16">
            {/* Logo - positioned to align with description text */}
            <div className="flex flex-col justify-center h-full">
              <img
                src="/logo_white.png"
                alt="CMS Laboral Logo"
                className="logo-conditional flex-shrink-0 opacity-0 animate-fade-in-slide"
                loading="lazy"
                decoding="async"
                width="320"
                height="320"
                style={{ marginTop: 'calc(2rem + 0.5em)' }} /* Offset to align with description */
              />
            </div>
            
            {/* Text content */}
            <div className="text-center flex-1 max-w-4xl">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                Gestión Profesional de la Salud Laboral
              </h1>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-2">
                Medicina laboral personalizada para tu empresa: atención en tu oficina o en nuestro centro, exámenes, control de ausentismo, consultoría médica y prevención. Cumplí con la normativa, cuidá a tu equipo y mejorá tus resultados.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;