import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      phoneState: 'off',
    };

    // прикрутили this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // setState - метод який приймає об'єкт і зливає його з поточним станом
    // після чого реакт робить повторний рендер
    const stateChanges = {
      phoneState: 'on'
    }
    this.setState(stateChanges);
    /*
      доробити телефону кнопку вимикання, 
      при якій його стан має змінитися на off
    */
  }

  // this береться автоматично
  handleToggleOff = () => {
    this.setState({
      phoneState: 'off'
    });
  }

  render() {
    const { color, price } = this.props;
    const { phoneState } = this.state;

    return (
      <div className='phoneContainer'>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        <p>Phone is currently {phoneState}</p>
        <button onClick={this.handleClick}>Switch on</button>
        <button onClick={this.handleToggleOff}>Switch off</button>
      </div>
    );
  }
}

export default Phone;
