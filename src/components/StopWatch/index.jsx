import React, { Component } from 'react';
import { format, addSeconds, add } from 'date-fns';
import './style.css';

// class StopWatch extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: new Date(0, 0, 0, 0, 0, 0),
//     };
//   }

//   start = () => {
//     if (!this.intervalId) {
//       this.intervalId = setInterval(this.tick, 1000);
//     }
//   };

//   stop = () => {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   };

//   tick = () => {
//     const { date } = this.state;

//     // const newDate = addSeconds(date, 1);

//     const newDate = add(date, { seconds: 1 });

//     this.setState({
//       date: newDate,
//     });
//   };

//   componentDidMount() {
//     this.start();
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   render() {
//     const { date } = this.state;

//     const timeText = format(date, 'HH:mm:ss');

//     return (
//       <div>
//         <p>{timeText}</p>
//         <button onClick={this.start}>Start</button>
//         <button onClick={this.stop}>Stop</button>
//       </div>
//     );
//   }
// }

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      isRunning: false,
    };
    this.timeoutId = null;
  }

  start = () => {
    this.setState({
      isRunning: true,
    });
  };

  stop = () => {
    this.setState({
      isRunning: false,
    });
  }

  tick = () => {
    const { time } = this.state;

    const newTime = addSeconds(time, 1);
    this.setState({
      time: newTime,
    });
  };

  clear = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {
    const { isRunning } = this.state;

    this.clear();

    if(isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000)
    }
  }
  
  
  componentWillUnmount() {
    this.clear();
  }
  

  render() {
    const { time } = this.state;

    const timeText = format(time, 'HH:mm:ss');

    return (
      <div className='container'>
        <p className='timeDisplay'>{timeText}</p>
        <button className='btn startBtn' onClick={this.start}>Start</button>
        <button className='btn stopBtn' onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default StopWatch;

/*
  Зробити StopWatch з використанням setTimeout замість setInterval
  
*/
