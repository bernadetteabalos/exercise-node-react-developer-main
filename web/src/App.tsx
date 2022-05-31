import React from 'react';
import Repos from './components/Repos';

import './App.css';

export function App() {
  return (
    <div className="App">
      <header>
        <h1>Results</h1>
      </header>
      <main>
        <Repos />
      </main>
    </div>
  );
}
