import React from 'react';

const ToolsSection = () => {
  const tools = [
    { icon: "📊", title: "Panel de organización", desc: "Todo tu negocio en una sola pantalla para que no te pierdas." },
    { icon: "👥", title: "Control de clientes", desc: "Sigue cada conversación y asegúrate de no perder ninguna venta." },
    { icon: "💻", title: "Página para vender", desc: "Crea tu propia página de forma sencilla para recibir a tus clientes." },
    { icon: "🤖", title: "Creador de contenido con IA", desc: "Escribe textos y publicaciones sin quedarte en blanco." },
    { icon: "🔎", title: "Radar de productos y proveedores", desc: "Encuentra oportunidades reales si estás empezando desde cero." },
    { icon: "📚", title: "Clases paso a paso", desc: "Aprende lo que necesitas justo en el momento en que lo aplicas." }
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
