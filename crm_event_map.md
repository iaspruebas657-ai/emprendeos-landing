# Mapa de Eventos CRM (EmprendeOS)

Este documento define la estructura de eventos y propiedades que se enviarán al CRM (Ej. HubSpot, ActiveCampaign, GoHighLevel) a través del píxel o API.

## 1. Propiedades del Lead (Campos Personalizados)
- `diagnostic_stage`: Etapa actual ("No tengo producto", "Tengo idea", "Ya tengo producto", "Ya vendo").
- `diagnostic_blocker`: Mayor bloqueo (Ej. "No sé conseguir clientes").
- `diagnostic_goal`: Objetivo a 30 días.
- `utm_source`, `utm_medium`, `utm_campaign`: Origen del tráfico.
- `lead_status`: Nuevo / En Seguimiento / Cliente.

## 2. Eventos Clave (Triggers)
- **`diagnostic_completed`**: Dispara etiqueta de segmentación y asignación a una ruta específica.
- **`whatsapp_started`**: Indica que el usuario hizo clic en "Clase Gratis". Si no compra en 24h, activar campaña de remarketing.
- **`checkout_initiated`**: Dispara carrito abandonado si no hay compra en 1 hora.
- **`purchase_completed`**: Cambia estado a "Cliente" y revoca accesos gratuitos.
