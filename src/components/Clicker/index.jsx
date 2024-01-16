import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    const { clicks } = this.state;

    console.log('click');

    this.setState({
      clicks: clicks + 1,
    });
  };
  
  // метод життевого циклу, запускається після першому рендері
  componentDidMount () {
    console.log('componentDidMount');
    this.intervalId = setInterval(this.handleClick, 1000);
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
    clearInterval(this.intervalId);
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
