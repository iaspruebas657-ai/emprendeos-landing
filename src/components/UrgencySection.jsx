import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS, URGENCY_CONFIG } from '../config/constants';

const UrgencySection = () => {
  const percentage = (URGENCY_CONFIG.CURRENT_SPOTS / URGENCY_CONFIG.TOTAL_SPOTS) * 100;

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #1a0505 0%, #3a0000 100%)', borderTop: '2px solid var(--accent-red)', borderBottom: '2px solid var(--accent-red)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="text-pure" style={{ fontSize: '48px', marginBottom: '24px' }}>EL PRECIO SUBE PRONTO</h2>
        <p style={{ fontSize: '24px', fontWeight: '500', marginBottom: '48px' }}>Cupos de Fundador estrictamente limitados para garantizar el soporte.</p>
        
        <div style={{ backgroundColor: 'var(--text-pure)', color: 'var(--bg-deep)', padding: '40px 32px', borderRadius: '16px', display: 'inline-block', maxWidth: '600px', width: '100%' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Cohorte Actual</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '700' }}>
            <span>Cupos Ocupados</span>
            <span>{URGENCY_CONFIG.CURRENT_SPOTS} / {URGENCY_CONFIG.TOTAL_SPOTS}</span>
          </div>
          <div style={{ width: '100%', backgroundColor: '#eee', height: '12px', borderRadius: '10px', overflow: 'hidden', marginBottom: '32px' }}>
            <div style={{ width: `${percentage}%`, backgroundColor: 'var(--accent-red)', height: '100%' }}></div>
          </div>
          
          <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>👉 Si no tomas acción hoy, seguirás igual en 30 días.</h3>
          <a 
            href={CTA_LINKS.checkout} 
            onClick={() => trackEvent('click_cta_offer')}
            className="btn" style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-pure)', width: '100%', fontSize: '20px', padding: '20px' }}>
            ASEGURAR MI CUPO
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
