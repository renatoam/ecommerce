import React from 'react';
import logo from './mangekyou-sharingan.png';
import './App.css';

function App() {
  return (
    <section className="App container" style={{border: "1px solid red"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MANGEKYOU SHARINGAN!</h1>
        <small>COMING SOON...</small>
        <button className="btn btn-primary">botão</button>
      </header>
    </section>
  );
}

export default App;
