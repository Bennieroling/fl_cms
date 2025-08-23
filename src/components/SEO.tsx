import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

const defaultSEO = {
  title: 'C.M.S Laboral | Gestión profesional de la salud laboral',
  description: 'Servicios de medicina laboral en Buenos Aires: exámenes preocupacionales, control de ausentismo, exámenes anuales y consultoría.',
  path: '/',
  image: '/og-image.jpg',
  type: 'website' as const
};

const SEO = ({ 
  title = defaultSEO.title,
  description = defaultSEO.description, 
  path = defaultSEO.path,
  image = defaultSEO.image,
  type = defaultSEO.type
}: SEOProps) => {
  const siteUrl = 'https://cms.com.ar';
  const fullUrl = `${siteUrl}${path}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph meta tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="C.M.S Laboral" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;