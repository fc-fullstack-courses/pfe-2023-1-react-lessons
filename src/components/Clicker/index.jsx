import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    console.log('click');

    this.setState((state) => {
      return {
        clicks: state.clicks + 1
      }
    });
    this.setState((state) => {
      return {
        clicks: state.clicks + 1
      }
    });
  };

  start = () => {
    if(!this.intervalId) {
      this.intervalId = setInterval(this.handleClick, 1000);
    }
  }

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  
  // метод життевого циклу, запускається після першому рендері
  componentDidMount () {
    console.log('componentDidMount');
    // this.start();
  }

  //  метод життевого циклу, запускається після 2+ рендеру
  componentDidUpdate () {
    console.log('componentDidUpdate');
    
    // ПОГАНО 
    // this.setState();

    // Можна, якщо умова може ставати брехливою
    // if(expression) {
    //   this.setState();
    // }
  }

  // запускається перед розмонтуванням компоненту
  // використовується для "чистки" довгострокових
  // побічних ефектів (наприклад інтервалів)
  componentWillUnmount () {
    console.log('componentWillUnmount');
    this.stop();
  }

  render() {
    const { clicks } = this.state;

    // setInterval(this.handleClick, 1000);

    // виклик сетСтейтту напряму у render - ДУЖЕ погано
    // this.setState();

    return (
      <div>
        <p>Clicks: {clicks}</p>
        <button onClick={this.handleClick}>Add click</button>
        <button onClick={this.start}>Start interval</button>
        <button onClick={this.stop}>Stop interval</button>
      </div>
    );
  }
}

export default Clicker;

/*
  JS JSX Snippets
  rcc - класовий компонент
  rfc - функціональний компонент
  con - шаблон конструктора для класів
*/
