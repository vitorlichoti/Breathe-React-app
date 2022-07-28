import React, { Component } from 'react'

const ONE_SECOND = 1000;
const TIME_LIMIT = 6;

export default class Timer extends Component {
  
  constructor() {
    super();
    this.state = {
      seconds: 0,
      phases: ['🫁 Inspire...', '🤐 Segure...', '😮‍💨 Expire...'],
      phaseIndex: 0,
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate() {
    const { seconds } = this.state;
    if (seconds === TIME_LIMIT) {
      this.setState((prevState) => {
        const previousIndex = prevState.phaseIndex;
        return {
          seconds: 0,
          phaseIndex: previousIndex < 5 ? previousIndex + 1 : 0,
        }
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  render() {
    const { seconds, phases, phaseIndex } = this.state;
    return (
      <section>
        <h1 className="phases">{ phases[phaseIndex] }</h1>
        <h2 className="timer">{ seconds }</h2>
      </section>
    )
  }
}
