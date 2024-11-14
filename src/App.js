import React from 'react';
import './App.css';
import BuroPage from './BuroPage';
function App() {
  const isBuro = window.location.hostname === 'buro.poxy.studio'|| window.location.hostname === 'buro.localhost' || window.location.hostname === '192.168.86.60';

  return (
    <div className="App">
      <header className="App-header">
        {isBuro ? (
          <BuroPage />
        ) : (
          <img src="/poxy.gif" alt="Poxy Studio" />
        )}
      </header>
    </div>
  );
}

export default App;
