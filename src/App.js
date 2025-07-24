import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // Unused variable
  const unused = 42;

  // Hardcoded credential (security issue)
  const password = "supersecret";

  // Use of eval (security issue)
  eval("console.log('Eval is dangerous!')");

  return (
    <div className="App" style={{ backgroundColor: 'red' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
