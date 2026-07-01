import React from 'react';

const DeliverablesSection = () => {
  return (
    <section className="section bg-deep">
      <div className="container">
        <h2 className="text-yellow" style={{ textAlign: 'center', marginBottom: '64px' }}>LO QUE RECIBES HOY</h2>
        <div className="grid grid-3" style={{ marginBottom: '64px' }}>
          {[
            { icon: '📊', title: 'CRM de Ventas', desc: 'Gestiona prospectos y cierra clientes.' },
            { icon: '🚀', title: 'Landing Builder', desc: 'Crea páginas sin tocar código.' },
            { icon: '⚡', title: 'Productividad', desc: 'Tareas y misiones diarias guiadas.' },
            { icon: '🤖', title: 'IA Creator', desc: 'Generador de banners y copys.' },
            { icon: '🎯', title: 'Radar de Mercado', desc: 'Encuentra productos ganadores.' },
            { icon: '🤝', title: 'Comunidad', desc: 'Soporte y networking activo.' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ backgroundColor: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '40px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px' }}>{item.title}</h3>
              <p className="text-muted" style={{ fontSize: '16px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <a href="#offer" className="btn btn-primary">ACCEDER AL SISTEMA COMPLETO</a>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
