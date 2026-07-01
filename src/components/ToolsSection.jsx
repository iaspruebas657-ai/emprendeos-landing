import React from 'react';

const ToolsSection = () => {
  const tools = [
    { icon: "🤖", title: "Ideas de contenido con IA", desc: "No te quedes en blanco. Genera ideas para publicar rápidamente." },
    { icon: "💬", title: "Mensajes de venta para WhatsApp", desc: "Aprende qué responder para que tus interesados no te dejen en visto." },
    { icon: "📢", title: "Creador de anuncios simples", desc: "Lanza tus primeras promociones sin ser un experto en publicidad." },
    { icon: "💻", title: "Página para mostrar tu producto", desc: "Crea tu propia página web sencilla para recibir a tus clientes." },
    { icon: "👥", title: "Organizador de clientes interesados", desc: "Lleva el control de cada persona que te escribe para no perder ventas." },
    { icon: "🗺️", title: "Guía paso a paso de marketing", desc: "Sigue una ruta clara para saber exactamente qué hacer cada día." }
  ];

  return (
    <section id="tools" className="section bg-deep">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>HERRAMIENTAS SIMPLES</h2>
        
        <div className="grid grid-3" style={{ gap: '24px' }}>
          {tools.map((tool, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '40px' }}>{tool.icon}</div>
              <h3 style={{ fontSize: '20px' }}>{tool.title}</h3>
              <p className="text-muted">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
