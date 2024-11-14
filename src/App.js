import React from 'react';
import './App.css';

function App() {
  const isBuro = window.location.hostname === 'buro.poxy.studio';

  return (
    <div className="App">
      <header className="App-header">
        {isBuro ? (
          <h1>Hello World</h1>
        ) : (
          <img src="/poxy.gif" alt="Poxy Studio" />
        )}
      </header>
    </div>
  );
}

export default App;
