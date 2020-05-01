import React from 'react'
import { connect } from 'react-redux'
import { showModal } from './actions'
import './App.css'
import constants from './constants'
import logo from './logo.svg'

function App({ dispatch }) {
  const handleButtonClick = () => {
    dispatch(showModal(constants.CONFIRM_MODAL, 'This is a prop sent to the modal '))
  }  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modals made with Redux
        </p>
        <button className="App-button" onClick={handleButtonClick}>Show modal!</button>
      </header>
    </div>
  )
}

export default connect()(App)
