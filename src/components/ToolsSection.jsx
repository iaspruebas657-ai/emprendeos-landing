import React from 'react';

const ToolsSection = () => {
  return (
    <section className="section bg-section">
      <div className="container">
        <h2 className="text-pure" style={{ textAlign: 'center', marginBottom: '64px' }}>NO SON FUNCIONES. ES TU SISTEMA OPERATIVO.</h2>
        
        <div className="grid grid-2" style={{ gap: '32px' }}>
          {[
            { title: 'Productividad', desc: 'El sistema operativo que organiza tu ejecución diaria.' },
            { title: 'CRM', desc: 'El núcleo de ventas para que ningún cliente se escape.' },
            { title: 'Radar Proveedores', desc: 'Tu ventaja competitiva real para encontrar qué vender.' },
            { title: 'Inteligencia Artificial', desc: 'Tu acelerador de contenido y campañas publicitarias.' },
            { title: 'Landing Builder', desc: 'Tu máquina de monetización y presencia digital.' },
            { title: 'Academia', desc: 'La inteligencia estratégica detrás de cada clic.' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ transition: 'all 0.3s ease', cursor: 'default' }}
                 onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}>
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{item.title}</h3>
              <p className="text-muted" style={{ fontSize: '18px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
