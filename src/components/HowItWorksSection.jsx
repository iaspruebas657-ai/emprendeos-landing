import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="section bg-section">
      <div className="container">
        <h2 className="text-pure" style={{ textAlign: 'center', marginBottom: '64px' }}>
          RUTA DE TRANSFORMACIÓN EN 30 DÍAS
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            { num: '01', title: 'Descubrir (Día 1-5)', desc: 'Encuentras tu producto y nicho usando herramientas reales y radar de mercado.' },
            { num: '02', title: 'Validar (Día 6-10)', desc: 'Confirmas que hay gente dispuesta a pagar antes de invertir un dólar.' },
            { num: '03', title: 'Construir (Día 11-15)', desc: 'Creas tu oferta irresistible y tu máquina de conversión (landing page).' },
            { num: '04', title: 'Impactar (Día 16-20)', desc: 'Generas contenido y banners que paran el scroll usando IA.' },
            { num: '05', title: 'Captar (Día 21-25)', desc: 'Activas el tráfico y empiezas a recibir tus primeros prospectos calificados.' },
            { num: '06', title: 'Vender (Día 26-30)', desc: 'Usas el CRM para dar seguimiento, cerrar ventas y cobrar.' }
          ].map((item, idx) => (
            <div key={idx} className="roadmap-item">
              <div style={{ color: 'var(--accent-yellow)', fontSize: '64px', fontWeight: '800', opacity: '0.5', lineHeight: '1' }}>
                {item.num}
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '18px' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
