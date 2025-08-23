import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgendarConsulta from "./pages/AgendarConsulta";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Preocupacionales from "./pages/Preocupacionales";
import Ausentismo from "./pages/Ausentismo";
import Anuales from "./pages/Anuales";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/agendar-consulta" element={<AgendarConsulta />} />
            <Route path="/search" element={<Search />} />
            <Route path="/servicios/preocupacionales" element={<Preocupacionales />} />
            <Route path="/servicios/ausentismo" element={<Ausentismo />} />
            <Route path="/servicios/anuales" element={<Anuales />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
