import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add passive scroll listeners for better performance
if (typeof window !== 'undefined') {
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    if (type === 'scroll' || type === 'wheel' || type === 'touchmove') {
      const opts = typeof options === 'boolean' ? { passive: true, capture: options } : { passive: true, ...options };
      return originalAddEventListener.call(this, type, listener, opts);
    }
    return originalAddEventListener.call(this, type, listener, options);
  };
}

createRoot(document.getElementById("root")!).render(<App />);
