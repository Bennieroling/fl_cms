import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/forms/contact-info";
import { 
  Stethoscope, 
  Shield, 
  Users, 
  Calendar, 
  FileText, 
  Activity,
  CheckCircle,
  Building2
} from "lucide-react";
import DemoRequestForm from "@/components/forms/Form";

const Index = () => {

  return (
    <>
      <SEO 
        title="CMS Laboral | Gestión profesional de la salud laboral"
        description="Servicios de medicina laboral en Buenos Aires: exámenes preocupacionales, control de ausentismo, exámenes anuales y consultoría."
        path="/"
        image="/og-image.png"
      />
      <Layout>
        <Hero />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { number: "100+", label: "Empresas Atendidas" },
              { number: "50k+", label: "Empleados Gestionados" },
              { number: "99.9%", label: "Disponibilidad Garantizada" },
              { number: "24/7", label: "Soporte Disponible" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground px-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Solución Integral en Salud Ocupacional
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Todo lo necesario para cumplir con la salud laboral y el bienestar de tus empleados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Gestión de Empleados",
                description: "Registre y gestione fichas médicas, certificaciones y cumplimiento normativo."
              },
              {
                icon: Calendar,
                title: "Gestión de Turnos",
                description: "Solicite exámenes médicos, vacunación y chequeos fácilmente."
              },
              {
                icon: Activity,
                title: "Seguimiento de Salud",
                description: "Monitoree el estado de salud, aptitudes médicas y condiciones laborales."
              },
              {
                icon: FileText,
                title: "Reporte de Enfermedades",
                description: "Informe incidentes o enfermedades laborales con documentación detallada."
              },
              {
                icon: Shield,
                title: "Seguimiento de Cumplimiento",
                description: "Asegure el cumplimiento con regulaciones y normativas de salud ocupacional."
              },
              {
                icon: Stethoscope,
                title: "Informes Médicos",
                description: "Genere reportes médicos y analíticas para su empresa."
              }
            ].map((feature, index) => (
              <Card key={index} className="shadow-professional hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                ¿Por qué eligen CMS Laboral?
              </h2>
              <div className="space-y-6">
                {[
                  "Reduzca la carga administrativa en un 70%",
                  "Garantice un cumplimiento del 100% con normativas de salud",
                  "Optimice los turnos y reduzca ausencias",
                  "Genere reportes detallados para auditorías y gestión",
                  "Gestión segura de datos, cumpliendo estándares internacionales"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-professional">
  <CardContent className="p-8">
    <div className="text-center mb-6">
      <Building2 className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
      <h3 className="text-xl font-semibold mb-2">Listo para Empresas</h3>
      <p className="text-muted-foreground">
        Diseñado para PyMEs y grandes empresas
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      <Link 
        to="/agendar-consulta#top"
        aria-label="Solicitar turno médico ocupacional"
        className="w-full sm:w-auto"
      >
        <Button variant="medical" size="lg" className="w-full sm:w-auto min-h-[48px]">
          Solicitar turno
        </Button>
      </Link>
      <Link 
        to="/agendar-consulta#top"
        aria-label="Contactar por WhatsApp para consultas"
        className="w-full sm:w-auto"
      >
        <Button variant="medical" size="lg" className="w-full sm:w-auto min-h-[48px]">
          Contacto por WhatsApp
        </Button>
      </Link>
    </div>
  </CardContent>
</Card>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Con la confianza de líderes de la industria</h3>
            <p className="text-lg text-muted-foreground">Lo que opinan nuestros clientes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "CMS Laboral transformó nuestra gestión en salud laboral. Reducimos el papeleo un 80% y mejoramos el cumplimiento.",
                author: "Sarah Johnson",
                title: "HR Director, TechCorp",
                rating: 5
              },
              {
                quote: "La gestión de turnos nos ahorra horas de trabajo. La interfaz es muy fácil para nuestros empleados.",
                author: "Michael Chen",
                title: "Safety Manager, BuildCo",
                rating: 5
              },
              {
                quote: "Excelente atención al cliente y una plataforma que funciona. Lo recomendamos sin dudar.",
                author: "Lisa Rodriguez",
                title: "Operations Manager, LogiFlow",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-professional">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Listos para comenzar?</h2>
              <p className="text-lg text-muted-foreground">
                Contáctenos hoy para agendar una demostración y conocer cómo MedClinic Portal puede transformar su gestión en salud ocupacional
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
      </Layout>
    </>
  );
};

export default Index;
