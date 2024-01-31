import React from 'react';
import PropTypes from 'prop-types';
import Phone, { phonePropType } from '../Phone';

class PhoneList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      phones,
      toggleFavorite,
      addToCart,
      isDirectSortOrder,
      toggleSortOrder,
    } = this.props;

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
        toggleFavorite={toggleFavorite}
        addToCart={toggleFavorite}
      />
    ));

    // тут вже можна такий самий набір ключів як і у phonesComponents
    // const phonesComponents2 = phones.map((phone) => (
    //   <Phone key={phone.id} color={phone.color} price={phone.price} />
    // ));

    return (
      <>
        <button onClick={toggleSortOrder}>Reverse sort order</button>
        <p>
          Current sort order is: {isDirectSortOrder ? 'direct' : 'reversed'}
        </p>
        <ul>{phonesComponents}</ul>
      </>
    );
  }
}

PhoneList.propTypes = {
  phones: PropTypes.arrayOf(phonePropType).isRequired
}

export default PhoneList;
