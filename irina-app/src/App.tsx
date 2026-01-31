
import './App.css'
import irina from './assets/irina.svg'
import React from 'react'

class App extends React.Component {
 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src ={irina} className ="App-logo" alt="logo" />
        <p>
          The Value
        </p>
    </header>
  </div>
    );
  }
 }

export default App

