import { Card, CardContent } from "./ui/card"
import { Star } from "lucide-react"


const Testimonials = () => {

    return (
    
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
        </section>
        );
    };

export default Testimonials;
