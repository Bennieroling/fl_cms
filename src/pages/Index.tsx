import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", employees: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical clinic facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-primary">
              Con la confianza de más de 100 empresas
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Gestión Profesional de la Salud Laboral
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Medicina laboral personalizada para tu empresa: atención en tu oficina o en nuestro centro, exámenes, control de ausentismo, asesoría legal y prevención. Cumplí con la normativa, cuidá a tu equipo y mejorá tus resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Solicitar Demostración
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Planes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Empresas Atendidas" },
              { number: "50k+", label: "Empleados Gestionados" },
              { number: "99.9%", label: "Disponibilidad Garantizada" },
              { number: "24/7", label: "Soporte Disponible" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Solución Integral en Salud Ocupacional
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo necesario para cumplir con la salud laboral y el bienestar de tus empleados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              <h3 className="text-3xl font-bold mb-6">
                ¿Por qué eligen MedClinic Portal?
              </h3>
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
                <Link to="/agendar-consulta">
                  <Button variant="medical" className="w-full" size="lg">
                    Agendar Consulta
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Con la confianza de líderes de la industria</h3>
            <p className="text-lg text-muted-foreground">Lo que opinan nuestros clientes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "MedClinic Portal transformó nuestra gestión en salud laboral. Reducimos el papeleo un 80% y mejoramos el cumplimiento.",
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
      </section>

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
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>info@medclinicportal.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Avenida Corrientes 587, San Nicolás, C1042AAN, Buenos Aires</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Solicitar Demostración</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre de la Empresa</Label>
                      <Input
                        id="name"
                        placeholder="Your company name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Correo Electrónico</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employees">Cantidad de Empleados</Label>
                      <Input
                        id="employees"
                        placeholder="e.g., 50-100"
                        value={form.employees}
                        onChange={(e) => setForm({ ...form, employees: e.target.value })}
                      />
                    </div>
                    <Button
                      variant="medical"
                      className="w-full"
                      disabled={status === "sending"}
                      onClick={async () => {
                        try {
                          setStatus("sending");
                          await fetch("/api/send-demo", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              companyName: form.name,
                              email: form.email,
                              employees: form.employees
                            })
                          });
                          setStatus("success");
                        } catch {
                          setStatus("error");
                        }
                      }}
                    >
                      {status === "sending" ? "Enviando..." : "Solicitar Demostración"}
                    </Button>
                    {status === "success" && (
                      <div className="text-green-600 text-center mt-2">¡Solicitud enviada correctamente!</div>
                    )}
                    {status === "error" && (
                      <div className="text-red-600 text-center mt-2">Ocurrió un error al enviar. Intente nuevamente.</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
