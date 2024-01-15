import React from 'react';
import Phone from '../Phone';
import PhoneCart from '../PhoneCart';

class PhoneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    if(cartIndex === -1) {
      newCart = [...cart, {...phoneToAdd, quantity: 1}];
    } else {
      newCart = [...cart];
      newCart[cartIndex].quantity++;
    }
    

    this.setState({
      cart: newCart
    });
  };

  render() {
    const { phones, isDirectSortOrder, cart } = this.state;

    // const elems = (
    //   <>
    //     <Phone color="black" price={15999.99} />
    //     <button>sdsadsa</button>
    //   </>
    // );

    // ви можете зробити мапом масиви реакт елементів / компонентів
    // і відрендерити їх одразу
    // Верхньому елементу / компоненту який ви повертаєте з мапи
    // НЕОБХІДНО вказати унікальний для цього списка службовий проп
    // key
    const phonesComponents = phones.map((phone) => (
      <Phone
        key={phone.id}
        phone={phone}
        toggleFavorite={this.toggleFavorite}
        addToCart={this.addToCart}
      />
    ));

    // тут вже можна такий самий набір ключів як і у phonesComponents
    // const phonesComponents2 = phones.map((phone) => (
    //   <Phone key={phone.id} color={phone.color} price={phone.price} />
    // ));

    return (
      <>
        <button onClick={this.toggleSortOrder}>Reverse sort order</button>
        <p>
          Current sort order is: {isDirectSortOrder ? 'direct' : 'reversed'}
        </p>
        <ul>{phonesComponents}</ul>
        <PhoneCart cart={cart} />
      </>
    );
  }
}

export default PhoneList;
