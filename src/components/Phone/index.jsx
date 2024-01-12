import React from 'react';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      phoneState: 'off',
    };
  }

  render() {
    const { color, price } = this.props;
    const { phoneState } = this.state;

    function handleClick () {
      alert('test');
    }

    return (
      <div>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        <p>Phone is currently {phoneState}</p>
        <button onClick={handleClick}>Switch on</button>
      </div>
    );
  }
}

export default Phone;
