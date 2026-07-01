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
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo-kaisen.png" 
          alt="Logo Kaisen - educación digital y crecimiento de negocios" 
          style={{ height: '42px', width: 'auto', display: 'block' }}
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
