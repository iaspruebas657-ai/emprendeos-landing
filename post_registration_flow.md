# Flujo Post-Registro (Arquitectura de Adquisición)

Este es el recorrido técnico y psicológico que vive un usuario una vez que interactúa con el Diagnóstico en la landing page.

## 1. El Usuario Completa el Diagnóstico
- Contesta las 3 preguntas segmentadoras.
- Completa el formulario de Lead (Nombre, WhatsApp, Email).

## 2. Guardado y Perfilado (Backend / CRM)
- Los datos se envían vía Webhook (Zapier/Make) o API nativa al CRM.
- Se le asignan Custom Fields según sus respuestas (Ej. `etapa=no_tengo_idea`, `bloqueo=no_se_conseguir_clientes`).

## 3. Entrega de Valor Inmediato (Frontend)
- El modal o la siguiente página muestra su "Ruta Recomendada" basada estrictamente en sus respuestas.
- Se genera un anclaje psicológico: *"Ellos entienden mi problema exacto"*.

## 4. Decisión de CTA Secundario
- Si está en fase de exploración: CTA -> "Clase Gratis" (Redirige a WhatsApp).
- Si está en fase avanzada o dolor agudo: CTA -> "Entrar al Reto" (Redirige a Checkout).

## 5. Entrada al Funnel de Conversación (WhatsApp)
- Si va a WhatsApp, el mensaje pre-llenado incluye el contexto. El equipo de ventas o chatbot inicia la cualificación y el push de cierre.

## 6. Secuencia de Seguimiento (Email/SMS)
- Inicia el "Onboarding Automático" de nutrición descrito en `email_sequence.md`.
- El CRM trackea si el usuario visita de nuevo la landing (vía pixel) y puede enviar un SMS automático: *"Vi que estabas revisando el reto de nuevo. ¿Te ayudo con algo?"*
