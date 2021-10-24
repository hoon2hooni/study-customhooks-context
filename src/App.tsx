import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CountProvider, useCount } from "./context/CounterContext";
import Counter from "./components/Counter";
function App() {
  return (
    <CountProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
        <div>
          <Counter />
        </div>
      </div>
    </CountProvider>
  );
}

export default App;
