import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  jsonLD?: object;
}

const Breadcrumbs = ({ items, jsonLD }: BreadcrumbsProps) => {
  return (
    <>
      {jsonLD && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      )}
      <nav aria-label="breadcrumbs" className="py-4 px-4 max-w-6xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2" aria-hidden="true" />
              )}
              {item.href ? (
                <Link 
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;