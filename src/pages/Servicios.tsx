import Layout from '@/components/Layout';
import heroImage from "@/assets/medical-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, UserCheck, FileText, CalendarCheck, Brain, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



const Servicios = () => {
  return (
    <Layout>
        <div>
        {/* Hero */}
        <section className="relative overflow-hidden -mt-14">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Servicios de salud ocupacional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative container mx-auto px-4 py-32 text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold">Nuestros Servicios</h1>
            <p className="text-lg max-w-2xl mx-auto">
          Soluciones integrales en salud ocupacional para empresas de todos los tamaños.
        </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                  title: "Exámenes preocupacionales",
                  desc: "Evaluaciones médicas para ingreso laboral según normativa vigente.",
                  icon: UserCheck
                },
                {
                  title: "Exámenes de egreso",
                  desc: "Certificaciones de salud al finalizar una relación laboral.",
                  icon: FileText
                },
                {
                  title: "Exámenes periódicos",
                  desc: "Seguimiento anual obligatorio para empleados expuestos a riesgos.",
                  icon: CalendarCheck
                },
                {
                  title: "Control de ausentismo",
                  desc: "Médico a domicilio y gestión de reportes para RRHH.",
                  icon: Stethoscope
                },
                {
                  title: "Evaluaciones psicotécnicas",
                  desc: "Informes psicológicos para puestos críticos o de alta rotación.",
                  icon: Brain
                },
                {
                  title: "Asesoramiento en medicina laboral",
                  desc: "Consultoría a medida sobre prevención y salud en el trabajo.",
                  icon: ShieldCheck
                },
            ].map((item, i) => (
                <Card key={i} className="shadow-professional hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
            ))}
            </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 bg-muted">
            <h2 className="text-xl font-semibold mb-4">¿Necesitás ayuda para definir qué servicios necesita tu empresa?</h2>
            <Link to="/agendar-consulta#top">
              <Button variant="medical" className="px-8" size="lg">
                Agendar Consulta
              </Button>
            </Link>
        </section>
        </div>
    </Layout>
  );
};

export default Servicios;