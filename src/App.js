import React from 'react';
import './App.css';
import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Async Reducer Example</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
