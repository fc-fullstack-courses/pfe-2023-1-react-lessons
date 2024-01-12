import React from 'react';

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
    alert('test');
    // це імперативний код
    // працює некорректно
    // this.state.phoneState = 'on';

    // setState - метод який приймає об'єкт і зливає його з поточним станом
    // після чого реакт робить повторний рендер
    const stateChanges = {
      phoneState: 'on'
    }
    this.setState(stateChanges);

    console.log(this.state);
  }

  render() {
    const { color, price } = this.props;
    const { phoneState } = this.state;

    return (
      <div>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        <p>Phone is currently {phoneState}</p>
        <button onClick={this.handleClick}>Switch on</button>
      </div>
    );
  }
}

export default Phone;
