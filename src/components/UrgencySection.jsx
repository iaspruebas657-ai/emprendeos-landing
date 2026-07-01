import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const UrgencySection = () => {
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #1a0505 0%, #3a0000 100%)', borderTop: '2px solid var(--accent-red)', borderBottom: '2px solid var(--accent-red)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="text-pure" style={{ fontSize: '40px', marginBottom: '24px' }}>ACCESO LIBERADO</h2>
        <p style={{ fontSize: '24px', fontWeight: '500', marginBottom: '48px' }}>
          Estamos abriendo los primeros accesos gratuitos para personas que quieren empezar o hacer crecer su negocio.
        </p>
        
        <div style={{ backgroundColor: 'var(--text-pure)', color: 'var(--bg-deep)', padding: '40px 32px', borderRadius: '16px', display: 'inline-block', maxWidth: '600px', width: '100%' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>👉 Habla con nosotros y comencemos.</h3>
          <a 
            href={CTA_LINKS.freeClass} 
            onClick={() => trackEvent('click_cta_urgency')}
            className="btn" style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-pure)', width: '100%', fontSize: '20px', padding: '20px' }}>
            QUIERO MI CLASE GRATIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
