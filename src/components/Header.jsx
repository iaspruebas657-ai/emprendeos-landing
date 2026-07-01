import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      padding: '24px 0',
      zIndex: 50,
      backgroundColor: 'transparent'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Logo Kaisen - educación digital y crecimiento de negocios" 
          style={{ height: '40px', width: 'auto', display: 'block', filter: 'brightness(2) contrast(1.2) drop-shadow(0 0 12px rgba(255,255,255,0.1))' }}
          className="logo-header"
        />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .logo-header { height: 34px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
