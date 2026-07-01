import React from 'react';

const DifferentiationSection = () => {
  return (
    <section className="section bg-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '64px' }}>¿POR QUÉ ESTO ES DIFERENTE?</h2>
        
        <div className="grid grid-2" style={{ gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          <div className="card" style={{ borderTop: '4px solid var(--accent-red)' }}>
            <h3 style={{ color: 'var(--accent-red)', marginBottom: '24px', fontSize: '24px' }}>Cursos comunes</h3>
            <p className="text-muted" style={{ fontSize: '18px' }}>Te dan videos teóricos y luego te dejan completamente solo para que adivines cómo aplicarlo.</p>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--accent-yellow)' }}>
            <h3 style={{ color: 'var(--accent-yellow)', marginBottom: '24px', fontSize: '24px' }}>EmprendeOS / Kaisen</h3>
            <p style={{ fontSize: '18px' }}>Te guía paso a paso y te ayuda a aplicar lo aprendido en tu negocio real, desde el primer día.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
