import React from 'react';

const OpportunitySection = () => {
  return (
    <section className="section bg-section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          {/* Left Text */}
          <div>
            <h2 className="text-yellow" style={{ marginBottom: '16px' }}>LA NUEVA OPORTUNIDAD</h2>
            <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', lineHeight: '1.4' }}>
              No necesitas más cursos.<br />
              Necesitas un <span className="text-yellow">sistema de ejecución</span>.
            </p>
            <p className="text-muted" style={{ fontSize: '18px', marginBottom: '40px' }}>
              En 30 días pasarás de no tener idea, a tener un negocio estructurado, publicado y con un sistema para captar clientes diariamente.
            </p>
            <a href="#offer" className="btn btn-primary">QUIERO MI SISTEMA AHORA</a>
          </div>

          {/* Right Checklist */}
          <div className="card" style={{ border: '1px solid rgba(39, 201, 63, 0.3)' }}>
            <h3 style={{ marginBottom: '24px', color: '#27C93F' }}>En 30 días podrás:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Encontrar o validar un producto',
                'Crear una oferta vendible',
                'Publicar una landing o tienda',
                'Captar clientes',
                'Usar CRM básico',
                'Usar IA para marketing'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ color: '#27C93F', fontSize: '20px', fontWeight: '700' }}>✔</span>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
