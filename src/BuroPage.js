import React, { useEffect } from 'react';
import './BuroPage.css';

function BuroPage() {
  useEffect(() => {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = '/favicon-buro.ico'; 
    document.head.appendChild(faviconLink);

    
    return () => {
      document.head.removeChild(faviconLink);
    };
  }, []);

  return (
    <div className="buro-container">
      <header className="buro-header">
        <img src="/poxyburo.svg" alt="Poxy Büro" className="buro-logo" />
        <p className="buro-description">
          a Ukrainian non-profit creative büro created to make the environment better
        </p>
        <img src="/wip.gif" alt="Work in Progress" className="buro-wip" />
      </header>
    </div>
  );
}

export default BuroPage;
