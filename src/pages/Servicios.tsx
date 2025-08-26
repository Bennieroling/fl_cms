import Layout from '@/components/Layout';
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FAQAccordion from '@/components/FAQAccordion';
import ServicesCards from './ServicesCards';
import CTAsection from '@/components/CTA';



const Servicios = () => {
    return (
    <>
      <SEO 
        title="Servicios de medicina laboral | CMS Laboral"
        description="Exámenes preocupacionales, control de ausentismo, exámenes periódicos, evaluaciones psicotécnicas y asesoramiento en medicina laboral para empresas en Buenos Aires."
        path="/servicios"
      />
      <Layout>
    
        <Hero 
          title="Nuestros Servicios"
          description="Soluciones integrales en salud ocupacional para empresas de todos los tamaños."
          showLogo={true}
        />
            <div>

        {/* Services Grid */}
        
        <ServicesCards />      

        {/* FAQ Section */}

        <FAQAccordion />

        {/* CTA */}
        
        <CTAsection />
        
        </div>

      </Layout>
    </>
  );
};

export default Servicios;