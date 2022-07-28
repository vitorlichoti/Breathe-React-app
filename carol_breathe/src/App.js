import React, { Component } from 'react';
import Timer from './components/Timer';
import "./App.css";
import logo from "./img.png";

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showTimer: false,
    }
  }
  
  toggleTimer = () => {
    this.setState((prevState) => {
      const previousShowTimer = prevState.showTimer;

      return {
        showTimer: !previousShowTimer,
      }
    });
  }

  
  
  render() {
    const { showTimer } = this.state;
    return (
      <div className="App">
        <h1>BREATHE CAROLINDA, JUST BREATHE!</h1>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div>
        { showTimer && <Timer /> }
        </div>

        <button className="start-btn" onClick={this.toggleTimer}>
          { showTimer ? 'FINALIZAR EXERCÍCIO' : 'INICIAR EXERCÍCIO DE RESPIRAÇÃO' }
        </button>

      </div>
    )
  }
}
