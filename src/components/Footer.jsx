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
          style={{ height: '90px', width: 'auto', filter: 'brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.15))' }}
        />
        <div>
          <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
            Kaisen
          </div>
          <div style={{ color: 'var(--accent-yellow)', fontWeight: '600', marginBottom: '16px' }}>
            Digital Education & Business Growth
          </div>
          <p className="text-muted" style={{ maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
            Marketing, inteligencia artificial y educación práctica para crear o hacer crecer tu negocio.
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
