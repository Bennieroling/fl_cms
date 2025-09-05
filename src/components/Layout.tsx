import React from "react";
import Footer from "@/components/Footer";
import MenubarMain from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to content link */}
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded focus:z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        Saltar al contenido
      </a>
      
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded p-2 -m-2" 
            aria-label="Ir a la página principal"
          >
            <img src="0066cc_2.png" alt="CMS Laboral" className="w-8 h-8 object-contain" loading="lazy" decoding="async"/>
            <span className="text-lg sm:text-xl font-bold text-foreground">CMS Laboral</span>
          </Link>
          <nav aria-label="Navegación principal">
            <MenubarMain />
          </nav>
        </div>
      </header>

      <main id="main" className="flex-grow bg-background">
        {children}
      </main>

      <Footer />
      
      
    </div>
  );
};

export default Layout;