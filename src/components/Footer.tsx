import { Linkedin, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom"; 

const Footer = () => (
  <footer className="bg-card border-t py-8">
    <div className="container mx-auto px-4 text-center text-muted-foreground">
      <p>
        &copy; 2024–{new Date().getFullYear()} C.M.S Laboral. Gestión profesional de la salud laboral.
        </p>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm">
  <a 
    href="https://www.linkedin.com/company/medclinic" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded px-2 py-1"
    aria-label="Seguir en LinkedIn"
  >
    <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
  </a>
  <a 
    href="mailto:info@cms.com.ar" 
    className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded px-2 py-1"
    aria-label="Enviar email a info@cms.com.ar"
  >
    <Mail className="w-4 h-4" aria-hidden="true" /> info@cms.com.ar
  </a>
  <a
    href="https://maps.app.goo.gl/9oHoFUXxwfbF9oQd9"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded px-2 py-1"
    aria-label="Ver ubicación en Google Maps"
  >
    <MapPin className="w-4 h-4" aria-hidden="true" /> Av. Corrientes 531, C1043AAF, Buenos Aires, Argentina
  </a>
  <span className="flex items-center gap-1">
    <Clock className="w-4 h-4" aria-hidden="true" /> Lun a Vie, 9:00 - 18:00
  </span>
  <Link 
    to="/cookies" 
    className="flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded px-2 py-1"
    aria-label="Ver política de cookies"
  >
    <Shield className="w-4 h-4" aria-hidden="true" /> Política de Cookies
  </Link>
</div>
    </div>
  </footer>
);

export default Footer;