import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope, Shield, Users, Calendar, FileText, Activity } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-professional">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">MedClinic Portal</h1>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Need to Register?" : "Already have account?"}
          </Button>
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
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Occupational Health Management
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Streamline your company's occupational health with our secure portal. 
                Manage employees, track health status, schedule appointments, and generate reports.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Login/Register Form */}
            <Card className="shadow-professional animate-slide-up">
              <CardHeader>
                <CardTitle className="text-center">
                  {isLogin ? "Company Login" : "Register Your Company"}
                </CardTitle>
                <CardDescription className="text-center">
                  {isLogin 
                    ? "Access your occupational health dashboard" 
                    : "Get started with professional health management"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="company@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm password" />
                  </div>
                )}
                <Button className="w-full" variant="medical">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
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
