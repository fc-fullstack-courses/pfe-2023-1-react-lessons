import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      isOn: false,
    };

    // прикрутили this
    this.handleToggleOn = this.handleToggleOn.bind(this);
  }

  handleToggleOn() {
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

  handleToggle = () => {
    const { isOn } = this.state;
    this.setState({
      // isOn: !this.state.isOn
      isOn: !isOn,
    });
  };

  render() {
    const {
      phone: { color, price, isFavorite, id },
      toggleFavorite,
      addToCart,
    } = this.props;
    const { isOn } = this.state;

    const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;

    const containerClass = `phoneContainer ${isOn ? 'on' : 'off'}`;

    return (
      <div className={containerClass}>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        {phoneStatus}
        {isFavorite && <p>Phone is favorite</p>}
        <button onClick={this.handleToggle}>
          Switch {isOn ? 'off' : 'on'}
        </button>
        {/* <button onClick={isOn ? this.handleToggleOff : this.handleToggleOn}>
          Switch {isOn ? 'off' : 'on'} v2
        </button> */}
        <button
          onClick={() => {
            toggleFavorite(id);
          }}
        >
          {isFavorite ? 'Remove from' : 'Make'} favorite
        </button>
        <button onClick={() => addToCart(id)}>Add to cart</button>
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

const phonePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  color: PropTypes.string.isRequired,
});

Phone.propTypes = {
  phone: phonePropType.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Phone;
export { phonePropType };
