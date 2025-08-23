import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  details: string[];
  process: string[];
  deliverables: string[];
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  details,
  process,
  deliverables
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 id="modal-title" className="text-2xl font-bold text-primary">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
              aria-label="Cerrar modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {content}
              </p>
            </div>

            {details.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-2">
                  {details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {process.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Proceso
                </h3>
                <ol className="space-y-2">
                  {process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {deliverables.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Entregables
                </h3>
                <ul className="space-y-2">
                  {deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">📄</span>
                      <span className="text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button 
                onClick={onClose}
                className="w-full"
                variant="medical"
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;