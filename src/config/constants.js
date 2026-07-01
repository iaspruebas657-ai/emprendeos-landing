export const ENV_MODE = "preview"; // Opciones: "preview" | "production"

export const WHATSAPP_NUMBER = "51999999999"; // Cambiar por número real
export const WHATSAPP_MESSAGE_DEFAULT = "Hola, quiero acceder a la clase gratis del Reto Negocio Listo en 30 Días con IA. Quiero saber cómo puedo empezar a construir o validar mi negocio usando inteligencia artificial y herramientas digitales.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

export const CTA_LINKS = {
  checkout: "#checkout-link",
  freeClass: WHATSAPP_URL,
};

export const URGENCY_CONFIG = {
  CURRENT_SPOTS: 23,
  TOTAL_SPOTS: 50
};
