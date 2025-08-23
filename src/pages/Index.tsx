import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ContactInfo from "@/components/forms/contact-info";
import { 
  Stethoscope, 
  Shield, 
  Users, 
  Calendar, 
  FileText, 
  Activity,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Building2
} from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";
import { useState } from "react";
import DemoRequestForm from "@/components/forms/Form";

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", employees: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <>
      <Helmet>
        <title>C.M.S Laboral - Medicina Ocupacional y Salud Laboral Argentina</title>
        <meta name="description" content="Empresa líder en medicina ocupacional en Argentina. Exámenes médicos laborales, gestión de salud ocupacional, certificaciones médicas y cumplimiento normativo para empresas. ✓100+ empresas nos confían ✓24/7 soporte." />
        <meta name="keywords" content="medicina ocupacional, salud laboral Argentina, exámenes médicos laborales, certificaciones médicas, medicina del trabajo, salud ocupacional empresas, exámenes preocupacionales, medicina laboral Buenos Aires, gestión salud ocupacional, cumplimiento normativo laboral" />
        <link rel="canonical" href="https://www.cms.com.ar/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="C.M.S Laboral - Medicina Ocupacional y Salud Laboral Argentina" />
        <meta property="og:description" content="Empresa líder en medicina ocupacional. Exámenes médicos laborales, gestión de salud ocupacional y cumplimiento normativo. ✓100+ empresas nos confían." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cms.com.ar/" />
        <meta property="og:image" content="https://www.cms.com.ar/opengraph-home.png" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="C.M.S Laboral" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cmslaboral" />
        <meta name="twitter:title" content="C.M.S Laboral - Medicina Ocupacional Argentina" />
        <meta name="twitter:description" content="Empresa líder en medicina ocupacional. Exámenes médicos laborales y gestión de salud ocupacional." />
        <meta name="twitter:image" content="https://www.cms.com.ar/opengraph-home.png" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Argentina" />
        <meta name="language" content="Spanish" />
        
        {/* Structured data for Organization and LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.cms.com.ar/#organization",
                "name": "C.M.S Laboral",
                "url": "https://www.cms.com.ar/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.cms.com.ar/logo.png",
                  "width": 300,
                  "height": 300
                },
                "description": "Empresa especializada en medicina ocupacional y salud laboral en Argentina",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "AR",
                  "addressLocality": "Buenos Aires"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+54-11-1234-5678",
                  "contactType": "customer service",
                  "areaServed": "AR",
                  "availableLanguage": ["Spanish"]
                },
                "sameAs": [
                  "https://www.linkedin.com/company/cmslaboral",
                  "https://www.facebook.com/cmslaboral"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.cms.com.ar/#localbusiness",
                "name": "C.M.S Laboral",
                "image": "https://www.cms.com.ar/logo.png",
                "description": "Servicios integrales de medicina ocupacional y salud laboral para empresas",
                "url": "https://www.cms.com.ar/",
                "telephone": "+54-11-1234-5678",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "AR",
                  "addressLocality": "Buenos Aires"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -34.6118,
                  "longitude": -58.3960
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                "priceRange": "$$",
                "servedCuisine": "Medicina Ocupacional"
              },
              {
                "@type": "WebSite",
                "@id": "https://www.cms.com.ar/#website",
                "url": "https://www.cms.com.ar/",
                "name": "C.M.S Laboral",
                "description": "Medicina ocupacional y salud laboral en Argentina",
                "publisher": {
                  "@id": "https://www.cms.com.ar/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.cms.com.ar/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[450px]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical clinic facility" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
          {/* Logo - Hidden on mobile, positioned responsively on larger screens */}
          <img
            src="/logo_white.png"
            alt="Logo"
            className="hidden lg:block absolute right-4 top-1/4 transform -translate-y-1/4 w-48 h-48 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 opacity-0 animate-fade-in-slide"
            loading="lazy"
            decoding="async"
          />
          
            <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-primary text-xs sm:text-sm">
              Con la confianza de más de 100 empresas
            </Badge>
              
           <div className="relative w-full flex flex-col items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center leading-tight">
              Gestión Profesional de la Salud Laboral
              </h1>

            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Medicina laboral personalizada para tu empresa: atención en tu oficina o en nuestro centro, exámenes, control de ausentismo, asesoría legal y prevención. Cumplí con la normativa, cuidá a tu equipo y mejorá tus resultados.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link 
                to="agendar-consulta#contacto" 
                className="w-full sm:w-auto"
                aria-label="Ir a la página de contacto para agendar una consulta"
              >
                <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[48px] text-base font-semibold">
                  Contáctanos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
               </Link> 
                {/* <Link to="agendar-consulta#top">
                <Button variant="hero2" size="lg" className="group">
                  Agendar Consulta
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
               </Link>  */}
              {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Planes
              </Button> */}
            </div>
          </div>
        </div>
      </section>

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
                    <feature.icon className="w-6 h-6 text-white" />
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
                ¿Por qué eligen C.M.S LABORAL?
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
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-professional">
  <CardContent className="p-8">
    <div className="text-center mb-6">
      <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
      <h4 className="text-xl font-semibold mb-2">Listo para Empresas</h4>
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
                quote: "C.M.S LABORAL transformó nuestra gestión en salud laboral. Reducimos el papeleo un 80% y mejoramos el cumplimiento.",
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
              <h3 className="text-3xl font-bold mb-4">¿Listos para comenzar?</h3>
              <p className="text-lg text-muted-foreground">
                Contáctenos hoy para agendar una demostración y conocer cómo MedClinic Portal puede transformar su gestión en salud ocupacional
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Contáctenos</h4>
                  <ContactInfo />
                </CardContent>
              </Card>
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Contáctanos</h4>
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
