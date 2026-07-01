import React from 'react';

const MethodOrbitaSection = () => {
  const steps = [
    { title: "Organiza", desc: "tu idea o negocio." },
    { title: "Reconoce", desc: "qué oportunidad tienes." },
    { title: "Construye", desc: "una oferta clara." },
    { title: "Impulsa", desc: "tu contenido y ventas." },
    { title: "Trabaja", desc: "el seguimiento de clientes." },
    { title: "Avanza", desc: "con herramientas simples." }
  ];

  return (
    <section id="method" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px' }}>NUESTRO MÉTODO</h2>
        
        <div className="grid grid-3" style={{ gap: '24px' }}>
          {steps.map((step, index) => (
            <div key={index} className="card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--accent-yellow)', marginBottom: '16px' }}>{index + 1}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodOrbitaSection;
