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
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          <source 
            type="image/webp" 
            srcSet="/hero-640.webp 640w, /hero-1280.webp 1280w" 
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          <img 
            src="/hero-1280.jpg"
            srcSet="/hero-640.jpg 640w, /hero-1280.jpg 1280w"
            sizes="(max-width: 768px) 100vw, 1280px"
            width="1280" 
            height="720"
            alt="Salud laboral para RR.HH."
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Logo - Hidden on mobile, positioned responsively on larger screens */}
        <img
          src="/logo_white.png"
          alt="CMS Laboral Logo"
          className="hidden lg:block absolute left-4 top-1/4 transform -translate-y-1/4 w-48 h-48 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 opacity-0 animate-fade-in-slide"
          loading="lazy"
          decoding="async"
          width="320"
          height="320"
        />
        
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-primary text-xs sm:text-sm">
            Con la confianza de más de 100 empresas
          </Badge>
            
          <div className="relative w-full flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center leading-tight">
              Gestión Profesional de la Salud Laboral
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Medicina laboral personalizada para tu empresa: atención en tu oficina o en nuestro centro, exámenes, control de ausentismo, consultoría médica y prevención. Cumplí con la normativa, cuidá a tu equipo y mejorá tus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link 
              to="agendar-consulta#contacto" 
              className="w-full sm:w-auto"
              aria-label="Ir a la página de contacto para agendar una consulta"
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[48px] text-base font-semibold">
                Contáctanos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;