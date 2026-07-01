import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="section bg-section">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '48px', color: 'var(--accent-red)' }}>¿TE SIENTES ESTANCADO?</h2>
        
        <div style={{ backgroundColor: 'var(--bg-deep)', padding: '40px', borderRadius: '16px', border: '1px solid #333' }}>
          <p style={{ fontSize: '24px', marginBottom: '32px', fontWeight: '600' }}>La mayoría de emprendedores no avanza porque:</p>
          
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '18px', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✕</span> 
              No sabes qué vender ni por dónde empezar.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✕</span> 
              Ya tienes producto, pero no vendes lo suficiente.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✕</span> 
              Publicas contenido, pero no llegan clientes reales.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✕</span> 
              Tienes interesados, pero no haces un buen seguimiento.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✕</span> 
              Sientes que tu negocio está desordenado y te quita todo el tiempo.
            </li>
          </ul>

          <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #333' }}>
            <p style={{ fontSize: '20px', fontWeight: '700' }}>El resultado es siempre el mismo:</p>
            <p className="text-muted" style={{ fontSize: '18px', marginTop: '8px' }}>
              Mucha motivación, cero claridad y pocas ventas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
