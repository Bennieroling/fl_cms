import Layout from "@/components/Layout"
import heroImage from "@/assets/medical-hero.jpg";


const Nosotros = () => {
  return (
  <Layout>
    <div>  
        {/* Hero */}
        <section className="relative overflow-hidden h-[250px] md:h-[450px]">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Servicios de salud ocupacional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative container mx-auto px-4 py-32 text-center text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">Nosotros</h1>
             <p className="text-lg max-w-2xl mx-auto">
          Más de 20 años de experiencia ayudando a empresas a cuidar la salud laboral de sus equipos.
        </p>
          </div>
        </section>

      {/* Mission */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p>
          En C.M.S Laboral, nos dedicamos a mejorar la calidad de vida laboral mediante servicios médicos ocupacionales adaptados a cada empresa. Buscamos reducir costos para RRHH, prevenir enfermedades, y fomentar entornos saludables.
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
  );
};

export default Nosotros;