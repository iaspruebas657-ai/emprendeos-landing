import { ENV_MODE } from '../config/constants';

export const trackEvent = (eventName, eventData = {}) => {
  if (ENV_MODE === 'preview') {
    // Modo Preview: Solo imprimimos en consola para validación visual
    console.log(`[🔍 PREVIEW TRACKING]: ${eventName}`, eventData);
    return;
  }

  // Modo Producción: Enviamos al dataLayer o CRM real
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
    
    // Aquí se conectará SDK de Meta Pixel (fbq), Google Analytics (gtag), etc.
    // console.log(`[🚀 PROD TRACKING]: Event sent to dataLayer`);
  }
};
