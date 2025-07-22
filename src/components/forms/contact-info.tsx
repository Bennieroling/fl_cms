

import { CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <CardContent className="px-8 pt-8 pb-4">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary" />
          <span>(555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <span>info@cws-centromedicolaboral.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Avenida Corrientes 587, San Nicolás, C1042AAN, Buenos Aires</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full flex justify-center">
        <iframe
          title="CWS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13127.413529264675!2d-58.3889906!3d-34.6037345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadc3ef576f5%3A0x821c1bd129e5e882!2sAvenida%20Corrientes%20587%2C%20C1042AAN%20CABA%2C%20Argentina!5e0!3m2!1sen!2sar!4v1721398328291!5m2!1sen!2sar"
          width="100%"
          height="250"
          style={{ border: 0 }} 
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>
    </CardContent>
  );
}