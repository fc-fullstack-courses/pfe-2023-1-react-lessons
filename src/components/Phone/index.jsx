import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      isOn: false,
    };

    // прикрутили this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // setState - метод який приймає об'єкт і зливає його з поточним станом
    // після чого реакт робить повторний рендер
    const stateChanges = {
      isOn: true,
    };
    this.setState(stateChanges);
    /*
      доробити телефону кнопку вимикання, 
      при якій його стан має змінитися на off
    */
  }

  // this береться автоматично
  handleToggleOff = () => {
    this.setState({
      isOn: false,
    });
  };

  render() {
    const { color, price } = this.props;
    const { isOn } = this.state;

    // let phoneStatus;

    // if(phoneState === 'on') {
    //   phoneStatus = <PhoneOnText />;
    // } else {
    //   phoneStatus = <PhoneOffText/>;
    // }

    const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;

    const containerClass = `phoneContainer ${isOn ? 'on' : 'off'}`;

    return (
      <div className={containerClass}>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        {phoneStatus}
        <button onClick={this.handleClick}>Switch on</button>
        <button onClick={this.handleToggleOff}>Switch off</button>
      </div>
    );
  }
}

/*
  умовний рендерінг полягає у відмальуванні певних компонентів / елементів / тексту
  за певної умови
*/
function PhoneOnText() {
  return <p>Phone is currently on</p>;
}

function PhoneOffText() {
  return <p>Phone is currently off</p>;
}

export default Phone;
