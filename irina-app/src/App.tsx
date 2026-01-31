
import './App.css'
import irina from './assets/irina.svg'
import React from 'react'

class App extends React.Component {

  
 render() {

  const aTuple: [string, number] = ['Hello', 42];

  function Hello() {
    return <h1>Hello!</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src ={irina} className ="App-logo" alt="logo" />
        <p>
          The Value {aTuple[0]} is of {typeof aTuple[0]} type!
          The Value {aTuple[1]} is of {typeof aTuple[1]} type!
          <Hello />
          <Hello />
        </p>
    </header>
  </div>
    );
  }
 }

export default App

