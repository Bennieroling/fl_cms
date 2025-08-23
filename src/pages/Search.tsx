import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<Array<{
    title: string;
    description: string;
    url: string;
  }>>([]);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      // Simulate search results - in a real app, this would be an API call
      setSearchResults([
        {
          title: 'Exámenes preocupacionales',
          description: 'Evaluaciones médicas para ingreso laboral según normativa vigente.',
          url: '/servicios/preocupacionales'
        },
        {
          title: 'Control de ausentismo',
          description: 'Coordinación de visitas médicas y gestión de reportes para RR.HH.',
          url: '/servicios/ausentismo'
        },
        {
          title: 'Exámenes periódicos/anuales',
          description: 'Seguimiento anual obligatorio para empleados expuestos a riesgos.',
          url: '/servicios/anuales'
        }
      ].filter(item => 
        q && (
          item.title.toLowerCase().includes(q.toLowerCase()) ||
          item.description.toLowerCase().includes(q.toLowerCase())
        )
      ));
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <>
      <Helmet>
        <title>Buscar - CMS Laboral</title>
        <meta name="description" content="Buscar servicios de medicina ocupacional en CMS Laboral" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout>
        <div className="py-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Buscar</h1>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Buscar servicios..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <SearchIcon className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </form>

          {searchParams.get('q') && (
            <div className="mb-6">
              <p className="text-muted-foreground">
                Resultados para: <strong>"{searchParams.get('q')}"</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      <a href={result.url} className="text-primary hover:underline">
                        {result.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : searchParams.get('q') ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    No se encontraron resultados para "{searchParams.get('q')}"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Intente con otros términos de búsqueda
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Ingrese un término de búsqueda para comenzar
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;