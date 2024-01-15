import React from 'react';
import PhoneList from '../PhoneList';
import PhoneCart from '../PhoneCart';

class PhoneDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneShown: true,
      isDirectSortOrder: true,
      phones: [
        {
          id: 0,
          color: 'black',
          price: 15999.99,
          isFavorite: false,
        },
        {
          id: 1,
          color: 'white',
          price: 9999.99,
          isFavorite: false,
        },
        {
          id: 2,
          color: 'gold',
          price: 59999.99,
          isFavorite: false,
        },
      ],
      cart: [],
    };
  }

  handleVisibility = () => {
    this.setState({
      isPhoneShown: !this.state.isPhoneShown,
    });
  };

  toggleSortOrder = () => {
    /*
      1. взяти масив зі стейту
      2. перевернути його
      3. оновити стан, не забути змінити змінну яка стежить за порядком масиву
    */

    // 1. взяти масив зі стейту
    const { phones, isDirectSortOrder } = this.state;

    // 2. перевернути його
    // const phonesCopy = JSON.parse(JSON.stringify(phones));
    const phonesCopy = structuredClone(phones);
    phonesCopy.reverse();

    // 3. оновити стан, не забути змінити змінну яка стежить за порядком масиву
    this.setState({
      isDirectSortOrder: !isDirectSortOrder,
      phones: phonesCopy,
    });
  };

  toggleFavorite = (id) => {
    const { phones } = this.state;
    /*
      1. знайти телефон
      2. змінити дані у потрідному телефоні
      3. оновити стан
    */

    // 1. знайти телефон
    //  через id
    // 2. змінити дані у потрідному телефоні
    const newPhones = phones.map((phone) => {
      if (id !== phone.id) {
        return phone;
      }

      return {
        ...phone,
        isFavorite: !phone.isFavorite,
      };
    });

    // 3. оновити стан
    this.setState({
      phones: newPhones,
    });
  };

  addToCart = (id) => {
    const { phones, cart } = this.state;
    const phoneToAdd = phones.find((phone) => id === phone.id);

    const cartIndex = cart.findIndex((phone) => id === phone.id);

    let newCart;

    if (cartIndex === -1) {
      newCart = [...cart, { ...phoneToAdd, quantity: 1 }];
    } else {
      newCart = [...cart];
      newCart[cartIndex].quantity++;
    }

    this.setState({
      cart: newCart,
    });
  };

  render() {
    const { isPhoneShown, phones, cart } = this.state;

    return (
      <>
        <button onClick={this.handleVisibility}>Toggle phone visibility</button>
        {isPhoneShown && (
          <PhoneList
            phones={phones}
            addToCart={this.addToCart}
            toggleFavorite={this.toggleFavorite}
            toggleSortOrder={this.toggleSortOrder}
          />
        )}
        <PhoneCart cart={cart} />
      </>
    );
  }
}

export default PhoneDashboard;
