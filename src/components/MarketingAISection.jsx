import React from 'react';

const MarketingAISection = () => {
  const cards = [
    { title: "Ideas de contenido para redes", icon: "📱" },
    { title: "Mensajes para vender por WhatsApp", icon: "💬" },
    { title: "Anuncios y promociones simples", icon: "🚀" },
    { title: "Páginas para mostrar tu producto", icon: "🌐" },
    { title: "Organización de clientes interesados", icon: "📁" },
    { title: "Uso práctico de IA para ahorrar tiempo", icon: "⚡" }
  ];

  return (
    <section className="section bg-section" style={{ padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '24px', color: 'var(--accent-yellow)' }}>
          Aprende a usar marketing e inteligencia artificial sin complicarte
        </h2>
        
        <p className="text-muted" style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          No necesitas ser experto en tecnología. Te enseñamos a usar herramientas simples para crear ideas de contenido, mensajes de venta, publicaciones, anuncios y páginas que te ayuden a conseguir más clientes.
        </p>

        <div className="grid grid-3" style={{ gap: '24px' }}>
          {cards.map((card, index) => (
            <div key={index} style={{ backgroundColor: 'var(--bg-deep)', padding: '24px', borderRadius: '12px', border: '1px solid #333', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
              <div style={{ fontSize: '32px' }}>{card.icon}</div>
              <div style={{ fontWeight: '600', fontSize: '16px' }}>{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingAISection;
