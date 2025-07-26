import { CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <CardContent className="px-8 pt-8 pb-4">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary" />
          <span>(55 11) 1234-5678</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <span>info@cms.com.ar</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-7 h-7 text-primary" />
      
          <span>Av. Corrientes 531, C1043AAF,Buenos Aires, Argentina</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <span>Lunes a viernes 08:00 - 18:00</span>
        </div>
      </div>
      <div className="mt-6">
       <div className="w-full flex justify-center">
  <iframe
    title="C.M.S Laboral Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0413945276646!2d-58.37680302311869!3d-34.60311475746838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd015272c7%3A0xa131d5feebec7fa3!2sAv.%20Corrientes%20531%2C%20C1043AAF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2ses!4v1753547710600!5m2!1sen!2ses"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </CardContent>
  );
}