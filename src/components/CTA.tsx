import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTAsection = () => {
    
    return (

<section className="text-center py-8 bg-muted">
            <h2 className="text-xl font-semibold mb-4">¿Necesitás ayuda para definir qué servicios necesita tu empresa?</h2>
            <Link to="/agendar-consulta#top">
              <Button variant="medical" className="px-8" size="lg">
                Agendar Consulta
              </Button>
            </Link>
        </section>
    );
};

export default CTAsection;