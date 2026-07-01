import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const OfferSection = () => {
  return (
    <section id="offer" className="section bg-deep">
      <div className="container">
        <h2 className="text-yellow" style={{ textAlign: 'center', marginBottom: '64px' }}>EMPIEZA CON UNA CLASE GRATIS</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          backgroundColor: 'var(--bg-section)', 
          border: '2px solid var(--accent-yellow)', 
          borderRadius: '24px', 
          padding: '48px', 
          boxShadow: '0 20px 60px rgba(255, 215, 0, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '20px', marginBottom: '16px' }}>Primero conoce el sistema, entiende qué camino te conviene y luego decides si quieres avanzar al programa completo.</p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '24px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>Qué descubrirás:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px' }}>🎯</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Claridad total</div>
                  <div className="text-muted">Sabrás exactamente por dónde empezar tu negocio.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px' }}>📈</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Ruta de crecimiento</div>
                  <div className="text-muted">Si ya vendes, verás cómo organizar y atraer más clientes.</div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href={CTA_LINKS.freeClass} 
            onClick={() => trackEvent('click_cta_offer')}
            className="btn btn-primary" style={{ width: '100%', fontSize: '24px', padding: '24px' }}>
            QUIERO MI CLASE GRATIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
