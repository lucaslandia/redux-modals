import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const handleAnchorClick = () => {}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modals made with Redux
        </p>
        <button className="App-button">Show modal!</button>
      </header>
    </div>
  )
}

export default App;
