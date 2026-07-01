import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CTA_LINKS } from '../config/constants';

const HeroSection = ({ onOpenDiagnostic }) => {
  return (
    <section className="section bg-deep" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid grid-2 fade-in" style={{ alignItems: 'center', gap: '4rem' }}>
        
        {/* Left Copy */}
        <div>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255, 215, 0, 0.1)', border: '1px solid var(--accent-yellow)', color: 'var(--accent-yellow)', padding: '6px 16px', borderRadius: '50px', fontWeight: '700', fontSize: '14px', marginBottom: '24px', textTransform: 'uppercase' }}>
            Empieza hoy. Primera clase gratis.
          </div>
          <h1 style={{ marginBottom: '24px' }}>
            Crea o haz crecer tu negocio paso a paso con marketing, inteligencia artificial y una clase gratis.
          </h1>
          <p className="text-muted" style={{ fontSize: '18px', marginBottom: '40px', fontWeight: '500' }}>
            Te ayudamos a encontrar qué vender, atraer clientes, crear contenido, organizar tus ventas y usar inteligencia artificial de forma simple, aunque estés empezando desde cero o ya tengas un negocio.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <a 
              href={CTA_LINKS.freeClass} 
              onClick={() => trackEvent('click_cta_hero', { path: 'empezar_cero' })}
              className="btn btn-primary" style={{ width: '100%' }}>
              QUIERO MI CLASE GRATIS
            </a>
            <a 
              href={CTA_LINKS.freeClass} 
              onClick={() => trackEvent('click_cta_hero', { path: 'crecer_negocio' })}
              className="btn btn-secondary" style={{ width: '100%' }}>
              YA TENGO UN NEGOCIO Y QUIERO VENDER MÁS
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
            <div style={{ marginLeft: '16px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>emprendeos.app/panel</div>
          </div>
          {/* Dashboard Content */}
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '20px' }}>Tu Panel de Avance</div>
              <div style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: 'var(--accent-yellow)', fontWeight: '700', padding: '4px 12px', borderRadius: '50px', fontSize: '14px' }}>
                Progreso: Día 7 de 30
              </div>
            </div>
            
            {/* Fake Metrics */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Personas Interesadas</div>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>12</div>
              </div>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Ventas del mes</div>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>8</div>
              </div>
              <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px' }}>
                <div className="text-muted" style={{ fontSize: '12px' }}>Ingresos</div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#27C93F' }}>S/ 1,250</div>
              </div>
            </div>

            {/* Pipeline (Kanban) */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontWeight: '700', marginBottom: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>ETAPAS DE VENTA</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Nuevos (4)', 'Interesados (2)', 'En charla (1)', 'Vendido (1)'].map((col, idx) => (
                  <div key={idx} style={{ flex: 1, backgroundColor: '#22232E', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '11px', fontWeight: '600' }}>
                    {col}
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div style={{ backgroundColor: '#22232E', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <div style={{ fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Acción de Hoy (Día 7)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '16px', height: '16px', border: '2px solid var(--text-muted)', borderRadius: '4px' }}></div>
                <span className="text-muted" style={{ fontSize: '14px' }}>Generar idea de contenido con IA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
