import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      position: 'relative', 
      width: '100%', 
      padding: '24px 0',
      marginBottom: '10px',
      zIndex: 20,
      backgroundColor: 'transparent'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Ícono Kaisen" 
          style={{ 
            width: '45px', 
            height: '45px', 
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block'
          }}
          className="logo-header-img"
        />
        <span style={{ fontSize: '26px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.5px' }}>
          Kaisen
        </span>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .logo-header-img { width: 36px !important; height: 36px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
