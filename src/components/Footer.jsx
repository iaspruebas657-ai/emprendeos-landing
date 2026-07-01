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
        <div style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', color: '#ffffff', display: 'flex', alignItems: 'center', userSelect: 'none' }}>
          EmprendeOS<span style={{ color: 'var(--text-muted)', margin: '0 8px', fontWeight: '400' }}>|</span><span style={{ color: 'var(--accent-yellow)', fontWeight: '900' }}>Kaisen</span>
        </div>
        <div>
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
