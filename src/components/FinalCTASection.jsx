import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const FinalCTASection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#000000', padding: '120px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: '1', marginBottom: '24px' }}>EMPIEZA HOY.</h2>
        <p style={{ fontSize: '24px', color: 'var(--text-muted)', marginBottom: '48px' }}>Da el primer paso de forma segura y gratis.</p>
        <a 
          href={CTA_LINKS.freeClass} 
          onClick={() => trackEvent('click_cta_final')}
          className="btn btn-primary" style={{ width: '100%', fontSize: '24px', padding: '32px' }}>
          QUIERO MI CLASE GRATIS
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
