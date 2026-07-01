import React from 'react';

const OpportunitySection = () => {
  return (
    <section className="section bg-deep" style={{ padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>LA SOLUCIÓN ES PRÁCTICA</h2>
        
        <p className="text-muted" style={{ fontSize: '22px', maxWidth: '800px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
          Aquí no aprenderás teoría complicada. Aprenderás a usar marketing e inteligencia artificial de forma práctica para avanzar en tu negocio: crear contenido, mejorar tus mensajes, organizar interesados y vender mejor.
        </p>

        <div className="grid grid-2" style={{ gap: '32px', maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--accent-yellow)', backgroundColor: 'var(--bg-section)' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🌱</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Si estás empezando desde cero</h3>
            <p className="text-muted" style={{ fontSize: '16px' }}>Te ayudamos a encontrar una idea, validarla y crear tus primeros contenidos con ayuda de Inteligencia Artificial.</p>
          </div>
          
          <div className="card" style={{ borderLeft: '4px solid var(--accent-yellow)', backgroundColor: 'var(--bg-section)' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🚀</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Si ya tienes un negocio</h3>
            <p className="text-muted" style={{ fontSize: '16px' }}>Te ayudamos a mejorar tu marketing, atraer más clientes, crear contenido y vender mejor usando herramientas simples.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpportunitySection;
