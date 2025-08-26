import { Card, CardContent } from "@/components/ui/card";
import ContactInfo from "@/components/forms/contact-info";
import DemoRequestForm from "@/components/forms/Form";

const ContactMainpage = () => {

    return (

<section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Listos para comenzar?</h2>
              <p className="text-lg text-muted-foreground">
                Contáctenos hoy para agendar una consulta y conocer cómo CMS Laboral puede ayudar a su empresa con la salud ocupacional
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contáctenos</h3>
                  <ContactInfo />
                </CardContent>
              </Card>
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contáctanos</h3>
                  <DemoRequestForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactMainpage;