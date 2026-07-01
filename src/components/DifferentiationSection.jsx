import React from 'react';

const DifferentiationSection = () => {
  return (
    <section className="section bg-deep">
      <div className="container">
        <h2 className="text-pure" style={{ textAlign: 'center', marginBottom: '64px' }}>ESTO NO ES UN CURSO MÁS</h2>
        <div className="grid grid-2" style={{ gap: '0', borderRadius: '16px', overflow: 'hidden', border: '1px solid #333' }}>
          
          {/* Left: Red */}
          <div style={{ backgroundColor: 'rgba(255, 59, 48, 0.05)', padding: '48px 32px', borderRight: '1px solid #333' }}>
            <h3 style={{ color: 'var(--accent-red)', fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>Cursos Tradicionales</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                'Vendes tu tiempo por información',
                'Horas de videos teóricos aburridos',
                'Cero implementación guiada',
                'Sin herramientas, tú pagas todo aparte',
                'Terminas el curso sin ventas'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: 'var(--accent-red)', fontSize: '24px' }}>❌</span>
                  <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Green */}
          <div style={{ backgroundColor: 'rgba(39, 201, 63, 0.05)', padding: '48px 32px' }}>
            <h3 style={{ color: '#27C93F', fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>Sistema EmprendeOS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                'Vendes productos, construyes activos',
                'Ejecución diaria en misiones cortas',
                'Resultados medibles cada semana',
                'Herramientas SaaS incluidas',
                'Máquina de ventas funcionando'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#27C93F', fontSize: '24px' }}>✔</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        <div style={{ textAlign: 'center', marginTop: '64px', maxWidth: '600px', margin: '64px auto 0' }}>
          <a href="#offer" className="btn btn-primary">QUIERO CONSTRUIR, NO APRENDER</a>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
