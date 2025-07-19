

import React from "react";
import Footer from "@/components/Footer";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">CWS Centro Médico Laboral</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Nosotros</Button>
            <Button variant="ghost">Servicios</Button>
            <Button variant="ghost">Contacto</Button>
            <Button variant="medical">Acceso Clientes</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-background py-20 px-4">
        {children}
      </main>

  <Footer />
    </div>
  );
};

export default Layout;