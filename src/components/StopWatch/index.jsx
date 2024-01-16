import React, { Component } from 'react';
import { format, addSeconds, add } from 'date-fns';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(0, 0, 0, 0, 0, 0),
    };
  }

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  tick = () => {
    const { date } = this.state;

    // const newDate = addSeconds(date, 1);

    const newDate = add(date, { seconds: 1 });

    this.setState({
      date: newDate,
    });
  };

  render() {
    const { date } = this.state;

    const timeText = format(date, 'HH:mm:ss');

    return (
      <div>
        <p>{timeText}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default StopWatch;
