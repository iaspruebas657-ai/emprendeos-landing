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
        <div className="text-logo" style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '-0.5px', color: '#ffffff', display: 'flex', alignItems: 'center', userSelect: 'none' }}>
          EmprendeOS<span style={{ color: 'var(--text-muted)', margin: '0 6px', fontWeight: '400' }}>|</span><span style={{ color: 'var(--accent-yellow)', fontWeight: '900' }}>Kaisen</span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .text-logo { font-size: 22px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
