import Layout from "@/components/Layout"
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";


const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Quiénes Somos | CMS Laboral Argentina</title>
        <meta name="description" content="Conoce CMS Laboral: más de 20 años de experiencia en medicina ocupacional. Equipo multidisciplinario brindando soluciones integrales a +100 empresas en Argentina." />
        <meta name="keywords" content="nosotros cms laboral, empresa medicina ocupacional, experiencia medicina del trabajo, equipo médico ocupacional, trayectoria salud laboral, profesionales medicina laboral Argentina" />
        <link rel="canonical" href="https://www.cms.com.ar/nosotros" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Nosotros - Quiénes Somos | CMS Laboral" />
        <meta property="og:description" content="Más de 20 años de experiencia en medicina ocupacional. Equipo multidisciplinario al servicio de +100 empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cms.com.ar/nosotros" />
        <meta property="og:image" content="https://www.cms.com.ar/opengraph-nosotros.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nosotros - Quiénes Somos | CMS Laboral" />
        <meta name="twitter:description" content="20+ años de experiencia en medicina ocupacional. Conoce nuestro equipo y misión." />
        <meta name="twitter:image" content="https://www.cms.com.ar/opengraph-nosotros.png" />
        
        {/* Structured data for AboutPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Nosotros - CMS Laboral",
            "description": "Información sobre CMS Laboral, empresa especializada en medicina ocupacional",
            "url": "https://www.cms.com.ar/nosotros",
            "mainEntity": {
              "@type": "Organization",
              "name": "CMS Laboral",
              "foundingDate": "2004",
              "description": "Empresa especializada en medicina ocupacional con más de 20 años de experiencia",
              "numberOfEmployees": "50-100",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressLocality": "Buenos Aires"
              }
            }
          })}
        </script>
      </Helmet>
      <Layout>
    <div>  
        {/* Hero */}
        
 <Hero 
          title="Nosotros"
          description="Más de 20 años de experiencia ayudando a empresas a cuidar la salud laboral de sus equipos."
          showLogo={true}
        />
        
      {/* Mission */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p>
          En CMS Laboral, nos dedicamos a mejorar la calidad de vida laboral mediante servicios médicos ocupacionales adaptados a cada empresa. Buscamos reducir costos para RRHH, prevenir enfermedades, y fomentar entornos saludables.
        </p>
      </section>

      {/* Experience */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Experiencia y Profesionalismo</h2>
          <p>
            Nuestro equipo multidisciplinario combina medicina laboral, psicología, y gestión de ausentismo para brindar soluciones integrales a más de 100 empresas en Buenos Aires.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">¿Por qué elegirnos?</h2>
        <ul className="grid sm:grid-cols-2 gap-6 list-disc pl-6">
          <li>Atención personalizada y rápida</li>
          <li>Reducción de costos de ausentismo</li>
          <li>Amplia red de profesionales y servicios</li>
          <li>20+ años de trayectoria en el sector</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-muted">
        <h2 className="text-xl font-semibold mb-4">¿Querés conocer cómo podemos ayudar a tu empresa?</h2>
        <a href="/agendar-consulta#top">
          <button className="btn btn-primary">Agendar una consulta</button>
        </a>
      </section>
    </div>
      </Layout>
    </>
  );
};

export default Nosotros;