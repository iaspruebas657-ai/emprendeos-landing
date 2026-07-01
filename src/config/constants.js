export const ENV_MODE = "preview"; // Opciones: "preview" | "production"

export const WHATSAPP_NUMBER = "51925874687"; 
export const WHATSAPP_MESSAGE_DEFAULT = "Hola, quiero acceder a la clase gratis para aprender a crear o hacer crecer mi negocio con marketing e inteligencia artificial.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

export const CTA_LINKS = {
  checkout: WHATSAPP_URL,
  freeClass: WHATSAPP_URL,
};

export const URGENCY_CONFIG = {
  CURRENT_SPOTS: 23,
  TOTAL_SPOTS: 50
};
