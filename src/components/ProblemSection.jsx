import React from 'react';

const ProblemSection = () => {
  return (
    <section className="section bg-deep">
      <div className="container">
        <h2 className="text-red" style={{ textAlign: 'center' }}>LA DURA VERDAD</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            'No sabes qué vender',
            'Compras cursos pero no vendes',
            'No tienes clientes ni visibilidad',
            'No tienes sistema de ejecución',
            'Empiezas motivado y abandonas'
          ].map((dolor, idx) => (
            <div key={idx} className="card" style={{ border: '1px solid rgba(255, 59, 48, 0.3)', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>❌</span>
              <span style={{ fontSize: '20px', fontWeight: '500' }}>{dolor}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-pure)' }}>
            👉 Estás aprendiendo, pero no estás construyendo ingresos reales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
