import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0a0a0a', 
      padding: '64px 0', 
      borderTop: '1px solid #222',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Logo Kaisen - educación digital y crecimiento de negocios" 
          style={{ height: '50px', width: 'auto', opacity: 0.9 }}
        />
        <div>
          <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
            Kaisen
          </div>
          <div style={{ color: 'var(--accent-yellow)', fontWeight: '600', marginBottom: '16px' }}>
            Digital Education & Business Growth
          </div>
          <p className="text-muted" style={{ maxWidth: '400px', margin: '0 auto', fontSize: '14px' }}>
            Crea o haz crecer tu negocio paso a paso con marketing e inteligencia artificial.
          </p>
        </div>
        <div style={{ marginTop: '32px', fontSize: '12px', color: '#555' }}>
          &copy; {new Date().getFullYear()} Kaisen. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
