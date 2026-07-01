import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const OfferSection = () => {
  return (
    <section id="offer" className="section bg-section">
      <div className="container">
        <h2 className="text-yellow" style={{ textAlign: 'center', marginBottom: '64px' }}>OFERTA IRRESISTIBLE</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          backgroundColor: 'var(--bg-deep)', 
          border: '4px solid var(--accent-yellow)', 
          borderRadius: '24px', 
          padding: '48px', 
          boxShadow: '0 20px 60px rgba(255, 215, 0, 0.15)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Acceso Fundador EmprendeOS</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '24px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>$497</span>
              <span style={{ fontSize: '64px', fontWeight: '800', color: 'var(--accent-yellow)', lineHeight: '1' }}>$97</span>
            </div>
            <p className="text-muted" style={{ marginTop: '8px' }}>Pago único. Acceso de por vida.</p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '24px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>Todo lo que te llevas hoy:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px' }}>🔥</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Reto 30 Días Guiado</div>
                  <div className="text-muted">El sistema paso a paso.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px' }}>💻</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Suite de Herramientas SaaS</div>
                  <div className="text-muted">CRM, Landing Builder, IA, Radar.</div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href={CTA_LINKS.checkout} 
            onClick={() => trackEvent('click_cta_offer')}
            className="btn btn-primary" style={{ width: '100%', fontSize: '24px', padding: '24px' }}>
            ENTRAR AL RETO AHORA
          </a>
          <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-muted)', fontSize: '14px' }}>
            Garantía de ejecución 30 días o te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
