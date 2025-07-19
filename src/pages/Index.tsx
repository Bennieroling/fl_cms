import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-professional sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">MedClinic Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
            <Button variant="medical">Client Login</Button>
          </div>
        </div>
      </header>

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
              Trusted by 500+ Companies
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Professional Occupational Health Management
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Streamline your company's health compliance with our comprehensive digital platform. 
              Manage employees, schedule appointments, track health status, and generate reports.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Pricing
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
              { number: "500+", label: "Companies Served" },
              { number: "50k+", label: "Employees Managed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
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
              Complete Occupational Health Solution
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your workforce health compliance and employee wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Employee Management",
                description: "Register and manage employee health records, track certifications, and maintain compliance."
              },
              {
                icon: Calendar,
                title: "Appointment Scheduling",
                description: "Book medical examinations, vaccinations, and health screenings with ease."
              },
              {
                icon: Activity,
                title: "Health Monitoring",
                description: "Track employee health status, medical clearances, and fitness for duty."
              },
              {
                icon: FileText,
                title: "Illness Reporting",
                description: "Report workplace injuries and illnesses with detailed documentation."
              },
              {
                icon: Shield,
                title: "Compliance Tracking",
                description: "Stay compliant with occupational health regulations and requirements."
              },
              {
                icon: Stethoscope,
                title: "Medical Reports",
                description: "Generate comprehensive health reports and analytics for your organization."
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
                Why Companies Choose MedClinic Portal
              </h3>
              <div className="space-y-6">
                {[
                  "Reduce administrative overhead by 70%",
                  "Ensure 100% compliance with health regulations",
                  "Streamline appointment scheduling and reduce no-shows",
                  "Generate detailed reports for audits and management",
                  "Secure, HIPAA-compliant data management"
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
                  <h4 className="text-xl font-semibold mb-2">Enterprise Ready</h4>
                  <p className="text-muted-foreground">
                    Built for companies of all sizes, from small businesses to large enterprises
                  </p>
                </div>
                <Button variant="medical" className="w-full" size="lg">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-lg text-muted-foreground">See what our clients say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "MedClinic Portal transformed our health management process. We've reduced paperwork by 80% and improved compliance significantly.",
                author: "Sarah Johnson",
                title: "HR Director, TechCorp",
                rating: 5
              },
              {
                quote: "The appointment scheduling feature alone has saved us countless hours. Our employees love the easy-to-use interface.",
                author: "Michael Chen",
                title: "Safety Manager, BuildCo",
                rating: 5
              },
              {
                quote: "Outstanding customer service and a platform that just works. Highly recommend for any company serious about occupational health.",
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
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-muted-foreground">
                Contact us today to schedule a demo and see how MedClinic Portal can transform your occupational health management
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
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
                      <span>123 Medical Center Dr, Health City, HC 12345</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-professional">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Request Demo</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Company Name</Label>
                      <Input id="name" placeholder="Your company name" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="your@company.com" />
                    </div>
                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input id="employees" placeholder="e.g., 50-100" />
                    </div>
                    <Button variant="medical" className="w-full">
                      Request Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 MedClinic Portal. Professional occupational health management.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
