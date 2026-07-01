import React from 'react';

const MethodOrbitaSection = () => {
  return (
    <section className="section bg-deep">
      <div className="container">
        <h2 className="text-yellow" style={{ textAlign: 'center', marginBottom: '64px' }}>EL MÉTODO ÓRBITA</h2>
        
        {/* Flow diagram layout */}
        <div className="grid grid-3" style={{ gap: '32px' }}>
          {[
            { l: 'O', text: 'Descubre oportunidades ocultas' },
            { l: 'R', text: 'Valida tu mercado sin perder dinero' },
            { l: 'B', text: 'Construye tu oferta irresistible' },
            { l: 'I', text: 'Impacta con marketing agresivo' },
            { l: 'T', text: 'Trackea a cada lead con CRM' },
            { l: 'A', text: 'Automatiza y escala con IA' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '4px solid var(--accent-yellow)', position: 'relative' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(255,215,0,0.1)', color: 'var(--accent-yellow)', fontSize: '32px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                {item.l}
              </div>
              <p style={{ fontSize: '18px', fontWeight: '700' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodOrbitaSection;
