import React from 'react';

const Header = () => {
  return (
    <header className="header-compact" style={{ 
      position: 'relative', 
      width: '100%', 
      paddingTop: '28px',
      paddingBottom: '20px',
      marginBottom: '0',
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
          .header-compact { padding-top: 24px !important; padding-bottom: 14px !important; }
        }
      `}} />
    </header>
  );
};

export default Header;
