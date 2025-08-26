import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/FeatureSection";
import Benefits from "@/components/BenefitSection";
import ContactMainpage from "@/components/ContactMainpage";
import Testimonials from "@/components/Testimonials";

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

      <StatsBar />
   

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      
      <Benefits />

      {/* Testimonials COMMENTED OUT

      <Testimonials />

      */}

      {/* Contact Section */}
     
     <ContactMainpage />

      </Layout>
    </>
  );
};

export default Index;
