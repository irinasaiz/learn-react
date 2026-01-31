
import './App.css'
import irina from './assets/irina.svg'
import React from 'react'

class App extends React.Component {
 render() {

  //const firstValue: string = "Irina";
  //const firstValue: number = 23;
  //const firstValue: number[] = [2,3,4];
  const firstValue: Array<number> = [2,3,4];

  return (
    <div className="App">
      <header className="App-header">
        <img src ={irina} className ="App-logo" alt="logo" />
        <p>
          The Value {firstValue} is of {typeof firstValue} type!
        </p>
    </header>
  </div>
    );
  }
 }

export default App

