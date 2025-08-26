import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/forms/contact-info";
import { 
  UserCheck, 
  Users, 
  CalendarCheck, 
  UserX, 
  CheckCircle,
  Building2,
  Brain,
  FileCheck,
  ArrowRight
} from "lucide-react";
import DemoRequestForm from "@/components/forms/Form";


const Index = () => {

  return (
    <>
      <SEO 
        title="CMS Laboral | Medicina Ocupacional en Buenos Aires"
        description="30+ años de experiencia en medicina ocupacional en Buenos Aires: exámenes preocupacionales, control de ausentismo, exámenes periódicos y consultoría médica laboral."
        path="/"
        image="/og-image.png"
      />
      <Layout>
        <Hero 
          title="Gestión Profesional de la Salud Laboral"
          description="Medicina laboral personalizada para tu empresa: atención en tu oficina o en nuestro centro, exámenes, control de ausentismo, consultoría médica y prevención. Cumplí con la normativa, cuidá a tu equipo y mejorá tus resultados."
          showBadge={true}
          showLogo={true}
        />
        

      {/* Stats Section */}
      <section className="py-12 sm:py-4 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { number: "30+", label: "Años de Experiencia" },
              { number: "500+", label: "Empresas Atendidas" },
              { number: "100%", label: "Cumplimiento Normativo" },
              { number: "24/48hs", label: "Entrega de Informes" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground px-2">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-8 pb-4">
          <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[48px] text-base font-semibold">
            Contáctanos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Servicios de Medicina Ocupacional
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Más de 30 años de experiencia cumpliendo con la normativa laboral Argentina y cuidando la salud de los trabajadores
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: UserCheck,
                title: "Exámenes Preocupacionales",
                description: "Evaluaciones médicas completas según Resolución SRT 37/2010 para ingreso laboral con certificado de aptitud."
              },
              {
                icon: CalendarCheck,
                title: "Exámenes Periódicos",
                description: "Controles médicos anuales obligatorios con seguimiento evolutivo para trabajadores expuestos a riesgos."
              },
              {
                icon: UserX,
                title: "Control de Ausentismo",
                description: "Tres modalidades de control: domiciliario, virtual y en consultorio con reportes para RRHH."
              },
              {
                icon: Brain,
                title: "Evaluaciones Psicotécnicas",
                description: "Informes psicológicos especializados para puestos críticos según normativa laboral vigente."
              },
              {
                icon: Users,
                title: "Asesoramiento Médico",
                description: "Consultoría en prevención de riesgos laborales con operativos in-company y equipos móviles."
              },
              {
                icon: FileCheck,
                title: "Exámenes de Egreso",
                description: "Certificaciones médicas digitales al finalizar la relación laboral con documentación firmada."
              }
            ].map((feature, index) => (
              <Link key={index} to="/servicios" className="group">
                <Card className="shadow-professional hover:shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
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
                  "Más de 30 años de experiencia en medicina ocupacional",
                  "Cumplimiento total con Resolución SRT 37/2010 y normativas vigentes",
                  "Equipos móviles para operativos in-company en sus instalaciones",
                  "Informes médicos digitales entregados en 24-48 horas",
                  "Tres modalidades de control de ausentismo adaptables a sus necesidades"
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
      {/* <Link 
        to="/agendar-consulta#top"
        aria-label="Contactar por WhatsApp para consultas"
        className="w-full sm:w-auto"
      >
        <Button variant="medical" size="lg" className="w-full sm:w-auto min-h-[48px]">
          Contacto por WhatsApp
        </Button>
      </Link> */}
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
      </Layout>
    </>
  );
};

export default Index;
