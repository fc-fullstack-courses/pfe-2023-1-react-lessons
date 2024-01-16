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
