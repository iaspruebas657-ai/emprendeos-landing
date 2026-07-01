import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const HeroSection = ({ onOpenDiagnostic }) => {
  return (
    <section className="section bg-deep" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid grid-2 fade-in" style={{ alignItems: 'center', gap: '4rem' }}>
        
        {/* Left Copy */}
        <div>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 59, 48, 0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', padding: '6px 16px', borderRadius: '50px', fontWeight: '700', fontSize: '14px', marginBottom: '24px', textTransform: 'uppercase' }}>
            🔥 Reto Fundador - Cupos limitados
          </div>
          <h1 style={{ marginBottom: '24px' }}>
            Construye tu primer negocio en 30 días usando IA.
          </h1>
          <p className="text-muted" style={{ fontSize: '18px', marginBottom: '40px', fontWeight: '500' }}>
            Un sistema paso a paso donde eliges una oportunidad, la validas, creas una oferta, publicas una página y empiezas a vender con herramientas reales.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <button 
              onClick={() => {
                trackEvent('click_diagnostic');
                onOpenDiagnostic();
              }} 
              className="btn btn-secondary" style={{ width: '100%' }}>
              DESCUBRE QUÉ TIPO DE EMPRENDEDOR ERES
            </button>
            <a 
              href={CTA_LINKS.checkout} 
              onClick={() => trackEvent('click_cta_hero')}
              className="btn btn-primary" style={{ width: '100%' }}>
              ENTRAR AL RETO DE 30 DÍAS
            </a>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div style={{ backgroundColor: '#181922', borderRadius: '16px', border: '1px solid #333', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          {/* Mac window controls */}
          <div style={{ backgroundColor: '#22232E', padding: '12px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
            <div style={{ marginLeft: '16px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>emprendeos.app/dashboard</div>
          </div>
          {/* Dashboard Content */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '20px' }}>Sistema EmprendeOS</div>
              <div style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: 'var(--accent-yellow)', fontWeight: '700', padding: '4px 12px', borderRadius: '50px', fontSize: '14px' }}>
                Progreso: Día 7 de 30
              </div>
            </div>
            
            {/* Fake Metrics */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Leads Generados</div>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>12</div>
              </div>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Prospectos CRM</div>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>8</div>
              </div>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Ventas Potenciales</div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#27C93F' }}>S/ 1,250</div>
              </div>
            </div>

            {/* Pipeline (Kanban) */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontWeight: '700', marginBottom: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>PIPELINE DE VENTAS</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Nuevo (4)', 'Interesado (2)', 'Seguimiento (1)', 'Cierre (1)'].map((col, idx) => (
                  <div key={idx} style={{ flex: 1, backgroundColor: '#22232E', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '11px', fontWeight: '600' }}>
                    {col}
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <div style={{ fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Misión de Hoy (Día 7)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', border: '2px solid var(--text-muted)', borderRadius: '4px' }}></div>
                <span className="text-muted" style={{ fontSize: '14px' }}>Analizar 3 competidores con Radar</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
