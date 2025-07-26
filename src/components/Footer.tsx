import { Linkedin, Phone, Mail, MapPin, Clock, } from "lucide-react";
import IconWhatsapp from "/public/IconWhatsapp"; // Adjust the path as needed

const Footer = () => (
  <footer className="bg-card border-t py-8">
    <div className="container mx-auto px-4 text-center text-muted-foreground">
      <p>&copy; 2024 MedClinic Portal. Gestión profesional de la salud laboral.</p>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm">
  <a href="https://www.linkedin.com/company/medclinic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
    <Linkedin className="w-4 h-4" /> LinkedIn
  </a>
  <a href="https://wa.me/541112345678" className="flex items-center gap-1 hover:underline">
  <Phone className="w-4 h-4" />
  <IconWhatsapp className="w-4 h-4" /> +54 11 1234-5678
</a>
  <a href="mailto:info@medclinic.com" className="flex items-center gap-1 hover:underline">
    <Mail className="w-4 h-4" /> info@medclinic.com
  </a>
  <span className="flex items-center gap-1">
    <MapPin className="w-4 h-4" /> Av. Siempre Viva 123, CABA
  </span>
  <span className="flex items-center gap-1">
    <Clock className="w-4 h-4" /> Lun a Vie, 9:00 - 18:00
  </span>
</div>
    </div>
  </footer>
);

export default Footer;