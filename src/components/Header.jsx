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
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Logo Kaisen - educación digital y crecimiento de negocios" 
          style={{ 
            height: '110px', 
            width: 'auto', 
            display: 'block', 
            filter: 'drop-shadow(1px 1px 0px rgba(255,255,255,0.7)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.7)) drop-shadow(1px -1px 0px rgba(255,255,255,0.7)) drop-shadow(-1px 1px 0px rgba(255,255,255,0.7))' 
          }}
          className="logo-header"
        />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .logo-header { height: 80px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
