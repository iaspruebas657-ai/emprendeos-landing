import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      position: 'relative', 
      width: '100%', 
      padding: '22px 0',
      marginBottom: '20px',
      zIndex: 20,
      backgroundColor: 'transparent'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Logo Kaisen - educación digital y crecimiento de negocios" 
          style={{ height: '70px', width: 'auto', display: 'block', filter: 'brightness(1.5) contrast(1.2)' }}
          className="logo-header"
        />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .logo-header { height: 48px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
