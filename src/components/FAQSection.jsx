import React from 'react';

const FAQSection = () => {
  return (
    <section className="section bg-deep">
      <div className="container">
        <h2 className="text-yellow" style={{ textAlign: 'center', marginBottom: '64px' }}>PREGUNTAS FRECUENTES</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { q: '¿Necesito experiencia previa?', a: 'No. El sistema está diseñado desde cero, ideal para principiantes.' },
            { q: '¿Necesito tener un producto?', a: 'Tampoco. En los primeros días usarás nuestro radar para encontrar productos y oportunidades reales.' },
            { q: '¿Cuánto tiempo me toma al día?', a: 'Las misiones están diseñadas para requerir de 1 a 2 horas diarias de ejecución enfocada.' },
            { q: '¿Funciona si empiezo desde cero?', a: 'Absolutamente. De hecho, es mejor porque no tienes vicios ni malos hábitos de otros cursos.' }
          ].map((faq, idx) => (
            <div key={idx} className="card" style={{ borderLeft: '4px solid var(--accent-yellow)', backgroundColor: 'var(--bg-section)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{faq.q}</h3>
              <p className="text-muted" style={{ fontSize: '18px' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
